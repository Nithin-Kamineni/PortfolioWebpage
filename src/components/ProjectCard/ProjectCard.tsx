import { FC } from "react";

// import styles from "./projectCard.module.scss";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string[];
  GitHub: string;
  hosted: string;
  tags: string[];
  points: string[];
  publition: string;
}
import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { HStack, Heading, Stack, Text } from "@chakra-ui/layout";

import { Card, CardBody, CardFooter, Tag, TagLabel, Link, Badge, useDisclosure, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton } from "@chakra-ui/react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import {Carousel} from "../../modules/react-responsive-carousel";   //modules/react-reveal/Zoom
import React, { useState } from "react";
import { FaGithub, FaRocket } from "react-icons/fa";
import { GiArchiveResearch } from 'react-icons/gi';
import { ChakraProvider } from "@chakra-ui/react";
import { blogHashMap, techHashMap } from "../../data/colorScheme";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, useBreakpointValue } from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from '../../modules/react-slick';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0',
  vertical: true
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log(props);

  //carosel
  const [slider, setSlider] = useState< typeof Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  // const top = useBreakpointValue({ base: '100%', md: '50%' })
  const side = useBreakpointValue({ base: '20px', md: '100px' })
  // const cards = [
  //   'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  //   'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  //   'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  // ]

  return (
    <ChakraProvider>
      <Card className="ProjectDisplayCard" style={{height:'auto'}}>
        <CardBody>
          <div className="image-hover-container">
            <Image
              style={{height:"250px", width:"400px"}}
              src={props.image[0]}
              alt={props.title}
              fit="cover"
              borderRadius="lg"
              className="image-hover"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {/* {hovered && ( */}
            <div className={`image-overlay ${hovered ? "hovered" : ""}`}>
              <button className="icon-button">
                {props.hosted &&
                <IconButton
                colorScheme="ghost"
                aria-label="Call Segun"
                icon={<FaRocket />}
                as="a"
                href={props.hosted}
              />}
              {props.GitHub &&
              <IconButton
              colorScheme="ghost"
              aria-label="Call Segun"
              icon={<FaGithub />}
              as="a"
              href={props.hosted}
            />}
                
              </button>
            </div>
          </div>
          <Stack mt="5" spacing="2">
            <Heading size="md">{props.title}</Heading>
            <Link onClick={onOpen} isExternal><Badge ml='1' colorScheme='green'>More Info...</Badge></Link>
            <Text>
              {props.description.slice(0,100)+'...'}
              {/* <Link onClick={onOpen} isExternal><Badge ml='1' colorScheme='green'>More Info</Badge></Link> */}
              
              <Modal isOpen={isOpen} onClose={onClose} size="sm">
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>{props.title}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                  <div>                  
                  <Box height={'350px'} width={'full'} overflow={'hidden'} position="relative">
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
    <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
      {props.image.map((url) => (
        <Box
          key={url}
          height={'350px'}
          width={'450px'}
          position="relative"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage={`url(${url})`}
        />
      ))}
    </Slider>


    {props.image.length > 1 && (<Box position="absolute" bottom="0px" left={side} right={side} textAlign="center">
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        icon={<BiLeftArrowAlt />}
        marginRight="10px"
      />
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        icon={<BiRightArrowAlt />}
        marginLeft="10px"
      />
    </Box>
    )}
  </Box>
                  </div>

                  <b>Description: </b>
                  {props.description}
                  
                  
                  <ul>
                    {props.points.map((point, index) => (
                      <li key={index} style={{ marginLeft: '20px' }}>{point}</li>
                    ))}
                  </ul>
                  <p><b>Technologies: </b></p>
                  {/* <HStack spacing={1}> */}
                    {props.tags.map((tag) => (
                      <Tag
                        size={'sm'}
                        key={tag}
                        borderRadius='full'
                        variant='solid'
                        colorScheme={techHashMap[tag.toLowerCase()]} //"techHashMap[tag]"}
                        marginRight="0.3rem"
                      >
                        {/* <TagLabel>{tag}</TagLabel> */}
                        <TagLabel>
                          {tag}
                        </TagLabel>

                      </Tag>
                    ))}
                  
                  </ModalBody>

                  <ModalFooter>
                  <ButtonGroup spacing="0.5">
                    <a href={props.hosted}>{props.hosted && <Button variant="solid" colorScheme="teal" leftIcon={<FaRocket />}>
                      Preview
                    </Button>}</a>
                    <a href={props.publition}>{props.publition && <Button variant="solid" colorScheme="teal" leftIcon={<GiArchiveResearch />}>
                    Publition
                  </Button>}</a>
                    <a href={props.GitHub}>
                      {props.GitHub && <Button
                        variant="solid"
                        colorScheme="blackAlpha"
                        color="black"
                        leftIcon={<FaGithub />}
                      >
                        Github
                      </Button>}</a>
                      <Button colorScheme='blue' mr={3} onClick={onClose}>
                      Close
                      </Button>
                  </ButtonGroup>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Text>
          </Stack>
          
          
          
          

          <div style={{marginTop:'10px'}}>
          {/* <HStack spacing={1}> */}
            {props.tags.map((tag) => (
              <Tag
                size={'sm'}
                key={tag}
                borderRadius='full'
                variant='solid'
                // colorScheme={techHashMap[tag.toLowerCase()]} //"techHashMap[tag]"}
                marginRight="0.3rem"
                style={{background:techHashMap[tag.toLowerCase()]}}
                >
                {/* <TagLabel>{tag}</TagLabel> */}
                <TagLabel>
                  {tag}
                </TagLabel>

              </Tag>
            ))}
            </div>
          {/* </HStack> */}

        </CardBody>
        <CardFooter className="CardFooter">
          <ButtonGroup spacing="1">
            <a href={props.hosted}>{props.hosted && <Button variant="solid" colorScheme="teal" leftIcon={<FaRocket />}>
              Preview
            </Button>}</a>
            <a href={props.publition}>{props.publition && <Button variant="solid" colorScheme="teal" leftIcon={<GiArchiveResearch />}>
              Publition
            </Button>}</a>
            <a href={props.GitHub}>{props.GitHub && <Button variant="solid" colorScheme="blackAlpha" color="black" leftIcon={<FaGithub /> }>
              Github
            </Button>}</a>

          </ButtonGroup>
        </CardFooter>
      </Card>
      </ChakraProvider>
  );
};

export { ProjectCard };
