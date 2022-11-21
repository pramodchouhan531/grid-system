import React from "react";
import { AgGridReact } from "ag-grid-react";

import { LicenseManager } from "ag-grid-enterprise";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";

LicenseManager.setLicenseKey("foo");

const Grid = props => {
  const onGridReady = ({ columnApi }) => {
    columnApi.autoSizeColumns(
      columnApi.getAllDisplayedColumns().map(col => col.id)
    );
  };

  return (
    <div
      className="ag-theme-balham-dark"
      style={{
        height: "100%",
        width: "100%"
      }}
    >
      <AgGridReact
        {...props}
        onGridReady={params => {
          onGridReady(params);
          props.onGridReady(params);
          return params;
        }}
      />
    </div>
  );
};

export default Grid;
