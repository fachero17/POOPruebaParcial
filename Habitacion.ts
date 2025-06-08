export class Habitacion {
  constructor(
    public numero: number,
    public tipo: string,
    public precio: number,
    public estado: boolean
  ){}

  Ocupada(){}
  Disponible(){}
}
