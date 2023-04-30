import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  ChakraProvider,
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';
import styles from "./about.module.scss";
import { AboutData } from "../../data/AboutData";
import { FaCode } from 'react-icons/fa';
import { BiGlassesAlt } from 'react-icons/bi';
import {GiTeamUpgrade} from "react-icons/gi"
import { TbPerspective } from 'react-icons/tb';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const aboutOpen = "<about>";
const aboutClose = "</about>";

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={10}
        h={10}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function About() {
  return (
    // <ChakraProvider>
    <Container maxW={'5xl'} py={3} className={styles.projects}>
      <div className={styles.wrapper}>
        <h3 className={styles.projectsOpen}>{aboutOpen}</h3>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>

          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              My Story
            </Text>
            {AboutData.aboutHeading && <Heading>{AboutData.aboutHeading}</Heading>}
            <Text color={'gray.500'} fontSize={'lg'}>
              {AboutData.aboutText}
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              {AboutData.aboutFeature1 &&
                <Feature
                  icon={
                    <Icon as={BiGlassesAlt} color={'yellow.500'} w={5} h={5} />
                  }
                  iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                  text={AboutData.aboutFeature1}
                />
              }
              {AboutData.aboutFeature2 &&
              <Feature
                icon={<Icon as={GiTeamUpgrade} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={AboutData.aboutFeature2}
              />}
              {AboutData.aboutFeature3 &&
              <Feature
                icon={
                  <Icon as={TbPerspective} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={AboutData.aboutFeature3}
              />}
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'profile image did not load'}
              src={AboutData.imageUrl}
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
        <h3 className={styles.projectsClose}>{aboutClose}</h3>
      </div>
    </Container>
    // </ChakraProvider>
  );
}


