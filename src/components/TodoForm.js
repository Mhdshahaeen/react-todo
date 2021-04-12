import React ,{useState,useEffect,useRef}from 'react'

function TodoForm(props) {
    const [input , setInput] =useState(props.edit?props.edit.value:'');
    const inputRif=useRef(null)
    useEffect(()=>{
        inputRif.current.focus()
    })
    const handeleChange=(e)=>{
        setInput(e.target.value)
    };
    const handeleSubmit= (e)=> {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text:input
        })
        setInput('');
    };
    return (
        <form className ='todo-form' onSubmit={handeleSubmit}>
            {props.edit?(
                <>
            <input
            type="text"
            placeholder="بشو عم تفكر"
            value={input}
            className="todo-input edit"
            onChange={handeleChange}
            ref={inputRif}
            />
            <button className="todo-btn edit"> تحديث</button>
            </>
            ):
            (
                <>
                <input
                type="text"
                placeholder="بشو عم تفكر"
                value={input}
                className="todo-input"
                onChange={handeleChange}
                ref={inputRif}
                />
                <button className="todo-btn"> انطلق</button>
                </>
            )
            }
        </form>
    )
}

export default TodoForm
