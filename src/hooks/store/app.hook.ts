import {useContext} from 'react';

import {AppContext} from '../../store/app/app.context.ts';

export const useApp = () => useContext(AppContext);
