import styled from 'styled-components';
import media from '../../styles/media';

export const ContactsWrapper = styled.div`
	min-width: 290px;
	overflow: auto;
	scrollbar-gutter: stable;
	scroll-behavior: smooth;
	&::-webkit-scrollbar {
		width: 10px;
	}
	&::-webkit-scrollbar-track {
		background-color: none;
		border-radius: 10px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.button};
		border-radius: 10px;
	}
	grid-column: content-start / scroll-end;
	grid-row: content-mid / content-bottom;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	${media.lg`
		
		grid-column: content-mid / scroll-end;
		grid-row: header-bottom / content-bottom;
	`}
`;
