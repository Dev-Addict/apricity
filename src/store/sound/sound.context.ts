import {createContext} from 'react';

import {DEFAULT_SOUND} from '../../constants/sounds.constant.ts';
import {Sound} from '../../types/sound.ts';

export interface SoundContextType {
	sound: Sound;
	setSound: (sound: Sound) => void;
}

export const SoundContext = createContext<SoundContextType>({
	sound: DEFAULT_SOUND,
	setSound: () => {},
});
