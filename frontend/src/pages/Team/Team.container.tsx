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
    icon: string;
    url?: string;
    link: string | string[];
  }[] = [
    {
      name: "Guia Chavez",
      role: "Project Manager | Full Stack Developer",
      source: Guia,
      icon: "developer",
      url: "https://www.linkedin.com/in/guia-chavez/",
      link: ["https://www.linkedin.com/in/guia-chavez/", "https://github.com/guiachavez"],
    },
    {
      name: "Don Cosio",
      role: "Project Manager | Lead Full stack | ML developer",
      source: Don,
      icon: "developer",
      url: "https://www.linkedin.com/in/don-apollo-cosio-0a41b296/",
      link: ["https://www.linkedin.com/in/don-apollo-cosio-0a41b296/", "https://github.com/dacosio", "https://don-cosio-info.vercel.app"],
    },
    {
      name: "Monica Esquivel",
      role: "Lead UX/UI Designer",
      source: Monica,
      icon: "designer",
      url: "https://www.linkedin.com/in/monica-esquivel-8b02666a/",
      link: ["https://www.linkedin.com/in/monica-esquivel-8b02666a/"],
    },
    {
      name: "Yuhwan Ban",
      role: "Frontend Developer",
      source: Yuhwan,
      icon: "developer",
      url: "https://www.linkedin.com/in/yuhwan-ban-082467269/",
      link: ["https://www.linkedin.com/in/yuhwan-lucas-ban/", "https://github.com/laubana"],
    },
    {
      name: "Pujan Shakya",
      role: "Frontend Developer",
      source: "https://placehold.co/50x100/FFFFFF/png",
      icon: "developer",
      url: "https://www.linkedin.com/in/pujan-shakya/",
      link: ["https://www.linkedin.com/in/pujan-shakya/", "hhttps://github.com/puzannshakya"],
    },
    {
      name: "Philippe Hernandez",
      role: "Frontend Developer | UI/UX Designer",
      source: JB,
      icon: "developer",
      url: "https://www.linkedin.com/in/jbhern/",
      link: ["https://www.linkedin.com/in/jbhern/", "https://www.behance.net/jbhern",  "https://www.github.com/jbhern-34"],
    },
    {
      name: "Kanin Phuvanatnaranubala",
      role: "UX/UI Designer",
      source: Kanin,
      icon: "designer",
      url: "https://www.linkedin.com/in/jumpchill/",
      link: ["https://www.linkedin.com/in/jumpchill/"],
    },
    {
      name: "Mugdha Gupta",
      role: "UX/UI Designer",
      source: "https://placehold.co/50x100/FFFFFF/png",
      icon: "designer",
      url: "https://www.linkedin.com/",
      link: ["https://www.linkedin.com/", "https://www.behance.net/"],
    },
  ];

  const generatedProps = {
    members,
  };
  return <TeamView {...generatedProps} />;
};

export default Team;
