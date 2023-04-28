import { FC } from "react";

import styles from "./projectCard.module.scss";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  GitHub: string;
  hosted: string;
  tags: string[];
}
import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { HStack, Heading, Stack, Text } from "@chakra-ui/layout";

import { Card, CardBody, CardFooter, Tag, TagLabel } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaGithub, FaRocket } from "react-icons/fa";
import "./style.css";
import { ChakraProvider } from "@chakra-ui/react";
import { blogHashMap, techHashMap } from "../../data/colorScheme";

const ProjectCard: FC<ProjectCardProps> = (props) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <ChakraProvider>
    <Card maxW="sm" className="ProjectDisplayCard">
    <CardBody>
      <div className="image-hover-container">
        <Image
        // style={{height:"250px", width:"400px"}}
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
              icon={<FaRocket />}
            />
            <IconButton
              colorScheme="ghost"
              aria-label="Call Segun"
              icon={<FaGithub />}
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
            {props.tags.map((tag) => (
              <Tag
                size={'sm'}
                key={tag}
                borderRadius='full'
                variant='solid'
                colorScheme={techHashMap[tag.toLowerCase()]} //"techHashMap[tag]"}
              >
                <TagLabel>{tag}</TagLabel>

              </Tag>
            ))}
          </HStack>

    </CardBody>
    <CardFooter>
      <ButtonGroup spacing="2">
        <a href={props.hosted}>{props.hosted && <Button variant="solid" colorScheme="teal" leftIcon={<FaRocket />}>
          Preview
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
        
      </ButtonGroup>
    </CardFooter>
  </Card>
  </ChakraProvider>
  );
};

export { ProjectCard };
