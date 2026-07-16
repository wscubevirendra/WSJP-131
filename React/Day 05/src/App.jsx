import React, { useState } from 'react'
import Input from './Input'
import { FaDeleteLeft } from "react-icons/fa6";


export default function App() {
  const [list, setList] = useState([]);

  function addTodo(data) {
    if(data.trim()===""){
      return alert("No value")
    }
    setList([...list, data])
  }


  function removeHandler(remoIndex) {
   const newItems= list.filter((data, i) => {
      return i !== remoIndex
    });

    setList(newItems)
  }

  return (
    <div style={{ width: '600px' }} className='mx-auto p-4'>
      <Input addTodo={addTodo} />
      <ul className="list-group">
        {
          list.map((data, index) => {
            return (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {data}
                <span className="badge text-bg-primary rounded-pill">
                  <FaDeleteLeft onClick={() => [
                    removeHandler(index)
                  ]} />
                </span>
              </li>
            )
          })
        }

      </ul>

    </div>
  )
}
