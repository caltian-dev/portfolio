import Project from "../Project/Project";
import { WorkBody, WorkContainer } from "./WorkElements";
import { StyledHeading } from "../About/AboutElements";

// Import photos
import wristbandStore from "../../Assets/WristbandStore.JPG"
import musicAcademy from "../../Assets/MusicAcademy.JPG"
import embedding from "../../Assets/Embeddingproject.jpg"

const Work = () => {
  const wristbandStoreSkill: string[] = [
    "Javascript",
    "React",
    "Redux",
    "NodeJS",
    "Express",
    "MongoDB",
    "Azure",
    "WebSockets API",
    "Metamask",
    "Cloudflare",
    "Tailwind CSS"
  ];

  const musicAcademySkill: string[] = [
    "Javascript",
    "Python",
    "React",
    "Redux",
    "NodeJS",
    "Express",
    "MongoDB",
    "Azure",
    "PowerBI",
    "Fullstack",
    "Numpy",
    "sci-pi",
  ];

  const embeddingSkill: string[] = [
    "React.js",
    "Node.js",
    "MongoDB",
    "GraphQL",
    "RESTful APIs",
    "AWS services",
    "Contentful",
    "Gatsby.js",
    "D3.js",
    "TDD",
  ];

  return (
    <>
      <WorkBody id="work">
        <WorkContainer style={{ alignSelf: "flex-start" }}>
          <StyledHeading>Some of the things I've worked on</StyledHeading>
        </WorkContainer>
        <div style={{ height: 40 }}></div>
        <Project
          invertedOrientation={true}
          projectName="Embedding Project"
          projectDescription="I have built the Embedding project at Pieoneers Inc. As a global public-benefit research project, the aim of the Embedding Project is to help companies embed social and environmental factors across their operations and decision-making by creating rigorous assessments, guides, and tools to help the company do its part on sustainability."
          image={embedding}
          video={""}
          stackItems={embeddingSkill}
        ></Project>
        <Project
          invertedOrientation={false}
          projectName=" Impactful And High-Visibility Wristband Buddy website"
          projectDescription="Impactful And High-Visibility Wristband Website. A modern-era web platform designed specifically for custom silicone wristbands, printed wristbands, rubber wristbands, and multicolor wristbands."
          image={wristbandStore}
          video={""}
          stackItems={wristbandStoreSkill}
        ></Project>
        <Project
          invertedOrientation={true}
          projectName="Groove Music Academy"
          projectDescription="Located in Winnipeg, Groove Academy offers music lessons for all ages and skill sets. Web Sharx had the pleasure to develop a brand-new custom web design catered to their user-base. In addition, Web Sharx helped support SEO strategy with the move from an existing to new website launch."
          image={musicAcademy}
          video={""}
          stackItems={musicAcademySkill}
        ></Project>
        <br />
        <h1 style={{ color: "white", paddingBottom: "1.2em" }}>
          You can check more of my work here {" "}
          <a
            style={{ color: "white", alignSelf: "center" }}
            href="https://github.com/StevenLiuDot"
          >
            Github
          </a>
        </h1>
      </WorkBody>
    </>
  );
};

export default Work;
