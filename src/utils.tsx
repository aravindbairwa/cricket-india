import { Player, SimilarPlayer, SimilarPlayers } from "./interfaces";

export function filterCricketersByType(objects: Player[], type: string): Player[] {
  return objects.filter((obj) => obj.type === type);
}

export function sortByRankAscending(objects: Player[]): Player[] | null {
  if (objects.every((obj) => obj.hasOwnProperty("rank"))) {
    // return objects.sort((a, b) => a?.rank - b?.rank);
  }
  return null;
}

export function addRankBasedOnPoints(players: Player[]): Player[] {
  if (!players || players.length === 0) {
    return [];
  }

  const sortedPlayers = [...players].sort((a, b) => b.points - a.points);
  const rankedPlayers = sortedPlayers.map((player, index) => ({
    ...player,
    rank: index + 1,
  }));

  return rankedPlayers;
}

export function getAgeFromTimestamp(timestamp: number): string | null {
    if (!timestamp) {
      return null;
    }
  
    const dob = new Date(timestamp);
    const now = new Date();
    
    let age = now.getFullYear() - dob.getFullYear();
    
    if (now.getMonth() < dob.getMonth() || 
       (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) {
      age--;
    }
  
    return age.toString();
  }

  export function timestampToDateString(timestamp: number): string | null {
    if (!timestamp) {
      return null;
    }
  
    const dateOfBirth = new Date(timestamp);
    const year = dateOfBirth.getFullYear();
    const month = dateOfBirth.getMonth() + 1; // Months are zero-based, so add 1
    const day = dateOfBirth.getDate();
  
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }

 export  function getRankByPoints(objects: Player[]| SimilarPlayer[], points: number): number | null {
    if (!objects || objects.length === 0) {
      return null; 
    }
  
    const sortedObjects = [...objects].sort((a, b) => b.points - a.points);
    const index = sortedObjects.findIndex(obj => obj.points === points);
  
    if (index === -1) {
      return null; 
    }
  
    return index + 1; // Rank is 1-based, so add 1 to the index
  }