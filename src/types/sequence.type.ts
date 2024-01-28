import {Task} from './tasks/task.type.ts';

export interface Sequence {
	key: string;
	name: string;
	image: string;
	tasks: Task[];
}
