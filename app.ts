import { ReservationService } from "./services/ReservationService";
import { LoggingObserver } from "./observers/LoggingObserver";
import { EmailNotificationObserver } from "./observers/EmailNotificationObserver";
import { StandardRoom } from "./models/StandardRoom";
import { DeluxeRoom } from "./models/DeluxeRoom";
import { SuiteRoom } from "./models/SuiteRoom";

// Obtener la instancia única del servicio de reservas (Singleton)
const reservationService = ReservationService.getInstance();

// Crear y registrar los observadores (Observer)
const logger = new LoggingObserver();
const emailNotifier = new EmailNotificationObserver();

reservationService.addObserver(logger);
reservationService.addObserver(emailNotifier);

// Crear instancias de las habitaciones
const standardRoom = new StandardRoom();
const deluxeRoom = new DeluxeRoom();
const suite = new SuiteRoom();

// Crear reservas
console.log("--- Creando Reservas ---");
const reservation1 = reservationService.createReservation(
    "Juan Pérez",
    standardRoom,
    new Date("2025-08-10"),
    new Date("2025-08-15")
);

const reservation2 = reservationService.createReservation(
    "Ana Gómez",
    deluxeRoom,
    new Date("2025-09-01"),
    new Date("2025-09-05")
);

const reservation3 = reservationService.createReservation(
    "Carlos Rivas",
    suite,
    new Date("2025-10-20"),
    new Date("2025-10-25")
);

// Mostrar todas las reservas
console.log("\n--- Listado Final de Reservas ---");
console.log(reservationService.getReservations());