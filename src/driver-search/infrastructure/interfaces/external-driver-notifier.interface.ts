import { Driver } from '../../domain/model/entities/driver.entity';

export interface ExternalDriverNotifier {
  notifyDriverAssignment(driver: Driver): void;
}
