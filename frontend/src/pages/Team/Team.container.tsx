import React from "react";

import TeamView from "./Team.view";
import Guia from "../../images/teamImg/Guia-Farmer.png"
import Don from "../../images/teamImg/Don-Farmer.png"
import Monica from "../../images/teamImg/Monica-Farmer.png"
import Yuhwan from "../../images/teamImg/Yuhwan-Farmer.png"
import JB from "../../images/teamImg/JB-Farmer.png"
import Kanin from "../../images/teamImg/Jump-Farmer.png"
// import Pujan from "../../images/teamImg/-Farmer.png"
// import Mugdha from "../../images/teamImg/Don-Farmer.png"


const Team = (): JSX.Element => {
  const members: {
    name: string;
    role: string;
    source: string;
    url?: string;
    portfolio: string | string[];
  }[] = [
    {
      name: "Guia Chavez",
      role: "Project Manager, Developer",
      source: Guia,
      url: "https://www.linkedin.com/in/guia-chavez/",
      portfolio: ["https://www.github.com/", "https://www.behance.net/"],
    },
    {
      name: "Don Cosio",
      role: "Lead Developer",
      source: Don,
      url: "https://www.linkedin.com/in/don-apollo-cosio-0a41b296/",
      portfolio: ["https://www.github.com/"],
    },
    {
      name: "Monica Esquivel",
      role: "Lead UX/UI Designer",
      source: Monica,
      url: "https://www.linkedin.com/in/monica-esquivel-8b02666a/",
      portfolio: ["https://www.behance.net/"],
    },
    {
      name: "Yuhwan Ban",
      role: "Developer",
      source: Yuhwan,
      url: "https://www.linkedin.com/in/yuhwan-ban-082467269/",
      portfolio: ["https://www.github.com/"],
    },
    {
      name: "Pujan Shakya",
      role: "Developer",
      source: "https://placehold.co/50x100/FFFFFF/png",
      url: "https://www.linkedin.com/in/pujan-shakya/",
      portfolio: ["https://www.github.com/"],
    },
    {
      name: "Philippe Hernandez",
      role: "Developer",
      source: JB,
      url: "https://www.linkedin.com/in/jbhern/",
      portfolio: ["https://www.behance.net/"],
    },
    {
      name: "Kanin Phuvanatnaranubala",
      role: "UX/UI Designer",
      source: Kanin,
      url: "https://www.linkedin.com/in/jumpchill/",
      portfolio: ["https://www.behance.net/"],
    },
    {
      name: "Mugdha Gupta",
      role: "UX/UI Designer",
      source: "https://placehold.co/50x100/FFFFFF/png",
      url: "https://www.linkedin.com/",
      portfolio: ["https://www.behance.net/"],
    },
  ];

  const generatedProps = {
    members,
  };
  return <TeamView {...generatedProps} />;
};

export default Team;
