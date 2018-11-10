import { Locator, LocatorInitialzeType } from "./locator"

export interface Assembler {
    //static assemble: LocatorInitialzeType = Locator.locator().initialize
    assemble(): void
}