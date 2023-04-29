import { FC } from "react";

import styles from "./projectCard.module.scss";
import { TwitterShareButton, TwitterIcon, LinkedinIcon } from 'react-share';

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  blogTags: string[];
}
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center
} from '@chakra-ui/react'
import { Portal } from "react-portal";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import {  Divider, HStack, Heading, Stack, Text } from "@chakra-ui/layout";

import { Card, CardBody, CardFooter, ChakraProvider, PopoverProps, Tag, TagCloseButton, TagLabel, position } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaBlogger, FaGithub, FaRocket, FaShare, FaUserLock } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
// import { PhoneIcon, AddIcon, WarningIcon, LinkIcon } from '@chakra-ui/icons';
import "./style.css";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import { blogHashMap } from "../../data/colorScheme";
import { SiGmail, SiStackoverflow } from "react-icons/si";
import { Link } from "react-router-dom";
import { AiOutlineLink } from "react-icons/ai";

const BlogCard: FC<BlogCardProps> = (props) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  interface CustomPopoverProps extends PopoverProps {
    appendToBody?: boolean;
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      {/* <ChakraProvider> */}
      <Card maxW="sm" className="ProjectDisplayCard">
        <CardBody>
          <div className="image-hover-container">
            <Image style={{ height: "250px", width: "400px" }}
              src={props.image}
              alt={props.title}
              borderRadius="lg"
              className="image-hover"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {/* {hovered && ( */}
            <div className={`image-overlay ${hovered ? "hovered" : ""}`}>
              <button className="icon-button">
                <IconButton
                  colorScheme="ghost"
                  aria-label="Call Segun"
                  icon={<FaBlogger />}
                />
              </button>
            </div>
          </div>
          <Stack mt="5" spacing="2">
            <Heading size="md">{props.title}</Heading>
            <Text>
              {props.description}
            </Text>
          </Stack>
          <HStack spacing={1}>
            {props.blogTags.map((tag) => (
              <Tag
                size={'sm'}
                key={tag}
                borderRadius='full'
                variant='solid'
                colorScheme={blogHashMap[tag.toLowerCase()]} //"techHashMap[tag]"}
              >
                <TagLabel>{tag}</TagLabel>

              </Tag>
            ))}
          </HStack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <a href={props.url}>
              <Button variant="solid" colorScheme="teal">
                Read More
              </Button>
            </a>

            <div data-container="body">
              <Button variant='ghost' colorScheme='blackAlpha' onClick={onOpen} leftIcon={<BiShare />}>
                Share
              </Button>
              <Modal isOpen={isOpen} onClose={onClose} size="sm">
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {/* <Lorem count={2} /> */}
                    <Center>
                      <IconButton
                        aria-label='Call Segun'
                        size='lg'
                        icon={<TwitterIcon />}
                      />
                      <IconButton
                        aria-label='Call Segun'
                        size='lg'
                        icon={<LinkedinIcon />}
                      />
                      <IconButton
                        aria-label='Call Segun'
                        size='lg'
                        icon={<SiGmail />}
                      />
                      <IconButton
                        aria-label='Call Segun'
                        colorScheme='teal'
                        size='lg'
                        icon={<SiStackoverflow />}
                      />
                    </Center>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Button variant='solid' colorScheme='gray'>Copy Link</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>


          </ButtonGroup>
        </CardFooter>
      </Card>
      {/* </ChakraProvider> */}
    </div>
  );
};

export { BlogCard };
