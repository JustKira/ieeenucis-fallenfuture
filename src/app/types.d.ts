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
