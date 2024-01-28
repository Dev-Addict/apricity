import {TaskType} from '../enums/task-type.enum.ts';

export interface WaitTask {
	type: TaskType.WAIT;
	value: number;
}
