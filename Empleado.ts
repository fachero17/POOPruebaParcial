export class Empleado {
  constructor(
    public nombre: string,
    public idEmpleado: string,
    public cargo: string,
  ) {}

  registrarCheckIn(){}
  registrarCheckOut(){}
}

// Archivo: ServicioAdicional.ts
export class ServicioAdicional {
  constructor(
    public nombre: string,
    public costo: number,
    public descripcion: string,
  ) {}

  asignarServicio(){}
}