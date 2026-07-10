export interface Task{
    id: string;
    description: string;
    difficult: difficultLevel;
    deadline: Date,
    state: stateLevel,
}

export enum difficultLevel{
    'low'='Bajo',
    'midd'= 'Medio',
    'hard' = 'Alto'
}

export enum stateLevel{
    'pending'= 'Pendiente',
    'ready' = 'Completado'
}