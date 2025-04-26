import styled from 'styled-components';

export const Button = styled.button`
	background-color: ${({ theme }) => theme.colors.button};
	width: 220px;
	height: 50px;
	border-radius: 10px;
	font-weight: bold;
	text-transform: uppercase;
	transition: background-color 0.3s ease;
	&:hover {
		background-color: ${({ theme }) => theme.colors.buttonHover};
	}
`;
