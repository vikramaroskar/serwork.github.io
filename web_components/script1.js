const template = document.createElement('template');
template.innerHTML = `
    <style>
        h3 {
            color: red;
        }
    </style>
    <div class="card-component">

        <h3></h3>
    </div>

`;

class CardComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');

        //this.innerHTML = `<style>h3 {color: blue;}</style><h3>${this.getAttribute('name')}</h3>`;


    }
}

window.customElements.define('card-component', CardComponent);