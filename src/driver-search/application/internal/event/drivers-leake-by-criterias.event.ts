import { Driver } from 'src/driver-search/domain/model/entities/driver.entity';

export class DriversLeakedByCriteriasEvent {
  constructor(public readonly drivers: Driver[]) {}
}
