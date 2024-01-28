import styled from 'styled-components';

interface BackgroundProps {
	src: string;
}

export const Background = styled.div<BackgroundProps>`
	position: absolute;
	top: -8px;
	left: -8px;
	right: -8px;
	bottom: -8px;
	background-image: url('${({src}) => src}');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	animation-name: filter;
	animation-duration: 5s;
	animation-iteration-count: infinite;
	transition: background-image 0.5s ease-in-out;

	@keyframes filter {
		0% {
			filter: blur(0px);
		}
		50% {
			filter: blur(4px);
		}
		100% {
			filter: blur(0px);
		}
	}
`;
