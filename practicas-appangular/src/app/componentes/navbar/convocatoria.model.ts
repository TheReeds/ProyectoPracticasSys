export interface Convocatoria {
  id: number;
  titulo: string;
  descripcion: string;
  fechaInicio: Date;
  fechaFin: Date;
  empresa: Empresa;
  especialidad: Especialidad;
  imagenes: Imagen[];
}

export interface Empresa {
  id: number;
  nombre: string;
  // Otros campos según tus necesidades
}

export interface Especialidad {
  id: number;
  nombre: string;
  // Otros campos según tus necesidades
}

export interface Imagen {
  id: number;
  url: string;
  // Otros campos según tus necesidades
}
