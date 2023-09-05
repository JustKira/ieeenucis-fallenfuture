type BaseCards = Record<string, Record<string, number>>;

interface PlayerCard {
  /*readonly*/ id: number;
  /*readonly*/ account: string;
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

interface PlayerSquad {
  units: PlayerCard[];
  positions: { x: number; y: number; id: number }[];

  insert(playerCard: PlayerCard, position: [number, number]): void;
  changePositions(playerCard1: PlayerCard, playerCard2: PlayerCard): void;
  changeOrder(playerCard1: PlayerCard, playerCard2: PlayerCard): void;
}
