import { TaskModel } from '../../../utils/constants';
import './Task.scss';

type props = {
    text: string,
    checked: boolean,
    deleteTask: (taskToDelete: TaskModel) => void
}

export const Task = ({text, checked, deleteTask}: props) => {

    const handleClick = (): void => {
        const taskToDelete: TaskModel = { text, checked };
        deleteTask(taskToDelete);
    }

    return(
        <div className="task" onClick={handleClick}>
            <div className="delete-icon"></div>
            <h3>{text}</h3>
        </div>
    )
}