const openSearchSuggestions = () => {
    const searchSuggestionContainer = document.getElementById(
        'search-suggestions-container'
    );
    const searchButtonsContainer = document.getElementById(
        'outter-search-buttons-container'
    );

    searchSuggestionContainer.style.display = 'block';
    searchButtonsContainer.style.display = 'none';
};

const closeSearchSuggestions = () => {
    const searchSuggestionContainer = document.getElementById(
        'search-suggestions-container'
    );
    const searchButtonsContainer = document.getElementById(
        'outter-search-buttons-container'
    );

    searchSuggestionContainer.style.display = 'none';
    searchButtonsContainer.style.display = 'block';
};

document
    .getElementById('search-input')
    .addEventListener('focus', openSearchSuggestions);

document
    .getElementsByTagName('body')[0]
    .addEventListener('click', closeSearchSuggestions);

document
    .getElementsByClassName('search-box-container')[0]
    .addEventListener('click', e => e.stopPropagation());
