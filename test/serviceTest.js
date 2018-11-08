const { Assembler, Locator } = require('../src/service/all')
const { ContentEchoSearchService } = require('./all')
const { Content } = require('../src/model/content')
const os = require('os')
const fs = require('fs')
const path = require('path')
const assert = require('assert')

describe('Locator', function () {
    this.timeout(100000)
    let folder;
    let fpath;
    /** @type Locator */
    let locator;
    function createTemp(){
      folder = fs.mkdtempSync(path.join(os.tmpdir(), 'foo-'))
      fpath = path.join(folder, "a.txt");
      console.debug(fpath);
      fs.writeFileSync(fpath, '')
      locator = Locator.locator();
    }
  
    beforeEach(function () {
      Assembler.assemble(new ContentEchoSearchService());
      createTemp();
    })
  
    afterEach(function () {
      fs.unlinkSync(fpath)
      fs.rmdirSync(folder)
    })
  
    it(`can get bound instance of SearchService`, function(){
       assert.equal(locator.searchService().search('whatever!')[0].content, "whatever!");
    });
  })

  describe('Content', function () {
      this.timeout(100000)
      let folder;
      let fpath;

      function createTemp(){
        folder = fs.mkdtempSync(path.join(os.tmpdir(), 'foo-'))
        fpath = path.join(folder, "a.txt");
        console.debug(fpath);
        fs.writeFileSync(fpath, '')
      }
    
      beforeEach(function () {
        Assembler.assemble(new ContentEchoSearchService());
        createTemp();
      })
    
      afterEach(function () {
        fs.unlinkSync(fpath)
        fs.rmdirSync(folder)
      })

      it(`can create new instance of Content`, function(){
        const c = new Content(fpath, fs.readFileSync(fpath));
        assert.ok("constructed!")
      });
    })