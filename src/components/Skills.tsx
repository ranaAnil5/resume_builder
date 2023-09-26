import { Heading, VStack } from "@chakra-ui/react";
import { RiDeleteBinLine } from "react-icons/ri";

import FormField from "./FormField";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import AddOneMoreButton from "./AddOneMoreButton";

const Skills = () => {
  const { skills, setSkills } = useContext(AppContext);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setSkills(
      skills.map((skill, i) => (index === i ? { name: e.target.value } : skill))
    );
  };

  const handleAdd = () => {
    setSkills([...skills, { name: "" }]);
  };

  const handleRemove = (index: number) => {
    setSkills(skills.filter((_, i) => index !== i));
  };

  return (
    <>
      <Heading mb={"40px"}>Skills :</Heading>
      <VStack gap={"6"} w={"50%"} alignItems={"start"} mb="20px">
        {skills.map((skill, index) => (
          <FormField
            key={index}
            rightAddon={<RiDeleteBinLine color="red" opacity="0.7" />}
            rightAddonClick={() => handleRemove(index)}
            inputProps={{
              name: "skill_name",
              onChange: (e) => handleChange(e, index),
              value: skill.name,
            }}
          />
        ))}
      </VStack>
      <AddOneMoreButton handleAdd={handleAdd} />
    </>
  );
};

export default Skills;
