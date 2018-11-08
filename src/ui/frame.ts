import { AppBody } from "./body";
import "./frame.css";
import { getContainer, getRow } from "./bootHelper";
import "bootstrap/dist/css/bootstrap.min.css"
import { Locator } from '../service/all'
import { Subject } from 'rxjs'

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
export class AppFrame extends HTMLElement {
    public readonly container = getContainer();
    public readonly appTop = new AppTop();
    public readonly appBody = new AppBody();
    public readonly appBottom = new AppBottom();
    constructor() {
        super();
        this.container.classList.add("app-frame")
        this.appTop.classList.add("row");
        this.appBody.classList.add("row");
        this.appBottom.classList.add("row");
        this.build();
    }

    rxjs(){
    }

    build(){
        this.container.appendChild(this.appTop);
        this.container.appendChild(this.appBody);
        this.container.appendChild(this.appBottom);
        this.appendChild(this.container);
    }
}

export class AppTop extends HTMLElement {
    constructor() {
        super();
        this.init();
        this.build();
    }
    public readonly titleSpan: HTMLSpanElement = document.createElement('span');
    public readonly leftCol = document.createElement('div');
    public readonly rightCol = new AppTopMenu();
    init() {
        this.titleSpan.innerText = `AppTitle ${version}`;
        this.titleSpan.classList.add("h2");

        this.leftCol.classList.add(`col-6`);
        this.rightCol.style.textAlign = "right";
        this.rightCol.style.paddingRight = `5px`;
        this.rightCol.classList.add(`col-6`);
    }
    build(){
        this.leftCol.appendChild(this.titleSpan);
        this.appendChild(this.leftCol);
        this.appendChild(this.rightCol);
    }
}

export class AppTopMenu extends HTMLElement { 
    private searchService = Locator.locator().searchService() 
    public readonly input = document.createElement("input");
    public readonly appendedDiv = document.createElement("div")
    public readonly searchBtnInGrp = document.createElement("button");
    public readonly keywordSubject = new Subject<string>();
    constructor() {
        super();
        this.classList.add("input-group");

        this.input.classList.add("form-control")
        this.input.placeholder = "검색";
        this.input.setAttribute("aria-label", "검색");

        this.appendedDiv.classList.add("input-group-append");
        
        this.searchBtnInGrp.classList.add("btn", "btn-outline-secondary");
        this.searchBtnInGrp.type = "button"
        this.searchBtnInGrp.innerText = "검색"
        
        this.rxjs();
        this.build();
    }

    rxjs(){
        this.searchBtnInGrp.onclick = (ev) => {
            if(this.input.value.length > 0)
                this.keywordSubject.next(this.input.value);
        };
    }

    build(){
        this.appendedDiv.appendChild(this.searchBtnInGrp);
        this.appendChild(this.input);
        this.appendChild(this.appendedDiv);
    }
}


export class AppBottom extends HTMLElement {
    constructor() {
        super();
    }
}

customElements.define('my-frame', AppFrame);
customElements.define('my-header', AppTop);
customElements.define('my-top-menu', AppTopMenu);
customElements.define('my-bottom', AppBottom);