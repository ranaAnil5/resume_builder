import { useContext } from "react";
import AppContext from "../Context/AppContext";
import {
  Box,
  Stepper,
  StepNumber,
  StepIcon,
  Step,
  // StepDescription,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  useSteps,
} from "@chakra-ui/react";

const steps = [
  { title: "Personal Details", description: "" },
  { title: "Educational Details", description: "" },
  { title: "Experiences", description: "" },
  { title: "Projects", description: "" },
  { title: "Skills", description: "" },
  { title: "Hobbies", description: "" },
];

export function StepperNav() {
  const { stepperIndex, setStepperIndex } = useContext(AppContext);
  // console.log(context);

  const { activeStep, setActiveStep } = useSteps({
    index: stepperIndex,
    count: steps.length,
  });

  return (
    <Stepper
      height="440px"
      mb={"30px"}
      size="lg"
      index={activeStep}
      orientation="vertical"
      gap={0}
    >
      {steps.map((step, index) => (
        <Step
          key={index}
          onClick={() => {
            setActiveStep(index);
            setStepperIndex(index);
          }}
        >
          <StepIndicator cursor={"pointer"} userSelect={"none"}>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0" userSelect={"none"} cursor={"pointer"}>
            <StepTitle>{step.title}</StepTitle>
            {/* <StepDescription>{step.description}</StepDescription> */}
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}
