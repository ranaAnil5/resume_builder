import { useContext } from "react";
import { Box, HStack, Radio, Text } from "@chakra-ui/react";
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
      <Box bg="blackAlpha.200" p={"15px"} borderRadius={"5px"}>
        <HStack gap={"30px"} mb="15px">
          <Text fontWeight={"bold"}> Select Preview Mode : </Text>

          <HStack gap={"10px"}>
            <Radio
              borderColor={"blackAlpha.500"}
              id="userdata"
              onChange={previewChangeHandle}
              isChecked={dataToggler}
            />
            <label htmlFor="userdata">Preview with Your Data</label>
          </HStack>

          <HStack gap={"10px"}>
            <Radio
              borderColor={"blackAlpha.500"}
              id="mockdata"
              onChange={previewChangeHandle}
              isChecked={!dataToggler}
            />
            <label htmlFor="mockdata">Preview with Mock Data</label>
          </HStack>
        </HStack>
        <HStack gap={"30px"}>
          <Text fontWeight={"bold"}> Select Template : </Text>
          <Text
            px={"10px"}
            py={"5px"}
            onClick={() => setTemplateId(1)}
            cursor={"pointer"}
            border={templateId === 1 ? "1px solid" : "1px solid transparent"}
            _hover={{ border: "1px  solid", color: "brand.700" }}
          >
            Plain Template
          </Text>
          <Text
            px={"10px"}
            py={"5px"}
            onClick={() => setTemplateId(2)}
            cursor={"pointer"}
            border={templateId === 2 ? "1px solid" : "1px solid transparent"}
            _hover={{ border: "1px solid", color: "brand.700" }}
          >
            Colour Template
          </Text>

          <Text>.....more templates soon</Text>
        </HStack>{" "}
      </Box>

      {templateId === 1 && <TemplateOne />}
      {templateId === 2 && <TemplateTwo />}
    </>
  );
};

export default PreviewMode;
