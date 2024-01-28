import {BackButton} from '../components/shared/back-button.component.tsx';
import {Text} from '../components/shared/text.component.tsx';
import {Button} from '../components/shared/button.component.ts';
import {Flex} from '../components/shared/flex.component.ts';
import {Page} from '../components/shared/page.component.ts';
import {Size} from '../types/enums/size.enum.ts';
import {TextStyle} from '../types/enums/text-style.enum.ts';

export const PlayPage = () => {
	return (
		<Page runway>
			<BackButton />
			<Flex column center gap={32} flex={1}>
				<Flex flex={1} />
				<Text textStyle={TextStyle.HEADING2} color="#FFF">
					Play
				</Text>
				<Button size={Size.LARGE} width={300}>
					New Game
				</Button>
				<Button size={Size.LARGE} width={300}>
					New Game
				</Button>
				<Button size={Size.LARGE} width={300}>
					New Game
				</Button>
				<Flex flex={2} />
			</Flex>
		</Page>
	);
};
