import React from "react";

import TeamView from "./Team.view";

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
      role: "Full Stack Developer | Project Manager",
      source: "assets/teamImg/Guia-Farmer.png",
      icon: "developer",
      url: "https://www.linkedin.com/in/guia-chavez/",
      link: [
        "https://www.linkedin.com/in/guia-chavez/",
        "https://github.com/guiachavez",
      ],
    },
    {
      name: "Don Cosio",
      role: "Lead Full stack | ML developer | Project Manager",
      source: "assets/teamImg/Don-Farmer.png",
      icon: "developer",
      url: "https://www.linkedin.com/in/don-apollo-cosio-0a41b296/",
      link: [
        "https://www.linkedin.com/in/don-apollo-cosio-0a41b296/",
        "https://github.com/dacosio",
        "https://don-cosio-info.vercel.app",
      ],
    },
    {
      name: "Monica Esquivel",
      role: "Lead UX/UI Designer",
      source: "assets/teamImg/Monica-Farmer.png",
      icon: "designer",
      url: "https://www.linkedin.com/in/monica-esquivel-8b02666a/",
      link: ["https://www.linkedin.com/in/monica-esquivel-8b02666a/"],
    },
    {
      name: "Yuhwan Ban",
      role: "Frontend Developer",
      source: "assets/teamImg/Yuhwan-Farmer.png",
      icon: "developer",
      url: "https://www.linkedin.com/in/yuhwan-ban-082467269/",
      link: [
        "https://www.linkedin.com/in/yuhwan-lucas-ban/",
        "https://github.com/laubana",
      ],
    },
    {
      name: "Pujan Shakya",
      role: "Frontend Developer",
      source: "assets/teamImg/Pujan-Farmer.png",
      icon: "developer",
      url: "https://www.linkedin.com/in/pujan-shakya/",
      link: [
        "https://www.linkedin.com/in/pujan-shakya/",
        "hhttps://github.com/puzannshakya",
      ],
    },
    {
      name: "Philippe Hernandez",
      role: "Frontend Developer | UI/UX Designer",
      source: "assets/teamImg/JB-Farmer.png",
      icon: "developer",
      url: "https://www.linkedin.com/in/jbhern/",
      link: [
        "https://www.linkedin.com/in/jbhern/",
        "https://www.behance.net/jbhern",
        "https://www.github.com/jbhern-34",
      ],
    },
    {
      name: "Kanin Phuvanatnaranubala",
      role: "UX/UI Designer",
      source: "assets/teamImg/Jump-Farmer.png",
      icon: "designer",
      url: "https://www.linkedin.com/in/jumpchill/",
      link: ["https://www.linkedin.com/in/jumpchill/"],
    },
    {
      name: "Mugdha Gupta",
      role: "UX/UI Designer",
      source: "assets/teamImg/Mugdha-Farmer.png",
      icon: "designer",
      url: "https://www.linkedin.com/mugdhagupta7",
      link: ["https://www.linkedin.com/mugdhagupta7"],
    },
  ];

  const generatedProps = {
    members,
  };
  return <TeamView {...generatedProps} />;
};

export default Team;
