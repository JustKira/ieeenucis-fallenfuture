import GAMECARDS from "./BaseCards/index";

export function RandomizeCard1<B extends boolean>(
  partialLoad: B,
  rarityIn?: Rarity
): B extends true
  ? Omit<
      PlayerCard,
      "id" | "account" | "fallenFutureAccountId" | "inheritanceId"
    >
  : Omit<PlayerCard, "id" | "account" | "fallenFutureAccountId"> {
  const rarities: {
    name: Rarity;
    percentage: number;
    accumulatedValue: number;
  }[] = [
    { name: "COMMON", percentage: 40, accumulatedValue: 3 },
    { name: "UNCOMMON", percentage: 25, accumulatedValue: 4 },
    { name: "RARE", percentage: 15, accumulatedValue: 5 },
    { name: "EPIC", percentage: 10, accumulatedValue: 6 },
    { name: "LEGENDARY", percentage: 7, accumulatedValue: 7 },
    { name: "MYTHICAL", percentage: 3, accumulatedValue: 8 },
  ];

  let rarity: Rarity | null = null;
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
      inheritanceId: randomCardId,
      attackRange: 1,
      movement: 1,
      ...stats,
      rarity,
    } as any;
  }

  return {
    ...stats,
    rarity,
  } as any;
}
