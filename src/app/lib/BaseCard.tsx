abstract class AbstractBaseCard implements BaseCard {
  name = "";
  trooptype = "";
  hp = 0;
  armor = 0;
  shield = 0;
  attackPower = 0;
  power = 0;
  attackRange = 0;
  movement = 0;

  constructor(data: BaseCard) {
    Object.assign(this, data);
  }

  abstract skills(): void;
}
