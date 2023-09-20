import { HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import TemplateOne from "../templates/TemplateOne";
import TemplateTwo from "../templates/TemplateTwo";

const PreviewMode = () => {
  const [templateId, setTemplateId] = useState(1);
  return (
    <>
      <HStack gap={"30px"} mb="30px">
        <Text fontWeight={"bold"}> Select Template : </Text>
        <Text
          p={"10px"}
          onClick={() => setTemplateId(1)}
          cursor={"pointer"}
          border={templateId === 1 ? "1px solid" : "1px solid transparent"}
          _hover={{ border: "1px  solid", color: "teal" }}
        >
          Plain Template
        </Text>
        <Text
          p={"10px"}
          onClick={() => setTemplateId(2)}
          cursor={"pointer"}
          border={templateId === 2 ? "1px solid" : "1px solid transparent"}
          _hover={{ border: "1px solid", color: "teal" }}
        >
          Colour Template
        </Text>
      </HStack>
      {templateId === 1 && <TemplateOne />}
      {templateId === 2 && <TemplateTwo />}
    </>
  );
};

export default PreviewMode;
