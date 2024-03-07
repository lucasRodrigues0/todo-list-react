import './Header.scss';

type Props = {
    updateValue: (e: React.ChangeEvent<HTMLInputElement>) => void,
    addTask: () => void,
    inputValue: string
}

export const Header = ({updateValue, addTask, inputValue}: Props) => {

    const handleKeyPress = (e: React.KeyboardEvent): void => {
        if(e.key === "Enter") {
            addTask();
        } else {
            return;
        }
    }

    return (
        <div className="header">
            <h1 className="title">To Do List</h1>
            <div className="input-container">
                <input type="text" placeholder="Digite a tarefa" onChange={updateValue} value={inputValue} onKeyDown={handleKeyPress}/>
                <button onClick={addTask}>Adicionar</button>
            </div>
        </div>
    )
}