import { Cliente } from './Cliente';
import { Reserva } from './Reserva';
import { Pago } from './Pago';
import { ServicioAdicional } from './ServicioAdicional';

export class Factura {
  constructor(
    private numero: number,
    private fechaEmision: Date,
    private total: number,
    private cliente: Cliente,
    private reserva: Reserva,
    private pago: Pago,
    private servicios: ServicioAdicional[]
  ) {}

  public generarPDF(): void {}

  public getTotal(): number {
    return this.total;
  }
}
