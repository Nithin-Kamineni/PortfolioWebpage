import React from "react";
// import { Navbar2 } from "../../components/Navbar/navbar";
// import { BsBarChart } from "react-icons/bs";
// import { FiSettings } from "react-icons/fi";
// import {
//   SidenavProvider,
//   SidenavContainer,
//   SidenavItem,
//   Sidenav,
// } from "../../components/sidenav";
import Sidebar from "../../components/Sidebar";
// import { Text } from "@chakra-ui/layout";
import demoEvents from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
// import "react-big-calendar/lib/sass/styles";
// import "react-big-calendar/lib/addons/dragAndDrop/styles"; // if using DnD

let allViews = Object.keys(Views).map((k) => Views[k]);

// export default function GoogleCalendarDashboard() {
//   const localizer = momentLocalizer(moment);
//   const [events, setEvents] = React.useState([]);

//   React.useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const apiKey = "AIzaSyDOYaokko6A3NQVh_24JAPsdYiInOiXPl8";
//         const calendarId = "nithinkamineni1@gmail.com";
//         // const timeMin = encodeURIComponent("2024-02-17T04:39:53.000Z");
//         // const timeMax = encodeURIComponent("2024-02-28T18:00:00-05:00");
//         const alwaysIncludeEmail = "true";

//         // const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?alwaysIncludeEmail=${alwaysIncludeEmail}&timeMax=${timeMax}&timeMin=${timeMin}&prettyPrint=true&key=${apiKey}`;
//         const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?alwaysIncludeEmail=${alwaysIncludeEmail}&prettyPrint=true&key=${apiKey}`;

//         const response = await fetch(url);
//         const data = await response.json();

//         // Map the data into the desired format
//         const formattedEvents = data.items.map((event, index) => ({
//           id: index,
//           title: event.summary,
//           start: new Date(event.start.dateTime),
//           end: new Date(event.end.dateTime),
//         }));

//         console.log("formattedEvents", formattedEvents);
//         setEvents([...events, ...formattedEvents]);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // run once on component mount

//   return (
//     <>
//       <br />
//       <br />
//       <br />
//       <Sidebar>
//         <br />
//         <br />
//         <br />
//         {/* <iframe
//           style={{ marginLeft: "-30px", marginTop: "-20px" }}
//           width="103%"
//           height="850px"
//           src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&src=bml0aGlua2FtaW5lbmkxQGdtYWlsLmNvbQ&color=%23039BE5?widget=true&amp;headers=false"
//         ></iframe> */}
//         <div style={{ height: 800 }}>
//           <Calendar
//             defaultView={Views.MONTH}
//             localizer={localizer}
//             events={events}
//             startAccessor="start"
//             endAccessor="end"
//             showMultiDayTimes
//             step={30}
//             views={allViews}
//           />
//         </div>
//       </Sidebar>
//     </>
//   );
// }

