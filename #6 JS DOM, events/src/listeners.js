import {searchMovie, removeSearchTag, addSearchTad, States} from "./index.js"


window.addEventListener('scroll', function (){
    const header = document.querySelector('#search-box');
    const resultStart = document.querySelector('#result-block').offsetTop;
    header.classList.value = window.pageYOffset > resultStart ? 'search-box-sticky'
    :'search-box search-box-active';
});

document.querySelector('.search-line__input').addEventListener('focus', () => {
    if(document.querySelector('#search-box').classList.value === 'search-box'){
        document.querySelector('#search-box').classList.add('search-box-active');
    }
});


document.querySelector('.clear-botton').addEventListener('click', function(){
    document.querySelector('.search-line__input').value = '';
});


function debounce(f, ms) {
    let isCooldown = false;
    return function() {
      if(isCooldown) return;
      f.apply(this, arguments);
      States.makeRequest = true;
      isCooldown = true;
      setTimeout(() => isCooldown = false, ms);
    };
}

const trySearch = debounce(searchMovie, 200);

document.querySelector('.search-line').addEventListener('submit', function(event){
    event.preventDefault();
    let text = document.querySelector('.search-line__input').value;
    removeSearchTag(text);
    addSearchTad(text);
    localStorage.setItem(text, 0);
});


document.querySelector('.search-line').addEventListener('input', function(){
    if(States.makeRequest){
        States.controller.abort();
        States.controller = new AbortController();
        States.makeRequest = false;
    }
    clearTimeout(States.timeout);
    let text = document.querySelector('.search-line__input').value;
    trySearch(text);
    States.timeout = setTimeout(function(str){
        if(!States.makeRequest) searchMovie(str);
    }, 150, text);
})


function checkDoubleClick(str){
    if(States.clickCount===1){
        document.querySelector('#search-box').classList.value = 'search-box search-box-active';
        searchMovie(str);
        removeSearchTag(str);
        addSearchTad(str);
        localStorage.setItem(str, 0);
    }
    else if(States.clickCount===2){
        removeSearchTag(str);
        localStorage.removeItem(str);
    }
    States.clickCount = 0;
}

document.querySelector('.last-search').addEventListener('click', (event) => {
    States.clickCount++;
    if(event.target.classList.contains('last-search__item')){
        setTimeout(checkDoubleClick, 300, event.target.innerText);
    }
});
