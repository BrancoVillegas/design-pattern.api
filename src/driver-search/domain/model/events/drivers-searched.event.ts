export class DriversSearchedEvent {
  constructor(
    public readonly searchCriteria: string,
    public readonly driversFound: number,
    public readonly timestamp: Date,
  ) {}
}
