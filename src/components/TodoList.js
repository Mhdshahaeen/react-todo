import React ,{useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos,setTodos] = useState([]);
    const addTodo = todo =>{
        if(!todo.text|| /^\s*$/.test(todo.text)){
            return;
        }
        const newTodo =[todo,...todos]
        setTodos(newTodo)
    }
    const removeTodo = id =>{
        const remove=[...todos].filter(todo=>todo.id !==id)
        setTodos(remove)
    }
    const updateTodo =(updateId,newValue)=>{
        if(!newValue.text|| /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev=>prev.map(item=>(item.id===updateId?newValue:item))
        )
    }
    const completeTodo =id =>{
        let updatedTodo=todos.map(todo=>{
            if(todo.id===id){
                todo.isComplete=!todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodo)
    }
    return (
        <div>
        <h1>شو خطتك اليوم</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo 
        todos={todos}
         completeTodo={completeTodo}
          removeTodo={removeTodo} 
          updateTodo={updateTodo}
          />
        </div>
    )
}

export default TodoList
