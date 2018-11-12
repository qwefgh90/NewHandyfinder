import { AppTable } from "./table";
import { Checkbox } from "@material/mwc-checkbox"
import { Icon } from "@material/mwc-icon"
import { getRow } from "./bootHelper";
import "bootstrap/dist/css/bootstrap.min.css"
import { OptionFrame } from "./option";

/**
 * Body (comp)
 * ResultTable (comp)
 * ResultRow (comp)
 */
export class AppBody extends HTMLElement {
    constructor() {
        super();
        this.classList.add("row");
        this.optionFrame.style.marginTop = '2em';
        this.optionFrame.classList.add("corner-box");
        this.appTable.style.marginTop = '2em';
        this.appTable.classList.add("corner-box");
        this.build();
    }

    public readonly appTable = new AppTable();
    public readonly optionFrame = new OptionFrame();

    build(){
        this.appendChild(this.optionFrame);
        this.appendChild(this.appTable);
    }
}

customElements.define('my-body', AppBody);