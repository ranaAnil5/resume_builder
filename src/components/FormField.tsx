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
        <Input type={type} {...inputProps} />
        {rightAddon && (
          <InputRightAddon
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
