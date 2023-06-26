import { Driver } from '../domain/model/entities/driver.entity';

export interface DriverNotifier {
  notifyDriver(driver: Driver, message: string): void;
}
