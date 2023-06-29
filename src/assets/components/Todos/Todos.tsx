import { type ListOfTodos } from '../../../types'

interface Props {
    todos: ListOfTodos // es importante el nombre ya que estamos asignando el type a la prop
}

export const Todos: React.FC<Props> = ({ todos }) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.title}
                </li>
            ))}
        </ul>
    )
}
