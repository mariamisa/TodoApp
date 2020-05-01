import React,{useState,useEffect} from "react";

export default function Todo(){
    const [todo,setTodo]=useState('')
    const [todoList,setTodoList]=useState([])

    const handelInputChange=({target:{value}})=>{
        setTodo(value)
    }
    const addTodoToList=()=>{
        setTodoList([...todoList,todo]);
        setTodo('')
    }
    return (
        <div>
            <input name="todo" value={todo} onChange={handelInputChange}/>
            <button onClick={addTodoToList}>add todo</button>
            <ul>{todoList.map((todo,index)=><li key={index}>{todo}</li>)}</ul>
        </div>
    )
}