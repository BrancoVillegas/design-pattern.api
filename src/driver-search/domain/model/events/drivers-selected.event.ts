import { Driver } from '../entities/driver.entity';

export class DriversSelectedEvent {
  constructor(
    public readonly drivers: Driver[],
    public readonly timestamp: Date,
  ) {}
}
