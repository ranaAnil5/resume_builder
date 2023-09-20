import { useContext } from "react";
import AppContext from "../Context/AppContext";
import {
  Box,
  Stepper,
  StepNumber,
  StepIcon,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  useSteps,
} from "@chakra-ui/react";

const steps = [
  { title: "Personal Info", description: "" },
  { title: "Educational Details", description: "" },
  { title: "Experience", description: "" },
  { title: "Skills", description: "" },
  { title: "Hobbies", description: "" },
];

export function StepperNav() {
  const { stepper, setStepper } = useContext(AppContext);
  // console.log(context);

  const { activeStep, setActiveStep } = useSteps({
    index: stepper.index,
    count: steps.length,
  });

  return (
    <Stepper
      size="lg"
      index={activeStep}
      mb={"30px"}
      height="400px"
      orientation="vertical"
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator
            cursor={"pointer"}
            onClick={() => {
              setActiveStep(index);
              setStepper({ index });
            }}
            userSelect={"none"}
          >
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0" userSelect={"none"}>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}
