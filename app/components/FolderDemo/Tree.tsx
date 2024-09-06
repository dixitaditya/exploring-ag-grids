import { AnyARecord } from "dns"
import React, { useState, useEffect } from "react"
import File from "./File"

const Tree = (props: any)=> {
    const {data, handleTreeSelect} =  props
    const [selectedFile, setSelectedFile] = useState(new Set());
    const [isTreeChecked, setTreeChecked] = useState(false);

    const treeItemsLength = data?.length || 0

    const handleNestedFileClick = (fileName) =>{
        console.log("handleNestedFileClick",fileName, new Set([fileName]))
        setSelectedFile(state=>new Set(state.union(new Set([fileName])))) // if exists remove else add

    }

    useEffect(()=>{
        console.log("selectedFile state",selectedFile.size, data.length)
        if(selectedFile.size === data.length){
            console.log("hello")
            setTreeChecked(true)
        }
    },[selectedFile])

    useEffect(()=>{
        console.log(isTreeChecked)
    },[isTreeChecked])

    const handleFolderClick = () =>{
        setTreeChecked(state=> !state)
    }
    return (
        <div style={{outline: "1px solid red"}}>
            {}
            {data?.map((datum:any)=>{
        
                if(datum.type == "file"){
                    return <div key={datum.name}>
                        <File data={datum}  isSelected={selectedFile?.has(datum.name)} handleClick={handleNestedFileClick}/>
                    </div>
                }else{
                    return <div key={datum.name}>
                        <span onClick={handleFolderClick}>
                        <input type="checkbox" checked={isTreeChecked} onChange={handleFolderClick}/> folder: {datum?.name}</span>
                        <div style={{marginLeft: 20}} key={datum.name}>
                            {datum?.items?.length && <Tree data={datum.items} />}
                        </div>
                        </div> 
                }
            })}
        </div>
    )
}

export default Tree;