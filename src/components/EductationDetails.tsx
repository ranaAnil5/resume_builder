import {
  Heading,
  Grid,
  GridItem,
  Textarea,
  HStack,
  Text,
  Box,
} from "@chakra-ui/react";

import FormField from "./FormField";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { EducationalDetail } from "../Context/initialAppState";
import { RiDeleteBinLine } from "react-icons/ri";
import AddOneMoreButton from "./AddOneMoreButton";

const EducationalDetails = () => {
  const { educational_details, setEducationalDetails } = useContext(AppContext);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setEducationalDetails(
      educational_details.map((educational_detail, i) =>
        i === index
          ? { ...educational_detail, [name]: value }
          : educational_detail
      )
    );
  };

  const handleAdd = () => {
    setEducationalDetails([
      ...educational_details,
      { college_name: "" } as EducationalDetail,
    ]);
  };

  const handleRemove = (index: number) => {
    setEducationalDetails(educational_details.filter((_, i) => index !== i));
  };

  return (
    <>
      <Heading mb={"40px"}>Educational Detail :</Heading>
      {educational_details.map((educational_detail, index) => (
        <Box key={index}>
          <HStack gap="15px" alignItems={"center"} mb="20px">
            <Text
              fontSize={"2xl"}
              fontWeight={"semibold"}
              textDecoration={"underline"}
              textDecorationThickness={"2px"}
            >
              Education {index + 1}
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
            rowGap={"12"}
            columnGap={"12"}
            key={index}
            mb={"30px"}
          >
            <GridItem colSpan={1}>
              <FormField
                label="College / Campus"
                inputProps={{
                  name: "college_name",
                  onChange: (e) => handleChange(e, index),
                  value: educational_detail.college_name,
                }}
              />
            </GridItem>

            <GridItem colSpan={1}>
              <FormField
                label="Degree"
                inputProps={{
                  name: "degree",
                  onChange: (e) => handleChange(e, index),
                  value: educational_detail.degree,
                }}
              />
            </GridItem>

            <GridItem colSpan={1}>
              <FormField
                label="Start and End Date"
                inputProps={{
                  name: "duration",
                  onChange: (e) => handleChange(e, index),
                  value: educational_detail.duration,
                }}
              />
            </GridItem>

            <GridItem colSpan={1}>
              <FormField
                label="Location"
                inputProps={{
                  name: "location",
                  onChange: (e) => handleChange(e, index),
                  value: educational_detail.location,
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
                onChange={(e) => handleChange(e, index)}
                value={educational_detail.description}
              />
            </GridItem>
          </Grid>
        </Box>
      ))}
      <AddOneMoreButton handleAdd={handleAdd} />
    </>
  );
};

export default EducationalDetails;
