export interface Player {
  id: string;
  name: string;
  description: string;
  type: string;
  points: number;
  dob: number;
  rank: number | null;
  age?: number | null;
}

export interface AllPlayers {
  players: Player[];
}

export interface SimilarPlayer {
  name: string;
  points: number;
}
export interface SimilarPlayers {
  similarPlayers: SimilarPlayer[];
}
