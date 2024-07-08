import React, { useReducer, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import BookingPage from "./BookingPage";
import Specials from "./Specials";
import ContactUs from "./ContactUs";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Box,
  HStack,
} from "@chakra-ui/react";
import HomePage from "./HomePage";
import Confirmed from "./Confirmed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@emotion/react";
import ThemeToggle from "./ThemeToggle";
import Test from "./Test";

function Nav() {
  const theme = useTheme();
  console.log(theme);

  const seededRandom = (seed) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return () => (s = (s * a) % m) / m;
  };
  const fetchAPI = (date) => {
    let result = [];
    let random = seededRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(`${i}:00`);
      }
      if (random() < 0.5) {
        result.push(`${i}:30`);
      }
    }
    return result;
  };
  const submitAPI = (formData) => true;
  const initialState = { availableTimes: fetchAPI(new Date()) };
  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(date) };
  }
  const [state, dispatch] = useReducer(updateTimes, initialState);
  const navigate = useNavigate();
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      console.log(formData);
      navigate("/confirmed", { state: formData });
    }
  };

  const links = [
    {
      path: "/",
      title: "Home",
      element: <HomePage />,
    },
    {
      path: "/booking",
      title: "Booking",
      element: (
        <BookingPage
          availableTimes={state.availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      ),
    },
    {
      path: "/specials",
      title: "Specials",
      element: <Specials />,
    },
    {
      path: "/contact",
      title: "Contact",
      element: <ContactUs />,
    },
    {
      path: "/test",
      title: "test",
      element: <Test />,
    },
  ];
  const [display, setDisplay] = useState("none");
  return (
    <Flex className="divContainer" as="nav">
      <Grid>
        <GridItem>
          <Flex p="1rem" alignItems="center">
            <Heading
              as="h1"
              size="md"
              onClick={() => {
                navigate("/");
              }}
              cursor="pointer"
            >
              Little Lemon
            </Heading>
            <Spacer />
            <Flex
              as="nav"
              display={["none", "none", "flex", "flex"]}
              flexDirection="column"
            >
              <ul>
                {links.map((link) => (
                  <Box
                    m="1rem"
                    as="li"
                    display="inline"
                    className="navElement"
                    key={link.title}
                  >
                    <Link className="navLink" to={link.path}>
                      {link.title}
                    </Link>
                  </Box>
                ))}
              </ul>
            </Flex>
            <HStack gap="1rem">
              <ThemeToggle />

              <Box display={["flex", "flex", "none", "none"]}>
                <FontAwesomeIcon
                  icon={faBars}
                  onClick={() => setDisplay("flex")}
                  size="xl"
                />
              </Box>
            </HStack>
          </Flex>
        </GridItem>
        <Routes>
          {links.map((link) => (
            <Route key={link.title} path={link.path} element={link.element} />
          ))}
          <Route path="/confirmed" element={<Confirmed />} />
        </Routes>
      </Grid>
      <Flex
        w="100vw"
        h="100lvh"
        top="0"
        left="0"
        bgColor="gray.50"
        pos="fixed"
        zIndex={20}
        overflowY="auto"
        flexDirection="column"
        display={display}
        p="1rem"
      >
        <Flex justify="flex-end">
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setDisplay("none")}
            size="xl"
          />
        </Flex>
        <Spacer />
        <Flex
          as="nav"
          flexDirection="column"
          alignSelf="center"
          justifySelf="center"
          textAlign="center"
        >
          <ul>
            {links.map((link) => (
              <Box
                className="navElement"
                borderBottom="1px dashed black"
                as="li"
                fontSize="30px"
                display="flex"
                justifyContent="center"
                key={link.title}
              >
                <Link
                  onClick={() => setDisplay("none")}
                  as="a"
                  className="blacklink"
                  to={link.path}
                >
                  {link.title}
                </Link>
              </Box>
            ))}
          </ul>
        </Flex>
        <Spacer />
      </Flex>
    </Flex>
  );
}
export default Nav;
