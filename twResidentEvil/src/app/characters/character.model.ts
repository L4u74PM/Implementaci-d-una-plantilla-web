export interface Character {
  id: number;
  nom: string;
  rol: string;
  affiliation: 'S.T.A.R.S.' | 'Umbrella' | 'Superviviente' | 'B.S.A.A.' | 'Agente' | 'Civil';
  bio: string;
  imatge: string;
  status: 'Vivo' | 'Fallecido' | 'Desconocido';
}