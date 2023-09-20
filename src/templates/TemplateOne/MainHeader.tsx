import { HStack, Text } from "@chakra-ui/react";

interface MainHeaderProps {
  icon?: React.ReactNode;
  title: string;
}

const MainHeader = ({ icon, title }: MainHeaderProps) => {
  return (
    <HStack gap={"5"}>
      {icon}
      <Text
        fontSize={"2xl"}
        fontWeight={"bold"}
        // textDecoration={"underline"}
        // textDecorationThickness={"2px"}
        // textUnderlineOffset={"2px"}
      >
        {title}
      </Text>
    </HStack>
  );
};

export default MainHeader;
