import {useCallback, useState} from 'react';

import {Page} from '../components/shared/page.component.ts';
import {InitialSequence} from '../components/play/initial-sequence.component.tsx';
import {Room} from '../components/play/room.component.tsx';

export const PlayPage = () => {
	const [isInitialSequence, setIsInitialSequence] = useState(true);

	const initialSequenceDone = useCallback(
		() => setIsInitialSequence(false),
		[]
	);

	return (
		<Page>
			{isInitialSequence ? (
				<InitialSequence done={initialSequenceDone} />
			) : (
				<Room />
			)}
		</Page>
	);
};
