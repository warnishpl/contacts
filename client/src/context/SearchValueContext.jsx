import { createContext, useState } from 'react';

export const SearchValueContext = createContext({
	searchValue: '',
	setSearchValue: () => {},
});

export const SearchValueProvider = ({ children }) => {
	const [searchValue, setSearchValue] = useState('');

	return (
		<SearchValueContext.Provider value={{ searchValue, setSearchValue }}>
			{children}
		</SearchValueContext.Provider>
	);
};
