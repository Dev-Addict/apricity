import {createContext} from 'react';

import {Sound} from '../../types/sound.ts';
import {DEFAULT_SOUND} from '../../constants/sounds.constant.ts';

export interface AppContextType {
	initialized: boolean;
	musicVolume: number;
	setMusicVolume: (volume: number) => void;
	soundVolume: number;
	setSoundVolume: (volume: number) => void;
	sound: Sound;
	setSound: (sound: string) => void;
}

export const AppContext = createContext<AppContextType>({
	initialized: false,
	musicVolume: 0,
	setMusicVolume: () => {},
	soundVolume: 0,
	setSoundVolume: () => {},
	sound: DEFAULT_SOUND,
	setSound: () => {},
});
