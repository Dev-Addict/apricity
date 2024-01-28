import {forwardRef} from 'react';

import {SvgProps} from '../../types/props/svg.props.ts';

export const ArrowLeftIcon = forwardRef<SVGSVGElement, SvgProps>(
	function BackLeftIcon({size, color, ...props}, ref) {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size ?? 24}
				height={size ?? 24}
				viewBox="0 0 24 24"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				className="feather feather-arrow-left"
				{...props}
				ref={ref}>
				<path d="M19 12H5M12 19l-7-7 7-7" />
			</svg>
		);
	}
);
