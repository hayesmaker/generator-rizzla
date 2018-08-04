var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // This method adds support for a `--coffee` flag
    this.option('babel');

    // And you can then access it later; e.g.
    this.babelEnabled = !!this.options.babel;
  }

  writePackage() {
    this.log('yo pixi :: writePackage :: babelEnabled', this.babelEnabled);
    const pkgJson = {
      "name": "test-pixigen",
      "version": "0.1.0",
      "description": "Create a pixi game scaffold courtesy of @hayesmaker64",
      "main": "index.js",
      "dependencies": {
        "pixi.js": "^4.8.1",
        "gsap": "^2.0.1"
      },
      "devDependencies": {
        "babel-core": "^6.26.3",
        "babel-loader": "^7.1.5",
        "babel-preset-env": "^1.7.0",
        "jest": "^23.3.0",
        "jest-canvas-mock": "^1.1.0",
        "webpack": "^4.16.0",
        "webpack-cli": "^3.0.8",
        "webpack-dev-server": "^3.1.5",
        "webpack-livereload-plugin": "^2.1.1",
        "webpack-serve": "^2.0.2"
      },
      "scripts": {
        "start": "webpack-serve --content ./dist --open",
        "build": "webpack --config webpack.config.js --mode development",
        "test": "jest"
      },
      "author": "",
      "license": "ISC"
    };

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }

  writing() {
    this.log('yo pixi :: writing source');
    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('./src')
    );
    this.fs.copy(
      this.templatePath('test'),
      this.destinationPath('./test')
    );
    this.fs.copy(
      this.templatePath('dist'),
      this.destinationPath('./dist')
    );
    this.fs.copy(
      this.templatePath('jest.config.js'),
      this.destinationPath('./jest.config.js')
    );
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('./webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('./.babelrc')
    );
  }

  install() {
    this.log('yo pixi :: npm i');
    this.npmInstall();
  }
};