import React from "react";
import { GridOptions } from "ag-grid-community";

import Grid from "../Grid";

import * as mockTreeData from "./mockData/mockTreeData";

const GridExample = () => {
  const [gridApi, setGridApi] = React.useState({});
  const [filterText, setFilterText] = React.useState("");

  const onGridReady = ({ columnApi }) => {
    columnApi.autoSizeColumns(
      columnApi.getAllDisplayedColumns().map(col => col.id)
    );
  };

  const gridOptions: GridOptions = {
    defaultColDef: {
      resizable: true,
      sortable: true,
      filter: true
    },
    getDataPath: data => data.orgHierarchy,
    groupDefaultExpanded: -1,
    treeData: true
  };

  return (
    <>
      <input type="text" onChange={setFilterText} placeholder="Filter" />
      <Grid
        rowData={mockTreeData.default}
        columnDefs={[{ field: "jobTitle" }, { field: "employmentType" }]}
        onGridReady={onGridReady}
        gridOptions={gridOptions}
      />
    </>
  );
};

export default GridExample;
