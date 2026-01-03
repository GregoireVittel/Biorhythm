export interface BiorhythmData {
  date: string;
  physical: number;
  emotional: number;
  intellectual: number;
  average: number;
}

export interface BiorhythmState {
  physical: number;
  emotional: number;
  intellectual: number;
}

export enum CycleType {
  PHYSICAL = 'Physical',
  EMOTIONAL = 'Emotional',
  INTELLECTUAL = 'Intellectual'
}
