import {FC, PropsWithChildren, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

import {SoundContext} from './sound.context.ts';
import {useApp} from '../../hooks/store/app.hook.ts';
import {SOUNDS} from '../../constants/sounds.constant.ts';
import {Sound} from '../../types/sound.ts';

const Audio = styled.audio``;

export const SoundProvider: FC<PropsWithChildren> = ({children}) => {
	const audioRef = useRef<HTMLAudioElement>(null);

	const {sound, musicVolume} = useApp();

	const [soundData, setSoundDate] = useState<(typeof SOUNDS)[Sound] | null>(
		null
	);

	useEffect(() => {
		setSoundDate(SOUNDS[sound]);
	}, [sound]);
	useEffect(() => {
		if (!audioRef.current) return;

		audioRef.current.volume = musicVolume / 100;
	}, [musicVolume]);

	return (
		<SoundContext.Provider value={{}}>
			{soundData && (
				<Audio autoPlay loop ref={audioRef}>
					<source src={soundData.src} type={soundData.type} />
				</Audio>
			)}
			{children}
		</SoundContext.Provider>
	);
};
