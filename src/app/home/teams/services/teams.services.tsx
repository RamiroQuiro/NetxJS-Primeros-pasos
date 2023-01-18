import { useQuery } from "@tanstack/react-query";

const options = {
	method: 'GET',
	headers: {
		'X-Auth-token':'987f8fdfc9f74e7d826d5db23fad55a2'
	}
};



export  const getTeams=async ()=>{

    const res = await fetch('https://api.football-data.org/v2/teams/',options)
    return res.json()
}


// export function fetGetTeams() {
//     return useQuery(['teams'],getTeams)
    
// }
