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
              "pattern": "documentation2/*/index.md",
              "sortBy": "priority"
          },
          "pages": {
              "pattern": "documentation2/*/*",
              "sortBy": "title"
          }
      },
      "metalsmith-markdown": {
          "smartypants": true,
          "smartLists": true,
          "gfm": true,
          "tables": true
      },
      "metalsmith-permalinks": {

      },
      "metalsmith-layouts": {
        "engine": "handlebars",
        "directory": "./templates",
        "partials": "./templates/partials"
        }
    }
  }
}
