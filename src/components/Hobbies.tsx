import { VStack } from "@chakra-ui/react";
import { RiDeleteBinLine } from "react-icons/ri";

import FormField from "./FormField";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import AddOneMoreButton from "./AddOneMoreButton";
import ScreenHeader from "./ScreenHeader";

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
      <ScreenHeader title="Hobbies" />
      <VStack gap={"6"} w={"50%"} alignItems={"start"} mb="20px">
        {hobbies.map((hobbie, index) => (
          <FormField
            key={index}
            rightAddon={<RiDeleteBinLine color="red" opacity="0.7" />}
            rightAddonClick={() => handleRemove(index)}
            inputProps={{
              name: "hobbie_name",
              onChange: (e) => handleChange(e, index),
              value: hobbie.name,
            }}
          />
        ))}
      </VStack>
      <AddOneMoreButton handleAdd={handleAdd} />
    </>
  );
};

export default Hobbies;
