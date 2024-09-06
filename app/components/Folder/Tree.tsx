import { useDataTableContext } from "@/app/contexts/DataTableContext";
import { useFolderDataContext } from "@/app/contexts/FolderContext";

const Tree = (props: any) => {
    const { toggleSelect } = useFolderDataContext()
    const {item} = props
    const handleChange = () => {
      toggleSelect(item.id);
    };
  
    return (
      <div style={{ margin: "10px 20px" }}>
        <input type="checkbox" checked={item.selected} onChange={handleChange} />
        {item.name}
        {item.type === "folder" && (
          <div>
            {item.children.map((child:any) => (
              <Tree key={child.id} item={child} />
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Tree;
  