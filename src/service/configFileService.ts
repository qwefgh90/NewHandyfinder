import * as fs from 'fs'

export interface ConfigFileServiceLocator {
    configFileService(): ConfigFileService
}

export interface ConfigFileService {
    update(key: string, value: string): boolean
    remove(key: string): boolean
}


export class ConfigFileServiceImpl implements ConfigFileService{
    public readonly configPath;
    constructor(app: Electron.App){
        this.configPath = app.getPath('userData');
    }

    update(key: string, value: string): boolean{
        let success = true;
        
        return success;
    }

    remove(key: string): boolean{
        let success = true;
        
        return success;
    }
}