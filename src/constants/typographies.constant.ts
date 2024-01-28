import {TextStyle} from '../types/enums/text-style.enum';
import {Typography} from '../types/typography.type';

export const TYPOGRAPHIES: {[k in TextStyle]: Typography} = {
	[TextStyle.HEADING1]: {
		element: 'h1',
		fontSize: 56,
		fontWeight: 600,
		lineHeight: '64px',
	},
	[TextStyle.HEADING2]: {
		element: 'h2',
		fontSize: 48,
		fontWeight: 600,
		lineHeight: '56px',
	},
	[TextStyle.HEADING3]: {
		element: 'h3',
		fontSize: 40,
		fontWeight: 600,
		lineHeight: '48px',
	},
	[TextStyle.HEADING4]: {
		element: 'h4',
		fontSize: 32,
		fontWeight: 600,
		lineHeight: '40px',
	},
	[TextStyle.HEADING5]: {
		element: 'h5',
		fontSize: 24,
		fontWeight: 700,
		lineHeight: '28px',
	},
	[TextStyle.HEADING6]: {
		element: 'h6',
		fontSize: 20,
		fontWeight: 700,
		lineHeight: '24px',
	},
	[TextStyle.SUBTITLE1]: {
		element: 'span',
		fontSize: 20,
		fontWeight: 600,
		lineHeight: '24px',
	},
	[TextStyle.SUBTITLE2]: {
		element: 'span',
		fontSize: 16,
		fontWeight: 600,
		lineHeight: '20px',
	},
	[TextStyle.BODY1]: {
		element: 'span',
		fontSize: 20,
		fontWeight: 400,
	},
	[TextStyle.BODY2]: {
		element: 'span',
		fontSize: 16,
		fontWeight: 400,
	},
	[TextStyle.CAPTION]: {
		element: 'span',
		fontSize: 14,
		fontWeight: 400,
	},
	[TextStyle.OVERLINE]: {
		element: 'span',
		fontSize: 12,
		fontWeight: 400,
	},
};
