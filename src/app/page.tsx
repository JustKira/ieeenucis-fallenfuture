import { PlayerCard } from "./lib/PlayerCard";
import { RandomizeCard } from "./lib/RandomizeCard";
import { Randomizer } from "./lib/Randomizer";

export default function Home() {
  const cardFromDatabaseData = {
    id: 1,
    account: "Biso",
    inheritanceId: "Destroyer",
    hp: 1.3,
    armor: 0.8,
    shield: 1.5,
    attackPower: 1.2,
    attackRange: 1.1,
    movement: 0.9,
    power: 1.4,
    rarity: "Common",
  };

  const cardFromDatabase = new PlayerCard(cardFromDatabaseData);
  console.log(cardFromDatabase);

  const randomNumber = Randomizer(1, 100);
  console.log(randomNumber);

  const card = RandomizeCard();
  console.log(card);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
