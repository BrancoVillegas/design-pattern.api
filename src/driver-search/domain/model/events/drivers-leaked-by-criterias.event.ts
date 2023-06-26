export class DriversLeakedByCriteriasEvent {
  constructor(
    public readonly experienceYears: number,
    public readonly licenseType: string,
    public readonly age: number,
    public readonly driversLeaked: number,
    public readonly timestamp: Date,
  ) {}
}
