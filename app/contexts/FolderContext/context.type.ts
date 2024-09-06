import {RowData} from "../../interfaces/index"
import {ConversationPublic} from "../../interfaces"

// context.type.ts

export type FolderItem = {
    id: string ;
    name: string;
    selected: boolean;
    type: string;
    children?: FolderItem[];
  };
  
  export type TFolderContext = {
    data: FolderItem[];
    setData: React.Dispatch<React.SetStateAction<FolderItem[]>>;
    toggleSelect: (itemId: string) => void; 
    fetchSelectedItems: () => { id: string; name: string; type: string }[];
    handleSubmit: () => void;
  };
  