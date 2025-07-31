import { Reservation } from "../services/ReservationService";

export interface IObserver {
    update(reservation: Reservation): void;
}