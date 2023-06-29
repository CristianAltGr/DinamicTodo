import { useState } from 'react'
import { Todos } from './assets/components/Todos/Todos'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo ',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos] = useState(mockTodos)
  // no ponemos el set de momento porque no lo estamos usando

  return (
    <Todos todos={todos} /> // Creamos el componenet i nos falta el import luego
  )
}

export default App
