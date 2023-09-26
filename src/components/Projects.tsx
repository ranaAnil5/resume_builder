import {
  Heading,
  Grid,
  GridItem,
  Textarea,
  Box,
  Text,
  HStack,
} from "@chakra-ui/react";
import FormField from "./FormField";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import AddOneMoreButton from "./AddOneMoreButton";
import { Project } from "../Context/initialAppState";
import { RiDeleteBinLine } from "react-icons/ri";

// const Projects = ({ num }: { num?: number }) => {
const Projects = () => {
  const { projects, setProjects } = useContext(AppContext);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setProjects(
      projects.map((project, i) =>
        i === index ? { ...project, [name]: value } : project
      )
    );
  };

  const handleAdd = () => {
    setProjects([...projects, { name: "" } as Project]);
  };

  const handleRemove = (index: number) => {
    setProjects(projects.filter((_, i) => index !== i));
  };

  return (
    <>
      <Heading mb={"40px"}>Project List :</Heading>
      {projects.map((project, index) => (
        <Box key={index}>
          <HStack gap="15px" alignItems={"center"} mb="20px">
            <Text
              fontSize={"2xl"}
              fontWeight={"semibold"}
              textDecoration={"underline"}
              textDecorationThickness={"2px"}
            >
              Project {index + 1}
            </Text>
            <RiDeleteBinLine
              size="30px"
              onClick={() => handleRemove(index)}
              cursor="pointer"
              color="red"
              opacity="0.7"
            />
          </HStack>
          <Grid
            templateColumns={"repeat(2,1fr)"}
            rowGap={"6"}
            columnGap={"12"}
            mb="30px"
          >
            <GridItem colSpan={1}>
              <FormField
                label="Project Name"
                inputProps={{
                  name: "name",
                  onChange: (e) => handleChange(e, index),
                  value: project.name,
                }}
              />
            </GridItem>

            <GridItem colSpan={2}>
              <FormField label="Description" inputProps={{ display: "none" }} />
              <Textarea
                w={"100%"}
                h={"100px"}
                p={"15px"}
                name="description"
                onChange={(e) => handleChange(e, index)}
                value={project.description}
              />
            </GridItem>
          </Grid>
        </Box>
      ))}

      <AddOneMoreButton handleAdd={handleAdd} />
    </>
  );
};

export default Projects;
