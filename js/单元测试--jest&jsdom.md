## jsdom 简介
```
'use strict';
const fs = require('fs');
jasmine.DEFAULT_TIMEOUT_INTERVAL= 10000;

jest.unmock('jsdom')

const jsdom = require("jsdom");
const pandoraUrl = 'http://ue.17173cdn.com/a/lib/spm_modules/pandora/1.0.0/pandora.js';
const jqueryUrl = 'http://ue.17173cdn.com/a/lib/jquery-1.11.1.min.js';
const seajsUrl = 'http://ue.17173cdn.com/a/lib/seajs/sea.js';
const doc = fs.readFile("./tests/test.html", "utf-8");
const pandoraFs = fs.readFileSync("./pandora.js", "utf-8");


test('tests of pandora: ', () => {
  return new Promise(function(resolve, reject) {
    jsdom.env({
      url: 'http://www.baidu.com/',
      //file : './tests/test.html',
      scripts: [ seajsUrl],
      src: [pandoraFs],
      features: {
       SkipExternalResources: false
      },
      done: function (err, window) {
        /*console.log(window.pandora);
        console.log(window.seajs);*/

        window.pandora.on('eventTest', function(){
          console.log('eventTest1 is fired');
        });
        window.pandora.on('eventTest', function(){
          console.log('eventTest2 is fired');
        });
        let isFired = window.pandora.fire('eventTest');
        expect(isFired).toBeTruthy();
        window.pandora.off('eventTest');
        isFired = window.pandora.fire('eventTest');
        expect(isFired).toBeFalsy();

        window.pandora.use(['dialog'], function(Dialog) {
          resolve(Dialog.prototype.defaults.classPrefix);
        })
      }
    });
  }).then((text) => {
    return expect(text).toBe('ue-dialog'); })
});
```