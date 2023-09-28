import {
  Box,
  FormLabel,
  FormLabelProps,
  Input,
  InputGroup,
  InputProps,
  InputRightAddon,
} from "@chakra-ui/react";
interface FormFieldProps {
  label?: string;
  type?: string;
  rightAddon?: React.ReactNode;
  rightAddonClick?: () => void;
  labelProps?: FormLabelProps;
  inputProps?: InputProps;
}

const FormField = ({
  label,
  type,
  rightAddon,
  rightAddonClick,
  labelProps,
  inputProps,
}: FormFieldProps) => {
  return (
    <Box w={"100%"}>
      <FormLabel opacity={"0.6"} {...labelProps}>
        {label}
      </FormLabel>
      <InputGroup>
        <Input
          bg="white"
          borderColor={"blackAlpha.400"}
          type={type}
          _focusVisible={{
            borderColor: "brand.500",
            boxShadow: " 0 0 0 1px teal",
          }}
          {...inputProps}
        />
        {rightAddon && (
          <InputRightAddon
            borderColor={"blackAlpha.400"}
            bg={"brand.100"}
            cursor={"pointer"}
            children={rightAddon}
            onClick={rightAddonClick}
          />
        )}
      </InputGroup>
    </Box>
  );
};

export default FormField;
