import styled, {css} from 'styled-components';
import {Size} from '../../types/enums/size.enum.ts';

export interface ButtonProps {
	size?: Size;
	width?: number | string;
	border?: boolean;
}

export const Button = styled.button<ButtonProps>`
	color: #fff;
	font-weight: 600;
	background-color: transparent;
	font-size: ${({size}) =>
		({
			[Size.SMALL]: 14,
			[Size.MEDIUM]: 24,
			[Size.LARGE]: 36,
		})[size || Size.MEDIUM]}px;
	cursor: pointer;
	transition: opacity 336ms ease-in-out;

	&:hover {
		opacity: 0.7;
	}

	${({border = true}) =>
		border
			? css`
					border: 3px solid #fff;
				`
			: css`
					border: none;
				`}

	${({width}) => ({width})}
`;
