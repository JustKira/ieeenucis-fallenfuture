import { BaseCard } from "./BaseCard";
import { NovaShockDemolishers } from "./cards/NovaShockDemolishers";
import { PhotonProtectorate } from "./cards/PhotonProtectorate";
import { TerrabreakAnnihilators } from "./cards/TerrabreakAnnihilators";

const cardimgbase = "/assets/cards";

const GAMECARDS: { [id: string]: BaseCard } = {
  photon_protectorate: new PhotonProtectorate({
    name: "Photon Protectorate",
    img: `${cardimgbase}/blue/photon_protectorate.png`,
    trooptype: "TROOPERS",
    hp: 20,
    shield: 13,
    armor: 5,
    attackPower: 5,
    attackRange: 2,
    movement: 1,
    power: 5,
  }),
  novaShock_demolishers: new NovaShockDemolishers({
    name: "NovaShock Demolishers",
    img: `${cardimgbase}/blue/novaShock_demolishers.png`,
    trooptype: "TROOPERS",
    hp: 14,
    shield: 25,
    armor: 8,
    attackPower: 1,
    attackRange: 1,
    movement: 2,
    power: 10,
  }),
  terrabreak_annihilators: new TerrabreakAnnihilators({
    name: "Terrabreak Annihilators",
    img: `${cardimgbase}/blue/terrabreak_annihilators.png`,
    trooptype: "JUGGERNAUTS",
    hp: 42,
    shield: 20,
    armor: 24,
    attackPower: 3,
    attackRange: 2,
    movement: 1,
    power: 7,
  }),
};

export default GAMECARDS;
