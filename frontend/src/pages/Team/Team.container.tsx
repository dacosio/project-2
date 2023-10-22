import React from "react";

import TeamView from "./Team.view";

const Team = (): JSX.Element => {
  const members: { name: string; role: string; source: string }[] = [
    {
      name: "Guia Chavez",
      role: "Project Manager, Developer",
      source: "https://placehold.co/50x100/FFFFFF/png",
    },
    {
      name: "Don Apollo Cosio",
      role: "Lead Developer",
      source: "https://placehold.co/50x100/FFFFFF/png",
    },
    {
      name: "Monica Esquivel",
      role: "Lead UX/UI Designer",
      source: "https://placehold.co/50x100/FFFFFF/png",
    },
    {
      name: "Yuhwan Ban",
      role: "Developer",
      source: "https://placehold.co/50x100/FFFFFF/png",
    },
    {
      name: "Pujan Shakya",
      role: "Developer",
      source: "https://placehold.co/50x100/FFFFFF/png",
    },
    {
      name: "Philippe Gabriel Hernandez",
      role: "Developer",
      source: "https://placehold.co/50x100/FFFFFF/png",
    },
    {
      name: "Kanin Phuvanatnaranubala",
      role: "UX/UI Designer",
      source: "https://placehold.co/50x100/FFFFFF/png",
    },
    {
      name: "Mugdha Gupta",
      role: "UX/UI Designer",
      source: "https://placehold.co/50x100/FFFFFF/png",
    },
  ];

  const generatedProps = {
    members,
  };
  return <TeamView {...generatedProps} />;
};

export default Team;
