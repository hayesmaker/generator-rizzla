var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  writePackage() {
    this.log('writePackage yo');
    const pkgJson = {
      "name": "pixi-parcel-rollup",
      "version": "1.0.0",
      "description": "moo",
      "source": "src/index.html",
      "browserslist": "> 0.5%, last 2 versions, not dead",
      "staticFiles": {
        "staticOutPath": "assets"
      },
      "scripts": {
        "clean": "rimraf dist",
        "start": "parcel --open --no-cache",
        "build": "parcel build",
        "cbuild": "npm run clean && npm run build",
        "test": "jest"
      },
      "jest": {
        "testEnvironment": "jsdom",
        "setupFiles": [
          "jest-canvas-mock",
          "jest-webgl-canvas-mock"
        ]
      },
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "@babel/core": "^7.16.0",
        "@babel/preset-env": "^7.16.0",
        "babel-jest": "^27.3.1",
        "copyfiles": "^2.4.1",
        "jest": "^27.3.1",
        "jest-canvas-mock": "^2.3.1",
        "jest-webgl-canvas-mock": "^0.2.3",
        "parcel": "^2.0.0",
        "parcel-reporter-static-files-copy": "^1.3.0",
        "rimraf": "^3.0.2"
      },
      "dependencies": {
        "gsap": "^3.8.0",
        "pixi.js": "^6.1.3"
      }
    };

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }

  writing() {
    this.log('writing project files yo!');
    this.fs.copy(
      this.templatePath('./'),
      this.destinationPath('./')
    );
    this.fs.copy(
      this.templatePath('.parcelrc'),
      this.destinationPath('./.parcelrc')
    );
    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('./.babelrc')
    );
  }

  install() {
    this.log('parcel rollup yo!');
    this.npmInstall();
  }
};