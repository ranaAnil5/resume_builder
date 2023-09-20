import { useContext, useRef } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
// import { BiSolidUser } from "react-icons/bi";
// import { MdEngineering } from "react-icons/md";
// import { FaGraduationCap } from "react-icons/fa";
import AppContext from "../../Context/AppContext";
import MainHeader from "./MainHeader";
import SecondaryHeading from "./SecondaryHeading";
import jsPDF from "jspdf";

const Template1 = () => {
  const { personal_detail, educational_details, experiences, hobbies, skills } =
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
        width: 170, //target width in the PDF document
        windowWidth: 650, //window width in CSS pixels
      });
    }
  };

  return (
    <>
      <Button mb={"30px"} onClick={handleDownload}>
        Download PDF
      </Button>

      <Grid
        templateColumns="repeat(12,1fr)"
        columnGap={"10px"}
        rowGap={"40px"}
        ref={docRef}
      >
        <GridItem colSpan={12}>
          <HStack gap={"5"} alignItems={"center"}>
            <Image
              border={"1px solid"}
              w="75px"
              h="75px"
              p={"2px"}
              src={personal_detail.image_path}
              objectFit={"cover"}
            />

            <VStack
              alignItems={"start"}
              justifyContent={"flex-start"}
              gap={"0px"}
            >
              <Text fontSize={"3xl"} fontWeight={"bold"}>
                {personal_detail.first_name + " " + personal_detail.last_name}
              </Text>
              <Text>{personal_detail.job_title}</Text>
            </VStack>
          </HStack>
        </GridItem>

        <GridItem colSpan={9}>
          <VStack alignItems={"start"} gap={"20px"}>
            <Box>
              {/* <MainHeader icon={<BiSolidUser />} title="Profile" /> */}
              <MainHeader title="Profile" />
              <Text px={"35px"} textAlign="justify" flexWrap={"wrap"}>
                {personal_detail.personal_summary}
              </Text>
            </Box>

            <Box>
              {/* <MainHeader icon={<FaGraduationCap />} title="Education" /> */}
              <MainHeader title="Education" />
              <VStack gap={"20px"} alignItems={"start"}>
                {educational_details.map((educational_detail, index) => (
                  <Box px={"35px"} key={index}>
                    <VStack alignItems={"start"} gap={"-5px"}>
                      <Text fontWeight={"bold"} fontSize={"xl"}>
                        {educational_detail.college_name}
                      </Text>
                      <Text color="grey">{educational_detail.duration}</Text>
                      <Text color="grey">{educational_detail.degree}</Text>
                      <Text>{educational_detail.location}</Text>
                      <Text>{educational_detail.description}</Text>
                    </VStack>
                  </Box>
                ))}
              </VStack>
            </Box>

            <Box>
              {/* <MainHeader icon={<MdEngineering />} title="Experience" /> */}
              <MainHeader title="Experience" />
              <VStack gap={"20px"} px="35px" alignItems={"start"}>
                {experiences.map((experience) => (
                  <Box key={experience.employer}>
                    <Text fontWeight={"bold"} fontSize={"xl"}>
                      {experience.job_title + " at " + experience.employer}
                    </Text>
                    <Text color="grey">{experience.duration}</Text>
                    <Text>{experience.location}</Text>
                    <Text>{experience.description}</Text>
                  </Box>
                ))}
              </VStack>
            </Box>
          </VStack>
        </GridItem>

        <GridItem colSpan={3}>
          <VStack alignItems={"start"} gap={"25px"}>
            <VStack alignItems={"start"} gap={"-5px"}>
              <SecondaryHeading title="Details" />
              <Text pl={"10px"}>
                {personal_detail.address + " , " + personal_detail.city}
              </Text>
              <Text pl={"10px"}>{personal_detail.country}</Text>
              <Text pl={"10px"}>{personal_detail.phone}</Text>
              <Text pl={"10px"}>{personal_detail.email}</Text>
            </VStack>

            <VStack alignItems={"start"} gap={"-5px"}>
              <SecondaryHeading title="Skills" />
              {skills.map((skill, index) => (
                <Text key={index} pl={"10px"}>
                  {skill.name}
                </Text>
              ))}
            </VStack>

            <VStack alignItems={"start"} gap={"-5px"}>
              <SecondaryHeading title="Hobbies" />
              {hobbies.map((hobbie, index) => (
                <Text key={index} pl={"10px"}>
                  {hobbie.name}
                </Text>
              ))}
            </VStack>
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default Template1;
