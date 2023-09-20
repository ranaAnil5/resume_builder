import { Heading, VStack } from "@chakra-ui/react";
import { RiDeleteBinLine } from "react-icons/ri";

import FormField from "./FormField";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import AddOneMoreButton from "./AddOneMoreButton";

const Hobbies = () => {
  const { hobbies, setHobbies } = useContext(AppContext);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setHobbies(
      hobbies.map((hobbie, i) =>
        index === i ? { name: e.target.value } : hobbie
      )
    );
  };

  const handleAdd = () => {
    setHobbies([...hobbies, { name: "" }]);
  };

  const handleRemove = (index: number) => {
    setHobbies(hobbies.filter((_, i) => index !== i));
  };

  return (
    <>
      <Heading mb={"40px"}>Hobbies :</Heading>
      <VStack gap={"12"} w={"50%"} alignItems={"start"}>
        {hobbies.map((hobbie, index) => (
          <FormField
            key={index}
            rightAddon={<RiDeleteBinLine />}
            rightAddonClick={() => handleRemove(index)}
            inputProps={{
              name: "hobbie_name",
              onChange: (e) => handleChange(e, index),
              value: hobbie.name,
            }}
          />
        ))}
        <AddOneMoreButton handleAdd={handleAdd} />
      </VStack>
    </>
  );
};

export default Hobbies;
