// Import the MatchCardProps class
import MatchCardProps from './MatchCardProps';

// Define your match data array with more matches
const matchType = ["Cricket", "Football", "Basketball", "Kabaddi"];

const allMatches = [
    // Cricket Matches
    {
        matchId: "C0001",
        matchName: "World Cup 2023",
        matchDate: "30 Aug 2024",
        team1: "India",
        team2: "Pakistan",
        team1Image: "/images/teams/ind-nat.png",
        team2Image: "/images/teams/pak-nat.png",
        timeRemaining: "3d 2h",
        type: matchType[0],
    },
    {
      matchId: "C0002",
      matchName: "IPL 2023",
      matchDate: "22 Aug 2024",
      team1: "Mumbai Indians",
      team2: "Chennai Super Kings",
      team1Image: "/images/teams/mi.png",
      team2Image: "/images/teams/csk.png",
      timeRemaining: "3h 09m",
      type: matchType[0],
    },
    {
      matchId: "C0003",
      matchName: "The Ashes",
      matchDate: "28 Aug 2024",
      team1: "Australia",
      team2: "England",
      team1Image: "/images/teams/aus-nat.png",
      team2Image: "/images/teams/eng-nat.png",
      timeRemaining: "1d 5h",
      type: matchType[0],
    },
    {
      matchId: "C0004",
      matchName: "Big Bash League",
      matchDate: "01 Sep 2024",
      team1: "Sydney Sixers",
      team2: "Melbourne Stars",
      team1Image: "/images/teams/sixers.png",
      team2Image: "/images/teams/stars.png",
      timeRemaining: "4d 12h",
      type: matchType[0],
    },
    {
      matchId: "C0005",
      matchName: "Caribbean Premier League",
      matchDate: "05 Sep 2024",
      team1: "Trinbago Knight Riders",
      team2: "Guyana Amazon Warriors",
      team1Image: "/images/teams/tkr.png",
      team2Image: "/images/teams/gaw.png",
      timeRemaining: "6d 8h",
      type: matchType[0],
    },
    {
      matchId: "C0006",
      matchName: "PSL 2024",
      matchDate: "10 Sep 2024",
      team1: "Kolkata Knight Riders",
      team2: "Gujrat Titans",
      team1Image: "/images/teams/kkr.png",
      team2Image: "/images/teams/gt.png",
      timeRemaining: "8d 18h",
      type: matchType[0],
    },
    
    // Football Matches
    {
      matchId: "F0001",
      matchName: "Premier League",
      matchDate: "23 Aug 2024",
      team1: "Manchester United",
      team2: "Liverpool",
      team1Image: "/images/teams/manu.png",
      team2Image: "/images/teams/liverpool.png",
      timeRemaining: "5h 20m",
      type: matchType[1],
    },
    {
      matchId: "F0002",
      matchName: "La Liga",
      matchDate: "27 Aug 2024",
      team1: "Real Madrid",
      team2: "Barcelona",
      team1Image: "/images/teams/realmadrid.png",
      team2Image: "/images/teams/barcelona.png",
      timeRemaining: "2d 4h",
      type: matchType[1],
    },
    {
      matchId: "F0003",
      matchName: "Serie A",
      matchDate: "29 Aug 2024",
      team1: "Juventus",
      team2: "AC Milan",
      team1Image: "/images/teams/juventus.png",
      team2Image: "/images/teams/acmilan.png",
      timeRemaining: "3d 6h",
      type: matchType[1],
    },
  
    // Basketball Matches
    {
      matchId: "N0001",
      matchName: "NBA Finals",
      matchDate: "24 Aug 2024",
      team1: "Lakers",
      team2: "Heat",
      team1Image: "/images/teams/lakers.png",
      team2Image: "/images/teams/heat.png",
      timeRemaining: "7h 15m",
      type: matchType[2],
    },
    {
      matchId: "N0002",
      matchName: "EuroLeague",
      matchDate: "26 Aug 2024",
      team1: "Olympiacos",
      team2: "Real Madrid",
      team1Image: "/images/teams/olympiacos.png",
      team2Image: "/images/teams/realmadridbasketball.png",
      timeRemaining: "1d 8h",
      type: matchType[2],
    },
    {
      matchId: "N0003",
      matchName: "WNBA Finals",
      matchDate: "31 Aug 2024",
      team1: "Las Vegas Aces",
      team2: "Chicago Sky",
      team1Image: "/images/teams/aces.png",
      team2Image: "/images/teams/sky.png",
      timeRemaining: "5d 4h",
      type: matchType[2],
    },
  
    // Kabaddi Matches
    {
      matchId: "K0001",
      matchName: "Pro Kabaddi League",
      matchDate: "25 Aug 2024",
      team1: "Dabang Delhi",
      team2: "Bengal Warriors",
      team1Image: "/images/teams/dabang.png",
      team2Image: "/images/teams/bengal.png",
      timeRemaining: "2h 30m",
      type: matchType[3],
    },
    {
      matchId: "K0002",
      matchName: "Kabaddi Masters",
      matchDate: "28 Aug 2024",
      team1: "India",
      team2: "Iran",
      team1Image: "/images/teams/ind-kabaddi-nat.png",
      team2Image: "/images/teams/iran-kabaddi-nat.png",
      timeRemaining: "1d 10h",
      type: matchType[3],
    },
    {
      matchId: "K0003",
      matchName: "Asian Kabaddi Championship",
      matchDate: "02 Sep 2024",
      team1: "South Korea",
      team2: "Japan",
      team1Image: "/images/teams/skorea-kabbadi-nat.png",
      team2Image: "/images/teams/japan-kabbadi-nat.png",
      timeRemaining: "4d 16h",
      type: matchType[3],
    },
];

// Create the MatchCardPropsList class
export default class MatchCardPropsList {
  static propsList = allMatches.map(match => new MatchCardProps(
    match.matchId,
    match.matchName,
    match.matchDate,
    match.team1,
    match.team2,
    match.team1Image,
    match.team2Image,
    match.timeRemaining,
    match.type
  ));

  static getProps(index) {
    return this.propsList[index];
  }
}
