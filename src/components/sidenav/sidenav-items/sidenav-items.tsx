import {
  List,
  ListItem,
  Icon,
  Flex,
  Text,
  Link,
  Tooltip,
  IconButton,
  Box,
  Portal,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
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
  Center,
  HStack,
} from "@chakra-ui/react";
import "./styles.css";
export interface SidenavItem {
  icon: IconType;
  label: string;
  to: string;
}

export interface SidenavItemsProps {
  navItems: SidenavItem[];
  mode?: "semi" | "over";
}

export function SidenavItems({ navItems, mode = "semi" }: SidenavItemsProps) {
  const location = useLocation();
  let currentPath = location.pathname.slice(1, -1);
  // console.log("currentPathbook", currentPath === "flashcards");
  // console.log("currentPath", currentPath);
  // console.log("location.pathname", location.pathname);

  const sidebarItemInOverMode = (item: SidenavItem, index: number) => (
    <ListItem key={index}>
      <Link
        display="block"
        as={NavLink}
        to={item.to}
        _focus={{ bg: "gray.100" }}
        _hover={{
          bg: "gray.200",
        }}
        _activeLink={{ bg: "orange.500", color: "white" }}
        w="full"
        borderRadius="md"
      >
        <Flex alignItems="center" p={2}>
          <Icon boxSize="5" as={item.icon} />
          <Text ml={2}>{item.label}</Text>
        </Flex>
      </Link>
    </ListItem>
  );
  const sidebarItemInSemiMode = (
    { icon: Icon, ...item }: SidenavItem,
    index: number
  ) => (
    <ListItem key={index}>
      {item.label === "flashcards" || item.label === "leetcode" ? (
        <>
          <Popover trigger="hover" placement="right">
            <PopoverTrigger>
              <IconButton
                key={index}
                as={NavLink}
                _focus={{ bg: "gray.100" }}
                _activeLink={{
                  boxShadow: "md",
                  bg: "orange.500",
                  color: "white",
                }}
                bg={
                  item.label.toLocaleLowerCase() === currentPath
                    ? "orange.500"
                    : "transparent"
                }
                color={
                  item.label.toLocaleLowerCase() === currentPath
                    ? "white"
                    : "black"
                }
                aria-label={item.label}
                borderRadius="xl"
                icon={<Icon />}
                to={item.to}
              />
            </PopoverTrigger>
            <Portal>
              <Box zIndex="tooltip" w="full" h="full" position={"relative"}>
                <PopoverContent width={"120px"}>
                  {/* <PopoverHeader fontWeight="semibold">
                Popover placement
              </PopoverHeader> */}
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>
                    <HStack gap={4}>
                      <Center w="40px" h="40px" color="white">
                        <IconButton
                          key={index}
                          as={NavLink}
                          _focus={{ bg: "gray.100" }}
                          _activeLink={{
                            boxShadow: "md",
                            bg:
                              "/flashcards/" === location.pathname ||
                              "/flashcards" === location.pathname ||
                              "/leetcode" === location.pathname ||
                              "/leetcode/" === location.pathname
                                ? "orange.500"
                                : "grey",
                            color: "white",
                          }}
                          bg={
                            item.label.toLocaleLowerCase() === location.pathname
                              ? "orange.500"
                              : "grey"
                          }
                          // bg={"grey"}
                          color={"white"}
                          aria-label={item.label}
                          borderRadius="xl"
                          icon={<Icon />}
                          to={item.to}
                        />
                      </Center>
                      <Center w="40px" h="40px" color="white">
                        <IconButton
                          key={index}
                          as={NavLink}
                          _focus={{ bg: "gray.100" }}
                          _activeLink={{
                            boxShadow: "md",
                            bg:
                              "/flashcards/edit/" === location.pathname ||
                              "/flashcards/edit" === location.pathname ||
                              "/leetcode/edit" === location.pathname ||
                              "/leetcode/edit/" === location.pathname
                                ? "orange.500"
                                : "grey",
                            color: "white",
                          }}
                          bg={"grey"}
                          color={"white"}
                          aria-label={item.label}
                          borderRadius="xl"
                          icon={<Icon />}
                          to={item.to + "/edit"}
                        />
                      </Center>
                    </HStack>
                  </PopoverBody>
                </PopoverContent>
              </Box>
            </Portal>
          </Popover>
        </>
      ) : (
        <>
          <Tooltip label={item.label} placement="right">
            <IconButton
              key={index}
              as={NavLink}
              _focus={{ bg: "gray.100" }}
              _activeLink={{
                boxShadow: "md",
                bg: "orange.500",
                color: "white",
              }}
              bg={
                item.label.toLocaleLowerCase() === currentPath
                  ? "orange.500"
                  : "transparent"
              }
              color={
                item.label.toLocaleLowerCase() === currentPath
                  ? "white"
                  : "black"
              }
              aria-label={item.label}
              borderRadius="xl"
              icon={<Icon />}
              to={item.to}
            />
          </Tooltip>
        </>
      )}
    </ListItem>
  );
  return (
    <List spacing={3}>
      {mode === "semi"
        ? navItems.map((item, index) => sidebarItemInSemiMode(item, index))
        : navItems.map((item, index) => sidebarItemInOverMode(item, index))}
    </List>
  );
}

export default SidenavItems;
