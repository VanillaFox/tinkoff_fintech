const corpInfo = document.createElement('template');
corpInfo.innerHTML = `
    <div class="corp">© 
        <slot name="year">${new Date().getFullYear()}</slot>
    Тинькофф Прокат</div>
`;

class CurrentYear extends HTMLElement{
    connectedCallback(){
        this.append(corpInfo.content.cloneNode(true));
    }
}

customElements.define('corp-info', CurrentYear);