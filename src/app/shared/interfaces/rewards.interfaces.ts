import { difficultLevel } from "../../tasks/interfaces/task.interface";

export interface Reward{
    id: string;
    taskDifficult: difficultLevel;
    coins: number;
    experience: number;
}