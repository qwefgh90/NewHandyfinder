import * as dir from '../model/dir'
export class Dir extends HTMLElement{
    public readonly box = document.createElement('div');
    public readonly path = document.createElement('span');
    constructor(dir: dir.Dir){
        super();
        this.path.innerText = dir.path;
        this.build();
    }
    build(){
        this.appendChild(this.box);
        this.box.appendChild(this.path);
    } 
}

window.customElements.define('my-dir', Dir);