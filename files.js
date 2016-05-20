// basic build

'use strict';


var metalsmith  = require('metalsmith'),

    ms = metalsmith(__dirname) // the working directory
        .source('./src/html')     // the page source directory
        .use(function(files, metalsmith, done) {
            console.log('Files: ');
            console.log(files);
            console.log();
            console.log('Metalsmith: ');
            console.log(metalsmith);
          })

        .build(function(err) {   // build the site
            if (err) throw err;    // and throw errors
        });
