import { Contract } from '../domain/model/entities/contract.entity';

export interface ContractTemplate {
  generateContract(contract: Contract): string;
}
