import { Habitacion } from './Habitacion';

export class Hotel {
  private habitaciones: Habitacion[] = [];
  constructor(
    public nombre: string,
    public direccion: string,
    public telefono: string
    ) {}

 mostrarHabitacionesDisponibles(): void {
    console.log(`${this.nombre} tiene ${this.habitacionesDisponibles} habitaciones disponibles.`);
  }  gestionarServicios(){}
}
