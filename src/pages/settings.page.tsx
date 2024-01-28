import styled from 'styled-components';
import ReactSlider from 'react-slider';
import Dropdown, {Option} from 'react-dropdown';
import 'react-dropdown/style.css';

import {Page} from '../components/shared/page.component.ts';
import {Text} from '../components/shared/text.component.tsx';
import {useApp} from '../hooks/store/app.hook.ts';
import {TextStyle} from '../types/enums/text-style.enum.ts';
import {SOUNDS} from '../constants/sounds.constant.ts';
import {useCallback} from 'react';
import {Flex} from '../components/shared/flex.component.ts';
import {BackButton} from '../components/shared/back-button.component.tsx';

const Container = styled.div`
	padding: 32px;
	display: flex;
	flex-direction: column;
	align-self: center;
	color: #fff;
	overflow: auto;
	width: 100%;
	max-width: 800px;
`;

const SliderContainer = styled.div`
	.slider {
		width: 100%;
		height: 40px;
		position: relative;
	}

	.thumb {
		cursor: pointer;
		position: absolute;
		z-index: 100;
		background: #ffffff;
		border: 5px solid #ffffff;
		border-radius: 100%;
		display: block;
		top: -50%;
		transform: translate(0, 50%);
		transition:
			border-top-color 336ms ease-in-out,
			border-right-color 336ms ease-in-out,
			border-bottom-color 336ms ease-in-out,
			border-left-color 336ms ease-in-out;
	}

	.thumb.active {
		border-color: #83a9ff;
	}

	.track {
		position: relative;
		background: #ffffff80;
	}

	.track.track-0 {
		background: #ffffff;
	}

	.slider .track {
		top: 20px;
		height: 4px;
	}

	.slider .thumb {
		top: 12px;
		width: 10px;
		outline: none;
		height: 10px;
		line-height: 38px;
	}
`;

export const SettingsPage = () => {
	const {
		soundVolume,
		setSoundVolume,
		musicVolume,
		setMusicVolume,
		sound,
		setSound,
	} = useApp();

	const onMusicChange = useCallback(
		({value}: Option) => {
			setSound(value);
		},
		[setSound]
	);

	return (
		<Page runway>
			<BackButton />
			<Container>
				<Text textStyle={TextStyle.HEADING2}>Settings</Text>
				<Text textStyle={TextStyle.HEADING3}>Music & Sound</Text>
				<Text textStyle={TextStyle.SUBTITLE1}>Music</Text>
				<SliderContainer>
					<ReactSlider
						className="slider"
						thumbClassName="thumb"
						trackClassName="track"
						defaultValue={musicVolume}
						onChange={setMusicVolume}
					/>
				</SliderContainer>
				<Dropdown
					options={Object.keys(SOUNDS)}
					onChange={onMusicChange}
					value={sound}
				/>
				<Flex minHeight={20} />
				<Text textStyle={TextStyle.SUBTITLE1}>Sound</Text>
				<SliderContainer>
					<ReactSlider
						className="slider"
						thumbClassName="thumb"
						trackClassName="track"
						defaultValue={soundVolume}
						onChange={setSoundVolume}
					/>
				</SliderContainer>
			</Container>
		</Page>
	);
};
