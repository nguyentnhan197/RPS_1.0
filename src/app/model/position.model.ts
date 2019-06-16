export class Position{
  idPosition:number;
  positionName: string;


  public constructor(init?: Partial<Position >) {
    Object.assign(this, init);
  }



}
