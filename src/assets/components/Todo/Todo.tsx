import { type TodoId, type Todo as TodoType } from '../../../types'

interface Props extends TodoType {
    onToggleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompletedTodo }) => {
    const handleChangeCheckout = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleCompletedTodo({
            id,
            completed: event.target.checked
        })
    }

    return (
        <div className="view">
            <input className="toggle" type="checkbox" checked={completed} onChange={handleChangeCheckout} />
            <label>{title}</label>
            <button
                className='destroy'
                onClick={() => { onRemoveTodo({ id }) }}
            // revisar otras fomras para no tener que bajar tanto en los components y sus props
            />
        </div>
    )
}
