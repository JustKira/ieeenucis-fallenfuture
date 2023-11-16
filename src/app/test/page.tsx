"use client";

import { getUUID } from "@/lib/getUUID";
import usePlayerSquad from "@/lib/hooks/usePlayerSquad";
import { accountApi } from "@/lib/redux/api/accountSlice";
import { useEffect } from "react";

const dummytest: Omit<PlayerCard, "account">[] = [
  {
    id: 1,
    fallenFutureAccountId: "Biso",
    inheritanceId: "Destroyer",
    hp: 1.3,
    armor: 0.8,
    shield: 1.5,
    attackPower: 1.2,
    attackRange: 1.1,
    movement: 0.9,
    power: 1.4,
    rarity: "COMMON",
  },
  {
    id: 2,
    fallenFutureAccountId: "FHN",
    inheritanceId: "Assassin",
    hp: 1.3,
    armor: 0.8,
    shield: 1.5,
    attackPower: 1.2,
    attackRange: 1.1,
    movement: 0.9,
    power: 1.4,
    rarity: "COMMON",
  },
  {
    id: 3,
    fallenFutureAccountId: "Barqooq",
    inheritanceId: "Destroyer",
    hp: 1.3,
    armor: 0.8,
    shield: 1.5,
    attackPower: 1.2,
    attackRange: 1.1,
    movement: 0.9,
    power: 1.4,
    rarity: "COMMON",
  },
];

const Test = () => {
  const { playerSquad, insertCard, switchPositions, switchOrder, swapCard } =
    usePlayerSquad();
  const uuid = getUUID();

  const { data } = accountApi.useGetCardQuery(uuid ?? "");

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    console.log(playerSquad);
  }, [playerSquad]);
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col gap-5">
        <button
          onClick={() => {
            insertCard(dummytest[0], { x: 0, y: 2 });
          }}
        >
          Add Card 1
        </button>
        <button
          onClick={() => {
            insertCard(dummytest[1], { x: 2, y: 0 });
          }}
        >
          Add Card 2
        </button>
        <button
          onClick={() => {
            switchPositions(dummytest[0], dummytest[1]);
          }}
        >
          switch cards
        </button>
        <button
          onClick={() => {
            switchOrder(dummytest[0], dummytest[1]);
          }}
        >
          switch order
        </button>
        <button
          onClick={() => {
            swapCard(dummytest[0], dummytest[2]);
          }}
        >
          swap card
        </button>
      </div>
    </div>
  );
};

export default Test;
