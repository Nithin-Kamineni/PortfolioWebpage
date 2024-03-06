import React, { useState, useEffect, useCallback, useRef } from "react";
import Sidebar from "../../components/Sidebar";
import demoEvents from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";

import momentTimeZone from "moment-timezone";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
} from "@chakra-ui/react";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  useDisclosure,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

// Define type for event
interface Event {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description: string;
  location: any;
  conferenceData: any;
  htmlLink: string;
  iCalUID: string;
}

const allViews = Object.keys(Views).map((k) => Views[k]);

const CalendarComponent: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [displayEvent, setDisplayEvent] = useState<Event>();

  const [date, setDate] = useState<Date>(new Date()); // This will initialize the date state with today's date
  const [events, setEvents] = useState<any[]>([]);
  const localizer = momentLocalizer(moment);

  const [googleRespError, setGoogleRespError] = useState(false);
  const [outlookRespError, setOutlookRespError] = useState(false);

  const [timeMin, setTimeMin] = useState(
    encodeURIComponent("2024-03-03T04:39:53.000Z")
  );
  const [timeMax, setTimeMax] = useState(
    encodeURIComponent("2024-03-09T18:00:00-05:00")
  );

  const [counter, setCounter] = useState(0);

  const clickRef = useRef<any>(null);

  const fetchData = async () => {
    try {
      // Fetch from Google Calendar API
      const googleApiKey = "AIzaSyDOYaokko6A3NQVh_24JAPsdYiInOiXPl8";
      const googleCalendarId = "nithinkamineni1@gmail.com";

      // const timeMin = encodeURIComponent("2024-03-03T04:39:53.000Z");
      // const timeMax = encodeURIComponent("2024-03-09T18:00:00-05:00");

      const googleAlwaysIncludeEmail = "true";

      const googleUrl = `https://www.googleapis.com/calendar/v3/calendars/${googleCalendarId}/events?alwaysIncludeEmail=${googleAlwaysIncludeEmail}&timeMax=${timeMax}&timeMin=${timeMin}&prettyPrint=true&key=${googleApiKey}`;

      console.log("googleUrl", googleUrl);
      const googleResponse = await fetch(googleUrl);
      const googleData = await googleResponse.json();

      // Fetch from Outlook Calendar API
      const outlookToken =
        "eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFlRVc0czYtWU5mM3laNUFQWVBRdGFpekJqLVUwU3Q1QnFIUDBCT2lfbHciLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8wZDRkYTBmOC00YTMxLTRkNzYtYWNlNi0wYTYyMzMxZTFiODQvIiwiaWF0IjoxNzA5NTkyMDc0LCJuYmYiOjE3MDk1OTIwNzQsImV4cCI6MTcwOTY3ODc3NCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkUyTmdZQ2lvaVRpZ0k4VFhHVzR2d0g3QVIyMmFZNVoxWGQ5UzYwdDc5VEt5UGE0MFd6YXZPRlRyWTJxLzVaYmhwUFFadVkzZUFBPT0iLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkthbWluZW5pIiwiZ2l2ZW5fbmFtZSI6IlZlbmthdGEiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIyNjAwOjg4MDc6YzBjNToxMjAwOjMxNjk6OGRlNjplNmQ0OmUyNjQiLCJuYW1lIjoiS2FtaW5lbmksIFZlbmthdGEgTi4iLCJvaWQiOiI3Y2FkZTIxYS05NmE3LTQxZmEtOTJjMi1hZGFmZjY0OTcyMTMiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMTMwODIzNzg2MC00MTkzMzE3NTU2LTMzNjc4NzY0Ni0zMTIxOTIyIiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAxOUNBQkYzNkIiLCJyaCI6IjAuQVRVQS1LQk5EVEZLZGsyczVncGlNeDRiaEFNQUFBQUFBQUFBd0FBQUFBQUFBQUExQUJFLiIsInNjcCI6IkFwcGxpY2F0aW9uLlJlYWRXcml0ZS5BbGwgQ2hhbm5lbC5SZWFkQmFzaWMuQWxsIERpcmVjdG9yeS5SZWFkLkFsbCBvcGVuaWQgcHJvZmlsZSBVc2VyLlJlYWQgZW1haWwgQ2FsZW5kYXJzLlJlYWQiLCJzdWIiOiJtZFFlOXp4ZXo0aWlZYUZlNHhSNnVPdU5xYzhMY1BTM0hyb3FsVzdoQjFzIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6Ik5BIiwidGlkIjoiMGQ0ZGEwZjgtNGEzMS00ZDc2LWFjZTYtMGE2MjMzMWUxYjg0IiwidW5pcXVlX25hbWUiOiJ2a2FtaW5lbmlAdWZsLmVkdSIsInVwbiI6InZrYW1pbmVuaUB1ZmwuZWR1IiwidXRpIjoiTkhWcHozZHZha2ludDdVUEVCMFpBdyIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYyI6WyJDUDEiXSwieG1zX3NzbSI6IjEiLCJ4bXNfc3QiOnsic3ViIjoiZHg0d2s4b050MHl0eG1wUloyNDdQRmdXNTRlRlI4c2Y1MU1tRmN2UzF3byJ9LCJ4bXNfdGNkdCI6MTM2NDMyNjU5MH0.nybjSRpxuYJjgMNysbbdDn_k9gLBiOf5UgLggbg86D7qrfWOAAL7ZkLeTV1EyDcbuVLptuf7P34Z7X-aVAVkh-RpjzvTwNgUGy4iE9oTV0bKBfiuOT65kId19LyOgfTCABj_AfIRylMrXrlp3nS8bzjXIj1poh17vOZHZCLMICZe2K_oWul9wQlyhkxDj7fva7gpuy99icz65Fzb3Pd1y_F_yvQ4LUWI6czjJ30_vlLpCEbpq8MDiy3fr4wLS4Y3u28zhfTJM7Ml4dmSP0P3SW65_5aNNL94xBWFJf6ujJZd2bH9yXNPe_fQKnmscBUO2P5Yba05MB7g9VtulOBNpQ";
      // const outlookUrl =
      //   "https://graph.microsoft.com/v1.0/me/calendarView?$select=subject,bodyPreview,organizer,attendees,start,end,location&startDateTime=2024-01-01T19:00:00-08:00&endDateTime=2024-02-02T19:00:00-08:00";
      const outlookUrl = `https://graph.microsoft.com/v1.0/me/calendarView?$select=subject,bodyPreview,organizer,attendees,start,end,location,iCalUId,webLink&startDateTime=${timeMin}&endDateTime=${timeMax}`;

      const outlookResponse = await fetch(outlookUrl, {
        headers: {
          Authorization: `Bearer ${outlookToken}`,
        },
      });
      const outlookData = await outlookResponse.json();

      console.log("googleData", googleData);
      console.log("outlookData", outlookData);

      // Combine the results from both APIs
      let combinedEvents: Event[] = [];

      if (!googleData.error) {
        combinedEvents = [
          ...combinedEvents,
          ...googleData.items.map((event: any, index: number) => ({
            id: `google-${index}`,
            title: event.summary,
            start: new Date(event.start.dateTime),
            end: new Date(event.end.dateTime),
            description: event.description,
            location: event.location,
            conferenceData: event.conferenceData,
            htmlLink: event.htmlLink,
            iCalUID: event.iCalUID,
          })),
        ];
        console.log(
          "google events",
          ...googleData.items.map((event: any, index: number) => ({
            id: `google-${index}`,
            title: event.summary,
            start: new Date(event.start.dateTime),
            end: new Date(event.end.dateTime),
            description: event.description,
            location: event.location,
            conferenceData: event.conferenceData,
            htmlLink: event.htmlLink,
            iCalUID: event.iCalUID,
          }))
        );
      } else {
        setGoogleRespError(true);
        console.error("Error in Google API response:", googleData.error);
      }

      //cscsc
      if (!outlookData.error) {
        combinedEvents = [
          ...combinedEvents,
          ...outlookData.value.map((event: any, index: number) => ({
            id: `outlook-${index}`,
            title: event.subject,
            start: momentTimeZone
              .utc(event.start.dateTime)
              .tz("America/New_York")
              .toDate(),
            end: momentTimeZone
              .utc(event.end.dateTime)
              .tz("America/New_York")
              .toDate(),
            description: event.bodyPreview,
            location: event.location,
            conferenceData: event.attendees,
            htmlLink: event.webLink,
            iCalUID: event.iCalUId,
          })),
        ];
      } else {
        setOutlookRespError(true);
        console.error("Error in Outlook API response:", outlookData.error);
      }

      setEvents(combinedEvents);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("yes");
  }, [counter]); // run once on component mount

  const onNavigate = useCallback(
    (newDate: Date) => setDate(newDate),
    [setDate]
  );

  const onRangeChange = useCallback(
    (range: { start: Date; end: Date } | Date[]) => {
      console.log("range", range);

      if (Array.isArray(range)) {
        console.log("range[0]", range[range.length - 1].toISOString());
        setTimeMin(range[0].toISOString());
        setTimeMax(range[range.length - 1].toISOString());
      } else {
        console.log("range[0]", range.start.toISOString());
        setTimeMin(range.start.toISOString());
        setTimeMax(range.end.toISOString());
      }
      setCounter(counter + 1);
    },
    []
  );

  const onSelectEvent = useCallback((calEvent: any) => {
    /**
     * Here we are waiting 250 milliseconds (use what you want) prior to firing
     * our method. Why? Because both 'click' and 'doubleClick'
     * would fire, in the event of a 'doubleClick'. By doing
     * this, the 'click' handler is overridden by the 'doubleClick'
     * action.
     */
    window.clearTimeout(clickRef?.current);
    clickRef.current = window.setTimeout(() => {
      console.log("onSelectEvent", calEvent);
      setDisplayEvent(calEvent);
      // window.alert(buildMessage(calEvent, "onSelectEvent"));
      onOpen();
    }, 250);
  }, []);

  const onDoubleClickEvent = useCallback((calEvent: any) => {
    /**
     * Notice our use of the same ref as above.
     */
    window.clearTimeout(clickRef?.current);
    clickRef.current = window.setTimeout(() => {
      console.log("onDoubleClickEvent", calEvent);
      // window.alert(buildMessage(calEvent, "onDoubleClickEvent"));
    }, 250);
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <Sidebar>
        <br />
        <br />
        <br />
        {googleRespError && (
          <>
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Google Calendar!</AlertTitle>
              <AlertDescription>
                response data is not recived properly
              </AlertDescription>
            </Alert>
            <br />
          </>
        )}
        {outlookRespError && (
          <>
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Outlook Calendar!</AlertTitle>
              <AlertDescription>
                response data is not recived properly
              </AlertDescription>
            </Alert>
            <br />
          </>
        )}
        <div style={{ height: 800 }}>
          <Calendar
            defaultView={Views.WEEK}
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            showMultiDayTimes
            step={30}
            views={allViews}
            date={date}
            onNavigate={onNavigate}
            onRangeChange={onRangeChange}
            // onDoubleClickEvent={onDoubleClickEvent}
            onSelectEvent={onSelectEvent}
          />
          <Modal onClose={onClose} size={"md"} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                {displayEvent ? displayEvent.id : "undefined"}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {displayEvent && (
                  <>
                    {/* Add more event details as needed */}

                    <Card border={0} variant="unstyled">
                      <Stack>
                        <CardBody>
                          <Heading size="md">{displayEvent.title}</Heading>

                          <Text py="2">
                            <p>
                              Start Time:{" "}
                              {moment(displayEvent.start).format("LLL")}
                            </p>
                          </Text>
                          <Text py="2">
                            <p>
                              End Time: {moment(displayEvent.end).format("LLL")}
                            </p>
                          </Text>
                          <Text py="2">
                            <p>Description: {displayEvent.description}</p>
                          </Text>
                          <Text py="2">
                            <p>
                              Location: {JSON.stringify(displayEvent.location)}
                            </p>
                          </Text>
                        </CardBody>

                        <CardFooter>
                          <Button variant="solid" colorScheme="blue">
                            Ical
                          </Button>
                        </CardFooter>
                      </Stack>
                    </Card>
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </Sidebar>
    </>
  );
};

export default CalendarComponent;
