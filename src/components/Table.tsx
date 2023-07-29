import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { getAgeFromTimestamp } from "../utils";
import getPlayers, { TPlayer } from "../api-data/get-players";
import { Player } from "../interfaces";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    minWidth: 300,
    renderCell: (params: GridRenderCellParams<String>) => (
      <Link to={`/${params.value}`}>{params.value}</Link>
    ),
    valueGetter: (params: GridValueGetterParams) => `${params.row.name || ""}`,
  },
  { field: "type", headerName: "Type", minWidth: 200 },
  {
    field: "points",
    headerName: "Points",
    minWidth: 200,
  },
  {
    field: "rank",
    headerName: "Rank",
    minWidth: 200,
  },
  {
    field: "age",
    headerName: "Age",
    minWidth: 200,
  },
];

let rows: Player[] = [];

export default function StickyHeadTable() {
  const [, setCricketers] = useState<TPlayer[]>([]);

  useEffect(() => {
    const getAllCricketers = async () => {
      try {
        const fetchedData = await getPlayers();
        setCricketers(fetchedData);

        let a = fetchedData;
        let b = JSON.parse(JSON.stringify(a));
        rows = b.map((cricketer: Player) => {
          const cricketersAge = getAgeFromTimestamp(cricketer.dob);
          return {
            ...cricketer,
            age: cricketersAge,
          };
        });
      } catch (error) {
        console.error(error);
      }
    };

    getAllCricketers();
  }, []);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </Paper>
  );
}
