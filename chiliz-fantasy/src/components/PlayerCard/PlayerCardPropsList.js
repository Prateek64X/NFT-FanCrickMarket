// /src/components/card/PlayerCardPropsList.js
import PlayerCardProps from './PlayerCardProps';

export default class PlayerCardPropsList {
  static propsList = [
    new PlayerCardProps("PL_IN003", "Virat", "Kohli", "viratkohli.png", 1950, "Batsman", "India", 4800, 25),
    new PlayerCardProps("PL_IN001", "Sachin", "Tendulkar", "sachintendulkar.jpg", 1900, "Batsman", "India", 5600, 20),
    new PlayerCardProps("PL_AUS001", "Ricky", "Ponting", "rickypointing.jpg", 1700, "Batsman", "Australia", 2800, 52),
    new PlayerCardProps("PL_IN002", "MS", "Dhoni", "msdhoni.webp", 1850, "Wicketkeeper", "India", 3500, 35),
    new PlayerCardProps("PL_SA001", "AB", "de Villiers", "abvillers.webp", 1600, "Batsman", "South Africa", 1100, 123),
    new PlayerCardProps("PL_AUS002", "Steve", "Smith", "stevesmith.jpg", 1550, "Batsman", "Australia", 850, 211),
    new PlayerCardProps("PL_NZ001", "Kane", "Williamson", "kanewilliamson.png", 1450, "Batsman", "New Zealand", 85, 6),
    new PlayerCardProps("PL_Eng001", "Ben", "Stokes", "benstokes.webp", 1400, "All-rounder", "England", 450, 550),
    new PlayerCardProps("PL_WI001", "Chris", "Gayle", "chrisgayle.webp", 1500, "Batsman", "West Indies", 1280, 140),
    new PlayerCardProps("PL_IN004", "Jasprit", "Bumrah", "jaspritbumrah.webp", 1500, "Bowler", "India", 1900, 113)
  ];

  static getProps(index) {
    return this.propsList[index];
  }

  static getByPlayerId(playerId) {
    return this.propsList.find(props => props.playerId === playerId);
  }
}
