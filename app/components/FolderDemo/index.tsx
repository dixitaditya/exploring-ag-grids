import React from "react"
import folder from "./folder.json"
import Tree from "./Tree"


const FolderDemo = (props:any) => {

    console.log("folder",folder)
return (
    <>
     <Tree data={folder}/>
    </>
)
}

export default FolderDemo;