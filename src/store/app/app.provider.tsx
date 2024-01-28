import {FC, PropsWithChildren, useEffect, useRef, useState} from 'react';
import Cookies from 'js-cookie';

import {AppContext} from './app.context.ts';
import {DEFAULT_SOUND} from '../../constants/sounds.constant.ts';

export const AppProvider: FC<PropsWithChildren> = ({children}) => {
	const [initialized, setInitialized] = useState(false);
	const calledRef = useRef(false);

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

		void window.store.set('sound', DEFAULT_SOUND);

		setInitialized(true);
	}, []);

	return (
		<AppContext.Provider value={{initialized}}>{children}</AppContext.Provider>
	);
};
