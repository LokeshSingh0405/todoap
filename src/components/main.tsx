import { useState } from "react";
import "./main.css";
import { FC } from "react";
import EditIcon from '@mui/icons-material/Edit';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from "@mui/material/colors";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



const Main: FC = () => {

    const [inputValue, setInputValue] = useState<string>("")
    const [todos, setTodos] = useState<string[]>([])
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
        const todo = e.target.value;
        setInputValue(todo)

        // setTodos((prev) =>
        //     [...prev, todo]
        // );
        //setTodos(todo)
        
    }

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = () => {
        if(inputValue.trim() === ""){
            alert("Enter a valid Input !!")
        }
        else{
            setTodos((prev) => [...prev, inputValue])
            setInputValue("")
        }        
    }

    return (
        <div className="main-container">
            <div className="container">
                <header>
                    <h1 className="heading">Todo App...</h1>
                </header>


                <div className="inputs">
                    <input type="text" value={inputValue} className="todo-input" placeholder="Enter the Task....." onChange={(e) => handleChange(e)} />
                    <button className="btn" onClick={handleSubmit}>Submit</button>
                </div>


                <div className="select">
                    <select name="todos">
                        <option value="all">All</option>
                        <option value="completed">Completedd</option>
                        <option value="incompleted">Incompleted</option>
                    </select>
                </div>


                <div className="todocontainerparent">
                    <ul>
                        {
                            todos.map((todo: string) => {
                                return (
                                    <div className="list-items">
                                        <li className="list">{todo}</li>
                                        <div className="buttons">
                                            <CheckCircleIcon fontSize="large" sx={{ fontSize: 40 }}/>
                                            <EditIcon fontSize="large" color="primary"/>
                                            <DeleteIcon fontSize="large" sx={{ color: red[500] }} />
                                        </div>
                                    </div>
                                )
                            })}
                    </ul>
                </div>








            </div>
        </div>
    )
}

export default Main;