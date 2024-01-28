import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {ArrowLeftIcon} from '../../assets/icons/arrow-left.icon.tsx';

const Container = styled.div`
	padding: 32px;
`;

export const BackButton = () => {
	return (
		<Container>
			<Link to="..">
				<ArrowLeftIcon size={40} color="#FFFFFF" />
			</Link>
		</Container>
	);
};
