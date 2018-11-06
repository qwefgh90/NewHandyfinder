import { MockDiv } from "./mockdiv";
import { ResultTable } from "./table";
import { Checkbox } from "@material/mwc-checkbox"
import { Icon } from "@material/mwc-icon"

/**
 * Body (comp)
 * ResultTable (comp)
 * ResultRow (comp)
 */
export class AppBody extends MockDiv {
    constructor() {
        super();
        this.appendChild(this.checkBoxMenu());
        this.appendChild(new ResultTable());
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