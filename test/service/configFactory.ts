import { ConfigFactory } from '../../src/service/configFactory';
import * as path from 'path'
import * as fs from 'fs'
import { TestFileIOService } from './fileIOService'
import { Config } from '../../src/model/config';
import { FileIOService } from '../../src/service/fileIOService';

export class TestConfigFactory extends ConfigFactory {
    private path: string
    private _config: Config
    private fileIOService: FileIOService
    constructor() {
        super()
        this.path = path.resolve('/tmp', 'config') //
        //fs.mkdirSync(path.parse(this.path).dir, { recursive: true })
        this.fileIOService = new TestFileIOService(this.path)
        this._config = new Config(this.fileIOService)
    }

    get config(): Config {
        return this._config
    }
}