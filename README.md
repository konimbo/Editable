# Editable
![Editable Image - When Done]()
## Description
This project is intended for [Konimbo](http://www.konimbo.co.il) users in order to have a visual editing tool for their E-Commerce website.

## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Dependencies](#Dependencies)
4. [Contributing](#Contributing)
5. [Credits](#Credits)
6. [License](#License)

## Installation
* First, make sure you have [NodeJS](https://nodejs.org/en/) install on your computer. You can install it using a version package manager such as [NVM](https://github.com/creationix/nvm)
* Then, clone and ```cd``` to the GitHub repository
```
git clone https://github.com/konimbo/editable.git
cd editable
```
* Now, install all the node project dependencies
```
npm i
```
* You're ready to go!

## Usage
The main thing you sould do is run the watch mode in order to re-complie the project every time you save one of the files.
```
npm run watch
```
![`npm run watch` screen](https://konimboimages.s3.amazonaws.com/system/photos/241918/original/f26c6924a38f776195dc9a67b36d6c17.png?1521983708
)

## Dependencies
This project uses some dependencies we will explain a give a reference in this section

### [Webpack](https://webpack.js.org/)
![Webpack](https://konimboimages.s3.amazonaws.com/system/photos/241923/medium/5a6793e4a87aefc1bf3dcfdb6c6532a6.png?1521985291)

We use Webpack in this project for compiling source files (the html, js and the css files used here) into 1 (or more, with chunks) bundle for use in our web page.

### [Babel](https://babeljs.io/) 

![Babel](https://konimboimages.s3.amazonaws.com/system/photos/241922/medium/d0cd3cb55bf14effad442cf91d279bac.png?1521985198)

We use Babel Compiler in this project in order to compile ES6 (EcmaScript2015) into pure js code that is cross-browser compatible.

### [React](https://reactjs.org/)
![React](https://konimboimages.s3.amazonaws.com/system/photos/241924/medium/baf0141dd258cd19cad6a1c93ffc7080.png?1521985300
)

We use React and React-DOM in this project in order to write HTML over JS and have a modular components structure.

### [Bootstrap](https://getbootstrap.com/)
![Bootstrap](https://konimboimages.s3.amazonaws.com/system/photos/241925/medium/49a983d7351ba1f2f42f40f5ac5532a6.jpeg?1521985346)

We use [React-Bootstrap](https://react-bootstrap.github.io/) which is a library that allows me to use bootstrap functionality with pre-built react components.


## Contributing
FIXME
* ### build a new component
* ### write with TDD
* ### how to add a dependency


## Credits
This project is being written and maintained with :heart: by Konimbo Developers

## License
This is a Private repository not for share at the moment.

No one is allowed to make any use of the code written here without written permission by Konimbo.