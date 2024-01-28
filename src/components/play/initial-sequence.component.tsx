import styled from 'styled-components';

import {Background} from './background.component.ts';
import {FC, useCallback, useEffect, useRef, useState} from 'react';
import {PositionHead} from '../../types/enums/position-head.enum.ts';
import {INITIAL_SEQUENCES} from '../../constants/initial-sequences.constant.ts';
import {TaskType} from '../../types/enums/task-type.enum.ts';
import {Character} from '../../types/enums/character.enum.ts';
import {Text} from '../shared/text.component.tsx';
import {Button} from '../shared/button.component.ts';
import {Flex} from '../shared/flex.component.ts';
import {SPRITES} from '../../constants/sprites.constant.ts';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
`;

const TalkContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 64px;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 32px;
	width: 100vw;
`;

const CharacterImageWrapper = styled.div`
	width: 200px;
	height: 200px;
	background-color: #00000080;
	border-radius: 50%;
	overflow: hidden;
	border: 2px solid #ffffff;
`;

interface CharacterImageProps {
	src: string;
}

const CharacterImage = styled.div<CharacterImageProps>`
	width: 200px;
	height: 200px;
	background-image: url('${({src}) => src}');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 50%;
	overflow: hidden;
	position: relative;
`;

const Talk = styled.div`
	flex: 1;
	background-color: #00000080;
	border-radius: 8px;
	padding: 16px;
	color: #ffffff;
	border: 2px solid #ffffff;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

interface Props {
	done: () => void;
}

export const InitialSequence: FC<Props> = ({done}) => {
	const taskRef = useRef(-1);

	const [image, setImage] = useState('/images/airport-runway.jpg');
	const [sequenceIndex, setSequenceIndex] = useState(0);
	const [taskIndex, setTaskIndex] = useState(0);
	const [showTalk, setShowTalk] = useState(false);
	const [talk, setTalk] = useState('');
	const [character, setCharacter] = useState<Character | null>(null);

	const nextTask = useCallback(() => {
		setTaskIndex((currentTaskIndex) => {
			if (
				currentTaskIndex + 1 >=
				INITIAL_SEQUENCES[sequenceIndex].tasks.length
			) {
				setSequenceIndex((currentSequenceIndex) => {
					if (currentSequenceIndex + 1 >= INITIAL_SEQUENCES.length) {
						done();
						return currentSequenceIndex;
					}

					setImage(INITIAL_SEQUENCES[currentSequenceIndex + 1].image);

					return currentSequenceIndex + 1;
				});

				taskRef.current = -1;

				return 0;
			}

			return currentTaskIndex + 1;
		});
	}, [done, sequenceIndex]);

	useEffect(() => {
		(async () => {
			const position = await window.store.get('position');

			if (position === null) return;

			const positionParts = position.split(',');

			if (positionParts[0] !== PositionHead.INITIAL_SEQUENCE) return done();

			const sequenceIndex = INITIAL_SEQUENCES.findIndex(
				(sequence) => sequence.key === positionParts[1]
			);

			if (sequenceIndex === -1) return done();
			setSequenceIndex(sequenceIndex);

			setImage(INITIAL_SEQUENCES[sequenceIndex].image);
		})();
	}, [done]);
	useEffect(() => {
		if (taskRef.current >= taskIndex) return;
		taskRef.current = taskIndex;

		const task = INITIAL_SEQUENCES[sequenceIndex].tasks[taskIndex];

		switch (task.type) {
			case TaskType.WAIT:
				setShowTalk(false);

				setTimeout(nextTask, task.value);

				break;
			case TaskType.TALK:
				setShowTalk(true);
				setTalk(task.text);
				setCharacter(task.character);
		}
	}, [nextTask, sequenceIndex, taskIndex]);
	useEffect(() => {
		void window.store.set(
			'position',
			`${PositionHead.INITIAL_SEQUENCE},${INITIAL_SEQUENCES[sequenceIndex].key}`
		);
	}, [sequenceIndex]);

	return (
		<Container>
			<Background src={image} />
			{showTalk && (
				<TalkContainer>
					<CharacterImageWrapper>
						{character !== null && <CharacterImage src={SPRITES[character]} />}
					</CharacterImageWrapper>
					<Talk>
						<Text>{talk}</Text>
						<Flex row reverse>
							<Button onClick={nextTask} border={false}>
								Next
							</Button>
						</Flex>
					</Talk>
				</TalkContainer>
			)}
		</Container>
	);
};
