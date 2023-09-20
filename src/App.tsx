import "./App.css";
import { useState } from "react";
import { Box, HStack, Heading, Switch, Text } from "@chakra-ui/react";
import PersonalDetails from "./components/PersonalDetails";
import { StepperNav } from "./components/StepperNav";
import { useContext } from "react";
import AppContext from "./Context/AppContext";
import EductationDetails from "./components/EductationDetails";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import PreviewMode from "./components/PreviewMode";

function App() {
  const { stepper } = useContext(AppContext);
  const [preview, setPreview] = useState(false);

  return (
    <>
      <Box px="150px" py={"50px"}>
        <HStack mb={"16"} gap={"10"}>
          <Text fontSize={"3xl"} fontWeight={"bold"}>
            Preview Resume
          </Text>
          <Switch
            colorScheme="teal"
            size="lg"
            onChange={() => setPreview(!preview)}
            isChecked={preview}
          />
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
              {stepper.index === 0 && <PersonalDetails />}
              {stepper.index === 1 && <EductationDetails />}
              {stepper.index === 2 && <Experience />}
              {stepper.index === 3 && <Skills />}
              {stepper.index === 4 && <Hobbies />}
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
