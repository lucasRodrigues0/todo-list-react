import { Task } from "./task";
import './Container.scss';
import { Header } from "./header";
import { useState } from "react";
import { TASKLIST } from "../../utils/constants";

export const Container = () => {

    const [inputValue, setInputValue] = useState("");

    const updateValue = (e: React.ChangeEvent<HTMLInputElement>): void =>{
        setInputValue(e.target.value);
    }

    const addTask = () => {
        if(inputValue === "") return;
        TASKLIST.push({text: inputValue, checked: false});
        setInputValue("");
    }

    return (
        <div className="container">
            <Header updateValue={updateValue} addTask={addTask} inputValue={inputValue}/>
            <div className="task-container">
                {TASKLIST.map((task) => {
                    return (
                        <Task key={`task-${task.text}`} text={task.text} checked={task.checked}/>
                    )
                })}
            </div>
        </div>
    )
}