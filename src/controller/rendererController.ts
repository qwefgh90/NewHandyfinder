import { AppFrame } from '../ui/frame'
import { Locator, SearchServiceLocator, SearchService, DirListService } from '../service/all'
import { Dir } from '../model/dir';

export class RendererController{
    private searchService: SearchService = Locator.locator().searchService();
    private dirListService: DirListService = Locator.locator().dirListService();
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

    option(){
        this.frame.appBody.optionFrame.addDirSubject.subscribe((str) => {
            //const dir = new Dir(str)
            const dirList = this.dirListService.getList()
            this.frame.appBody.optionFrame.update(dirList)
        });
    }


    
    getRoot(): HTMLElement{
        return this.frame;
    }
}