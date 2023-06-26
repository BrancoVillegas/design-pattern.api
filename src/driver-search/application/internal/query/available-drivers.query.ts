export class AvailableDriversQuery {
  constructor(
    public readonly experienceYears: number,
    public readonly licenseType: string,
    public readonly age: number,
  ) {}
}
