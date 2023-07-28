import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { getAgeFromTimestamp, timestampToDateString } from "../utils";

const PlayerDetails = () => {
  const player = {
    id: "_1",
    name: "Virat Kohli",
    description:
      "Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL and for the Delhi in Indian domestic cricket.",
    type: "batsman",
    points: 282,
    dob: 594691200000,
    rank: 3,
  };

  return (
    <div className="min-w-full h-[100%]">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div className="flex gap-2 items-baseline">
            <Typography
              sx={{ fontSize: 16, fontWeight: "bold", minWidth: "100px" }}
              color="black"
              gutterBottom
            >
              Player Id:
            </Typography>
            <Typography
              sx={{ fontSize: 16, fontWeight: "bolder" }}
              color="#007bff"
            >
              {player.id.slice(1)}
            </Typography>
          </div>

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
              {player.name}
            </Typography>
          </div>

          <div className="flex gap-2 items-baseline">
            <Typography
              sx={{ fontSize: 16, fontWeight: "bold", minWidth: "100px" }}
              color="black"
              gutterBottom
            >
              Description:
            </Typography>
            <Typography
              sx={{ fontSize: 16, fontWeight: "bolder" }}
              color="#007bff"
            >
              {player.description}
            </Typography>
          </div>

          <div className="flex gap-2  justify-start items-baseline">
            <Typography
              sx={{ fontSize: 16, fontWeight: "bold", minWidth: "100px" }}
              color="black"
              gutterBottom
            >
              Type:
            </Typography>
            <Typography
              sx={{ fontSize: 16, fontWeight: "bolder" }}
              color="#fa463b"
            >
              {player.type.charAt(0).toUpperCase() + player.type.slice(1)}
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
              {player.points}
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
              {player.rank}
            </Typography>
          </div>

          <div className="flex gap-2 items-baseline">
            <Typography
              sx={{ fontSize: 16, fontWeight: "bold", minWidth: "100px" }}
              color="black"
              gutterBottom
            >
              DOB:
            </Typography>
            <Typography sx={{ fontSize: 16 }} color="#007bff">
              {timestampToDateString(player.dob)}
            </Typography>
          </div>
          <div className="flex gap-2 items-baseline">
            <Typography
              sx={{ fontSize: 16, fontWeight: "bold", minWidth: "100px" }}
              color="black"
              gutterBottom
            >
              Age:
            </Typography>
            <Typography sx={{ fontSize: 16 }} color="#007bff">
              {getAgeFromTimestamp(player.dob)}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlayerDetails;
