const openSearchSuggestions = () => {
    const searchSuggestionContainer = document.getElementById(
        'search-suggestions-container'
    );

    searchSuggestionContainer.style.display = 'block';
};

const closeSearchSuggestions = () => {
    const searchSuggestionContainer = document.getElementById(
        'search-suggestions-container'
    );

    searchSuggestionContainer.style.display = 'none';
};

document
    .getElementById('search-input')
    .addEventListener('focus', openSearchSuggestions);

document
    .getElementsByTagName('body')[0]
    .addEventListener('mousedown', closeSearchSuggestions);

document
    .getElementsByClassName('search-box-container')[0]
    .addEventListener('mousedown', e => e.stopPropagation());
