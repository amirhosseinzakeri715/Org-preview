import { StaticImageData } from "next/image";
import p1 from "../../../public/images/slider/img1.jpg";
import p2 from "../../../public/images/marquee-3.png";
import p3 from "../../../public/images/slider/img2.jpg";

interface TimelineEntry {
  year: string;
  description: string;
  image: StaticImageData;
  imagePosition: "left" | "right";
}

export const timelineData: TimelineEntry[] = [
  {
    year: "2020",
    description:
      "In 2020, our journey began with a shared vision: to build a team driven by innovation, collaboration, and a passion for creating impact.",
    image: p1,
    imagePosition: "right",
  },
  {
    year: "2021",
    description:
      "In 2021, we embraced innovation and expanded our capabilities, laying the foundation for our current success. It was a year of strategic partnerships and significant milestones.",
    image: p2,
    imagePosition: "left",
  },
  {
    year: "2022",
    description:
      "2022 was a pivotal year — challenges tested our resilience, but they also ignited our growth. We evolved, restructured, and set the foundation for a stronger, smarter team culture.",
    image: p3,
    imagePosition: "right",
  },
  {
    year: "2024",
    description:
      "The year 2024 marks our transformation into a more agile and customer-centric organization. We're focused on delivering excellence while nurturing our talented team.",
    image: p2,
    imagePosition: "left",
  },
]; 