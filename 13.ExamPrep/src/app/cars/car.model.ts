export class CarModel {
  constructor(
    public make?: string,
    public model?: string,
    public year?: number,
    public engine?: string,
    public price?: number,
    public image?: string,
    public mileage?: number,
    public likes?: number,
    public id?: number
  ) {}
}