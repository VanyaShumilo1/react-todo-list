import React, {useState} from 'react';

const TodoList = ({todo, setTodo}) => {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    function deleteTodo(id) {
        let newTodo = todo.filter(item => (item.id !== id))
        setTodo(newTodo)
    }

    function changeTodoStatus(id) {
        let newTodo = todo.filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    function changeTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id) {
        let newTodo = todo.map(item => {
            if (item.id === id) {
                item.title=value
            }
            return item
        })

        setTodo(newTodo)
        setEdit(null)
    }

    console.log(todo)

    return (
        <div className="todoList">
            {
                todo.map(item => (
                    <div key={item.id}>

                        {
                            edit === item.id
                                ?
                                <div>
                                    <input value={value} onChange={(e) => setValue(e.target.value)}/>
                                </div>
                                :
                                <div>
                                    {item.title}
                                </div>
                        }

                        {
                            edit === item.id
                                ?
                                <div>
                                    <button onClick={() => saveTodo(item.id)}>Save</button>
                                </div>
                                :
                                <div>
                                    <button onClick={() => deleteTodo(item.id)}>Delete</button>
                                    <button onClick={() => changeTodo(item.id, item.title)}>Change</button>
                                    <button onClick={() => changeTodoStatus(item.id)}>Close / Open</button>
                                </div>
                        }


                    </div>
                ))
            }
        </div>
    );
};

export default TodoList;