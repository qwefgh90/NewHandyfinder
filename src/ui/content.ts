import { stat } from 'fs'
import * as Path from 'path'
import { Content } from '../model/content'
import "bootstrap/dist/css/bootstrap.min.css"
import { Subject } from 'rxjs'
import { shell } from 'electron'

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
        this.name.style.display = "inline-block"
        this.name.style.marginRight = "0.5em"
        this.name.innerText = content.name;
        this.name.onmouseover = (ev) => {
            // some styles.. 
            this.name.style.cursor = 'pointer';
        }
        this.name.onmouseout = (ev) => {
            this.name.style.removeProperty('cursor');
        }
        this.name.onclick = (ev) => {
            console.log(`${content.path}`);
            shell.openItem(`${content.path}`);
        }
        this.path.innerText = Path.parse(content.path).dir;
        this.path.onmouseover = (ev) => {
            // some styles.. 
            this.path.style.cursor = 'pointer';
        }
        this.path.onmouseout = (ev) => {
            this.path.style.removeProperty('cursor');
        }
        this.path.onclick = (ev) => {
            shell.openExternal(`file://${(<HTMLElement>ev.target).innerText}`);
        }
        this.content.innerHTML = content.content;
        this.lastModified.innerText = content.lastModified.toLocaleString();
        this.build();
    }

    build(){
        this.top.appendChild(this.name);
        this.top.appendChild(this.path);
        this.htmlBox.appendChild(this.content);
        this.bottom.appendChild(this.lastModified);
        this.appendChild(this.top);
        this.appendChild(this.htmlBox);
        this.appendChild(this.bottom);
    }
}

customElements.define('my-content', AppContent);