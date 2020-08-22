export class OpcaoNavbar{
  Titulo: string;
  Link: string;
  Icon: string;
  constructor(Titulo: string,
    Link: string,
    Icon: string){
    this.Titulo= Titulo;
    this.Link= Link;
    this.Icon= Icon; 
  }  
}

export class OpcaoNavbarFA{
  Titulo: string;
  Link: string;
  Icon: object;
  constructor(Titulo: string,
    Link: string,
    Icon: object){
    this.Titulo= Titulo;
    this.Link= Link;
    this.Icon= Icon; 
  }  
}