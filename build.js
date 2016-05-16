// basic build

'use strict';

var metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    templates     = require('metalsmith-templates'),
    //handlebars  = require('handlebars'),
    collections = require('metalsmith-collections'),
    permalinks  = require('metalsmith-permalinks'),
    //path = require('path'),
    //path = require('metalsmith-path'),

    ms = metalsmith(__dirname) // the working directory
        //.clean(true)             // clean the build directory
        .source('./src/html')     // the page source directory


        .use(collections({
            "libraries": {
                pattern: "*/index.md",
                sortBy: 'title'
            },

            "categories": {
                pattern: "documentation/*/index.md",
                sortBy: 'title'
            },
            "pages": {
                pattern: "/documentation/*/pages/*",
                sortBy: 'title'
            }
        }))

        .use(markdown())         // convert Markdown to HTML

        .use(permalinks({
            //pattern: ':title',

            // linksets: [{
            //
            //     match: { collection: 'pages' },
            //     pattern: 'documentation//:title'
            // }],

            //relative: false,
        }))

        .use(templates({
            engine: "handlebars",
            directory: "./templates",
            partials: {
                "header" : "partials/header",
                "footer" : "partials/footer",
                "breadcrumbs" : "partials/breadcrumbs",
                "code-example" : "partials/code-example"
            }
        }))
        .destination('./build/')   // the destination directory
        .build(function(err) {   // build the site
            if (err) throw err;    // and throw errors
        });
