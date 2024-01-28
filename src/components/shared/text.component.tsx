import {
	DetailedHTMLProps,
	FC,
	HTMLAttributes,
	CSSProperties,
	ElementType,
} from 'react';

import {TextStyle} from '../../types/enums/text-style.enum';
import {TYPOGRAPHIES} from '../../constants/typographies.constant';

interface Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	textStyle?: TextStyle;
	cursor?: CSSProperties['cursor'];
	color?: string;
	element?: ElementType;
	lines?: number;
	uppercase?: boolean;
	negativeMargin?: number;
	inline?: boolean;
	centerAlign?: boolean;
	underline?: boolean;
}

export const Text: FC<Props> = ({
	children,
	textStyle = TextStyle.BODY1,
	style,
	cursor,
	color,
	element: oElement,
	lines,
	uppercase,
	negativeMargin,
	inline,
	centerAlign,
	underline,
	...props
}) => {
	const {fontWeight, fontSize, element, lineHeight} = TYPOGRAPHIES[textStyle];

	const textTransform = uppercase ? 'uppercase' : 'none';
	const linesStyle = lines
		? {
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				display: '-webkit-box',
				lineClamp: lines,
				WebkitLineClamp: lines,
				WebkitBoxOrient: 'vertical',
			}
		: {};
	const negativeMarginStyle = negativeMargin
		? {
				marginBottom: `-${negativeMargin}px`,
			}
		: {};
	const display = inline ? 'inline' : 'unset';
	const textAlign = centerAlign ? 'center' : 'unset';
	const textDecoration = underline ? 'underline' : undefined;

	const Element = oElement || element;

	return (
		<Element
			style={{
				fontWeight,
				fontSize,
				lineHeight,
				cursor,
				display,
				textAlign,
				color,
				textTransform,
				textDecoration,
				...linesStyle,
				...negativeMarginStyle,
				...style,
			}}
			{...props}>
			{children}
		</Element>
	);
};

export type TextProps = Props;
