import { Contract } from '../entities/contract.entity';

export class ContractCreatedEvent {
  constructor(
    public readonly contract: Contract,
    public readonly timestamp: Date,
  ) {}
}
