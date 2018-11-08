import { Locator, LocatorInitialzeType } from "./locator"

export class Assembler {
    static assemble: LocatorInitialzeType = Locator.locator().initialize
}