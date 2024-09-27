import photoOfMe from "./../../Assets/PhotoMe.png";
import {
  AboutBody,
  AboutContainer,
  StyledHeading,
  Photo,
  TextSection,
} from "./AboutElements";

const About = () => {
  return (
    <>
      <AboutBody id="about">
        <AboutContainer>
          <StyledHeading>Who Am I?</StyledHeading>
          <TextSection>
            I am a senior full stack engineer with over 8 years of experience and 
            during that period, I have developed various responsive web applications.
            <br />
            <br />
            Creativity, accountability, integrity and perfectionism, these are my the biggest strength.
            <br />
            <br />Enhancing technical skills and perfect collaboration ability make me an ideal candidate for any web development project.
          </TextSection>
        </AboutContainer>
        <AboutContainer>
          <Photo src={photoOfMe} />
        </AboutContainer>
      </AboutBody>
    </>
  );
};

export default About;
