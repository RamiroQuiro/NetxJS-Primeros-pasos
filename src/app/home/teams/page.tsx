import React from "react";
import TeamList from "./components/team-list/TeamList";
import { getTeams } from "./services/teams.services";

export default async function Teams() {
  const data = await getTeams();
  const res =  JSON.stringify(data);

  return <div><TeamList
 team={data}
  result={data}
  /></div>;
}

