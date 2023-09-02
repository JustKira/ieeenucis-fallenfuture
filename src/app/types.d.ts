type BaseCards = Record<string, Record<string, number>>;

interface PlayerCard {
  readonly id: number;
  readonly account: string;
  inheritanceId: string;
  hp: number;
  armor: number;
  shield: number;
  attackPower: number;
  attackRange: number;
  movement: number;
  power: number;
  rarity: string;
}

interface BaseCard {
  name: string;
  trooptype: string;
  hp: number;
  armor: number;
  shield: number;
  attackPower: number;
  power: number;
  attackRange: number;
  movement: number;
  skills: () => void;
}
