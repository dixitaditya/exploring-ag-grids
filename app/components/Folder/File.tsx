import React, {useState,useEffect} from "react"


const File = (props:any) => {
    const {data, isSelected, handleClick} = props
    const [isChecked, setIsChecked] = useState(isSelected)


    useEffect(()=>{
        setIsChecked(isSelected)
    },[isSelected])

    const handleOnChange =()=> {
        console.log("handleOnChange")
        setIsChecked(state=>!state)
        handleClick
    }
    return (
        <div>file: 
            <label>
            <input type="checkbox" checked={isChecked} onChange={handleOnChange}/>
            {data?.name} {isChecked?"checked":"unchecked"}
            </label>
            </div>
    )
}

export default File