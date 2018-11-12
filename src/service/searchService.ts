import { Content } from '../model/content'


export interface SearchServiceLocator {
    searchService(): SearchService
}

export interface SearchService {
    search(keyword: string): Array<Content>
}

export class SearchServiceImpl implements SearchService{
    search(keyword: string): Array<Content> {
        const arr = new Array();
        const repeat = Math.random()*10;
        for(let i=0; i < repeat; i++){
            const c = new Content('c:\\\\rc4.log', "hello")
            arr.push(c);
        }
        return arr;
    }
}