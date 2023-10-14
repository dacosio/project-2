import React from "react";

import TeamView from "./Team.view";

const Team = (): JSX.Element => {
  const members: { name: string; role: string }[] = [
    { name: "Guia Chavez", role: "Project Manager, Developer" },
    { name: "Don Apollo Cosio", role: "Lead Developer" },
    { name: "Monica Esquivel", role: "Lead UX/UI Designer" },
    { name: "Yuhwan Ban", role: "Developer" },
    { name: "Pujan Shakya", role: "Developer" },
    { name: "Philippe Gabriel Hernandez", role: "Developer" },
    { name: "Kanin Phuvanatnaranubala", role: "UX/UI Designer" },
    { name: "Mugdha Gupta", role: "UX/UI Designer" },
  ];

  const generatedProps = {
    members: members,
  };
  return <TeamView {...generatedProps} />;
};

export default Team;
