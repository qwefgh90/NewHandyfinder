import { AppFrame } from '../ui/frame'
import { Locator, SearchServiceLocator, SearchService } from '../service/all'

export class RendererController{
    private searchService: SearchService = Locator.locator().searchService();
    private frame: AppFrame = new AppFrame();
    constructor(){
        this.keyword();
    }

    keyword(){
        const rightCol = this.frame.appTop.rightCol;
        const appTable = this.frame.appBody.appTable;
        rightCol.keywordSubject.subscribe((str) =>{
            try{
                const contents = this.searchService.search(str)
                appTable.update(contents);
            }catch(e){
                console.error(e);
            }
        });
    }
    
    getRoot(): HTMLElement{
        return this.frame;
    }
}