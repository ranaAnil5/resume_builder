import {
  Box,
  FormLabel,
  FormLabelProps,
  Textarea,
  TextareaProps,
} from "@chakra-ui/react";

interface FormTextAreaProps {
  label: string;
  labelProps?: FormLabelProps;
  textAreaProps?: TextareaProps;
}

const FormTextArea = ({
  label,
  labelProps,
  textAreaProps,
}: FormTextAreaProps) => {
  return (
    <Box w={"100%"}>
      <FormLabel opacity={"0.6"} {...labelProps}>
        {label}
      </FormLabel>
      <Textarea
        bg="white"
        borderColor={"blackAlpha.400"}
        w={"100%"}
        h={"100px"}
        p={"15px"}
        name="description"
        _focusVisible={{
          borderColor: "brand.500",
          boxShadow: " 0 0 0 1px teal",
        }}
        {...textAreaProps}
      />
    </Box>
  );
};

export default FormTextArea;
