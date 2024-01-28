import styled, {css} from 'styled-components';

export interface FlexProps {
	row?: boolean;
	reverse?: boolean;
	column?: boolean;
	flex?: number;
	center?: boolean;
	centerAlign?: boolean;
	stretchAlign?: boolean;
	centerJustify?: boolean;
	betweenJustify?: boolean;
	width?: number | string;
	height?: number | string;
	minWidth?: number | string;
	minHeight?: number | string;
	maxWidth?: number | string;
	maxHeight?: number | string;
	padding?: number | string;
	paddingVertical?: number | string;
	paddingHorizontal?: number | string;
	paddingTop?: number | string;
	paddingRight?: number | string;
	paddingBottom?: number | string;
	paddingLeft?: number | string;
	marginVertical?: number | string;
	marginHorizontal?: number | string;
	margin?: number | string;
	marginTop?: number | string;
	marginRight?: number | string;
	marginBottom?: number | string;
	marginLeft?: number | string;
	fontSize?: number | string;
	gap?: number | string;
}

export const Flex = styled.div<FlexProps>`
	${({row, reverse}) =>
		row &&
		css`
			display: flex;
			flex-direction: ${`row${reverse ? '-reverse' : ''}`};
		`}

	${({column, reverse}) =>
		column &&
		css`
			display: flex;
			flex-direction: ${`column${reverse ? '-reverse' : ''}`};
		`}

  ${({flex}) =>
		flex &&
		css`
			flex: ${flex};
		`}

  ${({center, centerAlign}) =>
		(center || centerAlign) &&
		css`
			align-items: center;
		`}

  ${({center, centerJustify}) =>
		(center || centerJustify) &&
		css`
			justify-content: center;
		`}

  ${({stretchAlign}) =>
		stretchAlign &&
		css`
			align-items: stretch;
		`}

  ${({betweenJustify}) =>
		betweenJustify &&
		css`
			justify-content: space-between;
		`}

  ${({
		width,
		height,
		minWidth,
		minHeight,
		maxWidth,
		maxHeight,
		padding,
		paddingVertical,
		paddingHorizontal,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,
		margin,
		marginVertical,
		marginHorizontal,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
		fontSize,
		gap,
	}) => ({
		width,
		height,
		minWidth,
		minHeight,
		maxWidth,
		maxHeight,
		padding,
		paddingTop: paddingTop || paddingVertical,
		paddingRight: paddingRight || paddingHorizontal,
		paddingBottom: paddingBottom || paddingVertical,
		paddingLeft: paddingLeft || paddingHorizontal,
		margin,
		marginTop: marginTop || marginVertical,
		marginRight: marginRight || marginHorizontal,
		marginBottom: marginBottom || marginVertical,
		marginLeft: marginLeft || marginHorizontal,
		fontSize,
		gap,
	})}
`;
