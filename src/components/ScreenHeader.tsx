import { Heading } from "@chakra-ui/react";

const ScreenHeader = ({ title }: { title: string }) => {
  return (
    <Heading size={"lg"} mb={"40px"}>
      {title} :
    </Heading>
  );
};

export default ScreenHeader;
