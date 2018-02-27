# kununu themes

kununu's basic styling. We have the original kununu-theme which is used in the monolith and then we have the @kununu/kununu-theme-v2 which is our newer theme used in current applications. Make sure to use the new theme-v2 when you are starting a new project.

## kununu-theme (Deprecated - please use kununu-theme-v2 for new applications)

kununu basic styling v1 - used for the monolith

All the styles are scss and need to be compiled.

## Development

Quick iteration is key to a good developer experience on the frontend. With a project that consumes other npm packages, iterating on those packages locally without publishing can be accomplished using npm's `link` command.

For example, to quickly iterate on the kununu theme while using it in another project, your local theme repo can be linked to the other project.

To link the `@kununu/kununu-theme-v2` or `kununu-theme` git repository to `node_modules` of the other project:

* Go into the root of the *theme folder* and type ```npm link```
* Go into the root folder of *the other project* and type ```npm link @kununu/kununu-theme-v2```

To remove the links again:

* Go into the root of the *theme folder* and type ```npm unlink```
* Go into the root folder of *the other project* and type ```npm unlink kununu-theme```
* Eventually redo ```npm install```

[npm documentation - link](https://docs.npmjs.com/cli/link)

## Dependencies

You will need a SASS loader in order to use these styles. There are a lot of variables used for customizing Boostrap 3, Although most of the styles will work with Bootstrap 4 as well except for navbar-default.
