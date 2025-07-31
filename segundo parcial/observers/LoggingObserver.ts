import { IObserver } from "../interfaces/IObserver";
import { Reservation } from "../services/ReservationService";

export class LoggingObserver implements IObserver {
    public update(reservation: Reservation): void {
        console.log(`[LOG] Nueva reserva registrada: ID ${reservation.id} para ${reservation.customerName}`);
    }
}