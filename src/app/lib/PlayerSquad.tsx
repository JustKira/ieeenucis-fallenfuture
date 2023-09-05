export class PlayerSquad implements PlayerSquad {
  units: Omit<PlayerCard, "account">[];
  positions: { x: number; y: number; id: number }[];

  constructor(
    playerCards: Omit<PlayerCard, "account">[],
    initialPositions: { x: number; y: number; id: number }[]
  ) {
    this.units = playerCards;
    this.positions = initialPositions;
  }

  insert(playerCard: Omit<PlayerCard, "account">, position: [number, number]) {
    if (this.units.length < 8) {
      const [x, y] = position;
      const positionExists = this.positions.some(
        (pos) => pos.x === x && pos.y === y
      );

      if (!positionExists) {
        const { id } = playerCard;

        this.units.push(playerCard);
        this.positions.push({ x, y, id });
      } else {
        console.log(
          `Position (${x}, ${y}) is already occupied by another card.`
        );
      }
    } else {
      console.log("Squad is already full. Cannot insert more units.");
    }
  }

  changePositions(
    playerCard1: Omit<PlayerCard, "account">,
    playerCard2: Omit<PlayerCard, "account">
  ) {
    const index1 = this.positions.findIndex((pos) => pos.id === playerCard1.id);
    const index2 = this.positions.findIndex((pos) => pos.id === playerCard2.id);

    [this.positions[index1].id, this.positions[index2].id] = [
      this.positions[index2].id,
      this.positions[index1].id,
    ];
  }

  changeOrder(
    playerCard1: Omit<PlayerCard, "account">,
    playerCard2: Omit<PlayerCard, "account">
  ) {
    const index1 = this.units.findIndex((card) => card.id === playerCard1.id);
    const index2 = this.units.findIndex((card) => card.id === playerCard2.id);

    [this.units[index1], this.units[index2]] = [
      this.units[index2],
      this.units[index1],
    ];
  }
}
