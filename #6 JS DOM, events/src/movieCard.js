const movieCardTemplate = document.createElement('template');

movieCardTemplate.innerHTML =`
<div class="result-list__item">
    <div class="sceleton">
        <div class="line"></div>
        <div class="line short"></div>
    </div>
    <a href="https://www.imdb.com/title/tt0088247/">
        <img src="" class="img-movie" alt="poster" >
        <div class="description">
            <span class="title-movie">Hudsone</span>
            <div class="bottom-description">
                <span class="genre">Hudsone</span>
                <span class="year">2019</span>
            </div>
        </div>
    </a>
</div>
`;

const params = ['title', 'genre', 'year', 'poster', 'href'];

class MovieCard extends HTMLElement{
    attributeChangedCallback(param, _, newValue){
        switch(param){
            case 'title':
                this.querySelector('.title-movie').innerText = newValue;
                break;
            case 'year':
                this.querySelector('.year').innerText = newValue;
                break;
            case 'genre':
                this.querySelector('.genre').innerText = newValue;
                break;
            case 'poster':
                if(newValue==='N/A'){
                    this.querySelector('.result-list__item').classList.add('result-list__item_no-poster');
                }
                else{
                    this.querySelector('.result-list__item').classList.add('result-list__item_loaded');
                    this.querySelector('.img-movie').setAttribute('src', newValue);
                }
                break;
            case 'href':
                this.querySelector('a').setAttribute('href', `https://www.imdb.com/title/${newValue}/`);
                break;
        }
    }
    static get observedAttributes(){
        return params;
    }

    connectedCallback(){
        this.append(movieCardTemplate.content.cloneNode(true));
        SetPropertys(this);
    }
}


function SetPropertys(context){
    params.forEach((elem) => {
        Object.defineProperty(context, elem,  {
            get() {
            return this.getAttribute(elem);
          },
          set(value) {
            this.setAttribute(elem, value);
          },
        });
    })
}


customElements.define('movie-card', MovieCard);