const Application = require('spectron').Application
const assert = require('assert')
const electronPath = require('electron') // Require Electron from the binaries included in node_modules.
const path = require('path')

describe('Application launch', function () {
  this.timeout(10000)

  beforeEach(function () {
    this.app = new Application({
      // Your electron path can be any binary
      // i.e for OSX an example path could be '/Applications/MyApp.app/Contents/MacOS/MyApp'
      // But for the sake of the example we fetch it from our node_modules.
      path: electronPath,

      // Assuming you have the following directory structure

      //  |__ my project
      //     |__ ...
      //     |__ main.js
      //     |__ package.json
      //     |__ index.html
      //     |__ ...
      //     |__ test
      //        |__ spec.js  <- You are here! ~ Well you should be.

      // The following line tells spectron to look and use the main.js file
      // and the package.json located 1 level above.
      args: [path.join(__dirname, '../dist/main.js')]
    })
    return this.app.start()
  })

  afterEach(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  })

  it('shows an initial window', function () {
    return this.app.client.getWindowCount().then(function (count) {
      assert.equal(count, 1)
      // Please note that getWindowCount() will return 2 if `dev tools` are opened.
      // assert.equal(count, 2)
      
    })
  })
})

describe('Application UI', function () {
  this.timeout(100000)

  beforeEach(function () {
    const htmlList = ['<span style="color:red">red word</span><h3>Header 3</h3>', '<span style="color:red">red word</span><h3>Header 3</h3>', '<span style="color:red">red word</span><h3>Header 3</h3>']
    //Assembler.assemble(new InputSearchService(htmlList));
    this.app = new Application({
      path: electronPath,

      args: [path.join(__dirname, '../dist/main.js')]
    })
    return this.app.start()
  })

  afterEach(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  })

  it('open window', function () {
    const browser = this.app.client;
    return browser.waitUntilWindowLoaded().then(() => {})
  });

  it('has a header which display a title', function(){
    /** @type {spectron.SpectronClient} */
    const browser = this.app.client;
    return browser.element("my-header").getText('span').then((v) =>{
      let title = "AppTitle";
      assert.notEqual(v.indexOf(title), -1, "A title is incorrect.");
    });
  });
  
  it('render html content to contentBox when searching', function(){
    
  });

})
