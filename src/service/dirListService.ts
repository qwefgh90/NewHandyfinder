import { Content } from '../model/content'
import { Dir } from '../model/dir';


export interface DirListServiceLocator {
    dirListService(): DirListService
}

export interface DirListService {
    getList(): Array<Dir>
    addDir(dir: string)
}

export class DirListServiceImpl implements DirListService{
    getList(): Array<Dir> {
        return [];
    }
    addDir(dir: string){
    }
}