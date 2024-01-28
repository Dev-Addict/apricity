import {TaskType} from '../enums/task-type.enum.ts';
import {Character} from '../enums/character.enum.ts';

export interface TalkTask {
	type: TaskType.TALK;
	character: Character;
	text: string;
}
