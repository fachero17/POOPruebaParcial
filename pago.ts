export class Pago {
  constructor(
    private monto: number,
    private fecha: Date,
    private metodo: 'efectivo' | 'tarjeta' | 'transferencia',
  ) {}

  procesarPago(){}
}



