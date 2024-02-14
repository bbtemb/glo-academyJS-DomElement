'use strict';

const body = document.querySelector('body');

function DomElement(selector) {
  this.selector = selector;
  this.height = '100px';
  this.width = '200px';
  this.bg = 'pink';
  this.fontSize = '16px';

  this.createElement = function () {
    let newEl;
    if (selector.charAt(0) === '.') {
      newEl = document.createElement('div');
      newEl.innerText = 'Это div';
      body.append(newEl);
    }

    if (selector.charAt(0) === '#') {
      newEl = document.createElement('p');
      newEl.innerText = 'Это p';
      body.append(newEl);
    }
    newEl.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}`;
  };
}
let testBlock = new DomElement('.block');
testBlock.createElement();

let testP = new DomElement('#text');
testP.createElement();
