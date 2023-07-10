import { useState } from 'react'
import { Todos } from './assets/components/Todos/Todos'
import { type Todo as TodoType, type TodoId } from './types'

const mockTodos = [
  {
    id: '1',
    title: 'Acabar app',
    completed: false
  },
  {
    id: '2',
    title: 'Conectar db',
    completed: false
  },
  {
    id: '3',
    title: 'Cervecita',
    completed: true
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)

    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  return ( // Creamos el componenet i nos falta el import luego
    <div className='todoapp'>
      <Todos todos={todos}
        onToggleCompletedTodo={handleCompleted}
        onRemoveTodo={handleRemove} />
    </div>
  )
}

export default App
