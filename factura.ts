// Archivo: Pago.ts
export class Pago {
  constructor(
    public monto: number,
    public fecha: Date,
    public metodo: 'efectivo' | 'tarjeta' | 'transferencia',
  ) {}

  procesarPago(){}
}

// Archivo: Factura.ts
export class Factura {
  constructor(
    public numero: number,
    public fechaEmision: Date,
    public total: number,
  ) {}

  generarfactura(){}
}
