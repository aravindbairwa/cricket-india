import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { getRankByPoints } from "../utils";

const SimilarPlayers = () => {
  const players = [
    {
      name: "Virat Kohli",
      points: 282,
      rank: 3,
    },
    {
      name: "Virat Kohli",
      points: 242,
      rank: 3,
    },
    {
      name: "Virat Kohli",
      points: 282,
      rank: 3,
    },
    {
      name: "Virat Kohli",
      points: 282,
      rank: 3,
    },
  ];

  return (
    <>
    <h1 className="text-center text-4xl">Similar Players</h1>
    <div className="flex flex-wrap justify-center">
      
      {players.map((item) => (
        <div
          key={item.points}
          className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-4"
        >
          <Card>
            <CardContent>
              <div className="flex gap-2 items-baseline">
                <Typography
                  sx={{ fontSize: 16, fontWeight: "bold", minWidth: "100px" }}
                  color="black"
                  gutterBottom
                >
                  Name:
                </Typography>
                <Typography
                  sx={{ fontSize: 40, fontWeight: "bolder" }}
                  color="#fa463b"
                >
                  {item.name}
                </Typography>
              </div>

              <div className="flex gap-2 items-baseline">
                <Typography
                  sx={{ fontSize: 16, fontWeight: "bold", minWidth: "100px" }}
                  color="black"
                  gutterBottom
                >
                  Points:
                </Typography>
                <Typography
                  sx={{ fontSize: 16, fontWeight: "bolder" }}
                  color="#fa463b"
                >
                  {item.points}
                </Typography>
              </div>

              <div className="flex gap-2 items-baseline">
                <Typography
                  sx={{ fontSize: 16, fontWeight: "bold", minWidth: "100px" }}
                  color="black"
                  gutterBottom
                >
                  Rank:
                </Typography>
                <Typography
                  sx={{ fontSize: 16, fontWeight: "bolder" }}
                  color="#fa463b"
                >
                  {getRankByPoints(players, item.points)}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  </>
  );
};

export default SimilarPlayers;
