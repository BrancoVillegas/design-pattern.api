import { Injectable } from '@nestjs/common';
import { Driver } from '../model/entities/driver.entity';

@Injectable()
export class DriverRepository {
  private drivers: Driver[] = [];

  create(driver: Driver): void {
    this.drivers.push(driver);
  }

  update(driver: Driver): void {
    const index = this.findIndexById(driver.getId());
    if (index !== -1) {
      this.drivers[index] = driver;
    }
  }

  delete(driver: Driver): void {
    const index = this.findIndexById(driver.getId());
    if (index !== -1) {
      this.drivers.splice(index, 1);
    }
  }

  findAll(): Driver[] {
    return this.drivers;
  }

  findById(id: string): Driver | undefined {
    return this.drivers.find((driver) => driver.getId() === id);
  }

  private findIndexById(id: string): number {
    return this.drivers.findIndex((driver) => driver.getId() === id);
  }

  async findAvailableDrivers(
    experienceYears: number,
    licenseType: string,
    age: number,
  ) {
    const filteredDrivers = this.drivers.filter((driver) => {
      return (
        driver.getExperienceYears() >= experienceYears &&
        driver.getLicenseType() === licenseType &&
        driver.getAge() <= age
      );
    });

    return filteredDrivers;
  }
}
