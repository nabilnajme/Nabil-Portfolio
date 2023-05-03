//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/sushi website.png";
import Project2 from "./assets/img/projects/christmas website.png";
import Project3 from "./assets/img/projects/cofee shop.png";
import Project4 from "./assets/img/projects/watch website.png";
import Project5 from "./assets/img/projects/parralax website.png";
import Project6 from "./assets/img/projects/plants website.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "testimonials",
    href: "testimonials",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: "#",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/nabil-maizou-b285a3274/",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/nabil_najme/?hl=fr",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/nabilnajme",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Sushi Website",
    category: "Front-end",
  },
  {
    id: "2",
    image: Project2,
    name: "Christmas Website",
    category: "web development",
  },
  {
    id: "3",
    image: Project3,
    name: "Coffe Shop",
    category: "Front-End",
  },
  {
    id: "4",
    image: Project4,
    name: "Rolex website",
    category: "branding",
  },
  {
    id: "5",
    image: Project5,
    name: "Parallax website",
    category: "web development",
  },
  {
    id: "6",
    image: Project6,
    name: "Plants website",
    category: "web development",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Front-End",
  },
  {
    name: "web development",
  },
  {
    name: "branding",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "As a web designer, I work closely with clients to create visually stunning and user-friendly websites that are tailored to their unique needs and goals. I begin every project by conducting a thorough analysis of my clients' brand",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "As a web developer, I specialize in building high-quality websites and applications that are both functional and easy to use. I have expertise in a variety of programming languages, frameworks, and content management systems, and am committed to staying up-to-date with the latest trends and best practices in the field. ",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "As a branding specialist, I help clients develop and refine their brand identity to better connect with their target audience and achieve their business objectives. From logo design and visual identity development to brand messaging and tone of voice",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "As an SEO specialist, I help clients improve their online visibility and attract more qualified leads to their website. I have expertise in all aspects of SEO, including keyword research, on-page optimization, link building, and analytics, and am committed to staying up-to-date with the latest industry trends and best practices",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Working with Nabil Maizou was a true pleasure - their attention to detail, creativity, and ability to think outside the box really helped take our project to the next level.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Nabil Maizou is an incredibly talented professional - they consistently deliver high-quality work on time and on budget, and are always willing to go above and beyond to ensure the success of our projects.",
    authorName: "Jennefer karl",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "I would highly recommend Nabil Maizou to anyone looking for a skilled and reliable [insert profession]. Their expertise, professionalism, and commitment to excellence are truly unmatched.",
    authorName: "Anastazia Rini",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "maizounabil@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Sale, Morocco",
    description: "Serving clients worldwide",
  },
];
