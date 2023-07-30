import  { useCallback, useEffect, useState } from "react";
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
      <Link
        to={`/${params.value}`}
        onClick={() =>
          localStorage.setItem(
            "activeSortingAndFilters",
            JSON.stringify(activeSortingAndFilters)
          )
        }
      >
        {params.value}
      </Link>
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
let tableInitialState: Object = {
  pagination: {
    paginationModel: { page: 0, pageSize: 10 },
  },
};
let activeSortingAndFilters = {
  sorting: {
    sortModel: [
      {
        field: "name",
        sort: "asc",
      },
    ],
  },
  filter: {
    filterModel: {
      items: [
        {
          field: "name",
          operator: "contains",
          value: "",
          id: 1,
        },
      ],
    },
  },
};

export default function StickyHeadTable() {
  const [, setCricketers] = useState<TPlayer[]>([]);
  const [loading, setLoading] = useState<boolean>(false);


  const getAllCricketers = useCallback(async () => {
    try {
      setLoading(true);
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
      const isValue = localStorage.getItem("activeSortingAndFilters");
      if (isValue) activeSortingAndFilters = JSON.parse(isValue);
      tableInitialState = { ...tableInitialState, ...activeSortingAndFilters };
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getAllCricketers();
  }, [getAllCricketers]);

  const handleSortingAndFilters = useCallback(
    (newState: any, changeType: string) => {
      console.log(newState);

      if(newState[0] === null || newState[0] === undefined) return;
      if (changeType === "sort") {
        const isSortApplied = activeSortingAndFilters.sorting.sortModel.some(
          (s) => {
            return s?.field.toLowerCase() === newState[0]?.field.toLowerCase();
          }
        );

        if (!isSortApplied) {
          activeSortingAndFilters.sorting.sortModel.unshift(newState[0]);
        } else {
          activeSortingAndFilters.sorting.sortModel.forEach((s) => {
            if (s.field === newState[0].field) s.sort = newState[0].sort;
          });
        }
      } else {
        const isFilterApplied =
          activeSortingAndFilters.filter.filterModel.items.some((f) => {
            return f?.field.toLowerCase() === newState[0]?.field.toLowerCase();
          });
        if (!isFilterApplied) {
          activeSortingAndFilters.filter.filterModel.items.unshift(newState[0]);
        } else {
          activeSortingAndFilters.filter.filterModel.items.forEach((f) => {
            if (f.field === newState[0].field) {
              f.operator = newState[0].operator;
              f.value = newState[0].value;
              f.id = newState[0].id;
            }
          });
        }
      }

      localStorage.setItem(
        "activeSortingAndFilters",
        JSON.stringify(activeSortingAndFilters)
      );
    },
    []
  );

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", zIndex: 5 }}>
      <DataGrid
        loading={loading}
        rows={rows}
        columns={columns}
        initialState={tableInitialState}
        pageSizeOptions={[10, 20]}
        sortingOrder={["asc", "desc"]}
        onFilterModelChange={(filter) => {
          handleSortingAndFilters(filter.items, "filter");
        }}
        onSortModelChange={(sort) => handleSortingAndFilters(sort, "sort")}
      />
    </Paper>
  );
}
