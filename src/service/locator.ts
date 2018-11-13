import { SearchService, SearchServiceLocator } from "./searchService"
import { DirListServiceLocator, DirListService } from "./dirListService";
import { ConfigFileServiceLocator, ConfigFileService } from "./ConfigFileService";
export type LocatorInitialzeType = (_searchService: SearchService, _dirListService: DirListService, _configFileService: ConfigFileService) => void

/**
 * A singleton instance to find resuable instances.
 * it must be initialized calling initialize().
 */
export class Locator implements SearchServiceLocator, DirListServiceLocator, ConfigFileServiceLocator{
    private static instance = new Locator();
    
    private constructor(){}

    public static locator(): Locator{
        return Locator.instance;
    }
    
    private _searchService: SearchService;
    private _dirListService: DirListService;
    private _configFileService: ConfigFileService;

    public initialize: LocatorInitialzeType = (_searchService = null, _dirListService = null, _configFileService = null) => {
        this._searchService = _searchService;
        this._dirListService = _dirListService;
        this._configFileService = _configFileService;
    }

    public searchService(): SearchService{
        return this._searchService;
    }

    public dirListService(): DirListService{
        return this._dirListService;
    }

    public configFileService(): ConfigFileService{
        return this._configFileService;
    }

}