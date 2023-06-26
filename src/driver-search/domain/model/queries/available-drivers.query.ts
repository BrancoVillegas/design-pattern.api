export class AvailableDriversQuery {
  public readonly experienceYears: number;
  public readonly licenseType: string;
  public readonly age: number;

  constructor(experienceYears: number, licenseType: string, age: number) {
    this.experienceYears = experienceYears;
    this.licenseType = licenseType;
    this.age = age;
  }
}
