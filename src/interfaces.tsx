export interface Player {
    id: string;
    name: string;
    description: string;
    type: string;
    points: number;
    dob: Date;
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