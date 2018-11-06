import { AppBody } from "./body";
import "./frame.css";
import { MockDiv } from "./mockdiv";
import { getContainer, getRow } from "./bootHelper";

const version = "0.1";
/**
 * Frame (comp)
 * Top (comp)
 * TopMenu (comp)
 * -----
 * Body (comp)
 * -----
 * Bottom (comp)
 */
export class AppFrame extends MockDiv {
    constructor() {
        super();
        //It consists of Header, Body, Bottom
        this.appendChild(new AppTop());
        this.appendChild(new AppBody());
        this.appendChild(new AppBottom());
    }
}

export class AppTop extends MockDiv {
    constructor() {
        super();
        this.classList.add("app-header", "div")
        this.appendChild(this.init());
    }
    init(): HTMLElement {
        /**
         * Bootstrap Grid
         */
        const container = getContainer();
        const row = getRow();

        /**
         * Title
         */
        const title = document.createElement('span');
        title.innerText = `AppTitle ${version}`;
        title.classList.add("h2");

        /**
         * Menu
         */
        const leftCol = document.createElement('div');
        leftCol.classList.add(`col-6`);

        const rightCol = new AppTopMenu();
        rightCol.style.textAlign = "right";
        rightCol.style.paddingRight = `5px`;
        rightCol.classList.add(`col-6`);

        /**
         * Structure
         */
        (function construnct(){
            container.appendChild(row);
            row.appendChild(leftCol);
            row.appendChild(rightCol);
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
        input.classList.add("form-control")
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


export class AppBottom extends MockDiv {
    constructor() {
        super();
    }
}

customElements.define('my-frame', AppFrame);
customElements.define('my-header', AppTop);
customElements.define('my-top-menu', AppTopMenu);
customElements.define('my-bottom', AppBottom);