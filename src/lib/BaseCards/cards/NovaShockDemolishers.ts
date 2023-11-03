import { BaseCard } from "../BaseCard";

export class NovaShockDemolishers extends BaseCard {
  constructor(data: Partial<BaseCard>) {
    super(data);

    this.name = "NovaShock Demolishers";
  }

  passiveSkill(): void {
    console.log("NovaShock Demolishers Passive Skill Trigger");
  }

  basicSkill(): void {
    console.log("NovaShock Demolishers Basic Skill Trigger");
  }

  ultimateSkill(): void {
    console.log("NovaShock Demolishers Ultimate Skill Trigger");
  }
}
