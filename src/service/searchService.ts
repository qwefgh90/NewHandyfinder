import { Content } from '../model/content'

export interface SearchServiceLocator {
    searchService(): SearchService
}

export interface SearchService {
    search(keyword: string): Array<Content>
}
