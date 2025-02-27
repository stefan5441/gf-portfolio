import sundayProjectImage from "../assets/sunday.png";

export type Project = {
  imageSrc: string;
  title: string;
  pillText: string;
  description: string;
  year: number;
};

export const projects: Project[] = [
  {
    imageSrc: sundayProjectImage,
    title: "Sunday",
    pillText: "Pill button",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit et mauris et cursus. Integer tempus tellus diam, sit amet pulvinar nisi facilisis quis. Cras maximus consectetur ex id venenatis.",
    year: 2025,
  },
  {
    imageSrc: sundayProjectImage,
    title: "Sunday",
    pillText: "Pill button",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit et mauris et cursus. Integer tempus tellus diam, sit amet pulvinar nisi facilisis quis. Cras maximus consectetur ex id venenatis.",
    year: 2025,
  },
  {
    imageSrc: sundayProjectImage,
    title: "Sunday",
    pillText: "Pill button",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit et mauris et cursus. Integer tempus tellus diam, sit amet pulvinar nisi facilisis quis. Cras maximus consectetur ex id venenatis.",
    year: 2025,
  },
];
