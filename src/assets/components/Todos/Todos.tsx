import { type ListOfTodos } from '../../../types'
import { Todo } from '../Todo/Todo'

interface Props {
    todos: ListOfTodos // es importante el nombre ya que estamos asignando el type a la prop
    onRemoveTodo: (id: string) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
    return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo} />
                </li>
            ))
            }
        </ul >
    )
}
