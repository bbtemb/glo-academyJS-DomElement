'use strict';

const body = document.querySelector('body');

let x = 0;
let y = 0;

function DomElement(selector) {
  this.selector = selector;
  this.height = '100px';
  this.width = '100px';
  this.bg = 'pink';
  this.fontSize = '16px';
  this.position = 'absolute';

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
    newEl.classList.add(this.selector.slice(1));
    newEl.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}; position: ${this.position};`;
  };
}
let square = new DomElement('.block');

document.addEventListener('DOMContentLoaded', square.createElement());

const squareLoaded = document.querySelector('.block');

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') {
    x += 10;
    squareLoaded.style.left = `${x}px`;
  }
  if (event.key === 'ArrowLeft') {
    x -= 10;
    squareLoaded.style.left = `${x}px`;
  }
  if (event.key === 'ArrowUp') {
    y -= 10;
    squareLoaded.style.top = `${y}px`;
  }
  if (event.key === 'ArrowDown') {
    y += 10;
    squareLoaded.style.top = `${y}px`;
  }
});
