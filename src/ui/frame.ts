import { AppBody } from "./body"

const version = "0.1";

export class AppFrame extends HTMLElement {
    constructor() {
        super();
        //It consists of Header, Body, Bottom
        this.appendChild(new AppHeader());
        this.appendChild(new AppBody());
        this.appendChild(new AppBottom());
    }
}

export class AppHeader extends HTMLElement {
    constructor() {
        super();
        this.appendChild(this.appTitle());
        this.appendChild(new AppTopMenu());
    }
    appTitle(): HTMLElement {
        const span = document.createElement('span');
        span.innerText = `AppTitle ${version}`;
        return span;
    }
}

export class AppTopMenu extends HTMLElement { 
    constructor() {
        super();
        
    }
}


export class AppBottom extends HTMLElement {
    constructor() {
        super();
    }
}

customElements.define('my-frame', AppFrame);
customElements.define('my-header', AppHeader);
customElements.define('my-top-menu', AppTopMenu);
customElements.define('my-bottom', AppBottom);