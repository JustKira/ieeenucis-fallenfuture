import { PlayerCard } from "./lib/PlayerCard";
import { PlayerSquad } from "./lib/PlayerSquad";
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

  //-------------------------------------------------------------------------

  const randomNumber = Randomizer(1, 100);
  console.log(randomNumber);

  //-------------------------------------------------------------------------

  const card = RandomizeCard();
  console.log(card);

  //-------------------------------------------------------------------------

  const baseCardAssassin: PlayerCard = new PlayerCard({
    id: 1,
    account: "Biso",
    inheritanceId: "Assassin",
    hp: 1.3,
    armor: 0.8,
    shield: 1.5,
    attackPower: 1.2,
    attackRange: 1.1,
    movement: 0.9,
    power: 1.4,
    rarity: "Common",
  });

  const baseCardDestroyer: PlayerCard = new PlayerCard({
    id: 2,
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
  });

  const baseCardMedic: PlayerCard = new PlayerCard({
    id: 3,
    account: "Biso",
    inheritanceId: "Medic",
    hp: 1.3,
    armor: 0.8,
    shield: 1.5,
    attackPower: 1.2,
    attackRange: 1.1,
    movement: 0.9,
    power: 1.4,
    rarity: "Common",
  });

  const playerSquad = new PlayerSquad([], []);

  playerSquad.insert(baseCardAssassin, [1, 1]);
  playerSquad.insert(baseCardDestroyer, [2, 2]);
  playerSquad.insert(baseCardMedic, [3, 3]);

  playerSquad.changePositions(baseCardAssassin, baseCardMedic);
  console.log(playerSquad);

  playerSquad.changeOrder(baseCardDestroyer, baseCardMedic);
  console.log(playerSquad);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
