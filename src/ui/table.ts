import { getContainer, getRow } from "./bootHelper";
import "bootstrap/dist/css/bootstrap.min.css"
import { Content } from "../model/content";
import { AppContent } from "./content";
import * as resource from "./resource";
import { Subject } from "rxjs";
import "./table.css"

/**
 * title
 * ------
 * 
 */
export class AppTable extends HTMLElement {

    private arr: Array<Content> = [];
    public readonly noContentClickSubject = new Subject<void>();
    public readonly noContentSpan = document.createElement('span');

    constructor(){
        super(); 
        this.classList.add("container-fluid")
        this.noContentSpan.innerText = resource.NO_CONTENT;
        this.rxjs();
        this.build();
    }

    build(){
        this.updateUI();
    }

    public update(contentArr: Array<Content> = null){
        if(contentArr != null){
            this.arr = contentArr;
        }
        this.updateUI();
    }

    private rxjs(){
        this.noContentSpan.onclick = (evt) => {
            this.noContentClickSubject.next();
        }
    }

    private updateUI(){
        this.updateUINoEfficient();
    }

    private updateUINoEfficient(){
        if(this.arr.length == 0){
            this.appendChild(this.noContent());
        }else{
            while(this.childNodes.length != 0){
                this.childNodes[0].remove();
            }
            this.arr.forEach((v, i, arr) => {
                this.appendChild(new AppContent(v));
            })
        }
    }

    private noContent(): HTMLElement{
        const div = document.createElement('div');
        div.style.textAlign = "center";
        div.style.marginTop = "1em";
        div.appendChild(this.noContentSpan);
        return div;
    }
}


customElements.define('my-result-table', AppTable);
