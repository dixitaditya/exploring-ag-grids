"use client";
import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import {useDataTableContext} from "../contexts/DataTableContext"
import {intersection} from "lodash"


const TableView = () => {

  const [rowData, setRowData] = useState<any[]>(); // Load your CSV data here
  const [columnDefs, setColumnsDefs] = useState();

  const {initTableData,tableData, columnFields, setSelectedTableData} = useDataTableContext()
  const [filterChips, setFilterChips] = useState<string[]>([]);

  useEffect(()=>{
    initTableData()
  },[initTableData])

  useEffect(()=>{
    setRowData(tableData)
  },[tableData])

  useEffect(()=>{
    setColumnsDefs(columnFields)
  },[columnFields])


  const gridRef = React.useRef<AgGridReact>(null);

  const rowSelection = 'multiple';


  const updateFilteredSelectedRow = () => {
    // Get all the currently visible rows after filtering
    const selectedRows = gridRef.current?.api.getSelectedRows();
    const filteredRows = gridRef.current?.api.getRenderedNodes().map(node => node.data);
    const selectedRowsAfterFilter = intersection(selectedRows, filteredRows)
    if(selectedRowsAfterFilter.length){
      setSelectedTableData(selectedRowsAfterFilter);
    }else{
      setSelectedTableData(filteredRows);
    }
  };




  return (<>
    <div className="ag-theme-quartz-dark" style={{ height: '100%', width: '100%' }}>
    <div className="p-4 py-12 text-lg font-bold">
        Table Name 123
    </div>
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
