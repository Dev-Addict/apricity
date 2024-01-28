import styled, {css} from 'styled-components';

export interface PageProps {
	runway?: boolean;
}

export const Page = styled.div<PageProps>`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	position: relative;

	${({runway}) =>
		runway &&
		css`
    background-image: url('/images/airport-runway.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    animation-name: filter;
    animation-duration: 5s;
    animation-iteration-count: infinite;

    @keyframes filter {
      0% {
        filter: brightness(100%);
      }
      50% {
        filter: brightness(75%);
      }
      100% {
        filter: brightness(100%);
      }
  `}
`;
