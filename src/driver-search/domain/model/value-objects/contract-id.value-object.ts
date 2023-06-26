export class ContractId {
  private readonly value: string;

  constructor(value: string) {
    // Validar que el valor cumpla con ciertas reglas de negocio
    // ...
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

  // Sobrescribir el método toString para obtener la representación del objeto como string
  toString(): string {
    return this.value;
  }

  // Sobrescribir el método equals para comparar dos objetos ContractId
  equals(contractId: ContractId): boolean {
    return contractId instanceof ContractId && contractId.value === this.value;
  }
}
