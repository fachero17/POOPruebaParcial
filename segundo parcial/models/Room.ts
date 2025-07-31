import { IRoom } from "../interfaces/IRoom";

export abstract class Room implements IRoom {
    protected type: string;
    protected price: number;

    constructor(type: string, price: number) {
        this.type = type;
        this.price = price;
    }

    getType(): string {
        return this.type;
    }

    getPrice(): number {
        return this.price;
    }
}