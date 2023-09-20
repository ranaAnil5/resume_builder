import { Text } from "@chakra-ui/react";

const SecondaryHeading = ({ title }: { title: string }) => {
  return (
    <Text fontWeight={"bold"} fontSize={"xl"}>
      {title}
    </Text>
  );
};

export default SecondaryHeading;
