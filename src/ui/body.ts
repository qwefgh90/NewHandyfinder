import { AppTable } from "./table";
import { Checkbox } from "@material/mwc-checkbox"
import { Icon } from "@material/mwc-icon"
import { getRow } from "./bootHelper";
import "bootstrap/dist/css/bootstrap.min.css"

/**
 * Body (comp)
 * ResultTable (comp)
 * ResultRow (comp)
 */
export class AppBody extends HTMLElement {
    constructor() {
        super();
    }

    public readonly appTable = new AppTable();

    build(){
        this.appendChild(this.appTable);
    }

    checkBoxMenu(): HTMLElement {
        const div = document.createElement("div");
        div.style.textAlign = "right";
        let c1 = <any>new Checkbox()
        c1.accessKey = "";
        c1.addEventListener("change", (ev) => {
            let cb = <Checkbox>ev.target
            console.log(`nv: ${cb.checked}`)
        })
        div.appendChild(c1);
        return div;
    }
}

customElements.define('my-body', AppBody);