import { FC } from "react";

import styles from "./projectCard.module.scss";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  blogTags: string[];
}
import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { HStack, Heading, Stack, Text } from "@chakra-ui/layout";

import { Card, CardBody, CardFooter, ChakraProvider, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaBlogger, FaGithub, FaRocket, FaShare } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
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

const BlogCard: FC<BlogCardProps> = (props) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div> 
    <ChakraProvider>
      <Card maxW="sm" className="ProjectDisplayCard">
        <CardBody>
          <div className="image-hover-container">
            <Image style={{height:"250px", width:"400px"}}
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
            
            <div data-container="body" style={{ position: "relative", zIndex: 9990 }}> 
            <Popover isLazy>
              <PopoverTrigger>
                <Button variant='ghost' colorScheme='blackAlpha' leftIcon={<BiShare />}>
                  Share
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore.
                </PopoverBody>
              </PopoverContent>
            </Popover>
            </div>

          </ButtonGroup>
        </CardFooter>
      </Card>
    </ChakraProvider>
    </div>
  );
};

export { BlogCard };
