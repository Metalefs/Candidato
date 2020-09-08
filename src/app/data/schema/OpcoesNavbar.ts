export class OpcaoNavbar{
  Titulo: string;
  Link: string;
  Icon: string;
  Areas:string[];
  constructor(Titulo: string,
    Link: string,
    Icon: string,
    Areas:string[]){
    this.Titulo= Titulo;
    this.Link= Link;
    this.Icon= Icon; 
    this.Areas = Areas;
  }  
}

export class OpcaoNavbarFA{
  Titulo: string;
  Link: string;
  Icon: object;
  Areas:string[];
  constructor(Titulo: string,
    Link: string,
    Icon: object,
    Areas:string[]){
    this.Titulo= Titulo;
    this.Link= Link;
    this.Icon= Icon; 
    this.Areas = Areas;
  }  
}