import React, {useEffect, useRef, useState} from 'react'
import {TDataTableContext} from "./TDataTableContext.type"
import {RowDatum} from "../utils/rowDataum"
import {fields} from "../utils/fields"
import { RowData } from '../interfaces'


const DataTableContext = React.createContext({})
DataTableContext.displayName = 'DataTableContext'


const DataTableContextProvider: React.FC = ({ children }) => {
  const [rowData, setRowData] = useState<RowData[]>(RowDatum); // Load your CSV data here
  const [selectedTableData, setSelectedTableData] = useState<RowData[]>(); // Load your CSV data here
  const [columnDefs, setColumnsDefs] = useState(fields);

  const fetchTableData = () => {
    setRowData(RowDatum) // from dummy, can be relaced with axios
    setColumnsDefs(fields)
    return RowDatum
  }


  const contextObject: TDataTableContext = {
    fetchTableData,
    tableData: rowData,
    columnFields: columnDefs,
    setTableData: setRowData,
    selectedTableData,
    setSelectedTableData
  }
  return (
    <DataTableContext.Provider value={contextObject}>
      {children}
    </DataTableContext.Provider>
  )
}

const useDataTableContext =
  (): any => {
    const context = React.useContext(DataTableContext)
    if (context === undefined) {
      throw new Error(
        'useDataTableContext must be used within a <DataTableContextProvider />',
      )
    }

    return context as TDataTableContext
  }

export {DataTableContextProvider, useDataTableContext}
