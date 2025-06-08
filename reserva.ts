
// Archivo: Reserva.ts
export class Reserva {
  constructor(
    public codigo: string,
    public fechaInicio: Date,
    public fechaFin: Date,
    public estado: boolean,
  ) {}

  confirmar(){}
  cancelar(){}
}