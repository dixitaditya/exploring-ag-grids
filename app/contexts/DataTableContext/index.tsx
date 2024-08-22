import React, {useCallback, useEffect, useRef, useState} from 'react'
import {TDataTableContext, TDataTableContextProviderProps} from "./context.type"
import {RowDatum} from "../../utils/rowDataum"
import {fields} from "../../utils/fields"
import { RowData } from '../../interfaces'


/**
 * Context for managing data table state and operations.
 */

const DataTableContext = React.createContext({})
DataTableContext.displayName = 'DataTableContext'


/**
 * Provider component for data table context.
 */

const DataTableContextProvider: React.FC<TDataTableContextProviderProps> = ({ children }) => {
  const [rowData, setRowData] = useState<RowData[]>(RowDatum); // Load your CSV data here
  const [selectedTableData, setSelectedTableData] = useState<RowData[]>(); // Load your CSV data here
  const [columnDefs, setColumnsDefs] = useState(fields);


  /**
   * Initializes table data and column definitions.
   * This can be replaced with data fetching logic.
   */
  const initTableData = useCallback(() => {
    setRowData(RowDatum)
    setSelectedTableData(RowDatum)
    setColumnsDefs(fields)
    return RowDatum
  },[])
  
  const contextObject: TDataTableContext = {
    initTableData,
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


/**
 * Hook to use data table context.
 * 
 * @returns The context value.
 * @throws Will throw an error if used outside of a DataTableContextProvider.
 */

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
