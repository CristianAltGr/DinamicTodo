import { type TODO_FILTERS } from './consts'

export interface Todo {
    id: string
    title: string
    completed: boolean
}

// exportar un tipo de un objeto, primero por omision luego por seleccion
export type TodoId = Omit<Todo, 'completed' | 'title'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS] // esto lo que hace es sacal las keys de todo filter para no tener que esbribir los datos uno a uno
