import { useContext } from "react";
import { Checkbox, HStack, Text } from "@chakra-ui/react";
import { useState, useCallback } from "react";
import TemplateOne from "../templates/TemplateOne";
import TemplateTwo from "../templates/TemplateTwo";
import AppContext from "../Context/AppContext";
// import { dummyAppState } from "../Context/exampleAppState";

const PreviewMode = () => {
  const [templateId, setTemplateId] = useState(1);

  const { dataToggler, setDataToggler } = useContext(AppContext);

  const previewChangeHandle = useCallback(() => {
    setDataToggler();
  }, [setDataToggler]);

  return (
    <>
      <HStack gap={"30px"} mb="15px">
        <Text fontWeight={"bold"}> Select Template : </Text>
        <Text
          px={"10px"}
          py={"5px"}
          onClick={() => setTemplateId(1)}
          cursor={"pointer"}
          border={templateId === 1 ? "1px solid" : "1px solid transparent"}
          _hover={{ border: "1px  solid", color: "teal" }}
        >
          Plain Template
        </Text>
        <Text
          px={"10px"}
          py={"5px"}
          onClick={() => setTemplateId(2)}
          cursor={"pointer"}
          border={templateId === 2 ? "1px solid" : "1px solid transparent"}
          _hover={{ border: "1px solid", color: "teal" }}
        >
          Colour Template
        </Text>
      </HStack>

      <HStack gap={"30px"} mb="30px">
        <Text fontWeight={"bold"}> Select Preview Mode : </Text>

        <HStack gap={"10px"}>
          <Checkbox onChange={previewChangeHandle} isChecked={dataToggler} />
          <Text>Preview with Your Data</Text>
        </HStack>

        <HStack gap={"10px"}>
          <Checkbox onChange={previewChangeHandle} isChecked={!dataToggler} />
          <Text>Preview with Dummy Data</Text>
        </HStack>
      </HStack>
      {templateId === 1 && <TemplateOne />}
      {templateId === 2 && <TemplateTwo />}
    </>
  );
};

export default PreviewMode;
