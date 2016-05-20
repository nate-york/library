module.exports = {
    "metalsmith": {
        "metadata": {
            "site": {
                "url": "https://subzero-wolf.com/library"
            }
        },
        "config": {
            "contentRoot": "./src/html",
            //"assetRoot": "./sources",
            //"scriptRoot": "./scripts",
            //"styleRoot": "./styles",
            "layoutRoot": "./templates",
            "destRoot": "./build"
        },
        "plugins": {
            //"metalsmith-drafts": {},
            //"metalsmith-excerpts": {},
            "metalsmith-collections": {
                "libraries": {
                    "pattern": "*/index.md",
                    "sortBy": "title"
                },
                "categories": {
                    "pattern": "*/*/index.md",
                    "sortBy": "priority"
                },
                "pages": {
                    "pattern": "*/*/pages/*",
                    "sortBy": "category"
                },
                "development-categories": {
                    "pattern": "development/*/index.md",
                    "sortBy": "priority"
                },
                "development-pages": {
                    "pattern": "development/*/pages/*",
                    "sortBy": "category"
                },
                "documentation-categories": {
                    "pattern": "documentation/*/index.md",
                    "sortBy": "priority"
                },
                "documentation-pages": {
                    "pattern": "documentation/*/pages/*",
                    "sortBy": "category"
                },
                "patterns-categories": {
                    "pattern": "patterns/*/index.md",
                    "sortBy": "priority"
                },
                "patterns-pages": {
                    "pattern": "patterns/*/pages/*",
                    "sortBy": "priority"
                }
            },
            "metalsmith-markdown": {
                "smartypants": true,
                "smartLists": true,
                "gfm": true,
                "tables": true
            },
            "metalsmith-headings": {

            },
            "metalsmith-permalinks": {

                "linksets": [{
                    "match": { collection: 'pages' },
                    "pattern": ":library/:category/:title"
                }]
            },
            "metalsmith-layouts": {
                "engine": "handlebars",
                "directory": "./templates",
                "partials": "./templates/partials"
            },
      	    "metalsmith-assets": {
      	        "source": "./src/assets",
      	        "destination": "./assets"
      	    }
        }
    }
}
