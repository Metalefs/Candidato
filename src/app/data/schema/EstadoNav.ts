export class EstadoNav {
  pagina: string;
  has_badge: boolean;
  is_solid: boolean;
  is_active: boolean;
  constructor(
    pagina: string,
    has_badge: boolean,
    is_solid: boolean,
    is_active: boolean
  ){
    this.pagina = pagina;
    this.has_badge = has_badge;
    this.is_solid = is_solid;
    this.is_active = is_active;
}
}