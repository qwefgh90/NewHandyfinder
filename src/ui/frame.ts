import { AppBody } from "./body"
import "./frame.css";

const version = "0.1";

function getRow(){
    const row = document.createElement('div');
    row.classList.add("row");        
    return row;
}

function getContainer(){
    const row = document.createElement('div');
    row.classList.add("container");        
    return row;
}

function getCol(postFix: string | number){
    const row = document.createElement('div');
    row.classList.add(`col-${postFix}`);        
    return row;
}

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
        this.appendChild(this.init());
    }
    init(): HTMLElement {
        /**
         * Grid
         */
        const container = getContainer();
        const row = getRow();
        const leftCol = getCol(6);

        /**
         * Title
         */
        const title = document.createElement('span');
        title.innerText = `AppTitle ${version}`;
        title.classList.add("h2");

        /**
         * Menu
         */
        const menu = new AppTopMenu();
        menu.style.textAlign = "right";
        menu.style.paddingRight = `5px`;
        menu.classList.add(`col-6`);

        /**
         * Structure
         */
        (function construnct(){
            container.appendChild(row);
            row.appendChild(leftCol);
            row.appendChild(menu);
            leftCol.appendChild(title);
        })();
        return container;
    }
}

export class AppTopMenu extends HTMLElement { 
    constructor() {
        super();

        /**
         * New Input group
         */
        this.classList.add("input-group");

        const input = document.createElement("input");
        input.placeholder = "검색";
        input.setAttribute("aria-label", "검색");

        const appendedDiv = document.createElement("div")
        appendedDiv.classList.add("input-group-append");
        
        const searchBtnInGrp = document.createElement("button");
        searchBtnInGrp.classList.add("btn", "btn-outline-secondary");
        searchBtnInGrp.type = "button"
        searchBtnInGrp.innerText = "검색"

        /**
         * Structure
         */
        this.appendChild(input);
        this.appendChild(appendedDiv);
        appendedDiv.appendChild(searchBtnInGrp);
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