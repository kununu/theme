# @kununu/kununu-theme-v3

> kununu UI on a SCSS theme

kununu's basic styling. It contains everything from reset, colors, gradients, typography and media breakpoints that are used on kununu applications.

## 📦 Installation

Install and save as a dependency on your project:
```console
npm install --save @kununu/kununu-theme-v3
```

## 💻 Usage

Import files in your SCSS to begin using right away:

```scss
@import "~@kununu/kununu-theme-v3/scss/base";
@import "~@kununu/kununu-theme-v3/scss/variables";
@import "~@kununu/kununu-theme-v3/scss/typography";
```

Remember that all the styles are SCSS and need to be compiled. Check [sass-loader](https://github.com/webpack-contrib/sass-loader) documentation if you're using Webpack to bundle your assets.

#### Development

Quick iteration is key to a good developer experience on the frontend. With a project that consumes other npm packages, iterating on those packages locally without publishing can be accomplished using npm's `link` command.

For example, to quickly iterate on the kununu theme while using it in another project, your local theme repo can be linked to the other project.

To link the `@kununu/kununu-theme-v3` git repository to `node_modules` of the other project:

* Go into the root of the *theme folder* and type ```npm link```
* Go into the root folder of *the other project* and type ```npm link @kununu/kununu-theme-v3```

To remove the links again:

* Go into the root of the *theme folder* and type ```npm unlink```
* Go into the root folder of *the other project* and type ```npm unlink @kununu/kununu-theme-v3```
* Eventually redo ```npm install```

See npm [docs](https://docs.npmjs.com/cli/link) to find more detailed information about link command usage.

## 🧹 Deprecated versions

**[kununu-theme](https://www.npmjs.com/package/kununu-theme)**
Used in the monolith and its original UI

**[kununu-theme-v2](https://www.npmjs.com/package/@kununu/kununu-theme-v2)**
Used in new applications matching monolith's UI

####  Made with ❤️  by our awesome engineering folks in Vienna and Porto
