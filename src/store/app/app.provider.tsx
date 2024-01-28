import {
	FC,
	PropsWithChildren,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import Cookies from 'js-cookie';

import {AppContext} from './app.context.ts';
import {DEFAULT_SOUND} from '../../constants/sounds.constant.ts';
import {Sound} from '../../types/sound.ts';

export const AppProvider: FC<PropsWithChildren> = ({children}) => {
	const [initialized, setInitialized] = useState(false);
	const [musicVolume, setMusicVolume] = useState(100);
	const [soundVolume, setSoundVolume] = useState(100);
	const [sound, setSound] = useState<Sound>(DEFAULT_SOUND);
	const calledRef = useRef(false);

	const oSetMusicVolume = useCallback(
		(volume: number) => {
			if (!initialized) return;

			void window.store.set('musicVolume', volume.toString());
			setMusicVolume(volume);
		},
		[initialized]
	);
	const oSetSoundVolume = useCallback(
		(volume: number) => {
			if (!initialized) return;

			void window.store.set('soundVolume', volume.toString());
			setSoundVolume(volume);
		},
		[initialized]
	);
	const oSetSound = useCallback(
		(sound: string) => {
			if (!initialized) return;

			void window.store.set('sound', sound);
			setSound(sound as Sound);
		},
		[initialized]
	);

	useEffect(() => {
		if (calledRef.current) return;
		calledRef.current = true;

		if (window.store === undefined) {
			window.store = {
				async get(key) {
					return Cookies.get(key) || null;
				},
				async set(key, value) {
					Cookies.set(key, value);
				},
				async delete(key) {
					Cookies.remove(key);
				},
			};
		}

		window.store.get('initialized').then(async (value) => {
			if (value === 'true') {
				setInitialized(true);

				const musicVolume = await window.store.get('musicVolume');
				if (musicVolume !== null) setMusicVolume(parseInt(musicVolume) || 100);

				const soundVolume = await window.store.get('soundVolume');
				if (soundVolume !== null) setSoundVolume(parseInt(soundVolume) || 100);

				const sound = await window.store.get('sound');
				if (sound !== null) setSound(sound as Sound);

				return;
			}

			void window.store.set('initialized', 'true');
			void window.store.set('sound', DEFAULT_SOUND);
			void window.store.set('position', 'INITIAL_SEQUENCES,airport-runway');
			void window.store.set('musicVolume', '100');
			void window.store.set('soundVolume', '100');
		});

		setInitialized(true);
	}, []);

	return (
		<AppContext.Provider
			value={{
				initialized,
				musicVolume,
				setMusicVolume: oSetMusicVolume,
				soundVolume,
				setSoundVolume: oSetSoundVolume,
				sound,
				setSound: oSetSound,
			}}>
			{children}
		</AppContext.Provider>
	);
};
