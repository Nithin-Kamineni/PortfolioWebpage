import { FC } from "react";

// import styles from "./projectCard.module.scss";

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
import { ChakraProvider } from "@chakra-ui/react";
import { blogHashMap, techHashMap } from "../../data/colorScheme";
import "./style.css";

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
      <Card className="ProjectDisplayCard" style={{height:'auto'}}>
        <CardBody>
          <div className="image-hover-container">
            <Image
              style={{height:"250px", width:"400px"}}
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
            <Text>
              {props.description}
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
                colorScheme={techHashMap[tag.toLowerCase()]} //"techHashMap[tag]"}
                marginRight="0.3rem"
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
