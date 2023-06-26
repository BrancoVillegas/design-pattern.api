import { Injectable } from '@nestjs/common';
import { Contract } from '../model/entities/contract.entity';

@Injectable()
export class ContractRepository {
  private contracts: Contract[] = [];

  create(contract: Contract): void {
    this.contracts.push(contract);
  }

  update(contract: Contract): void {
    const index = this.findIndexById(contract.getId());
    if (index !== -1) {
      this.contracts[index] = contract;
    }
  }

  delete(contract: Contract): void {
    const index = this.findIndexById(contract.getId());
    if (index !== -1) {
      this.contracts.splice(index, 1);
    }
  }

  findAll(): Contract[] {
    return this.contracts;
  }

  findById(id: string): Contract | undefined {
    return this.contracts.find((contract) => contract.getId() === id);
  }

  private findIndexById(id: string): number {
    return this.contracts.findIndex((contract) => contract.getId() === id);
  }
}
