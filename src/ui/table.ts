import { getContainer, getRow } from "./bootHelper";

export class ResultTable extends HTMLElement { 
    constructor(){
        super(); 

    }
}

export class ResultRow extends HTMLElement {
    constructor(){
        super(); 
    }
}

customElements.define('my-result-table', ResultTable);
customElements.define('my-result-row', ResultRow);