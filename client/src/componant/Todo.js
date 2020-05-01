import React,{useState} from "react";

import './Todo.css'


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
        <div className="todo-Container">
            <input className="todo-Container__input" name="todo" value={todo} onChange={handelInputChange}/>
            <button className="todo-Container__button" onClick={addTodoToList}>add todo</button>
            <ul className="todo-Container__ul">{todoList.map((todo,index)=><li key={index}>{todo}</li>)}</ul>
        </div>
    )
}