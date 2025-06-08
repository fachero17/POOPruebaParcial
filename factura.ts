import { Cliente } from './Cliente';
import { Reserva } from './Reserva';
import { Pago } from './Pago';
import { ServicioAdicional } from './ServicioAdicional';

export class Factura {
  constructor(
    public numero: number,
    public fechaEmision: Date,
    public total: number,
    public cliente: Cliente,
    public reserva: Reserva,
    public pago: Pago,
    public serviciosAdicionales: ServicioAdicional[]
  ) {}

  generarPDF(): void {}
}
