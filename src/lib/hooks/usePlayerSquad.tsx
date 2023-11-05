import { useEffect, useState } from "react";

interface PlayerSquad {
  card: Omit<PlayerCard, "account">;
  pos: { x: number; y: number };
}

const useSquad = (playerSquadLoaded?: PlayerSquad[]) => {
  const [playerSquad, setPlayerSquad] = useState<PlayerSquad[]>([]);

  useEffect(() => {
    if (playerSquadLoaded) {
      setPlayerSquad(playerSquadLoaded);
    }
  }, []);

  function insertCard(
    card: Omit<PlayerCard, "account">,
    pos: { x: number; y: number }
  ) {
    let playerSquadCopy = [...playerSquad];

    // function
    playerSquadCopy.push({
      card: card,
      pos: { x: pos.x, y: pos.y },
    });

    setPlayerSquad(playerSquadCopy);
  }

  function switchPositions(
    card1: Omit<PlayerCard, "account">,
    card2: Omit<PlayerCard, "account">
  ) {
    let playerSquadCopy = [...playerSquad];
    const index1 = playerSquadCopy.findIndex((ps) => ps.card.id === card1.id);
    const index2 = playerSquadCopy.findIndex((ps) => ps.card.id === card2.id);

    [playerSquadCopy[index1].pos, playerSquadCopy[index2].pos] = [
      playerSquadCopy[index2].pos,
      playerSquadCopy[index1].pos,
    ];

    setPlayerSquad(playerSquadCopy);
  }

  function switchOrder(
    card1: Omit<PlayerCard, "account">,
    card2: Omit<PlayerCard, "account">
  ) {
    let playerSquadCopy = [...playerSquad];
    const index1 = playerSquadCopy.findIndex((ps) => ps.card.id === card1.id);
    const index2 = playerSquadCopy.findIndex((ps) => ps.card.id === card2.id);

    [playerSquadCopy[index1], playerSquadCopy[index2]] = [
      playerSquadCopy[index2],
      playerSquadCopy[index1],
    ];

    setPlayerSquad(playerSquadCopy);
  }

  function swapCard(
    card1: Omit<PlayerCard, "account">,
    card2: Omit<PlayerCard, "account">
  ) {
    let playerSquadCopy = [...playerSquad];
    const index1 = playerSquadCopy.findIndex((ps) => ps.card.id === card1.id);
    console.log(index1);

    if (index1 !== -1) {
      playerSquadCopy[index1] = {
        card: card2,
        pos: playerSquadCopy[index1].pos,
      };

      playerSquadCopy.slice(index1, 1);

      setPlayerSquad(playerSquadCopy);
    }
  }

  return { playerSquad, insertCard, switchPositions, switchOrder, swapCard };
};

export default useSquad;
