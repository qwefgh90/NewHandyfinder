import "bootstrap/dist/css/bootstrap.min.css"
import * as model from '../model/dir'
import { Dir } from './dir'


export class OptionFrame extends HTMLElement{
    private dirArr = new Array<model.Dir>();
    
    public readonly dirList = document.createElement('ul');
    
    private dirItemClone = document.createElement('li');
    constructor(){
        super();
        this.classList.add("container-fluid")
        this.dirList.classList.add('list-group')
        this.dirItemClone.classList.add('list-group-item')
        this.build();
    }

    private build(){
        this.appendChild(this.dirList);
        this.update();
    }

    public update(arr: Array<model.Dir> = null){
        if(arr != null){
            this.dirArr = arr;
        }
        this.updateUI();
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

        var item = this.dirItemClone.cloneNode(false);
        item.appendChild(this.plus());
        this.dirList.appendChild(item);
    }

    /**
     * A Element notify adding directory.
     */
    private plus(): HTMLElement{
        const div = document.createElement('div');
        div.style.textAlign = "center";
        const span = document.createElement('span');
        span.innerText = "+"
        div.appendChild(span);
        return div;
    }
}

window.customElements.define('my-option-frame', OptionFrame);