const CalendarComponent = () => {
  const [date, setDate] = React.useState(new Date()); // This will initialize the date state with today's date

  const [events, setEvents] = React.useState([]);
  const localizer = momentLocalizer(moment);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch from Google Calendar API
        const googleApiKey = "AIzaSyDOYaokko6A3NQVh_24JAPsdYiInOiXPl8";
        const googleCalendarId = "nithinkamineni1@gmail.com";
        const googleTimeMin = encodeURIComponent("2024-02-17T04:39:53.000Z");
        const googleTimeMax = encodeURIComponent("2024-02-28T18:00:00-05:00");
        const googleAlwaysIncludeEmail = "true";

        const googleUrl = `https://www.googleapis.com/calendar/v3/calendars/${googleCalendarId}/events?alwaysIncludeEmail=${googleAlwaysIncludeEmail}&key=${googleApiKey}`;

        const googleResponse = await fetch(googleUrl);
        const googleData = await googleResponse.json();

        // Fetch from Outlook Calendar API
        const outlookToken =
          "eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFlRVc0czYtWU5mM3laNUFQWVBRdGFpekJqLVUwU3Q1QnFIUDBCT2lfbHciLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8wZDRkYTBmOC00YTMxLTRkNzYtYWNlNi0wYTYyMzMxZTFiODQvIiwiaWF0IjoxNzA5NTkyMDc0LCJuYmYiOjE3MDk1OTIwNzQsImV4cCI6MTcwOTY3ODc3NCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkUyTmdZQ2lvaVRpZ0k4VFhHVzR2d0g3QVIyMmFZNVoxWGQ5UzYwdDc5VEt5UGE0MFd6YXZPRlRyWTJxLzVaYmhwUFFadVkzZUFBPT0iLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkthbWluZW5pIiwiZ2l2ZW5fbmFtZSI6IlZlbmthdGEiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIyNjAwOjg4MDc6YzBjNToxMjAwOjMxNjk6OGRlNjplNmQ0OmUyNjQiLCJuYW1lIjoiS2FtaW5lbmksIFZlbmthdGEgTi4iLCJvaWQiOiI3Y2FkZTIxYS05NmE3LTQxZmEtOTJjMi1hZGFmZjY0OTcyMTMiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMTMwODIzNzg2MC00MTkzMzE3NTU2LTMzNjc4NzY0Ni0zMTIxOTIyIiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAxOUNBQkYzNkIiLCJyaCI6IjAuQVRVQS1LQk5EVEZLZGsyczVncGlNeDRiaEFNQUFBQUFBQUFBd0FBQUFBQUFBQUExQUJFLiIsInNjcCI6IkFwcGxpY2F0aW9uLlJlYWRXcml0ZS5BbGwgQ2hhbm5lbC5SZWFkQmFzaWMuQWxsIERpcmVjdG9yeS5SZWFkLkFsbCBvcGVuaWQgcHJvZmlsZSBVc2VyLlJlYWQgZW1haWwgQ2FsZW5kYXJzLlJlYWQiLCJzdWIiOiJtZFFlOXp4ZXo0aWlZYUZlNHhSNnVPdU5xYzhMY1BTM0hyb3FsVzdoQjFzIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6Ik5BIiwidGlkIjoiMGQ0ZGEwZjgtNGEzMS00ZDc2LWFjZTYtMGE2MjMzMWUxYjg0IiwidW5pcXVlX25hbWUiOiJ2a2FtaW5lbmlAdWZsLmVkdSIsInVwbiI6InZrYW1pbmVuaUB1ZmwuZWR1IiwidXRpIjoiTkhWcHozZHZha2ludDdVUEVCMFpBdyIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYyI6WyJDUDEiXSwieG1zX3NzbSI6IjEiLCJ4bXNfc3QiOnsic3ViIjoiZHg0d2s4b050MHl0eG1wUloyNDdQRmdXNTRlRlI4c2Y1MU1tRmN2UzF3byJ9LCJ4bXNfdGNkdCI6MTM2NDMyNjU5MH0.nybjSRpxuYJjgMNysbbdDn_k9gLBiOf5UgLggbg86D7qrfWOAAL7ZkLeTV1EyDcbuVLptuf7P34Z7X-aVAVkh-RpjzvTwNgUGy4iE9oTV0bKBfiuOT65kId19LyOgfTCABj_AfIRylMrXrlp3nS8bzjXIj1poh17vOZHZCLMICZe2K_oWul9wQlyhkxDj7fva7gpuy99icz65Fzb3Pd1y_F_yvQ4LUWI6czjJ30_vlLpCEbpq8MDiy3fr4wLS4Y3u28zhfTJM7Ml4dmSP0P3SW65_5aNNL94xBWFJf6ujJZd2bH9yXNPe_fQKnmscBUO2P5Yba05MB7g9VtulOBNpQ";
        const outlookUrl =
          "https://graph.microsoft.com/v1.0/me/events?$select=subject,bodyPreview,organizer,attendees,start,end,location";

        const outlookResponse = await fetch(outlookUrl, {
          headers: {
            Authorization: `Bearer ${outlookToken}`,
          },
        });
        const outlookData = await outlookResponse.json();

        // Combine the results from both APIs
        const combinedEvents = [
          ...googleData.items.map((event, index) => ({
            id: `google-${index}`,
            title: event.summary,
            start: new Date(event.start.dateTime),
            end: new Date(event.end.dateTime),
          })),
          ...outlookData.value.map((event, index) => ({
            id: `outlook-${index}`,
            title: event.subject,
            start: new Date(event.start.dateTime),
            end: new Date(event.end.dateTime),
          })),
        ];

        // console.log("combinedEvents", combinedEvents);
        setEvents(combinedEvents);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // run once on component mount

  const onNavigate = React.useCallback(
    (newDate) => setDate(newDate),
    [setDate]
  );
  const onRangeChange = React.useCallback((range) => {
    // window.alert(buildMessage(range));
    console.log("range", range);
  }, []);

  React.useEffect(() => {
    console.log("date", date);
  }, [date]);

  return (
    <>
      <br />
      <br />
      <br />
      <Sidebar>
        <br />
        <br />
        <br />
        <div>
          <h1>Calendar Events</h1>
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                {/* {event.title} */}
                {event.id} - {event.start.toISOString()} to{" "}
                {event.end.toISOString()}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ height: 800 }}>
          <Calendar
            defaultView={Views.WEEK}
            // views=
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
          />
        </div>
      </Sidebar>
    </>
  );
};

export default CalendarComponent;
