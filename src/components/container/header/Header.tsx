import './Header.scss';

type Props = {
    updateValue: (e: React.ChangeEvent<HTMLInputElement>) => void,
    addTask: () => void,
    inputValue: string
}

export const Header = ({updateValue, addTask, inputValue}: Props) => {
    return (
        <div className="header">
            <h1>To Do List</h1>
            <div className="input-container">
                <input type="text" placeholder="Digite a tarefa" onChange={updateValue} value={inputValue} />
                <button onClick={addTask}>Adicionar</button>
            </div>
        </div>
    )
}