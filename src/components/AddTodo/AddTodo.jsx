import React, {useState} from 'react';
import * as uuid from "uuid";

const AddTodo = ({todo, setTodo}) => {

    const [value, setValue] = useState('')

    function addTodo() {
        let newTodo = [...todo, {
            id: uuid.v4(),
            title: value,
            status: true
        }]

        setTodo(newTodo)
        setValue('')
    }

    return (
        <div>
            <input placeholder="Some text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={() => addTodo()}>Save</button>
        </div>
    );
};

export default AddTodo;