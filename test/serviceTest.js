const { Assembler, Locator } = require('../src/service/all')
const { ServiceTestAssembler } = require('./all')
const { Content } = require('../src/model/content')
const { TestConfigFactory } = require('./service/configFactory')
const os = require('os')
const fs = require('fs')
const path = require('path')
const assert = require('assert')
//const electronPath = require('electron') // Require Electron from the binaries included in node_modules.

describe('Locator', function () {
  this.timeout(100000)
  let folder;
  let fpath;
  /** @type Locator */
  let locator;
  function createTemp() {
    folder = fs.mkdtempSync(path.join(os.tmpdir(), 'foo-'))
    fpath = path.join(folder, "a.txt");
    console.log(fpath);
    fs.writeFileSync(fpath, '')
    locator = Locator.locator();
  }

  beforeEach(function () {
    new ServiceTestAssembler().assemble();
    createTemp();
  })

  afterEach(function () {
    fs.unlinkSync(fpath)
    fs.rmdirSync(folder)
  })

  it(`can get bound instance of SearchService`, function () {
    assert.equal(locator.searchService().search('whatever!')[0].content, "whatever!");
  });
})

describe('Content', function () {
  this.timeout(100000)
  let folder;
  let fpath;

  function createTemp() {
    folder = fs.mkdtempSync(path.join(os.tmpdir(), 'foo-'))
    fpath = path.join(folder, "a.txt");
    console.log(fpath);
    fs.writeFileSync(fpath, '')
  }

  beforeEach(function () {
    new ServiceTestAssembler().assemble();
    //Assembler.assemble(new ContentEchoSearchService(), null, null);
    createTemp();
  })

  afterEach(function () {
    fs.unlinkSync(fpath)
    fs.rmdirSync(folder)
  })

  it(`can create new instance of Content`, function () {
    const c = new Content(fpath, fs.readFileSync(fpath));
    assert.ok("constructed!")
  });
})

describe('Config', function(){
  it('can be made by ConfigFactory', function(){
    const config = new TestConfigFactory()
    config.config
  })
})