import { BaseCard } from "./BaseCard";

export class Assassin extends BaseCard {
  constructor(data: Partial<BaseCard>) {
    super(data);
  }

  skills() {
    console.log("Hey, I'm an Assassin!");
  }
}
