import { Contract } from 'src/driver-search/domain/model/entities/contract.entity';

export class ContractCreatedEvent {
  constructor(public readonly contract: Contract) {}
}
