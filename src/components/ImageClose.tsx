import { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { CgCloseR } from "react-icons/cg";
import AppContext from "../Context/AppContext";

const ImageClose = () => {
  const { setPersonalDetail } = useContext(AppContext);
  return (
    <Button
      bg={"transparent"}
      pos={"absolute"}
      right={"3px"}
      top={"3px"}
      minW={0}
      h={"auto"}
      p={0}
      onClick={() => {
        // e.stopPropagation();
        setPersonalDetail({ image_path: "" });
      }}
      cursor={"pointer"}
      //   zIndex={"10"}
    >
      <CgCloseR />
    </Button>
  );
};

export default ImageClose;
