import { StyledHeading } from "../About/AboutElements";
import RotatingSphere from "../RotatingSphere/RotatingSphere";
import { SkillsBody, SkillsContainer, Text } from "./SkillsElements";

const Skills = () => {
  return (
    <>
      <SkillsBody id="skills">
        <SkillsContainer>
          <StyledHeading>Skills</StyledHeading>
          <Text>
            I embarked on my journey as a young individual, eagerly piecing together my first Raspberry Pi. 
            Ever since I was a child, I held a deep curiosity about computers and their 
            limitless capabilities.
            <br />
            <br />
            During my tenure at the esteemed University of British Columbia, I fostered my passion
            for software development by enrolling in their information technology faculty. 
            This opportunity enabled me to cultivate a profound comprehension of programming languages, 
            database management, and web development, ultimately contributing significantly to my 
            accomplishments as a proficient web developer.
            <br />
            <br />
            Attaining the highest distinction in my Bachelor's Degree in IT stands as a testament to 
            my dedication and expertise. Additionally, I possess extensive knowledge of the MERN stack along 
            with proficiency in Big Data technologies. My professional experience has been shaped by 
            collaborations with reputable software organizations such as Web Sharx, RisingMax, and 
            Pieoneers.
          </Text>
        </SkillsContainer>
        <SkillsContainer justify="center">
          <RotatingSphere />
        </SkillsContainer>
      </SkillsBody>
    </>
  );
};

export default Skills;
