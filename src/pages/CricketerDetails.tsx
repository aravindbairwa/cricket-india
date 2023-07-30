import React, { useContext, useEffect } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import PlayerDetails from "../components/PlayerDetails";
import Paper from "@mui/material/Paper";
import SimilarPlayers from "../components/SimilarPlayers";
import { GlobalContext } from "../contexts/GlobalContext";
import { useParams } from "react-router-dom";
import BasicBreadcrumbs from "../components/Breadcrumbs";

const CricketerDetails: React.FC = () => {
  const { cricketer } = useParams<{ cricketer: string }>();
  const { setParam } = useContext(GlobalContext);

  useEffect(() => setParam(cricketer), [cricketer, setParam]);

  return (
    <section>
      <div className="z-10">
        <StyledEngineProvider injectFirst>
          <Paper
            elevation={3}
            className="p-16 flex flex-col gap-12"
            classes={{ root: "h-[100vh] overflow-scroll bg-[#007bff]" }}
          >
            <BasicBreadcrumbs />
            <PlayerDetails />
            <SimilarPlayers />
          </Paper>
        </StyledEngineProvider>
      </div>
      <div className="air air1"></div>
      <div className="air air2"></div>
      <div className="air air3"></div>
      <div className="air air4"></div>
    </section>
  );
};

export default CricketerDetails;
