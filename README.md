![Konimbo Cover](https://konimboimages.s3.amazonaws.com/system/photos/241941/original/92c9897734ff3a319cca4e8c0420db21.png?1521989425)
# Editable
![Editable Image - When Done](https://konimboimages.s3.amazonaws.com/system/photos/241940/original/7deeb21e183bf8d38cb9a7f95fe141e3.png?1521989290)
## Description
This project is intended for [Konimbo](http://www.konimbo.co.il) users in order to have a visual editing tool for their E-Commerce website.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Dependencies](#dependencies)
4. [Contributing](#contributing)
5. [Credits](#credits)
6. [License](#license)

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

 [![Webpack](https://konimboimages.s3.amazonaws.com/system/photos/241923/medium/5a6793e4a87aefc1bf3dcfdb6c6532a6.png?1521985291)](https://webpack.js.org/)

We use Webpack in this project for compiling source files (the html, js and the css files used here) into 1 (or more, with chunks) bundle for use in our web page.

[![Babel](https://konimboimages.s3.amazonaws.com/system/photos/241922/medium/d0cd3cb55bf14effad442cf91d279bac.png?1521985198)](https://babeljs.io/) 

We use Babel Compiler in this project in order to compile ES6 (EcmaScript2015) into pure js code that is cross-browser compatible.

[![React](https://konimboimages.s3.amazonaws.com/system/photos/241924/medium/baf0141dd258cd19cad6a1c93ffc7080.png?1521985300)](https://reactjs.org/)

We use React and React-DOM in this project in order to write HTML over JS and have a modular components structure.

[![Bootstrap](https://konimboimages.s3.amazonaws.com/system/photos/241925/medium/49a983d7351ba1f2f42f40f5ac5532a6.jpeg?1521985346)](https://getbootstrap.com/)

We use [React-Bootstrap](https://react-bootstrap.github.io/) which is a library that allows me to use bootstrap functionality with pre-built react components.


## Contributing
FIXME

## Testing
#### [An Overview of JavaScript Testing in 2018](https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3) (Great and informative article)

In this project we are using:
#### [Mocha](https://mochajs.org/)
Mocha is a framework for writing and running Unit Tests ([what is unit tests?](https://stackoverflow.com/questions/652292/what-is-unit-testing-and-how-do-you-do-it))
```javascript
describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(function(err) {
        if (err) done(err);
        else done();
      });
    });
  });
});
```
#### [Chai](http://www.chaijs.com/)
Chai is an assertation library for writing tests in any framework, it has 3 main methods

* Should

```javascript
chai.should();

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
tea.should.have.property('flavors')
  .with.lengthOf(3);
```

* Expect

```javascript
var expect = chai.expect;

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(tea).to.have.property('flavors')
  .with.lengthOf(3);
```

* Assert

```javascript
var assert = chai.assert;

assert.typeOf(foo, 'string');
assert.equal(foo, 'bar');
assert.lengthOf(foo, 3)
assert.property(tea, 'flavors');
assert.lengthOf(tea.flavors, 3);
```


* ### build a new component
* ### write with TDD
* ### how to add a dependency


## Credits
This project is being written and maintained with :heart: by Konimbo Developers

## License
This is a Private repository not for share at the moment.

No one is allowed to make any use of the code written here without written permission by Konimbo.

![Konimbo](https://konimboimages.s3.amazonaws.com/system/photos/241939/original/bc42f40e62a515b6e117423b3d969f04.png?1521989195)