// basic build

'use strict';


var metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    layouts     = require('metalsmith-layouts'),
    //handlebars  = require('handlebars'),
    collections = require('metalsmith-collections'),
    permalinks  = require('metalsmith-permalinks'),
    //path = require('path'),
    //path = require('metalsmith-path'),
    //within = require('metalsmith-handlebars-within'),

    ms = metalsmith(__dirname) // the working directory
        //.clean(true)             // clean the build directory
        .source('./src/html')     // the page source directory
// .use(function(files, metalsmith, done) {
//     //console.log('Files: ');
//     //console.log(files);
//     //console.log();
//     //console.log('Metalsmith: ');
//     //console.log(metalsmith);
//   })

        .use(collections({
            "libraries": {
                pattern: "*/index.md",
                sortBy: 'title'
            },

            // "categories": {
            //     pattern: "documentation/categories/*",
            //     sortBy: 'priority'
            // },
            // "pages": {
            //     pattern: "documentation/pages/*",
            //     sortBy: 'title'
            // }
            "categories": {
                pattern: "documentation2/*/index.md",
                sortBy: 'priority'
            },
            "pages": {
                pattern: "documentation2/*/*.md",
                sortBy: 'title'
            }
        }))
//.use(within())
        .use(markdown())         // convert Markdown to HTML
        .use(permalinks({
            //pattern: ':title',

            // linksets: [{
            // //     match: { collection: 'pages' },
            // //     pattern: 'documentation/:category/:title'
            // // }, {
            // //     match: { collection: 'categories'},
            // //     pattern: 'documentation/:collection'
            //     match: { collection: 'pages' },
            //     pattern: 'documentation2/:category/:title'
            // }, {
            //     match: { collection: 'categories'},
            //     pattern: 'documentation2/:collection'
            // }],

            //relative: false,
        }))

        .use(layouts({
            engine: "handlebars",
            directory: "./templates",
            partials: {
                "header" : "partials/header",
                "main-nav" : "partials/main-nav",
                "footer" : "partials/footer",
                "breadcrumbs" : "partials/breadcrumbs",
                "code-example" : "partials/code-example"
            }
        }))
        .destination('./build/')   // the destination directory
        .build(function(err) {   // build the site
            if (err) throw err;    // and throw errors
        });
