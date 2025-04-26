import { createGlobalStyle } from 'styled-components';

export const SetGlobalStyle = createGlobalStyle`/* reset */
*,
*::after,
*::before {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
html,
body {
	height: 100%;
	background-color: ${({ theme }) => theme.colors.background};
}
html {
	font-size: 62.5%;
	scroll-behavior: smooth;
}
a {
	text-decoration: none;
}

input,
button,
textarea,
select {
	font-family: inherit;
}
button {
	border: none;
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0);
}
textarea {
	resize: vertical;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* reset */
`;
