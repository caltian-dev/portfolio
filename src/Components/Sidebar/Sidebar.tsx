import { Line, SidebarBody, SocialIcon } from "./SidebarElements";
import { FiGithub } from "react-icons/fi";

const iconSize = 30;

const Sidebar = () => {
  return (
    <>
      <SidebarBody>
        {/* <SocialIcon href="mailto:martiuz77@gmail.com">
          <FiMail size={iconSize} />
        </SocialIcon> */}
        <SocialIcon href="https://github.com/StevenLiuDot">
          <FiGithub size={iconSize} />
        </SocialIcon>
        {/* <SocialIcon href="https://uk.linkedin.com/in/s-kalog">
          <FiLinkedin size={iconSize} />
        </SocialIcon> */}
        <Line />
      </SidebarBody>
    </>
  );
};

export default Sidebar;
