import { SearchService } from '../../src/service/SearchService'
import { Content } from '../../src/model/content'
import * as os from 'os'
import * as path from 'path'
import * as fs from 'fs'

export class ContentEchoSearchService implements SearchService{
    public search(keyword: string): Array<Content>{
        const folder = fs.mkdtempSync(path.join(os.tmpdir(), 'foo-'))
        const fpath = path.join(folder, "a.txt");
        const content = 'a.txt'
        fs.writeFileSync(fpath, content)
        return [new Content(fpath, keyword)];
    }
}

export class InputSearchService implements SearchService{
    arr = new Array<Content>();
    constructor(htmlArr: Array<string>){
        const folder = fs.mkdtempSync(path.join(os.tmpdir(), 'foo-'))
        const dummy = path.join(folder, "a.txt");
        fs.writeFileSync(dummy, '')
        const contents = htmlArr.map((html) => {
            return new Content(dummy, html);
        });
        this.arr.concat(contents);
    }
    public search(keyword: string): Array<Content>{
        return this.arr;
    }
}