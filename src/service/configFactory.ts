import { NotImplementedError } from '../error/notImplementedError'
//import * as electron from 'electron'
import * as path from 'path'
import * as fs from 'fs'
import { FileIOService, FileIOServiceImpl } from '../service/fileIOService'
import { Config } from '../model/config';

export class ConfigFactory{
    get config(): Config{
        throw new NotImplementedError('ConfigFactory')
        return undefined
    }
}
/*
export class ConfigFactoryImpl extends ConfigFactory{
    private path: string
    private _config: Config
    private fileIOService: FileIOService
    constructor(private readonly app: electron.App){
        super()
        const tmp = electron.app.getPath('appData')
        this.path = path.resolve(tmp, 'config')
        fs.mkdirSync(this.path, {recursive: true})
        this.fileIOService = new FileIOServiceImpl(this.path)
        this._config = new Config(this.fileIOService)
    }

    get config(): Config{
        return this._config
    }
}*/