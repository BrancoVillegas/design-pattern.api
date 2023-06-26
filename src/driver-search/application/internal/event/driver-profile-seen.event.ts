import { Driver } from 'src/driver-search/domain/model/entities/driver.entity';

export class DriverProfileSeenEvent {
  constructor(public readonly driver: Driver) {}
}
