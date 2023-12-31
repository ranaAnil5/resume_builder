import { Grid, GridItem, HStack, Text, Box } from "@chakra-ui/react";

import FormField from "./FormField";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { EducationalDetail } from "../App.type";
import { RiDeleteBinLine } from "react-icons/ri";
import AddOneMoreButton from "./AddOneMoreButton";
import FormTextArea from "./FormTextArea";
import ScreenHeader from "./ScreenHeader";

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
      educational_details.map(
        (educational_detail: EducationalDetail, i: number) =>
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
    setEducationalDetails(
      educational_details.filter(
        (_: EducationalDetail, i: number) => index !== i
      )
    );
  };

  return (
    <>
      <ScreenHeader title="Educational Details" />
      {educational_details.map(
        (educational_detail: EducationalDetail, index: number) => (
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
              rowGap={"6"}
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
                <FormTextArea
                  label="Description"
                  textAreaProps={{
                    value: educational_detail.description,
                    onChange: (e) => handleChange(e, index),
                  }}
                />
              </GridItem>
            </Grid>
          </Box>
        )
      )}
      <AddOneMoreButton handleAdd={handleAdd} />
    </>
  );
};

export default EducationalDetails;
