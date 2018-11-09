import { stat } from 'fs'
import * as Path from 'path'
import { Content } from '../model/content'
import "bootstrap/dist/css/bootstrap.min.css"
import { Subject } from 'rxjs'

export class AppContent extends HTMLElement{
    private top = document.createElement('div');
    private htmlBox = document.createElement('div');
    private bottom = document.createElement('div');

    private name = document.createElement('h4')
    private path = document.createElement('span');
    private content = document.createElement('span');
    private lastModified = document.createElement('span');
    constructor(content: Content){
        super();
        this.name.innerText = content.name;
        this.path.innerText = content.path;
        this.content.innerHTML = content.content;
        this.lastModified.innerText = content.lastModified.toLocaleString();
        this.build();
    }

    build(){
        this.top.appendChild(this.name);
        this.top.appendChild(this.path);
        this.htmlBox.appendChild(this.content);
        this.bottom.appendChild(this.lastModified);
    }
}

customElements.define('my-content', AppContent);