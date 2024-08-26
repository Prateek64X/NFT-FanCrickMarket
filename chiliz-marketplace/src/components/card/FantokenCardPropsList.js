// /src/components/card/FantokenCardPropsList.js
import FantokenCardProps from './FantokenCardProps';

export default class FantokenCardPropsList {
  static propsList = [
    new FantokenCardProps("Virat", "Kohli", 1950, "Batsman", "India", 4800, 25),
    new FantokenCardProps("Sachin", "Tendulkar", 1900, "Batsman", "India", 5600, 20),
    new FantokenCardProps("Ricky", "Ponting", 1700, "Batsman", "Australia", 2800, 52),
    new FantokenCardProps("MS", "Dhoni", 1850, "Wicketkeeper", "India", 3500, 35),
    new FantokenCardProps("AB", "de Villiers", 1600, "Batsman", "South Africa", 1100, 123),
    new FantokenCardProps("Steve", "Smith", 1550, "Batsman", "Australia", 850, 211),
    new FantokenCardProps("Kane", "Williamson", 1450, "Batsman", "New Zealand", 85, 6),
    new FantokenCardProps("Ben", "Stokes", 1400, "All-rounder", "England", 450, 550),
    new FantokenCardProps("Chris", "Gayle", 1500, "Batsman", "West Indies", 1280, 140),
    new FantokenCardProps("Jasprit", "Bumrah", 1500, "Bowler", "India", 1900, 113)
  ];

  static getProps(index) {
    return this.propsList[index];
  }
}
