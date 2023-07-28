import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import PlayerDetails from '../components/PlayerDetails';
import Paper from '@mui/material/Paper';
import SimilarPlayers from '../components/SimilarPlayers';


const CricketerDetails: React.FC = () => {
  return <div>
     <StyledEngineProvider injectFirst>
     <Paper elevation={3} className="p-16 flex flex-col gap-12"  classes={{ "root": "h-[100%] bg-[#007bff]"}} >
      <PlayerDetails />
      <SimilarPlayers />
      </Paper>
      </StyledEngineProvider></div>;
};

export default CricketerDetails;