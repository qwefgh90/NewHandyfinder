export class MockDiv extends HTMLElement {
    constructor(){
        super();
        this.style.display = "block";
    }
}

export class MockRow extends HTMLElement {
    constructor(){
        super();
        this.classList.add("row");
    }
}