import { FileIOService } from '../../src/service/fileIOService';
import * as path from 'path' 
import * as fs from 'fs'

export class TestFileIOService implements FileIOService{
    constructor(readonly filePath: string){
        //if a file doesn't exist, make new one
        try{
            fs.mkdirSync(path.parse(filePath).dir, {recursive: true});
        }catch(e){
            console.error(e)
        }
        if(!fs.existsSync(this.filePath)){
            fs.writeFileSync(this.filePath, JSON.stringify(new Map<string, any>()))
        }
        console.log(`test file path: ${this.filePath}`)
    }

    private save(data: Map<string, any>){
        fs.writeFileSync(this.filePath, JSON.stringify({data}))
    }

    private reload(): Map<string, any>{
        return JSON.parse(fs.readFileSync(this.filePath).toString())
    }

    /**
     * if a key is not found, return undefined
     * @param key 
     */
    get(key: string): any{
        return this.reload().get(key)
    }
    /**
     * if a key is already exists, override key. otherwise, insert a pair of key and value
     * @param key 
     * @param value 
     */
    update(key: string, value: any) {
        this.save(this.reload().set(key, value));
    }

    remove(key: string): boolean {
        return this.reload().delete(key);
    }
}