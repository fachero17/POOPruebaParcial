export class Factura {
  constructor(
    public numero: number,
    public fechaEmision: Date,
    public total: number,
  ) {}

  generarfactura(){}
}
