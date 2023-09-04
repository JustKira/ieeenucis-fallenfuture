"use client";
import Image from "next/image";
import HorizontalLine from "./components/HorizontalLine";
import { Icon } from "@iconify/react";
import CustomButton from "./components/CustomButton";
import VerticalLine from "./components/VerticalLine";

export default function Home() {
  return (
    <main className="w-full">
      <div className="h-screen bg-hero flex flex-row bg-cover">
        <div className=" h-full w-3/6 flex flex-col justify-center pl-32">
          <h2 className="font-poppins font-medium text-gray-400 text-xl">
            TOTAL WAR
          </h2>
          <h1 className="font-xyber font-bold text-4xl">FALLEN FUTURE</h1>
          <p className="font-poppins font-extralight text-base py-5">
            Pharetra pulvinar ac auctor vitae sagittis diam maecenas cras.
            Ultrices sem quisque eget turpis in. Ut nunc consequat tempus sit
            ultrices sagittis ut mi iaculis. Ullamcorper ultricies nisi orci
            viverra magna eget. Tellus sapien volutpat tincidunt aenean ligula
            pellentesque est amet auctor. Sed platea aliquam sit lectus sit vel
            amet. Etiam sit lectus iaculis sit nunc. Facilisis lectus facilisi
            quam elit adipiscing ultrices. Cursus nisi vestibulum erat hac.
            Massa volutpat tempor interdum dui sed. Imperdiet risus ac arcu ut.
            Tincidunt tellus volutpat facilisis ipsum sit tempor. Volutpat
            pharetra mattis faucibus penatibus. Lacus dictumst condimentum id
            arcu arcu. Et in purus sed posuere vitae morbi.
          </p>
          <div>
            <CustomButton border={false} />
          </div>
        </div>
        <div className=" h-full w-3/6">
          <Image
            src={"/assets/landingpage-vertical-lines.svg"}
            width={90}
            height={90}
            alt=""
            className="w-fit h-[90%] absolute right-1/4 top-0 "
          />
        </div>
      </div>

      <div className="TROOPS ml-20 h-max">
        <div className=" w-3/6 px-10 font-poppins">
          <h1 className=" font-bold text-3xl py-3">TROOP VARIANTS</h1>
          <HorizontalLine start={true} />
          <p className="font-light text-sm p-1">SQUAD</p>
        </div>
        <div className="flex flex-row">
          <div className=" p-10 flex flex-col items-center justify-center relative">
            <div className="absolute flex flex-row left-10 top-10 p-5">
              <Icon icon="game-icons:incoming-rocket" width={60} height={50} />
              <div className="flex flex-col font-poppins">
                <h1 className=" font-bold font-2xl">THE WORLD ENDER</h1>
                <div className="flex flex-row">
                  <Icon icon="material-symbols:shield" width={12} height={12} />
                  <p className="text-xs px-1 font-light">12</p>
                  <Icon
                    icon="game-icons:health-normal"
                    width={12}
                    height={12}
                  />
                  <p className="text-xs px-1 font-light">24</p>
                  <Icon icon="ph:crosshair-bold" width={12} height={12} />
                  <p className="text-xs px-1 font-light">3</p>
                </div>
              </div>
            </div>
            <Image
              src={"/assets/landingpage-troops.png"}
              width={700}
              height={500}
              alt="Card"
              className=" w-full border rounded-lg"
            />
            <div className="flex flex-row p-5 w-full font-poppins">
              <button className="border rounded py-2 px-14 font-medium hover:bg-white hover:text-black">
                BUILD & TRAIN
              </button>
              <h1 className="py-2 px-5 text-2xl font-light">
                YOUR SQUAD AND WIN THE WAR
              </h1>
            </div>
          </div>
          <div className=" flex flex-col p-5 mr-20 w-max">
            <div className="flex flex-row items-center p-3">
              <Icon
                icon="material-symbols:shield"
                color="#41c6ff"
                width={60}
                height={50}
              />
              <div className="px-3">
                <h1 className="font-xyber font-bold text-2xl">TANKS</h1>
                <p className="font-poppins font-medium text-gray-400">
                  STRENGTH IN THE FUTURE: WILLPOWER, PRECISION, AUDACITY.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center p-3">
              <Icon
                icon="game-icons:rifle"
                color="#41c6ff"
                width={60}
                height={50}
              />
              <div className="px-3">
                <h1 className="font-xyber font-bold text-2xl">TROOPERS</h1>
                <p className="font-poppins font-medium text-gray-400">
                  Unyielding, Unstoppable, Uniting.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center p-3">
              <Icon
                icon="fa-solid:fighter-jet"
                color="#41c6ff"
                width={60}
                height={50}
              />
              <div className="px-3">
                <h1 className="font-xyber font-bold text-2xl">AIRFORCE</h1>
                <p className="font-poppins font-medium text-gray-400">
                  Unyielding, Unstoppable, Uniting.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center p-3">
              <Icon
                icon="game-icons:incoming-rocket"
                color="#41c6ff"
                width={60}
                height={50}
              />
              <div className="px-3">
                <h1 className="font-xyber font-bold text-2xl">JUGGERNAUT</h1>
                <p className="font-poppins font-medium text-gray-400">
                  Unyielding, Unstoppable, Uniting.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center p-3">
              <Icon
                icon="material-symbols:health-metrics"
                color="#41c6ff"
                width={60}
                height={50}
              />
              <div className="px-3">
                <h1 className="font-xyber font-bold text-2xl">MEDIC</h1>
                <p className="font-poppins font-medium text-gray-400">
                  Unyielding, Unstoppable, Uniting.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center p-3">
              <Icon
                icon="game-icons:diving-dagger"
                color="#41c6ff"
                width={60}
                height={50}
              />
              <div className="px-3">
                <h1 className="font-xyber font-bold text-2xl">ASSASSIN</h1>
                <p className="font-poppins font-medium text-gray-400">
                  Unyielding, Unstoppable, Uniting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-max m-20 ">
        <h1 className=" h-min font-poppins font-bold text-3xl px-10 pt-10">
          MULTIPLE FACTIONS
        </h1>
        <Image
          src={"/assets/landingpage-multiple-faction.svg"}
          width={900}
          height={500}
          alt=""
          className="absolute left-0"
        />
        <div className="flex flex-row h-full justify-center items-center py-24">
          <div className="p-10">
            <h1 className="font-xyber font-bold text-xl py-3">THE NCV</h1>
            <Image
              src={"/assets/landingpage-factions-blue.png"}
              width={400}
              height={300}
              alt=""
              className="border rounded-lg"
            />
          </div>
          <div className="p-10">
            <h1 className="font-xyber font-bold text-xl py-3">THE NCV</h1>
            <Image
              src={"/assets/landingpage-factions-white.png"}
              width={400}
              height={300}
              alt=""
              className="border rounded-lg"
            />
          </div>
          <div className="p-10">
            <h1 className="font-xyber font-bold text-xl py-3">THE DEVIZY</h1>
            <Image
              src={"/assets/landingpage-factions-red.png"}
              width={400}
              height={300}
              alt=""
              className="border rounded-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
