import "bootstrap/dist/css/bootstrap.min.css"
import * as model from '../model/dir'
import { Dir } from './dir'
import * as Plus from "open-iconic/png/plus-2x.png"
import { Subject } from "rxjs";
import { remote } from 'electron';

export class OptionFrame extends HTMLElement{
    private dirArr = new Array<model.Dir>();
    
    public readonly dirList = document.createElement('ul');
    public readonly plusDiv = document.createElement('div');
    public readonly addDirSubject = new Subject<string>();
    
    private dirItemClone = document.createElement('li');
    constructor(){
        super();
        this.classList.add("container-fluid")
        this.dirList.classList.add('list-group')
        this.dirItemClone.classList.add('list-group-item')
        this.rxjs();
        this.build();
    }

    private rxjs(){
        this.plusDiv.onclick = (ev) => {
            let selected: string[] = remote.dialog.showOpenDialog({properties: ['openDirectory', 'multiSelections']});
            selected.forEach((v,i,arr) =>{
                this.addDirSubject.next(v);
            });
        }
    }

    private build(){
        this.appendChild(this.dirList);
        this.update();
    }

    private updateUI() {
        while (this.dirList.children.length != 0)
            this.dirList.children[0].remove();
        this.dirArr.forEach((e) => {
            const dir = new Dir(e);
            var item = this.dirItemClone.cloneNode(false);
            item.appendChild(dir);
            this.dirList.appendChild(item);
        });

        const item = <HTMLLIElement>this.dirItemClone.cloneNode(false);
        item.classList.add('list-group-item-action')
        item.style.cursor = "pointer";
        item.appendChild(this.plus());
        this.dirList.appendChild(item);
    }

    /**
     * A Element notify adding directory.
     */
    private plus(): HTMLElement{
        this.plusDiv.style.textAlign = "center";
        const image = document.createElement('img');
        if(typeof Plus ==='string')
            image.src = Plus;
        const span = document.createElement('span');
        span.innerText = "+"
        this.plusDiv.appendChild(image);
        return this.plusDiv;
    }

    public update(arr: Array<model.Dir> = null){
        if(arr != null){
            this.dirArr = arr;
        }
        this.updateUI();
    }
}

window.customElements.define('my-option-frame', OptionFrame);