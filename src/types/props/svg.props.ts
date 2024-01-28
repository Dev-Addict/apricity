import {SVGProps as RSVGProps} from 'react';

export interface SvgProps extends RSVGProps<SVGSVGElement> {
	size?: number;
	color?: string;
}
