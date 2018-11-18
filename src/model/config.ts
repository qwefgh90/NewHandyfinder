import { FileIOService } from '../service/fileIOService'
import * as path from "path";

enum CONFIG_KEYS{
    DIR
}

export class Config{
    /**
     * Cache values
     */
    private _dirs: Array<string>;
    constructor(private readonly service: FileIOService){
    }

    /**
     * Remove all caches and load all caches from a file
     */
    invalidate(){
        this._dirs = this.service.get(CONFIG_KEYS.DIR.toString());
        if(this._dirs == undefined){
            this._dirs = [];
        }
    }

    /**
     * Add new directory
     * @param dir 
     */
    addDir(dir: string){
        this.invalidate()
        if(!this._dirs.find((v, i) => {
            if(path.relative(dir, v) == ''){
                return true;
            }else return false;
        })){
            this._dirs.push(dir);
            this.service.update(CONFIG_KEYS.DIR.toString(), this._dirs);
            this.invalidate();
        }
    }

    /**
     * Remove passed dir
     * @param dir 
     */
    removeDir(dir: string) {
        this.invalidate()
        const index = this._dirs.findIndex((v, i) => {
            if (path.relative(dir, v) == '') {
                return true;
            } else return false;
        })
        if (index != -1){
            this._dirs.splice(index, 1);
            this.service.update(CONFIG_KEYS.DIR.toString(), this._dirs);
            this.invalidate();
        }
    }

    /**
     * Make a list to be empty
     */
    removeAllDirs(){
        this.service.remove(CONFIG_KEYS.DIR.toString())
        this.invalidate()
    }

    /**
     * Get all directories
     */
    getAllDirs(): Array<string>{
        return this._dirs
    }

}