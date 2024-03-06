import { Task } from "./task";
import './Container.scss';
import { Header } from "./header";
import { useState } from "react";
import { TaskModel } from "../../utils/constants";

export const Container = () => {

    const [inputValue, setInputValue] = useState("");
    const [taskList, setTaskList] = useState<TaskModel[]>([]);

    const updateValue = (e: React.ChangeEvent<HTMLInputElement>): void =>{
        setInputValue(e.target.value);
    }

    const addTask = (): void => {
        if(inputValue === "") return;
        const newTask: TaskModel = {text: inputValue, checked: false};
        setTaskList([...taskList, newTask]);
        setInputValue("");
    }

    const deleteTask = (taskToDelete: TaskModel): void => {
        setTaskList(prevTaskList => prevTaskList.filter(task => task !== taskToDelete));
    }

    return (
        <div className="container">
            <Header updateValue={updateValue} addTask={addTask} inputValue={inputValue}/>
            <div className="task-container">
                {taskList.map((task) => {
                    return (
                        <Task key={`task-${task.text}`} text={task.text} checked={task.checked} deleteTask={() => deleteTask(task)}/>
                    )
                })}
            </div>
        </div>
    )
}