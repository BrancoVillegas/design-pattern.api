import { Driver } from 'src/driver-search/domain/model/entities/driver.entity';

export class DriversSearchedEvent {
  constructor(public readonly drivers: Driver[]) {}
}
