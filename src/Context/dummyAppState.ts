import { InitialState } from "./initialAppState";
import img from "../assets/dummy_image.jpg";

export const dummyAppState: InitialState = {
  personal_detail: {
    job_title: "Chemical Engineer",
    first_name: "Andrew",
    last_name: "	Brown",
    email: "andrew@gmail.com",
    phone: "9876567534",
    country: "Nepal",
    city: "Kathmandu",
    address: "Kalanki",
    personal_summary:
      "A Chemical Engineer with technical skills in chemical processes, computer literacy for simulations and data analysis, strong problem-solving abilities, effective communication skills, project management skills, and knowledge of safety and waste management procedures.",
    image_path: img,
  },
  educational_details: [
    {
      college_name: "Northeastern University",
      degree: "Science Major",
      duration: "Aug 2014 - Sep 2026",
      location: "Thapathali , Kathmandu",
      description: "Awesome ambiants and resourceful guidance",
    },
    {
      college_name: "San Jose University",
      degree: "Bachelor in Chemical Engineering",
      duration: "Aug 2016 - Sep 202",
      location: "kalanki  , Kathmandu",
      description: "Quality facilities for practical",
    },
  ],
  experiences: [
    {
      job_title: "Chemical engineer",
      employer: "Kthmandu Chemical Suppliers",
      duration: "Aug 2022 - Sep 2023",
      location: "Wallstreet 12 , NYC",
      description: "Analyzes data about waste treatment",
    },
    {
      job_title: "Chemical engineer Internship",
      employer: "Great Tech",
      duration: "Aug 2022 - Nov 2022",
      location: "New Road , Kathmandu",
      description: "Process data at the mini waste water treatment",
    },
  ],
  projects: [
    {
      name: "Aniline production from phenol.",
      description:
        "amination of phenol with ammonia in the presence of a solid catalyst disposed within a reaction zone",
    },
    {
      name: "Bitumen Upgrading",
      description:
        " the chemical treatment of bitumen that is used in an attempt to increase its value by creating a substitute for high quality crude oil, known as a synthetic crude oil",
    },
  ],
  skills: [
    { name: "Process Engineering" },
    { name: "Microsoft" },
    { name: "Laboratory Techniques" },
    { name: "Good Communication" },
  ],
  hobbies: [
    { name: "Playing guitar" },
    { name: "Exlporing new places" },
    { name: "Reading books" },
  ],
};
