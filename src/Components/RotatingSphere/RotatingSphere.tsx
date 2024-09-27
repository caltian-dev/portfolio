import { useEffect } from "react";
import "./../../Styles/RotatingSphere.css";

function RotatingSphere(props: any) {
  useEffect(() => {
    import("./TagCloud").then((response) => {
      const tagCloud = response.default;
      tagCloud(
        ".tagcloud-container",
        [
          "TDD","Jest","Cypress",
          "NodeJS","MERN","Svelte",
          "DevOps","Ansible","Jenkins",
          "Kubernetes","Docker","AWS",
          "GCP","Azure","NoSQL",
          "ExpressJS","MongoDB","Bash",
          "Typescript","Javascript",
          "SQL","React","CSS","HTML",
          "Git","Jira","Trelo",
          "Microservices","FaunaDB",
          "GraphQL", "REST Api",
        ],
        {
          // eslint-disable-next-line no-restricted-globals
          radius: screen.width < 900 ? 100 : 300,
          maxSpeed: "fast",
          initSpeed: "normal",
          useContainerInlineStyles: true,
          sectionContainer: "skills",
          styles: { color: "white" },
        }
      );
    });
    return () => {
      let tagClouds = document.getElementsByClassName("tagcloud");
      for (let i = 0; i < tagClouds.length; i++) {
        tagClouds[0].remove();
      }
    };
  }, []);

  return <div id="skills" className={"tagcloud-container"} />;
}

export default RotatingSphere;
