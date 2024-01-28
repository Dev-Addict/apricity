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

		window.store.get('initialized').then((value) => {
			if (value === 'true') return;

			void window.store.set('initialized', 'true');
			void window.store.set('sound', DEFAULT_SOUND);
			void window.store.set('position', 'INITIAL_SEQUENCES,airport-runway');
		});

		setInitialized(true);
	}, []);

	return (
		<AppContext.Provider value={{initialized}}>{children}</AppContext.Provider>
	);
};
