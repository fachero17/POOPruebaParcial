import { IObserver } from "../interfaces/IObserver";
import { Reservation } from "../services/ReservationService";

export class EmailNotificationObserver implements IObserver {
    public update(reservation: Reservation): void {
        console.log(`[EMAIL] Enviando confirmación de reserva a ${reservation.customerName} para la habitación ${reservation.room.getType()}`);
    }
}