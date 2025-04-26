import styled from 'styled-components';
import media from '../../styles/media';
import searchIcon from '../../assets/search.svg';

export const InputWrapper = styled.div`
	width: -webkit-fill-available;
	min-width: 195px;
	display: flex;
	align-items: end;
	grid-column: content-start / content-mid;
	grid-row: content-top / header-top;
	padding-right: 10px;
	${media.lg`
		grid-column: content-mid / content-end;
		grid-row: content-top / header-top;
		padding-right: 0;
	`}
`;

export const Input = styled.input`
	height: 60px;
	width: 100%;
	padding-left: 37px;
	padding-right: 20px;
	border-radius: 10px;
	border: none;
	font-size: 16px;
	line-height: 60px;
	color: ${({ theme }) => theme.colors.text};
	background: url(${searchIcon});
	background-color: ${({ theme }) => theme.colors.itemBackground};
	background-position: 10px 50%;
	background-repeat: no-repeat;
	transition: background-color 0.3s ease;
	&:focus {
		outline: 1px solid ${({ theme }) => theme.colors.inputOutline};
	}
	${media.lg`
		&:hover,
		&:focus-within {
			background-color: ${({ theme }) => theme.colors.inputBackground};
		}
	`}
`;
