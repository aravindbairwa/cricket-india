import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { getAgeFromTimestamp, timestampToDateString } from "../utils";
import { GlobalContext } from "../contexts/GlobalContext";

const PlayerDetails = () => {
  const { activeCricketer } = useContext(GlobalContext);

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
              {activeCricketer &&
                activeCricketer.id &&
                activeCricketer.id.slice(1)}
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
              {activeCricketer?.name}
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
              {activeCricketer?.description}
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
              {activeCricketer?.type
                ? activeCricketer.type.charAt(0).toUpperCase() +
                  activeCricketer.type.slice(1)
                : ""}
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
              {activeCricketer?.points}
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
              {activeCricketer?.rank}
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
              {timestampToDateString(
                activeCricketer?.dob ? activeCricketer.dob : 0
              )}
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
              {getAgeFromTimestamp(
                activeCricketer?.dob ? activeCricketer.dob : 0
              )}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlayerDetails;
