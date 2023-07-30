import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Player } from "../interfaces";
import { GlobalContext } from "../contexts/GlobalContext";
import { Link } from "react-router-dom";

const SimilarPlayers = () => {
  const [players, setPlayers] = useState<Player[]>();
  const { playersOfSameType } = useContext(GlobalContext);

  useEffect(() => {
    if (playersOfSameType) setPlayers(playersOfSameType);
  }, [playersOfSameType]);

  return (
    <>
      {players && players.length ? (
        <Typography
          sx={{
            fontSize: 36,
            fontWeight: "bold",
            minWidth: "100px",
            textAlign: "center",
            zIndex: 10,
          }}
          color="#efefef"
          gutterBottom
        >
          Similar Players
        </Typography>
      ) : null}
      <div className="flex flex-wrap justify-center z-10">
        {players &&
          players.map((player) => (
            <Link
              to={`/${player.name}`}
              key={player.id}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-4"
            >
              <Card>
                <CardContent>
                  <div className="flex gap-2 items-baseline">
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontWeight: "bold",
                        minWidth: "100px",
                      }}
                      color="black"
                      gutterBottom
                    >
                      Name:
                    </Typography>
                    <Typography
                      sx={{ fontSize: 40, fontWeight: "bolder" }}
                      color="#fa463b"
                    >
                      {player?.name}
                    </Typography>
                  </div>

                  <div className="flex gap-2 items-baseline">
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontWeight: "bold",
                        minWidth: "100px",
                      }}
                      color="black"
                      gutterBottom
                    >
                      Points:
                    </Typography>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: "bolder" }}
                      color="#fa463b"
                    >
                      {player?.points}
                    </Typography>
                  </div>

                  <div className="flex gap-2 items-baseline">
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontWeight: "bold",
                        minWidth: "100px",
                      }}
                      color="black"
                      gutterBottom
                    >
                      Rank:
                    </Typography>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: "bolder" }}
                      color="#fa463b"
                    >
                      {player?.rank}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
      </div>
    </>
  );
};

export default SimilarPlayers;
