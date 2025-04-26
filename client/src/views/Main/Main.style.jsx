import { styled } from 'styled-components';
import media from '../../styles/media';

export const MainBox = styled.main`
max-height: 100vh;
	display: grid;
	grid-template-columns: [margin-left] 30px [content-start] 1fr [content-mid] auto [content-end] 10px[scroll-end] 30px [margin-right];
	grid-template-rows: [margin-top] 30px [content-top] 70px [header-top] auto [header-bottom] auto [content-mid] 1fr [content-bottom] 30px [margin-bottom];
	min-width: 350px;
	background-color: ${({ theme }) => theme.colors.background};
	${media.lg`
		display: grid;
		grid-template-columns: [margin-left] 30px [content-start] minmax(350px, 500px) [content-mid] minmax(
				400px,
				750px
			) [content-end] 10px[scroll-end]minmax(50px, auto) [margin-right];
		grid-template-rows: [margin-top] 30px [content-top] 70px [header-top] auto [header-bottom] auto [content-mid] 1fr [content-bottom] 30px [margin-bottom];
		
	`}
`;