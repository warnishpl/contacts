import styled from 'styled-components';
import media from '../../styles/media';

export const HeaderWrapper = styled.div`
	display: flex;
	margin: 10px 0;
	padding-left: 10px;
	align-items: center;
	justify-content: space-between;
	font-size: 14px;
	/* background-color: ${({ theme }) => theme.colors.background}; */
	grid-row: header-top / header-bottom;
	grid-column: content-start / content-end;
	${media.lg`
		grid-row: header-top / header-bottom;
		grid-column: content-mid / content-end;
	`}
`;
export const Wrapper = styled.div`
	display: flex;
	margin-right: auto;
	align-items: center;
`;
