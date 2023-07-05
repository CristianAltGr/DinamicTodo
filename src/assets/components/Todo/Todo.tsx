import { type Todo as TodoType } from '../../../types'

interface Props extends TodoType {
    onRemoveTodo: (id: string) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo }) => {
    return (
        <div className="view">
            <input className="toggle" type="checkbox" checked={completed} onChange={() => { }} />
            <label>{title}</label>
            <button
                className='destroy'
                onClick={() => { onRemoveTodo(id) }}
            // revisar otras fomras para no tener que bajar tanto en los components y sus props
            />
        </div>
    )
}
