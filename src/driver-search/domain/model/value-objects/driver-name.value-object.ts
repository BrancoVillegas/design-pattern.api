export class DriverName {
  private readonly firstName: string;
  private readonly lastName: string;

  constructor(firstName: string, lastName: string) {
    // Validar que los nombres cumplan con ciertas reglas de negocio
    // ...
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  // Sobrescribir el método toString para obtener la representación del objeto como string
  toString(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  // Sobrescribir el método equals para comparar dos objetos DriverName
  equals(name: DriverName): boolean {
    return (
      name instanceof DriverName &&
      name.firstName === this.firstName &&
      name.lastName === this.lastName
    );
  }
}
