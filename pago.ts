export class Pago {
  constructor(
    public monto: number,
    public fecha: Date,
    public metodo: 'efectivo' | 'tarjeta' | 'transferencia',
  ) {}

  procesarPago(){}
}



