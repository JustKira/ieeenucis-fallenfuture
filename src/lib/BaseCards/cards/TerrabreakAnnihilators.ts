import { BaseCard } from "../BaseCard";

export class TerrabreakAnnihilators extends BaseCard {
  constructor(data: Partial<BaseCard>) {
    super(data);

    this.name = "Terrabreak Annihilators";
  }

  passiveSkill(): void {
    console.log("Terrabreak Annihilators Passive Skill Trigger");
  }

  basicSkill(): void {
    console.log("Terrabreak Annihilators Basic Skill Trigger");
  }

  ultimateSkill(): void {
    console.log("Terrabreak Annihilators Ultimate Skill Trigger");
  }
}
