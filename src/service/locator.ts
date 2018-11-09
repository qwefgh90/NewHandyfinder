import { SearchService, SearchServiceLocator } from "./searchService"
export type LocatorInitialzeType = (_searchService: SearchService) => void

/**
 * A singleton instance to find resuable instances.
 * it must be initialized calling initialize().
 */
export class Locator implements SearchServiceLocator{
    private static instance = new Locator();
    
    private constructor(){}

    public static locator(): Locator{
        return Locator.instance;
    }
    
    private _searchService: SearchService;

    public initialize: LocatorInitialzeType = (_searchService = null) => {
        this._searchService = _searchService;
    }

    public searchService(): SearchService{
        return this._searchService;
    }

}