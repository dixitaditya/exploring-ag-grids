"use client";  // Mark this as a client component
import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import {useDataTableContext} from "../contexts/DataTableContext"


const TableView = () => {

  const [rowData, setRowData] = useState<any[]>(); // Load your CSV data here
  const [columnDefs, setColumnsDefs] = useState();

  const {initTableData,tableData, columnFields, setSelectedTableData} = useDataTableContext()

  useEffect(()=>{
    initTableData()
  },[])

  useEffect(()=>{
    setRowData(tableData)
  },[tableData])

  useEffect(()=>{
    setColumnsDefs(columnFields)
  },[columnFields])

  console.log("rowData",rowData)
  console.log("columnDefs",columnDefs)

  


    // Function to handle selected rows
    const getSelectedRows = () => {
        const selectedRows = gridRef.current?.api.getSelectedRows();
        console.log('Selected Rows:', selectedRows);
        setSelectedTableData(selectedRows)
      };

      const gridRef = React.useRef<AgGridReact>(null);

  const rowSelection = 'multiple';
  return (<>
    <div className="ag-theme-quartz-dark" style={{ height: '100%', width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{ resizable: true, sortable: true }}
        rowSelection={rowSelection}
        ref={gridRef}
      />
    </div>
    <button onClick={getSelectedRows} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Get Selected Rows
      </button>

    </>
  );
};

export default TableView;
