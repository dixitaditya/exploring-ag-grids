import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { ModuleRegistry } from "@ag-grid-community/core";
ModuleRegistry.registerModules([
  SetFilterModule,
]);

// checkboxSelection: true 
export const fields = [
    { field: "name", headerName: "Name",checkboxSelection: true , filter: 'agTextColumnFilter'  },
    { field: "country", headerName: "Country", filter: 'agSetColumnFilter',  },
    { field: "language", headerName: "Language" },
    { field: "games", headerName: "Games" },
    { field: "gameName", headerName: "Game Name" },
    { field: "bankBalance", headerName: "Bank Balance", valueFormatter: (params:Record<string,any>) => `$${params.value.toFixed(2)}`, filter: 'agNumberColumnFilter'  },
  ]