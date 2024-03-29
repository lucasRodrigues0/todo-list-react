import { useState } from 'react';
import { TaskModel } from '../../../utils/constants';
import './Task.scss';

type props = {
    text: string,
    checked: boolean,
    deleteTask: (taskToDelete: TaskModel) => void
}

export const Task = ({text, checked, deleteTask}: props) => {

    const [checkedState, setCheckedState] = useState<boolean>(checked);

    const handleClick = (): void => {
        const taskToDelete: TaskModel = { text, checked };
        deleteTask(taskToDelete);
    }

    const toggleChecked = () => {
        setCheckedState(!checkedState);
        checked = checkedState;
    }

    return(
        <div className="task">
            <div className="task-content-container">
                <div className={`delete-icon ${checkedState ? 'delete-icon-active' : ''}`} onClick={handleClick}>
                    <svg className={`svg-icon ${checkedState ? 'checked-icon' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
                </div>
                <input type='checkbox' defaultChecked={checkedState} onChange={toggleChecked}/>
                <h3 className={`task-text ${checkedState ? 'checked-text' : ''}`}>{text}</h3>
            </div>
        </div>
    )
}