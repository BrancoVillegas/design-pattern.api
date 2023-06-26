import { Injectable } from '@nestjs/common';
import { Driver } from '../../domain/model/entities/driver.entity';

@Injectable()
export class DriverRepository {
  private drivers: Driver[] = [];

  create(driver: Driver): void {
    this.drivers.push(driver);
  }

  update(driver: Driver): void {
    const index = this.findIndex(driver.id);
    if (index !== -1) {
      this.drivers[index] = driver;
    }
  }

  delete(driverId: string): void {
    const index = this.findIndex(driverId);
    if (index !== -1) {
      this.drivers.splice(index, 1);
    }
  }

  findById(driverId: string): Driver | undefined {
    return this.drivers.find((driver) => driver.id === driverId);
  }

  findAll(): Driver[] {
    return this.drivers;
  }

  private findIndex(driverId: string): number {
    return this.drivers.findIndex((driver) => driver.id === driverId);
  }
}
