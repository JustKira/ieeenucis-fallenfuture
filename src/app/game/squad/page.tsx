"use client";
import CardSelector from "@/components/CardSelector";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

function TeamBuilder() {
  const [line, setLine] = useState<string>();
  const [count, setCount] = useState<number>(0);
  return (
    <div className="w-full">
      <div className="flex flex-col [&>div>h1]:font-xyber [&>div>h1]:text-2xl [&>div>p]:font-barcode128">
        <div className="absolute top-[16%]">
          <h1>Team Selection</h1>
          <p>FIGHT FOR WHAT IS RIGHT</p>
        </div>
        <div className="flex flex-row pt-6 justify-between">
          <div className="flex flex-row gap-5 opacity-50">
            <button>FRONTLINE</button>
            <button>MIDLINE</button>
            <button>BACKLINE</button>
          </div>
          <div className="text-sm">
            <p>CARD ON GROUND {count}/8</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 pt-4 pb-4">
          <CardSelector customHandler={(name, id) => setCount(count + 1)} />
          <CardSelector customHandler={(name, id) => setCount(count + 1)} />
          <CardSelector customHandler={(name, id) => setCount(count + 1)} />
          <CardSelector customHandler={(name, id) => setCount(count + 1)} />
          <CardSelector customHandler={(name, id) => setCount(count + 1)} />
        </div>
        <Button className="max-w-fit px-8 text-xl bg-[#222222] border border-white text-white hover:text-[#222222]">
          CONFIRM
        </Button>
      </div>
    </div>
  );
}

export default TeamBuilder;
