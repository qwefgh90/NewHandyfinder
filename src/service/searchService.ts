import { Content } from '../model/content'

export interface SearchServiceLocator {
    searchService(): SearchService
}

export interface SearchService {
    search(keyword: string): Array<Content>
}

export class SearchServiceImpl implements SearchService{
    search(keyword: string): Array<Content> {
        const c = new Content('c:\\\\install.exe', "hello")
        return [c];
    }
}