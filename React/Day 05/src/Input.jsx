import React, { useRef } from 'react'

export default function Input({addTodo}) {
  
    const inputRef=useRef();

    function inputHanlder(){
       addTodo(inputRef.current.value)
       inputRef.current.value=""
       
    }

    return (
        <div class="input-group mb-3">
            <input ref={inputRef} type="text" class="form-control" placeholder="Add Todo...." />
            <button onClick={inputHanlder} class="input-group-text" id="basic-addon2">Add</button>
        </div>
    )
}
