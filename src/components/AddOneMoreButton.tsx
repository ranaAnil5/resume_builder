import { Button } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

const AddOneMoreButton = ({ handleAdd }: { handleAdd: () => void }) => {
  return (
    <Button onClick={handleAdd} color={"blue.600"}>
      <FiPlus />
      &nbsp; Add more
    </Button>
  );
};

export default AddOneMoreButton;
