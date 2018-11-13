import { Assembler, Locator } from '../src/service/all';
import { ContentEchoSearchService } from './service/searchService'

export class ServiceTestAssembler implements Assembler{
    public assemble(){
        const contentEchoSearchService = new ContentEchoSearchService()
        Locator.locator().initialize(contentEchoSearchService, null, null);
    }
}