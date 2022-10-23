export class pedido{
    constructor(
      public id: number,
      public id_producto: string,
      public producto: string,
      public cantidad: string,
      public precio: string,
      public total: string,
      public cedula: string,
      public direccion: string,
      public created_at: string 
      ){}
  }
  