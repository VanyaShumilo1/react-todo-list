import Header from "./components/header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import './styles/style.css'
import React, {useState} from "react";
import * as uuid from "uuid";

function App() {

    const [todo, setTodo] = useState([
        {
            id: uuid.v4(),
            title: "First todo",
            status: true,
        },
        {
            id: uuid.v4(),
            title: "Second todo",
            status: true,
        },
        {
            id: uuid.v4(),
            title: "Third todo",
            status: true,
        }
    ])

    return (
        <div className="App">
            <Header/>
            <AddTodo todo={todo} setTodo={setTodo}/>
            <TodoList todo={todo} setTodo={setTodo}/>
        </div>
    );
}

export default App;
