# kununu theme

kununu's basic styling. It contains everything from reset, colors, gradients, typography and media breakpoints that is used on kununu applications.

🚨 Make sure to use the new `@kununu-theme-v3` when you starting a new project.

## ✅ kununu-theme-v3 [current]

kununu basic styling v3 - built from scratch for new applications with kununu's new UI

All the styles are SCSS and need to be compiled.

## ⛔️ kununu-theme, kununu-theme-v2 [deprecated]

kununu basic styling v1 - used in the monolith and its original UI
kununu basic styling v2 - used in new applications matching monolith's UI

All the styles are SCSS and need to be compiled.

## Development

Quick iteration is key to a good developer experience on the frontend. With a project that consumes other npm packages, iterating on those packages locally without publishing can be accomplished using npm's `link` command.

For example, to quickly iterate on the kununu theme while using it in another project, your local theme repo can be linked to the other project.

To link the `@kununu/kununu-theme-v3`, `@kununu/kununu-theme-v2` or `kununu-theme` git repository to `node_modules` of the other project:

* Go into the root of the *theme folder* and type ```npm link```
* Go into the root folder of *the other project* and type ```npm link @kununu/kununu-theme-v3```

To remove the links again:

* Go into the root of the *theme folder* and type ```npm unlink```
* Go into the root folder of *the other project* and type ```npm unlink @kununu/kununu-theme-v3```
* Eventually redo ```npm install```

[npm documentation - link](https://docs.npmjs.com/cli/link)

## Dependencies

You will need a Sass loader in order to use these styles. All Bootstrap references were removed from kununu-theme-v3, as it was built from scratch.

#### Made with ❤️  by our awesome engineering folks in Vienna and Porto
