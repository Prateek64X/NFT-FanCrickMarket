// PlayerCardProps.js
export default class PlayerCardProps {
  
    constructor(playerId, title, subtitle, img, rarity_value, skill, country, price_lowest, listing_count) {
      this.playerId = playerId;
      this.title = title;
      this.subtitle = subtitle;
      this.img = img;
      this.rarity_value = rarity_value;
      this.skill = skill;
      this.country = country;
      this.price_lowest = price_lowest;
      this.listing_count = listing_count;
    }
  }
  