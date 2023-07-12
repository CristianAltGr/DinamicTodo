import { useState } from 'react'
import { Todos } from './assets/components/Todos/Todos'
import { type Todo as TodoType, type TodoId, type FilterValue } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './assets/components/Footer/footer'

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length

  return ( // Creamos el componenet i nos falta el import luego
    <div className='todoapp'>
      <Todos todos={todos}
        onToggleCompletedTodo={handleCompleted}
        onRemoveTodo={handleRemove}
      />
      <Footer
        activeCount={activeCount}
        completedCount={todos.length - activeCount}
        filterSelected={filterSelected}
        onClearCompleted={() => { }}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
