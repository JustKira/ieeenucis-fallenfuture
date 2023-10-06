"use client";
import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function SignInPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  /**
   * @description Initiates a Google Sign-In process by calling the authentication provider,
   * which returns a URL for signing in. This function handles the redirection
   * to the "auth/callback" endpoint, where Supabase signs in the user and adds
   * the session to the cookie.
   *
   */
  const handleGoogleSignin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`,
      },
    });
    router.refresh();
  };
  return (
    <div className="w-full bg-[url('/assets/landing-img.png')] min-h-screen bg-fixed bg-center bg-cover">
      <section className="relative grid grid-cols-3 grid-rows-6 gap-2 h-screen [&>div]:p-4 [&>div>h1]:text-lg [&>div>h1]:uppercase [&>div>h2]:text-lg [&>div>h2]:font-barcode128 [&>div>p]:font-thin [&>div>p]:leading-[1.7] [&>div>p]:text-gray-300">
        <div className="absolute flex flex-col w-3/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:w-1/3"></div>
        <div className="col-span-1 row-span-2 flex flex-col gap-2 bg-gradient-to-br from-white/20 to-white/5 border border-white/30 blur-[3px] opacity-30">
          <TypeAnimation
            sequence={[
              "Loading...",
              1000,
              `Terraforge Legion - Unyielding Titans`,
              2500,
              "",
            ]}
            wrapper="h1"
            speed={70}
            repeat={Infinity}
          />
          <TypeAnimation
            sequence={[
              "Loading...",
              200,
              `Earthquakes underfoot, the unstoppable force of Veridia.`,
              7000,
              "We Are Underattack, I Repeat WE ARE UNDER ATTACK",
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
          />
          <TypeAnimation
            sequence={[
              "Loading <War Logs> 2727-02-12",
              1500,
              `        Grounded but unyielding, the Terraforge Legion advances
                relentlessly. Their ironclad tanks and unbreakable resolve have
                allowed them to annex strategic territories, pushing back the Whites
                and expanding their stronghold on Veridia's surface.`,
              5000,
              "",
            ]}
            wrapper="p"
            speed={75}
            repeat={Infinity}
          />
        </div>
        <div className="col-span-2 row-span-2 flex flex-col gap-2 bg-gradient-to-br from-white/20 to-white/5 border border-white/30 blur-[3px] opacity-20">
          {" "}
          <TypeAnimation
            sequence={[
              "Loading...",
              700,
              `Terraforge Legion - Unyielding Titans`,
              3500,
              "",
            ]}
            wrapper="h1"
            speed={70}
            repeat={Infinity}
          />
          <TypeAnimation
            sequence={[
              "Loading...",
              400,
              `Earthquakes underfoot, the unstoppable force of Veridia.`,
              5000,
              "We Are Underattack, I Repeat WE ARE UNDER ATTACK",
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
          />
          <TypeAnimation
            sequence={[
              "Loading <War Logs> 2727-02-12",
              2500,
              `        Grounded but unyielding, the Terraforge Legion advances
                relentlessly. Their ironclad tanks and unbreakable resolve have
                allowed them to annex strategic territories, pushing back the Whites
                and expanding their stronghold on Veridia's surface.`,
              6000,
              "",
            ]}
            wrapper="p"
            speed={75}
            repeat={Infinity}
          />
        </div>

        <div className="flex flex-col col-span-1 row-span-2 gap-2 border bg-gradient-to-br from-white/20 to-white/5 border-white/30 blur-[3px] opacity-30">
          <TypeAnimation
            sequence={[
              "Loading...",
              1000,
              `Terraforge Legion - Unyielding Titans`,
              2500,
              "",
            ]}
            wrapper="h1"
            speed={70}
            repeat={Infinity}
          />
          <TypeAnimation
            sequence={[
              "Loading...",
              200,
              `Earthquakes underfoot, the unstoppable force of Veridia.`,
              7000,
              "We Are Underattack, I Repeat WE ARE UNDER ATTACK",
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
          />
          <TypeAnimation
            sequence={[
              "Loading <War Logs> 2727-02-12",
              1500,
              `        Grounded but unyielding, the Terraforge Legion advances
                relentlessly. Their ironclad tanks and unbreakable resolve have
                allowed them to annex strategic territories, pushing back the Whites
                and expanding their stronghold on Veridia's surface.`,
              5000,
              "",
            ]}
            wrapper="p"
            speed={75}
            repeat={Infinity}
          />
        </div>
        <div className="col-span-1 row-span-2 p-4 flex flex-col justify-between gap-2 bg-gradient-to-br from-white/20 to-white/5 border border-white/30  opacity-80">
          <div className="flex flex-col gap-2  [&>h1]:text-lg [&>h1]:uppercase [&>h2]:text-lg [&>h2]:font-barcode128 [&>p]:font-thin [&>p]:leading-[1.7] [&>p]:text-gray-300 [&>p]:text-xs [&>p]:opacity-30">
            <TypeAnimation
              sequence={["Sign in", 1000, `Sign in`, 2500, ""]}
              wrapper="h1"
              speed={70}
              repeat={Infinity}
            />
            <TypeAnimation
              sequence={[
                "Loading...",
                700,
                `Earthquakes underfoot, the unstoppable force of Veridia.`,
                7000,
                "We Are Underattack, I Repeat WE ARE UNDER ATTACK",
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
            />
            <TypeAnimation
              sequence={[
                "Loading <War Logs> 2727-02-12",
                1500,
                `        Grounded but unyielding, the Terraforge Legion advances
                relentlessly. Their ironclad tanks and unbreakable resolve have
                allowed them to annex strategic territories, pushing back the Whites
                and expanding their stronghold on Veridia's surface.`,
                5000,
                "",
              ]}
              wrapper="p"
              speed={75}
              repeat={Infinity}
            />
          </div>

          <div className="">
            <Button
              onClick={() => {
                handleGoogleSignin();
              }}
            >
              Google
            </Button>
          </div>
        </div>
        <div className="flex flex-col col-span-1 row-span-4 gap-2 border bg-gradient-to-br from-white/20 to-white/5 border-white/30 blur-[3px] opacity-20">
          <TypeAnimation
            sequence={[`Terraforge Legion - Unyielding Titans`, 1500, ""]}
            wrapper="h1"
            speed={70}
            repeat={Infinity}
          />
          <TypeAnimation
            sequence={[
              `Earthquakes underfoot, the unstoppable force of Veridia.`,
              7000,
              "We Are Underattack, I Repeat WE ARE UNDER ATTACK",
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
          />
          <TypeAnimation
            sequence={[
              `Header: Skyrage Dominion's Celestial Arsenal - Aerial Armada Unleashed The Skyrage Dominion's celestial arsenal is a spectacle to behold. From this mighty fortress in the sky, they launch an unending barrage of destruction, conducting a symphony of annihilation from above. Their relentless aerial armada strikes terror into the hearts of their enemies, as Veridia's skies become a battlefield like no other. High above Veridia's clouds, the Dominion's floating citadels house immense war factories, where advanced mechas are assembled by the hundreds. Thunderous roars of engines reverberate through the colossal hangars as squadrons of sleek fighters and hulking gunships prepare to engage in aerial warfare. The Dominion's pilots, known as "Skyrangers," are the elite of the elite, honed through relentless training. Their suits are equipped with cutting-edge technology, and their combat maneuvers are executed with unmatched precision. Each sortie into the skies is a deadly performance, with victory as the final crescendo.`,
              5000,
              "",
            ]}
            wrapper="p"
            speed={95}
            repeat={Infinity}
          />
        </div>
        <div className="col-span-2 row-span-1 flex flex-col gap-2 bg-gradient-to-br from-white/20 to-white/5 border border-white/30 blur-[3px] opacity-20">
          <TypeAnimation
            sequence={[
              "Loading...",
              750,
              `Nexus Order - Technological Marvels`,
              2500,
              "",
            ]}
            wrapper="h1"
            speed={70}
            repeat={Infinity}
          />
          <TypeAnimation
            sequence={[
              "Loading...",
              400,
              `The enigmatic architects of a brave new world`,
              7000,
              "",
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
          />
          <TypeAnimation
            sequence={[
              "Loading <War Logs> 2750-12-09",
              2500,
              `In the shadow of their mysterious technological marvels, the Nexus Order continues to confound and astound. Their secretive advancements have turned the tide of battle, enabling them to secure valuable ground from the Reds, establishing a formidable foothold on the terrestrial front.`,
              5000,
              "",
            ]}
            wrapper="p"
            speed={75}
            repeat={Infinity}
          />
        </div>
        <div className="col-span-2 row-span-1 flex flex-col gap-2 bg-gradient-to-br from-white/20 to-white/5 border border-white/30 blur-[3px] opacity-30">
          <TypeAnimation
            sequence={[
              "Loading...",
              750,
              `Veridia - A World Engulfed in Conflict`,
              2500,
              "",
            ]}
            wrapper="h1"
            speed={70}
            repeat={Infinity}
          />
          <TypeAnimation
            sequence={[
              "Loading...",
              400,
              `The world trembles as three titans clash for supremacy.`,
              7000,
              "",
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
          />
          <TypeAnimation
            sequence={[
              "Loading <War Logs> 2750-12-09",
              2500,
              `In the expansive world of Veridia, the fires of war rage unabated as the Skyrage Dominion, Nexus Order, and Terraforge Legion vie for dominion. Recent reports indicate rapid territorial shifts that have sent shockwaves across the globe.`,
              5000,
              "",
            ]}
            wrapper="p"
            speed={75}
            repeat={Infinity}
          />
        </div>
      </section>
    </div>
  );
}

export default SignInPage;
