import {FC, useCallback, useEffect, useRef, useState} from 'react';
import styled, {css} from 'styled-components';

import {Flex} from '../shared/flex.component.ts';
import {Button} from '../shared/button.component.ts';
import {Text} from '../shared/text.component.tsx';
import {TextStyle} from '../../types/enums/text-style.enum.ts';

interface DialogProps {
	isOpen: boolean;
}

const Dialog = styled.dialog<DialogProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	outline: none;
	padding: 16px;
	background: #00000080;
	color: #fff;
	width: 100%;
	height: 100%;
	border: none;
	opacity: 0;
	transition: opacity 336ms ease-in-out;
	position: fixed;
	top: -200%;
	left: -200%;

	${({isOpen}) =>
		isOpen &&
		css`
			opacity: 1;
			top: 0;
			left: 0;
		`}
`;

interface Props {
	open: boolean;
	message: string;
	affirmative?: string;
	negative?: string;
	onConfirm: () => void;
	onCancel: () => void;
}

export const ConfirmModal: FC<Props> = ({
	open: oOpen,
	message,
	affirmative = 'yes',
	negative = 'no',
	onConfirm,
	onCancel,
}) => {
	const modalRef = useRef<HTMLDialogElement | null>(null);

	const [open, setOpen] = useState(oOpen);

	const onAffirmativeClick = useCallback(() => {
		setOpen(false);
		onConfirm();
	}, [onConfirm]);
	const onNegativeClick = useCallback(() => {
		setOpen(false);
		onCancel();
	}, [onCancel]);

	useEffect(() => {
		setOpen(oOpen);
	}, [oOpen]);
	useEffect(() => {
		if (modalRef.current) {
			if (open) modalRef.current.showModal();
			else modalRef.current.close();
		}
	}, [open]);

	return (
		<Dialog ref={modalRef} isOpen={open}>
			<Flex column center gap={32}>
				<Text textStyle={TextStyle.SUBTITLE1}>{message}</Text>
				<Flex row centerAlign betweenJustify gap={16}>
					<Button onClick={onNegativeClick} width={80}>
						{negative}
					</Button>
					<Button onClick={onAffirmativeClick} width={80}>
						{affirmative}
					</Button>
				</Flex>
			</Flex>
		</Dialog>
	);
};
