import * as service from './service/all'
import * as electron from 'electron'

export class ProdAssembler implements service.Assembler{
    public assemble(){
        const searchService = new service.SearchServiceImpl()
        const dirListServiceImpl = new service.DirListServiceImpl();
        const configFileServiceImpl = new service.ConfigFileServiceImpl(electron.app);
        service.Locator.locator().initialize(searchService, dirListServiceImpl, configFileServiceImpl)
    }
}