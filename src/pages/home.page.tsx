import {useCallback, useState} from 'react';
import {Link} from 'react-router-dom';

import {ConfirmModal} from '../components/modals/confirm.modal.tsx';
import {Text} from '../components/shared/text.component.tsx';
import {Button} from '../components/shared/button.component.ts';
import {Flex} from '../components/shared/flex.component.ts';
import {Page} from '../components/shared/page.component.ts';
import {Size} from '../types/enums/size.enum.ts';
import {TextStyle} from '../types/enums/text-style.enum.ts';

export const HomePage = () => {
	const [open, setOpen] = useState(false);

	const onQuitClick = useCallback(() => {
		setOpen(true);
	}, []);
	const onConfirm = useCallback(() => {
		void window.browser.close();
	}, []);
	const onCancel = useCallback(() => {
		setOpen(false);
	}, []);

	return (
		<Page runway>
			<Flex
				width="100vw"
				height="100vh"
				padding={32}
				row
				centerJustify
				stretchAlign
				gap={32}>
				<Flex column gap={32} flex={1} center>
					<Flex flex={2} />
					<Text textStyle={TextStyle.HEADING1} color="#fff">
						Apricity
					</Text>
					<Link to="/play">
						<Button size={Size.LARGE} width={300}>
							Play
						</Button>
					</Link>
					<Link to="/settings">
						<Button size={Size.LARGE} width={300}>
							Settings
						</Button>
					</Link>
					<Link to="/about">
						<Button size={Size.LARGE} width={300}>
							About
						</Button>
					</Link>
					<Flex flex={1} />
					<Button size={Size.LARGE} width={300} onClick={onQuitClick}>
						Quit
					</Button>
					<Flex flex={2} />
				</Flex>
				<Flex flex={2} />
			</Flex>
			<ConfirmModal
				open={open}
				message="Do you want to quit?"
				onConfirm={onConfirm}
				onCancel={onCancel}
			/>
		</Page>
	);
};
