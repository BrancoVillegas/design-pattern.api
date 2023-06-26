export class Driver {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly experienceYears: number,
    public readonly licenseType: string,
    public readonly age: number,
  ) {}

  getExperienceYears() {
    return this.experienceYears;
  }

  getLicenseType() {
    return this.licenseType;
  }

  getAge() {
    return this.age;
  }

  getId() {
    return this.id;
  }
}
