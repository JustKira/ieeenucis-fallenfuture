import { baseCards } from "./BaseCards";

export class PlayerCard implements PlayerCard {
  id = 0;
  account = "";
  inheritanceId = "";
  hp = 0;
  armor = 0;
  shield = 0;
  attackPower = 0;
  attackRange = 0;
  movement = 0;
  power = 0;
  rarity = "";

  constructor(data: PlayerCard) {
    Object.assign(this, data);

    const baseCard = baseCards[this.inheritanceId];

    if (baseCard) {
      for (const stat in baseCard) {
        if (stat in this) {
          (this as any)[stat as keyof PlayerCard] *= baseCard[stat];
        }
      }
    }
  }
}
