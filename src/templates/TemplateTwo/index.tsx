import jsPDF from "jspdf";
import { useContext, useRef } from "react";
import AppContext from "../../Context/AppContext";
import { Box, Button, Grid, GridItem, Text, VStack } from "@chakra-ui/react";

const TemplateTwo = () => {
  const { personal_detail, educational_details, experiences, skills } =
    useContext(AppContext);
  const docRef = useRef<HTMLDivElement>(null);
  const doc = new jsPDF();

  const handleDownload = () => {
    if (docRef.current) {
      doc.html(docRef.current, {
        callback: function (doc) {
          // Save the PDF
          doc.save(
            personal_detail.first_name.toLocaleLowerCase() + "_" + "resume.pdf"
          );
        },
        x: 15,
        y: 15,
        width: 175, //target width in the PDF document
        windowWidth: 650, //window width in CSS pixels
      });
    }
  };

  return (
    <>
      <Button mb={"30px"} onClick={handleDownload}>
        Download PDF
      </Button>

      <Grid templateColumns="repeat(12,1fr)" ref={docRef} border={"2px solid"}>
        <GridItem colSpan={7} h="165px" bg={"black"} pl={"55px"}>
          <VStack justifyContent={"center"} alignItems={"flex-start"} h="100%">
            <Text fontSize={"3xl"} color="white" fontWeight={"semibold"}>
              {personal_detail.first_name.toLocaleUpperCase()}
            </Text>
            <Text fontSize={"3xl"} color={"silver"} fontWeight={"semibold"}>
              {personal_detail.last_name.toUpperCase()}
            </Text>
          </VStack>
        </GridItem>

        <GridItem colSpan={5} bg="teal" pl="35px">
          <VStack justifyContent={"center"} alignItems={"start"} h="100%">
            <Text fontSize={"2xl"} fontWeight={"semibold"} color="white">
              {personal_detail.job_title}
            </Text>
          </VStack>
        </GridItem>

        <GridItem colSpan={7} h="55px" bg={"teal"} pl={"55px"}>
          <VStack alignItems={"start"} h="100%" justifyContent={"center"}>
            <Text fontSize={"2xl"} fontWeight={"semibold"} color={"white"}>
              Profile
            </Text>
          </VStack>
        </GridItem>

        <GridItem colSpan={5} bg={"black"} pl="35px">
          <VStack h="100%" alignItems={"flex-start"} justifyContent={"center"}>
            <Text fontSize={"2xl"} fontWeight={"semibold"} color={"white"}>
              Contact
            </Text>
          </VStack>
        </GridItem>

        <GridItem colSpan={7} h="155px" pl={"55px"} pr="25px">
          <Text
            textAlign={"justify"}
            mt="15px"
            fontSize={"small"}
            lineHeight={"1.2"}
          >
            {personal_detail.personal_summary}
          </Text>
        </GridItem>
        <GridItem colSpan={5} bg="silver" pl={"35px"}>
          <Text mt="15px">Phone : {personal_detail.phone}</Text>
          <Text>Email : {personal_detail.email}</Text>
          <Text>
            Address : {personal_detail.address + " , " + personal_detail.city}
          </Text>
          <Text>Country : {personal_detail.country}</Text>
        </GridItem>

        <GridItem colSpan={7} h="55px" bg={"teal"} pl={"55px"}>
          <VStack alignItems={"start"} h="100%" justifyContent={"center"}>
            <Text fontSize={"2xl"} fontWeight={"semibold"} color={"white"}>
              Experience
            </Text>
          </VStack>
        </GridItem>

        <GridItem colSpan={5} bg={"black"} pl="35px">
          <VStack h="55px" alignItems={"flex-start"} justifyContent={"center"}>
            <Text fontSize={"2xl"} fontWeight={"semibold"} color={"white"}>
              Skills
            </Text>
          </VStack>
        </GridItem>

        <GridItem colSpan={7} rowSpan={3} pl="55px" pt="15px">
          <VStack gap={"20px"} alignItems={"start"}>
            {experiences.map((experience) => (
              <Box key={experience.employer} lineHeight={1.2}>
                <Text fontWeight={"bold"} fontSize={"xl"}>
                  {experience.job_title + " at " + experience.employer}
                </Text>
                <Text color="grey">{experience.duration}</Text>
                <Text>{experience.location}</Text>
                <Text>{experience.description}</Text>
              </Box>
            ))}
          </VStack>
        </GridItem>

        <GridItem colSpan={5} bg="silver" h="165px" pl="35px" pt="15px">
          {skills.map((skill, index) => (
            <Text key={index} color="teal">
              - {skill.name}
            </Text>
          ))}
        </GridItem>

        <GridItem colSpan={5} bg={"black"} pl="35px">
          <VStack h="55px" alignItems={"flex-start"} justifyContent={"center"}>
            <Text fontSize={"2xl"} fontWeight={"semibold"} color={"white"}>
              Education
            </Text>
          </VStack>
        </GridItem>
        <GridItem colSpan={5} bg="silver" py="10px" lineHeight={"1.2"}>
          {educational_details.map((educational_detail, index) => (
            <Box px={"35px"} key={index} mb="15px">
              <VStack alignItems={"start"} gap={"-5px"}>
                <Text fontWeight={"bold"} fontSize={"md"}>
                  {educational_detail.college_name}
                </Text>
                <Text color="grey">{educational_detail.duration}</Text>
                <Text color="grey">{educational_detail.degree}</Text>
                <Text>{educational_detail.location}</Text>
                {/* <Text>{educational_detail.description}</Text> */}
              </VStack>
            </Box>
          ))}
        </GridItem>
      </Grid>
    </>
  );
};

export default TemplateTwo;
