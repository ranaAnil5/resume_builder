import "./App.css";
import { useState } from "react";
import { Box, HStack, Heading, Switch, Text, Tooltip } from "@chakra-ui/react";
import PersonalDetails from "./components/PersonalDetails";
import { StepperNav } from "./components/StepperNav";
import { useContext } from "react";
import AppContext from "./Context/AppContext";
import EductationDetails from "./components/EductationDetails";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import PreviewMode from "./components/PreviewMode";
import Projects from "./components/Projects";

function App() {
  const { stepperIndex, dataToggler } = useContext(AppContext);
  const [preview, setPreview] = useState(false);

  const screens = [
    <PersonalDetails />,
    <EductationDetails />,
    <Experience />,
    <Projects />,
    <Skills />,
    <Hobbies />,
  ];

  return (
    <>
      <Box px="150px" py={"50px"}>
        <HStack mb={"10"} gap={"10"}>
          <Text fontSize={"3xl"} fontWeight={"bold"}>
            Preview Resume
          </Text>
          <Tooltip
            hasArrow
            label="Editing mode is off for dummy data"
            placement="top-end"
            bg="red.600"
            isDisabled={dataToggler}
          >
            <Switch
              colorScheme="teal"
              size="lg"
              onChange={() => {
                dataToggler ? setPreview(!preview) : "";
              }}
              isChecked={preview}
            />
          </Tooltip>
        </HStack>

        {!preview ? (
          <HStack alignItems={"start"} gap={"125px"} w="100%">
            <Box>
              <Heading mb={"30px"} textDecoration={"underline"} size={"lg"}>
                Form Index
              </Heading>
              <StepperNav />
            </Box>
            <Box flexGrow={"1"}>
              {screens.map(
                (screen, i) => i === stepperIndex && <Box key={i}>{screen}</Box>
              )}
            </Box>
          </HStack>
        ) : (
          <PreviewMode />
        )}
      </Box>
    </>
  );
}

export default App;
