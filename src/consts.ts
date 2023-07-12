export const TODO_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const // Esto hace que la constante sea invariable aunque sea un objeto

export const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]: {
        literal: 'Todos',
        href: `?filter=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]: {
        literal: 'Activos',
        href: `?filter=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED]: {
        literal: 'Completados',
        href: `?filter=${TODO_FILTERS.COMPLETED}`
    } as const // Hace que aunque sea un objecto sea inmutable en TS
}
