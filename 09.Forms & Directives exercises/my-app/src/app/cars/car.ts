export class Car {
  constructor (
    public id: number,
    public make: string,
    public model: string,
    public image: string,
    public owner: string,
    public description: string,
    public price: number,
    public engine: string,
    public date: number,
    public milleage?: number,
    public comments?: string[]
  ) { }
}