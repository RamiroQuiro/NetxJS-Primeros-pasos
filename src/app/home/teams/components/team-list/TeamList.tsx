import React from 'react'
import { Result, Team, TeamColors } from '../../models'

interface Props{
team:Team[],
result:Result[],
teamColor:TeamColors[],
}

export default function TeamList({team,result}:Props) {
console.log(team)

  return (
    <div>
        {team?.map(t=>(
            <p>{t.name}</p>
        ))}
    </div>
  )
}
