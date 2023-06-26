import { Injectable } from '@nestjs/common';
import { AvailableDriversQuery } from '../query/available-drivers.query';
import { Driver } from 'src/driver-search/domain/model/entities/driver.entity';
import { DriverRepository } from 'src/driver-search/domain/repositories/driver.repository';

@Injectable()
export class SearchService {
  constructor(private readonly driverRepository: DriverRepository) {}

  async searchAvailableDrivers(
    query: AvailableDriversQuery,
  ): Promise<Driver[]> {
    const { experienceYears, licenseType, age } = query;

    // Lógica para filtrar los conductores disponibles
    const drivers = await this.driverRepository.findAvailableDrivers(
      experienceYears,
      licenseType,
      age,
    );

    return drivers;
  }
}
