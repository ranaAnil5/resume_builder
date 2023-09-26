import {
  Center,
  Heading,
  HStack,
  Grid,
  GridItem,
  Textarea,
  Input,
  Image,
  Box,
} from "@chakra-ui/react";
import { BiSolidUserRectangle } from "react-icons/bi";
import FormField from "./FormField";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import ImageClose from "./ImageClose";

const PersonalDetails = () => {
  const { personal_detail, setPersonalDetail } = useContext(AppContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyName = e.target.name;
    setPersonalDetail({ [keyName]: e.target.value });
  };

  // console.log(personal_detail);

  return (
    <>
      <Heading mb={"40px"}>Personal Detail :</Heading>
      <Grid templateColumns={"repeat(2,1fr)"} rowGap={"6"} columnGap={"12"}>
        <GridItem colSpan={1}>
          <FormField
            label="Wanted Job Title"
            inputProps={{
              name: "job_title",
              onChange: handleChange,
              value: personal_detail.job_title,
            }}
          />
        </GridItem>

        <GridItem colSpan={1}>
          <HStack
            h={"100%"}
            w={"60%"}
            border={"1px dotted"}
            borderRadius={"5px"}
            justifyContent={"center"}
          >
            <Box flexShrink={0}>
              <BiSolidUserRectangle size={"40"} />
            </Box>

            <label htmlFor="profileImage">
              {personal_detail.image_path === "" ? (
                <Center cursor={"pointer"}>Upload Photo</Center>
              ) : (
                <Box position={"relative"} p={"3px"} h={"100%"}>
                  <Image
                    src={personal_detail.image_path}
                    objectFit={"cover"}
                    h="60px"
                    w="100%"
                    cursor={"pointer"}
                  />
                  <ImageClose />
                </Box>
              )}
            </label>

            <Input
              id="profileImage"
              type="file"
              accept=".jpg, .jpeg, .png"
              display={"none"}
              onChange={(e) => {
                const path = URL.createObjectURL(e.target.files![0]);
                setPersonalDetail({ image_path: path });
              }}
            />
          </HStack>
        </GridItem>

        <GridItem colSpan={1}>
          <FormField
            label="First Name"
            inputProps={{
              name: "first_name",
              onChange: handleChange,
              value: personal_detail.first_name,
            }}
          />
        </GridItem>

        <GridItem colSpan={1}>
          <FormField
            label="Last Name"
            inputProps={{
              name: "last_name",
              onChange: handleChange,
              value: personal_detail.last_name,
            }}
          />
        </GridItem>

        <GridItem colSpan={1}>
          <FormField
            type={"email"}
            label="Email"
            inputProps={{
              name: "email",
              onChange: handleChange,
              value: personal_detail.email,
            }}
          />
        </GridItem>

        <GridItem colSpan={1}>
          <FormField
            label="Phone"
            inputProps={{
              name: "phone",
              onChange: handleChange,
              value: personal_detail.phone,
            }}
          />
        </GridItem>

        <GridItem colSpan={1}>
          <FormField
            label="Country"
            inputProps={{
              name: "country",
              onChange: handleChange,
              value: personal_detail.country,
            }}
          />
        </GridItem>

        <GridItem colSpan={1}>
          <FormField
            label="City"
            inputProps={{
              name: "city",
              onChange: handleChange,
              value: personal_detail.city,
            }}
          />
        </GridItem>

        <GridItem colSpan={1}>
          <FormField
            label="Address"
            inputProps={{
              name: "address",
              onChange: handleChange,
              value: personal_detail.address,
            }}
          />
        </GridItem>

        <GridItem colSpan={2}>
          <FormField
            label="Personal Summary"
            inputProps={{ display: "none" }}
          />
          <Textarea
            w={"100%"}
            h={"100px"}
            p={"15px"}
            name="personal_summary"
            onChange={(e) => {
              const keyName = e.target.name;
              setPersonalDetail({ [keyName]: e.target.value });
            }}
            value={personal_detail.personal_summary}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default PersonalDetails;
