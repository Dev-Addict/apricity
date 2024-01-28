import {createHashRouter} from 'react-router-dom';

import {AboutPage} from '../pages/about.page.tsx';
import {HomePage} from '../pages/home.page.tsx';
import {PlayPage} from '../pages/play.page.tsx';
import {SettingsPage} from '../pages/settings.page.tsx';

export const mainRouter = createHashRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/play',
		element: <PlayPage />,
	},
	{
		path: '/settings',
		element: <SettingsPage />,
	},
	{
		path: '/about',
		element: <AboutPage />,
	},
]);
