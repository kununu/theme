# kununu-theme
kununu's basic styling

All the styles are sass and need to be compiled.

#Live reload development with webpack

## Linking the kununu-theme git repository to node_modules of your application
* Go into the root of the *theme folder* and type ```npm link```
* Go into the root folder of *your application* and type ```npm link kununu-theme```

## Remove the Links 
* Go into the root of the *theme folder* and type ```npm unlink```
* Go into the root folder of *your application* and type ```npm unlink kununu-theme```
* Eventually redo ```npm install```

[npm documentation - link](https://docs.npmjs.com/cli/link)

#Dependencies
These styles should be used with Bootstap and loaded using webpack



