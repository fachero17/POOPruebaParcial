import { IRoom } from "../interfaces/IRoom";
import { IObserver } from "../interfaces/IObserver";

export interface Reservation {
    id: string;
    customerName: string;
    room: IRoom;
    startDate: Date;
    endDate: Date;
}

export class ReservationService {
    private static instance: ReservationService;
    private reservations: Reservation[] = [];
    private observers: IObserver[] = [];

    private constructor() {}

    public static getInstance(): ReservationService {
        if (!ReservationService.instance) {
            ReservationService.instance = new ReservationService();
        }
        return ReservationService.instance;
    }

    public addObserver(observer: IObserver): void {
        this.observers.push(observer);
    }

    private notifyObservers(reservation: Reservation): void {
        for (const observer of this.observers) {
            observer.update(reservation);
        }
    }

    public createReservation(customerName: string, room: IRoom, startDate: Date, endDate: Date): Reservation {
        const newReservation: Reservation = {
            id: Math.random().toString(36).substring(2, 9),
            customerName,
            room,
            startDate,
            endDate,
        };

        this.reservations.push(newReservation);
        console.log(`Reserva creada para ${customerName} en una habitación ${room.getType()}`);
        this.notifyObservers(newReservation);
        return newReservation;
    }

    public getReservations(): Reservation[] {
        return this.reservations;
    }
}