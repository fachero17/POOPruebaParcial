

export class Reserva {
  constructor(
    private codigo: string,
    private fechaInicio: Date,
    private fechaFin: Date,
    private estado: boolean,
  ) {}

  confirmar(){}
  cancelar(){}
}
