import { BaseCard } from "../BaseCard";

export class PhotonProtectorate extends BaseCard {
  constructor(data: Partial<BaseCard>) {
    super(data);

    this.name = "Photon Protectorate";
  }

  passiveSkill(): void {
    console.log("Photon Protectorate Passive Skill Trigger");
  }

  basicSkill(): void {
    console.log("Photon Protectorate Basic Skill Trigger");
  }

  ultimateSkill(): void {
    console.log("Photon Protectorate Ultimate Skill Trigger");
  }
}
