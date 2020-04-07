const template = document.createElement('template');
template.innerHTML = `
    <style>
        h3 {
            color: red;
        }
        img {
            height: 200px;
            width: 200px;
        }
    </style>
    <div class="card-component">
        <img />
        <div>
            <h3></h3>
            <div class="info">
                <p>Email</p>
                <p>Phone</p>
            </div>
            <button id="toggle-info"> Hide details</button>
        </div>
    </div>


`;

class CardComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        
        this.shadowRoot.querySelector('img').innerText = this.getAttribute('picture');


        //this.innerHTML = `<style>h3 {color: blue;}</style><h3>${this.getAttribute('name')}</h3>`;


    }
}

window.customElements.define('card-component', CardComponent);