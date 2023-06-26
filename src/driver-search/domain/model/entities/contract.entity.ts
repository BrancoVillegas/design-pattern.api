export class Contract {
  constructor(
    public readonly id: string,
    public readonly driverId: string,
    public readonly details: string,
    public readonly startDate: Date,
    public readonly endDate: Date,
  ) {}

  getId() {
    return this.id;
  }
}
