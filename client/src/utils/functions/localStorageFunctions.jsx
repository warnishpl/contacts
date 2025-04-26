export function getLocalStorageValue(key) {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
    return value;
}

export function setLocalStorgeValue(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function updateContactsInLocalStorage(arr) {
	localStorage.setItem('contacts', JSON.stringify(arr));
}
export function updateThemeInLocalStorage(theme) {
	localStorage.setItem('theme', JSON.stringify(theme));
}
export function updateThemeNameInLocalStorage(themeName) {
	localStorage.setItem('themeName', JSON.stringify(themeName));
}
