import { Driver } from 'src/driver-search/domain/model/entities/driver.entity';

export class DriversSelectedEvent {
  constructor(public readonly drivers: Driver[]) {}
}
