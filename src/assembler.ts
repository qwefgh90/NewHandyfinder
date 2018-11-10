import * as service from './service/all'

export class ProdAssembler implements service.Assembler{
    public assemble(){
        const searchService = new service.SearchServiceImpl()
        service.Locator.locator().initialize(searchService)
    }
}