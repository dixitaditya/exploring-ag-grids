"use client";  // Mark this as a client component
import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import {useDataTableContext} from "../contexts/DataTableContext"
import _ from "lodash"


const TableView = () => {

  const [rowData, setRowData] = useState<any[]>(); // Load your CSV data here
  const [columnDefs, setColumnsDefs] = useState();

  const {initTableData,tableData, columnFields, setSelectedTableData} = useDataTableContext()
  const [filterChips, setFilterChips] = useState<string[]>([]);

  useEffect(()=>{
    console.log("🌕🌕🌕🌕🌕🌕🌕🌕")
    initTableData()
  },[initTableData])

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


  const deselectAllRows = () => {
    gridRef.current?.api.deselectAll();
    setSelectedTableData([]); // Optionally clear the selected data state
  };

  const updateSelectedRowsAfterFilter = () => {
    // Get all the currently visible rows after filtering
    console.log('updateSelectedRowsAfterFilter called------ :');
    const filteredRows = gridRef.current?.api.getRenderedNodes().map(node => node.data);
    console.log('Filtered Rows:', filteredRows);
    setSelectedTableData(filteredRows);
  };


  const updateFilteredSelectedRow = () => {
    // Get all the currently visible rows after filtering
    console.log('updateSelectedRowsAfterFilter called------ :');
    const selectedRows = gridRef.current?.api.getSelectedRows();
    const filteredRows = gridRef.current?.api.getRenderedNodes().map(node => node.data);
    const selectedRowsAfterFilter = _.intersection(selectedRows, filteredRows)
    if(selectedRowsAfterFilter.length){
      setSelectedTableData(selectedRowsAfterFilter);
      console.log('Filtered Rows:', selectedRowsAfterFilter);
    }else{
      console.log('Filtered Rows:', filteredRows);
      setSelectedTableData(filteredRows);
    }
  };




  return (<>
    <div className="ag-theme-quartz-dark" style={{ height: '100%', width: '100%' }}>
    <div className="p-4 py-12 text-lg font-bold">
        Table Name 123
    </div>
    <button onClick={deselectAllRows}>deselect</button>
    <div className="p-4 flex flex-wrap gap-2">
          {filterChips?.map((chip, index) => (
            <div key={index} className="bg-gray-200 px-2 py-1 rounded text-sm">
              {chip}
            </div>
          ))}
        </div>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{ resizable: true, sortable: true }}
        rowSelection={rowSelection}
        ref={gridRef}
        onSelectionChanged={updateFilteredSelectedRow}
        onFilterChanged={updateFilteredSelectedRow}
      />
    </div>
    </>
  );
};

export default TableView;
