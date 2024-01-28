import {createContext} from 'react';

export interface AppContextType {
	initialized: boolean;
}

export const AppContext = createContext<AppContextType>({
	initialized: false,
});
