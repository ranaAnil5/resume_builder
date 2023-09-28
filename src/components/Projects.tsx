import { Box, Grid, GridItem, Text, HStack } from "@chakra-ui/react";
import FormField from "./FormField";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import AddOneMoreButton from "./AddOneMoreButton";
import { Project } from "../App.type";
import { RiDeleteBinLine } from "react-icons/ri";
import FormTextArea from "./FormTextArea";
import ScreenHeader from "./ScreenHeader";

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
      <ScreenHeader title="Projects" />
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
              <FormTextArea
                label="Description"
                textAreaProps={{
                  value: project.description,
                  onChange: (e) => handleChange(e, index),
                }}
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
