import "./curYear.js"
import "./movieCard.js"
import "./listeners.js"

window.movieURL = 'https://www.omdbapi.com';
window.apiKey = '230490d1';


export const States = {
    lastSearchList: [],
    cash: new Map(),
    timeout: 0,
    controller: new AbortController(),
    clickCount: 0,
    makeRequest: false,
}

for(let el of Object.keys(localStorage)){
    addSearchTad(el);
}

export async function searchMovie(str){
    str = str.trim().toLowerCase();
    let text = str.split(' ').join('_');
    document.querySelector('#result-block').classList.value = 'search-result-loading';
    const url = window.movieURL + `/?apikey=${window.apiKey}` + `&s=${text}`;
    if(States.cash.has(url)){
        parseSearch(States.cash.get(url));
        return;
    }
    try{
        await request(url, parseSearch);
    }
    catch(err){
        if(err.name !== 'AbortError'){
            document.querySelector('#result-block').classList.value = 'search-result-error';
        }
    }
}

export function removeSearchTag(str){
    let index = States.lastSearchList.indexOf(str);
    if(index !== -1){
        States.lastSearchList.splice(index, 1);
        document.querySelectorAll('.last-search__item')[index].remove();
    }
}


export function addSearchTad(str){
    let curEl = document.createElement('div');
    curEl.className = 'last-search__item';
    curEl.innerText = str;
    document.querySelector('.last-search').prepend(curEl);
    States.lastSearchList.unshift(str);
}


function request(url, fn){
    return fetch(url, {
        signal: States.controller.signal
    })
    .then(
        res => res.ok ? res : Promise.reject(res),
        er => Promise.reject(er)
    )
    .then(
        res => res.json()
    )
    .then(
        res => {
            States.cash.set(url, res);
            fn(res);
        }
    )
}


function parseSearch(result){
    document.querySelector('.result-list').innerHTML = '';
    if(result.Response === 'True'){
        document.querySelector('#result-block').classList = 'search-result';
        document.getElementById('count').innerText = result.totalResults;
        result.Search.forEach((movie) => parseMovie(movie));
    }
    else{
        document.querySelector('#result-block').classList.value = 'search-result-not-found';
    }
    window.scrollTo(0, 0);
}


function parseMovie(movieObj){
    let newMovie = document.createElement('movie-card');
    document.querySelector('.result-list').append(newMovie);
    setMovieParams(newMovie, movieObj);
}


function setMovieParams(newMovie, movieObj){
    newMovie.title = movieObj.Title;
    newMovie.year = movieObj.Year;
    newMovie.poster = movieObj.Poster;
    const id = movieObj.imdbID;
    newMovie.href = id;
    const url = window.movieURL + `/?apikey=${window.apiKey}` + `&i=${id}`;
    if(States.cash.has(url)){
        newMovie.genre = States.cash.get(url);
        return;
    }
    request(url, (el) => newMovie.genre = el.Genre).catch(err => err);
}