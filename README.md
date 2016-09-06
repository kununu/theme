# kununu-theme

kununu's basic styling

All the styles are scss and need to be compiled.

## Development

Quick iteration is key to a good developer experience on the frontend. With a project that consumes other npm packages, iterating on those packages locally without publishing can be accomplished using npm's `link` command.

For example, to quickly iterate on the kununu theme while using it in another project, your local theme repo can be linked to the other project.

To link the `kununu-theme` git repository to `node_modules` of the other project:

* Go into the root of the *theme folder* and type ```npm link```
* Go into the root folder of *the other project* and type ```npm link kununu-theme```

To remove the links again:

* Go into the root of the *theme folder* and type ```npm unlink```
* Go into the root folder of *the other project* and type ```npm unlink kununu-theme```
* Eventually redo ```npm install```

[npm documentation - link](https://docs.npmjs.com/cli/link)

## Dependencies

The styles depend on Bootstap and can be bundled using webpack.

## Releasing new version

In order to update the npm version we must update the tag. Once an updated tag has been pushed and merged into master Travis will automatically update the npm version.

git tag -a v1.0.* -m <what changed in this version>
git push --tags
