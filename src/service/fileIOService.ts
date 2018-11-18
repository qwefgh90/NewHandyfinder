import * as fs from 'fs'
import * as path from 'path'

export interface FileIOService {
    update(key: string, value: any)
    remove(key: string): boolean
    get(key: string): any
}

export class FileIOServiceImpl implements FileIOService{
    constructor(readonly filePath: string){
        fs.mkdirSync(path.parse(filePath).dir, {recursive: true});
        if(!fs.existsSync(this.filePath)){
            fs.writeFileSync(this.filePath, JSON.stringify({}))
        }
        console.log(`file path: ${this.filePath}`)
    }

    private save(data: Map<string, any>){

    }

    get(key: string): any{

    }

    private reload(): Map<string, any>{
        return new Map();
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