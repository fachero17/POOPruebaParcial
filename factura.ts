export class Factura {
  constructor(
    private numero: number,
    private fechaEmision: Date,
    private total: number,
  ) {}

  public generarPDF(): void {}

  public getTotal(){}
}
