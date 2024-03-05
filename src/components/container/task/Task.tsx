import './Task.scss';

type props = {
    text: string,
    checked: boolean
}

export const Task = ({text, checked}: props) => {
    return(
        <div className="task">
            <div className="icon"></div>
            <h3>{text}</h3>
        </div>
    )
}