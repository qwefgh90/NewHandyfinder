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
        this.build();
    }

    public readonly appTable = new AppTable();

    build(){
        this.appendChild(this.appTable);
    }
}

customElements.define('my-body', AppBody);