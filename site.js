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
              "pattern": "*/*/*/*",
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
          "pattern": ":collection/:title",
          "linksets": [{
              "match": "pages",
              "pattern": ":collection/:category/:title"
          }]
      },
      "metalsmith-layouts": {
        "engine": "handlebars",
        "directory": "./templates",
        "partials": "./templates/partials"
        }
    }
  }
}
