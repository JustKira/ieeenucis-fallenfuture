export function RandomizeCard() {
  const rarities = [
    { name: "Common", percentage: 40, accumulatedValue: 3 },
    { name: "Uncommon", percentage: 25, accumulatedValue: 4 },
    { name: "Rare", percentage: 15, accumulatedValue: 5 },
    { name: "Epic", percentage: 10, accumulatedValue: 6 },
    { name: "Legendary", percentage: 7, accumulatedValue: 7 },
    { name: "Mythical", percentage: 3, accumulatedValue: 8 },
  ];

  let accumulatedValue = 0;
  let rarity = "";

  const rand = Math.random() * 100;
  while (rand == 0) {
    const rand = Math.random() * 100;
  }
  if (rand > 0 && rand <= 40) {
    rarity = "Common";
    accumulatedValue = 3;
  } else if (rand > 40 && rand <= 65) {
    rarity = "Uncommon";
    accumulatedValue = 4;
  } else if (rand > 65 && rand <= 80) {
    rarity = "Rare";
    accumulatedValue = 5;
  } else if (rand > 80 && rand <= 90) {
    rarity = "Epic";
    accumulatedValue = 6;
  } else if (rand > 90 && rand <= 97) {
    rarity = "Legendary";
    accumulatedValue = 7;
  } else if (rand > 97 && rand <= 100) {
    rarity = "Mythical";
    accumulatedValue = 8;
  }

  const getRandomStatValue = () => Math.random() * 1.25 + 0.5;

  let hp = getRandomStatValue();
  let armor = getRandomStatValue();
  let shield = getRandomStatValue();
  let attackPower = getRandomStatValue();
  let power = getRandomStatValue();

  const totalValue = hp + armor + shield + attackPower + power;

  const adjustmentFactor = accumulatedValue / totalValue;
  hp *= adjustmentFactor;
  armor *= adjustmentFactor;
  shield *= adjustmentFactor;
  attackPower *= adjustmentFactor;
  power *= adjustmentFactor;

  return {
    hp,
    armor,
    shield,
    attackPower,
    power,
    rarity,
  };
}
