export function RandomizeCard() {
  const rarities = [
    { name: "Common", percentage: 40, accumulatedValue: 3 },
    { name: "Uncommon", percentage: 25, accumulatedValue: 4 },
    { name: "Rare", percentage: 15, accumulatedValue: 5 },
    { name: "Epic", percentage: 10, accumulatedValue: 6 },
    { name: "Legendary", percentage: 7, accumulatedValue: 7 },
    { name: "Mythical", percentage: 3, accumulatedValue: 8 },
  ];

  const rand = Math.random() * 100;

  let accumulatedValue = 0;
  let rarity = "";

  let cumulativePercentage = 0;

  for (const rarityData of rarities) {
    cumulativePercentage += rarityData.percentage;
    if (rand <= cumulativePercentage) {
      rarity = rarityData.name;
      accumulatedValue = rarityData.accumulatedValue;
      break;
    }
  }

  const getRandomStatValue = () => Math.random() * 1.25 + 0.5;

  const hp = getRandomStatValue();
  const armor = getRandomStatValue();
  const shield = getRandomStatValue();
  const attackPower = getRandomStatValue();
  const power = getRandomStatValue();

  const totalValue = hp + armor + shield + attackPower + power;

  const adjustmentFactor = accumulatedValue / totalValue;

  return {
    hp: hp * adjustmentFactor,
    armor: armor * adjustmentFactor,
    shield: shield * adjustmentFactor,
    attackPower: attackPower * adjustmentFactor,
    power: power * adjustmentFactor,
    rarity,
  };
}
