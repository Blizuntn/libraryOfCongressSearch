const searchInputEl = document.getElementById('search');
const searchTypeEl = document.getElementById('search-type');
const searchMsgEl = document.getElementById('search-msg');

const handleSearchForm = function() {
    
    if (!searchInputEl.value) {
        displaySearchMsg('Error: please include a search input!');
        return;
    }

    const search = searchInputEl.value;
    const searchType = searchTypeEl.value;
    const redirectUrl = '../../search-results.html' + 'q=' + search + '&format=' + searchType;

    document.location.replace(redirectUrl);
}

const displaySearchMsg = function(msg) {
    searchMsgEl.textContent = msg;
}

document.addEventListener('submit', handleSearchForm);
  