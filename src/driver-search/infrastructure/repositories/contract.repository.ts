import { Injectable } from '@nestjs/common';
import { Contract } from '../../domain/model/entities/contract.entity';

@Injectable()
export class ContractRepository {
  private contracts: Contract[] = [];

  create(contract: Contract): void {
    this.contracts.push(contract);
  }

  update(contract: Contract): void {
    const index = this.findIndex(contract.id);
    if (index !== -1) {
      this.contracts[index] = contract;
    }
  }

  delete(contractId: string): void {
    const index = this.findIndex(contractId);
    if (index !== -1) {
      this.contracts.splice(index, 1);
    }
  }

  findById(contractId: string): Contract | undefined {
    return this.contracts.find((contract) => contract.id === contractId);
  }

  findAll(): Contract[] {
    return this.contracts;
  }

  private findIndex(contractId: string): number {
    return this.contracts.findIndex((contract) => contract.id === contractId);
  }
}
