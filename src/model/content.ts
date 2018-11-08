import * as Path from 'path'
import * as fs from 'fs'

export class Content {
    public name: string;
    public lastModified: Date;
    constructor(public path: string, public content: string){
        const result = Path.parse(path);
        this.name = result.name;
        fs.stat(path, (err, s) =>{
            if(err){
                console.error(err);
                throw err;
            }
            this.lastModified = s.mtime;
        });
    }
}