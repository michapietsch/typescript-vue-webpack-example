let mix = require("laravel-mix");

mix.browserSync({
  proxy: null,
  server: {
    baseDir: "public",
    index: "index.html"
  }
});

/**
 * We need the following if we use TS only in parts.
 * This way Vue components with lang="ts" will be handed to ts-loaded.
 * We append the .vue extension to then hand them back to vue-loader.
 */
mix.webpackConfig({
  module: {
    rules: [
      {
        /**
         * But if the entry already uses TypeScript,
         * it will create intermediate .vue.ts files,
         * and we get TS7006 errors that don't actually apply.
         */
        test: /(!vue)\.ts$/,
        loader: "ts-loader",
        options: { appendTsSuffixTo: [/\.vue$/] }
      }
    ]
  }
});

mix.ts(
  "resources/app-with-ts-all-the-way-through.ts",
  "public/app-with-ts-all-the-way-through.js"
);

mix.js("resources/app-with-ts-in-parts.js", "public/app-with-ts-in-parts.js");
