import {
	FC,
	PropsWithChildren,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import styled from 'styled-components';

import {SoundContext} from './sound.context.ts';
import {useApp} from '../../hooks/store/app.hook.ts';
import {DEFAULT_SOUND, SOUNDS} from '../../constants/sounds.constant.ts';
import {Sound} from '../../types/sound.ts';

const Audio = styled.audio``;

export const SoundProvider: FC<PropsWithChildren> = ({children}) => {
	const calledRef = useRef(false);

	const [sound, setSound] = useState<Sound>(DEFAULT_SOUND);
	const [soundData, setSoundDate] = useState<(typeof SOUNDS)[Sound] | null>(
		null
	);

	const {initialized} = useApp();

	const oSetSound = useCallback(
		(sound: Sound) => {
			if (!initialized) return;

			setSound(sound);
			void window.store.set('sound', sound);
		},
		[initialized]
	);

	useEffect(() => {
		if (calledRef.current) return;
		calledRef.current = true;

		void (async () => {
			const sound = await window.store.get('sound');
			if (sound) setSound(sound as Sound);
		})();
	}, []);
	useEffect(() => {
		setSoundDate(SOUNDS[sound]);
	}, [sound]);

	console.log(soundData);

	return (
		<SoundContext.Provider value={{sound, setSound: oSetSound}}>
			{soundData && (
				<Audio autoPlay loop>
					<source src={soundData.src} type={soundData.type} />
				</Audio>
			)}
			{children}
		</SoundContext.Provider>
	);
};
