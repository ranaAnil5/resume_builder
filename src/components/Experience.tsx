import {
  Heading,
  HStack,
  Grid,
  GridItem,
  Text,
  Textarea,
  Box,
} from "@chakra-ui/react";

import FormField from "./FormField";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { Experience as Exp } from "../App.type";
import { RiDeleteBinLine } from "react-icons/ri";
import AddOneMoreButton from "./AddOneMoreButton";

const Experience = () => {
  const { experiences, setExperiences } = useContext(AppContext);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setExperiences(
      experiences.map((experience, i) =>
        i === index ? { ...experience, [name]: value } : experience
      )
    );
  };

  const handleAdd = () => {
    setExperiences([...experiences, { job_title: "" } as Exp]);
  };

  const handleRemove = (index: number) => {
    setExperiences(experiences.filter((_, i) => index !== i));
  };

  return (
    <>
      <Heading mb={"40px"}>Experience :</Heading>

      {experiences.map((experience, index) => (
        <Box key={index}>
          <HStack gap="15px" alignItems={"center"} mb="20px">
            <Text
              fontSize={"2xl"}
              fontWeight={"semibold"}
              textDecoration={"underline"}
              textDecorationThickness={"2px"}
            >
              Experience {index + 1}
            </Text>
            <RiDeleteBinLine
              size="30px"
              onClick={() => handleRemove(index)}
              cursor="pointer"
              color="red"
              opacity="0.7"
            />
          </HStack>
          <Grid
            templateColumns={"repeat(2,1fr)"}
            rowGap={"6"}
            columnGap={"12"}
            key={index}
            mb={"30px"}
          >
            <GridItem colSpan={1}>
              <FormField
                label="Job Title"
                inputProps={{
                  name: "job_title",
                  onChange: (e) => {
                    handleChange(e, index);
                  },
                  value: experience.job_title,
                }}
              />
            </GridItem>

            <GridItem colSpan={1}>
              <FormField
                label="Employer / Company"
                inputProps={{
                  name: "employer",
                  onChange: (e) => {
                    handleChange(e, index);
                  },
                  value: experience.employer,
                }}
              />
            </GridItem>

            <GridItem colSpan={1}>
              <FormField
                label="Start and End Date"
                inputProps={{
                  name: "duration",
                  onChange: (e) => {
                    handleChange(e, index);
                  },
                  value: experience.duration,
                }}
              />
            </GridItem>

            <GridItem colSpan={1}>
              <FormField
                label="Location"
                inputProps={{
                  name: "location",
                  onChange: (e) => {
                    handleChange(e, index);
                  },
                  value: experience.location,
                }}
              />
            </GridItem>

            <GridItem colSpan={2}>
              <FormField label="Description" inputProps={{ display: "none" }} />
              <Textarea
                w={"100%"}
                h={"100px"}
                p={"15px"}
                name="description"
                onChange={(e) => {
                  handleChange(e, index);
                }}
                value={experience.description}
              />
            </GridItem>
          </Grid>
        </Box>
      ))}
      <AddOneMoreButton handleAdd={handleAdd} />
    </>
  );
};

export default Experience;
