import { css } from 'styled-components';

export const sizes = {
	sm: 576,
	md: 768,
	lg: 992,
};

const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${sizes[label]}px) {
			${css(...args)}
		}
	`;

	return acc;
}, {});

export default media;
