import {RouterProvider} from 'react-router-dom';

import {AppProvider} from '../store/app/app.provider.tsx';
import {SoundProvider} from '../store/sound/sound.provider.tsx';
import {MainGlobalStyle} from '../styles/global/main.global.style.ts';
import {mainRouter} from '../routers/main.router.tsx';

export function App() {
	return (
		<AppProvider>
			<SoundProvider>
				<MainGlobalStyle />
				<RouterProvider router={mainRouter} />
			</SoundProvider>
		</AppProvider>
	);
}
