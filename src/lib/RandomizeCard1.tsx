import GAMECARDS from "./BaseCards";

export function RandomizeCard1(partialLoad: boolean, rarityIn?: string) {
  const rarities = [
    { name: "Common", percentage: 40, accumulatedValue: 3 },
    { name: "Uncommon", percentage: 25, accumulatedValue: 4 },
    { name: "Rare", percentage: 15, accumulatedValue: 5 },
    { name: "Epic", percentage: 10, accumulatedValue: 6 },
    { name: "Legendary", percentage: 7, accumulatedValue: 7 },
    { name: "Mythical", percentage: 3, accumulatedValue: 8 },
  ];

  let rarity = "";
  let accumulatedValue = 0;

  if (rarityIn == null) {
    const rand = Math.random() * 100;

    let cumulativePercentage = 0;

    for (const rarityData of rarities) {
      cumulativePercentage += rarityData.percentage;
      if (rand <= cumulativePercentage) {
        rarity = rarityData.name;
        accumulatedValue = rarityData.accumulatedValue;
        break;
      }
    }
  } else {
    rarity = rarityIn;
    accumulatedValue =
      rarities.find((rarityData) => rarityData.name === rarityIn)
        ?.accumulatedValue || 0;
  }

  const getRandomStatValue = () => Math.random() * 1.25 + 0.5;

  let hp = getRandomStatValue();
  let armor = getRandomStatValue();
  let shield = getRandomStatValue();
  let attackPower = getRandomStatValue();
  let power = getRandomStatValue();

  let totalValue = hp + armor + shield + attackPower + power;

  let adjustmentFactor = accumulatedValue / totalValue;

  const stats = {
    hp: hp * adjustmentFactor,
    armor: armor * adjustmentFactor,
    shield: shield * adjustmentFactor,
    attackPower: attackPower * adjustmentFactor,
    power: power * adjustmentFactor,
  };

  const clampedStats = new Set<string>();

  do {
    let error = 0;

    let statsNotClamped = 0;

    for (const statName in stats) {
      if (stats.hasOwnProperty(statName)) {
        if (clampedStats.has(statName)) {
          continue;
        }

        let stat = (stats as any)[statName];

        if (stat > 1.75) {
          error += stat - 1.75;
          stat = 1.75;
        } else if (stat < 0.5) {
          error += stat - 0.5;
          stat = 0.5;
        } else {
          statsNotClamped++;
        }

        (stats as any)[statName] = stat;

        if (stat === 1.75 || stat === 0.5) {
          clampedStats.add(statName);
        }
      }
    }

    const adjustment = error / statsNotClamped;

    for (const statName in stats) {
      if (stats.hasOwnProperty(statName)) {
        if (clampedStats.has(statName)) {
          continue;
        }

        let stat = (stats as any)[statName];

        if (stat !== 1.75 && stat !== 0.5) {
          stat += adjustment;
          (stats as any)[statName] = stat;
        }
      }
    }
  } while (
    stats.hp < 0.5 ||
    stats.hp > 1.75 ||
    stats.armor < 0.5 ||
    stats.armor > 1.75 ||
    stats.shield < 0.5 ||
    stats.shield > 1.75 ||
    stats.attackPower < 0.5 ||
    stats.attackPower > 1.75 ||
    stats.power < 0.5 ||
    stats.power > 1.75
  );

  if (!partialLoad) {
    const cardIds = Object.keys(GAMECARDS);
    const randomCardId = cardIds[Math.floor(Math.random() * cardIds.length)];
    const randomCard = GAMECARDS[randomCardId];

    return {
      id: randomCardId,
      name: randomCard.name,
      img: randomCard.img,
      trooptype: randomCard.trooptype,
      ...stats,
      rarity,
    };
  }

  return {
    ...stats,
    rarity,
  };
}
