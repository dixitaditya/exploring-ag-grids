"use client";
import React, { useState } from 'react';

interface ITodoInput {
  submitHandler: (val: string) => void;
}

const TodoInput = (props: ITodoInput) => {
  const  {submitHandler} = props
  const [value, setValue] = useState('')

  const handleOnChange = (e: any)=>{
    console.log(e.target.value)
    setValue(e.target.value)
  }

  const handleSubmit = ()=>{
    submitHandler(value)
    setValue("")
  }
  return <div>
    <input type="text" value={value} onChange={handleOnChange} />
    <button onClick={handleSubmit}>Add</button>
  </div>;
};

export default TodoInput;
