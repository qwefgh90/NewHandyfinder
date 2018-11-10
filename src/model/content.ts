import * as Path from 'path'
import * as fs from 'fs'

export class Content {
    public name: string;
    public lastModified: Date;
    constructor(public path: string, public content: string){
        const result = Path.parse(path);
        this.name = result.name;
        const s = fs.statSync(path)
        this.lastModified = s.mtime;
    }
}