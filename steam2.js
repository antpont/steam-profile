require("dotenv").config()

// function steamapicall(){
//     fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.API_KEY}&steamids=76561197960435530`).then((data)=>console.log(data.json()))
// }


async function steamapicall() {
    const response = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.API_KEY}&steamids=76561197960435530`);
    const jsonData = await response.json();
    console.log(jsonData.response.players[0].profileurl);
  }
  steamapicall()