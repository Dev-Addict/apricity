import {Sequence} from '../types/sequence.type.ts';
import {TaskType} from '../types/enums/task-type.enum.ts';
import {Character} from '../types/enums/character.enum.ts';

export const INITIAL_SEQUENCES: Sequence[] = [
	{
		key: 'airport-runway',
		name: 'Airport Runway',
		image: '/images/airport-runway.jpg',
		tasks: [
			{
				type: TaskType.WAIT,
				value: 1000,
			},
		],
	},
	{
		key: 'taxi',
		name: 'Taxi',
		image: '/images/taxi.jpg',
		tasks: [
			{
				type: TaskType.WAIT,
				value: 1000,
			},
			{
				type: TaskType.TALK,
				character: Character.MAIN,
				text: "It's been such a long time since I've been home.",
			},
			{
				type: TaskType.TALK,
				character: Character.MAIN,
				text: 'Last semester was so stressful and long. It felt way longer than 4 months.',
			},
			{
				type: TaskType.TALK,
				character: Character.MAIN,
				text: "It's all over now though. I'm finally home.",
			},
			{
				type: TaskType.TALK,
				character: Character.MAIN,
				text: "I'm going to have a great break this summer.",
			},
			{
				type: TaskType.WAIT,
				value: 1000,
			},
		],
	},
	{
		key: 'home-front',
		name: 'Home Front',
		image: '/images/home-front.jpg',
		tasks: [
			{
				type: TaskType.WAIT,
				value: 1000,
			},
			{
				type: TaskType.TALK,
				character: Character.MAIN,
				text: 'I wonder if anyone is home.',
			},
			{
				type: TaskType.WAIT,
				value: 1000,
			},
		],
	},
	{
		key: 'home-living-room',
		name: 'Home Living Room',
		image: '/images/home-living-room.jpg',
		tasks: [
			{
				type: TaskType.WAIT,
				value: 1000,
			},
			{
				type: TaskType.TALK,
				character: Character.MAIN,
				text: 'Hello Mom!!!',
			},
			{
				type: TaskType.TALK,
				character: Character.MOM,
				text: 'Hello dear, how was your flight?',
			},
			{
				type: TaskType.TALK,
				character: Character.MAIN,
				text: 'It was good. I slept for most of it.',
			},
			{
				type: TaskType.TALK,
				character: Character.MOM,
				text: 'That is good. I am glad you are home.',
			},
			{
				type: TaskType.TALK,
				character: Character.MAIN,
				text: 'I am too. I am going to go to my room and unpack.',
			},
			{
				type: TaskType.TALK,
				character: Character.MOM,
				text: 'Okay, I will see you later.',
			},
			{
				type: TaskType.WAIT,
				value: 1000,
			},
		],
	},
	{
		key: 'room',
		name: 'Room',
		image: '/images/room.jpg',
		tasks: [
			{
				type: TaskType.WAIT,
				value: 1000,
			},
			{
				type: TaskType.TALK,
				character: Character.MAIN,
				text: 'I missed my room.',
			},
			{
				type: TaskType.WAIT,
				value: 1000,
			},
		],
	},
];
