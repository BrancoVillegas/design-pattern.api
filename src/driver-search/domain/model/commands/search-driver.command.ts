import { ICommand } from '@nestjs/cqrs';

export class SearchDriverCommand implements ICommand {
  constructor(
    public readonly experienceYears: number,
    public readonly licenseType: string,
    public readonly age: number,
  ) {}
}
