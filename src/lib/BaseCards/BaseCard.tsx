export abstract class BaseCard {
  img?: string;
  name?: string;
  trooptype?: TroopType;
  hp: number = 0;
  armor: number = 0;
  shield: number = 0;
  attackPower: number = 0;
  power: number = 0;
  attackRange: number = 0;
  movement: number = 0;

  constructor(data: Partial<BaseCard>) {
    Object.assign(this, data);
  }

  abstract basicSkill(): void;

  abstract passiveSkill(): void;

  abstract ultimateSkill(): void;
}
