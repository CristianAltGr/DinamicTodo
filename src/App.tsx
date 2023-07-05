import { useState } from 'react'
import { Todos } from './assets/components/Todos/Todos'

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

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)

    setTodos(newTodos)
  }

  return ( // Creamos el componenet i nos falta el import luego
    <div className='todoapp'>
      <Todos todos={todos}
        onRemoveTodo={handleRemove} />
    </div>
  )
}

export default App
