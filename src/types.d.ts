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
