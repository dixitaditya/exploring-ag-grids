import {RowData} from "../interfaces/index"

export type TDataTableContext = {
    fetchTableData: (key: string)=>void // 
    tableData: Array<RowData> | undefined
    setTableData: (data: Array<RowData>) => void
    selectedTableData?: Array<RowData>
    setSelectedTableData:  (data: Array<RowData>) => void
    columnFields: Array<any>
}