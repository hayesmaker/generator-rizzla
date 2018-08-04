# generator-rizzla

![Monkas Approves Project](https://i.imgur.com/saNTXPD.png)

### About

[Yeoman](http://yeoman.io/) generator for quickly scaffolding [CANVAS](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) based HTML5 games or apps.

This is designed to be a really simple way of creating a new html5 game project, with the latest
tools installed automatically and ready to use.  Perfect for getting started quickly in game jams, or
you just want an easy life.

Configurations are all included in the scaffold so customise as you like.

### Features

- [PixiJS v4](http://www.pixijs.com/) Canvas and WEBGL Rendering Engine 
- [Babel](https://babeljs.io/) for compiling ES6 niceness and JS modules back to ES5 which browsers can run. 
- [Webpack 4](https://webpack.js.org/) for bundling code and assets and hot reloads (hot reloading is as cool as it sounds)
- [Jest](https://jestjs.io/) for delightful unit testing.  Machete Don't test? He really really should, and so should you!

### Install 
nb. ```yo``` is to install yeoman, you can remove `yo` from the following command if you have installed yeoman already.

`npm i -g generator-rizzla yo`

### What do I need installed first?

npm requires nodejs to be installed on your machine.  If the command above doesn't work, it's probably for this reason.  [Go here and get nodejs](https://nodejs.org/en/). npm will be installed automatically alongside.

### Usage

```
mkdir my-game-name

cd my-game-name

yo rizla

npm start
```

Your new game will scaffold will automatically build and launch in your default browser and will hot reload whenever you
save a change in the src folder


### Testing

Inside your project just `npm test`

Now make some !tea and *Enjoy!*
