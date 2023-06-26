export class DriverId {
  private readonly value: string;

  constructor(value: string) {
    // Validar que el ID del conductor cumpla con ciertas reglas de negocio
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

  // Sobrescribir el método equals para comparar dos objetos DriverId
  equals(id: DriverId): boolean {
    return id instanceof DriverId && id.value === this.value;
  }
}
