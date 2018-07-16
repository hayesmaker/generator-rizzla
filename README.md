# rizla

![Monkas Approves Project](https://i.imgur.com/saNTXPD.png)

### About

Yeoman generator for quickly scaffolding [CANVAS](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) based HTML5 games or apps.

This is designed to be a really simple way of creating a new html5 game project, with the latest
tools installed automatically and ready to use.  Perfect for getting started quickly in game jams, or
you just want an easy life.

Configurations are all included in the scaffold so customise as you like.

### Features

- PixiJS v4 (Alternative rendering system and game frameworks coming soon)
- Babel for ES6 niceness and JS modules
- Webpack 4 for compiling and hotreloading
- Jest for unit testing (alternative test tools will be supported)

### Install 
nb. ```yo``` is to install yeoman, you can remove `yo` from the following command if you have installed yeoman already.

`npm i -g generator-rizla yo`

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
