let array = [{
    textContent: '` Ё',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'Backquote',
  },
  {
    textContent: '1',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'Digit1',
  },
  {
    textContent: '2',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'Digit2',
  },
  {
    textContent: '3',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'Digit3',
  },
  {
    textContent: '4',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'Digit4',
  },
  {
    textContent: '5',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'Digit5',
  },
  {
    textContent: '6',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'Digit6',
  },
  {
    textContent: '7',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'Digit7',
  },
  {
    textContent: '8',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'Digit8',
  },
  {
    textContent: '9',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'Digit9',
  },
  {
    textContent: '0',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'Digit0',
  },
  {
    textContent: '-',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'Minus',
  },
  {
    textContent: '=',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'Equal',
  },
  {
    textContent: 'Backspace',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'Backspace',
  },
]

let array2 = [{
    textContent: '	Tab',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'Tab',
  },
  {
    textContent: 'Q й',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'KeyQ',
  },
  {
    textContent: 'W ц',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'KeyW',
  },
  {
    textContent: 'E у',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'KeyE',
  },
  {
    textContent: 'R к',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'KeyR',
  },
  {
    textContent: 'T к',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'KeyT',
  },
  {
    textContent: 'Y н',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'KeyY',
  },
  {
    textContent: 'U г',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'KeyU',
  },
  {
    textContent: 'I ш',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'KeyI',
  },
  {
    textContent: 'O щ',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'KeyO',
  },
  {
    textContent: 'P з',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'KeyP',
  },
  {
    textContent: '[ х',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'BracketLeft',
  },
  {
    textContent: '] ъ',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'BracketRight',
  },
  {
    textContent: '\\ |',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'Backslash',
  },
]

let array3 = [{
    textContent: 'CapsLock',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'CapsLock',
  },
  {
    textContent: 'A ф',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'KeyA',
  },
  {
    textContent: 'S Ы',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'KeyS',
  },
  {
    textContent: 'D в',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'KeyD',
  },
  {
    textContent: 'F а',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'KeyF',
  },
  {
    textContent: 'G п',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'KeyG',
  },
  {
    textContent: 'H р',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'KeyH',
  },
  {
    textContent: 'J о',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'KeyJ',
  },
  {
    textContent: 'K л',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'KeyK',
  },
  {
    textContent: 'L д',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'KeyL',
  },
  {
    textContent: '; ж',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'Semicolon',
  },
  {
    textContent: '\' э',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'Quote',
  },
  {
    textContent: 'Enter',
    padding: '5px 10px',
    border: '1px solid grey',
    code: 'Enter',
  },
]


function initEventsListener() {

  document.addEventListener('click', (event) => {
    if (event.target.dataset.click != undefined) {
      event.target.classList.add('active');
      setTimeout(() => {
        event.target.classList.remove('active')
      }, 200)
    }
  });

  document.addEventListener('keydown', (event) => {
    const code = event.code;
    const letr = document.querySelector(`#${code}`);
    letr.classList.add('active');
    setTimeout(() => {
      letr.classList.remove('active')
    }, 200)
  })
}

initEventsListener();

const wrapper = document.createElement('div');
wrapper.style.border = 1 + 'px solid grey';
wrapper.style.width = '513px';
wrapper.style.margin = "0 auto";
document.body.append(wrapper);

const line2 = document.createElement('div');
line2.style.display = 'flex';
line2.style.margin = '0 0 3px 0';
wrapper.append(line2);

array.forEach((e) => {
  const ltr = document.createElement('div');
  ltr.textContent = e.textContent;
  ltr.style.padding = e.padding;
  ltr.style.border = e.border;
  ltr.setAttribute('data-click', '')
  ltr.setAttribute('id', e.code)
  line2.append(ltr);
});

const line3 = document.createElement('div');
line3.style.display = 'flex';
line3.style.margin = '0 0 3px 0';
wrapper.append(line3);

array2.forEach((e) => {
  const ltr = document.createElement('div');
  ltr.textContent = e.textContent;
  ltr.style.padding = e.padding;
  ltr.style.border = e.border;
  ltr.setAttribute('data-click', '')
  ltr.setAttribute('id', e.code)
  line3.append(ltr);
});
const line4 = document.createElement('div');
line4.style.display = 'flex';
line4.style.margin = '0 0 3px 0';
wrapper.append(line4);

array3.forEach((e) => {
  const ltr = document.createElement('div');
  ltr.textContent = e.textContent;
  ltr.style.padding = e.padding;
  ltr.style.border = e.border;
  ltr.setAttribute('data-click', '')
  ltr.setAttribute('id', e.code)
  line4.append(ltr);
});


const line5 = document.createElement('div');
line5.style.display = 'flex';
line5.style.margin = '0 0 3px 0';

wrapper.append(line5);

const lShift = document.createElement('div');
lShift.textContent = 'LShift';
lShift.style.padding = '5px';
lShift.style.border = 1 + 'px solid grey';
line5.append(lShift);

new EventsMouseKey(lShift, 'Shift');

const z = document.createElement('div');
z.textContent = 'Z я';
z.style.padding = '5px';
z.style.border = 1 + 'px solid grey';
line5.append(z);

new EventsMouseKey(z, 'z');
new EventsMouseKey(z, 'я');

const x = document.createElement('div');
x.textContent = 'X ч';
x.style.padding = '5px';
x.style.border = 1 + 'px solid grey';
line5.append(x);

new EventsMouseKey(x, 'x');
new EventsMouseKey(x, 'ч');

const c = document.createElement('div');
c.textContent = 'C с';
c.style.padding = '5px';
c.style.border = 1 + 'px solid grey';
line5.append(c);

new EventsMouseKey(c, 'c');
new EventsMouseKey(c, 'с');

const v = document.createElement('div');
v.textContent = 'V м';
v.style.padding = '5px';
v.style.border = 1 + 'px solid grey';
line5.append(v);

new EventsMouseKey(v, 'v');
new EventsMouseKey(v, 'м');

const b = document.createElement('div');
b.textContent = 'B и';
b.style.padding = '5px';
b.style.border = 1 + 'px solid grey';
line5.append(b);

new EventsMouseKey(b, 'b');
new EventsMouseKey(b, 'и');

const n = document.createElement('div');
n.textContent = 'N т';
n.style.padding = '5px';
n.style.border = 1 + 'px solid grey';
line5.append(n);

new EventsMouseKey(n, 'n');
new EventsMouseKey(n, 'т');

const m = document.createElement('div');
m.textContent = 'M ь';
m.style.padding = '5px';
m.style.border = 1 + 'px solid grey';
line5.append(m);

new EventsMouseKey(m, 'm');
new EventsMouseKey(m, 'ь');

const line5ltr9 = document.createElement('div');
line5ltr9.textContent = ',< б';
line5ltr9.style.padding = '5px';
line5ltr9.style.border = 1 + 'px solid grey';
line5.append(line5ltr9);

new EventsMouseKey(line5ltr9, ',');
new EventsMouseKey(line5ltr9, 'б');

const line5ltr10 = document.createElement('div');
line5ltr10.textContent = '.> ю';
line5ltr10.style.padding = '5px';
line5ltr10.style.border = 1 + 'px solid grey';
line5.append(line5ltr10);

new EventsMouseKey(line5ltr10, '.');
new EventsMouseKey(line5ltr10, 'ю');

const line5ltr11 = document.createElement('div');
line5ltr11.textContent = '/? .';
line5ltr11.style.padding = '5px';
line5ltr11.style.border = 1 + 'px solid grey';
line5.append(line5ltr11);

new EventsMouseKey(line5ltr11, '/');
new EventsMouseKey(line5ltr11, '.');

const rShift = document.createElement('div');
rShift.textContent = 'RShift';
rShift.style.padding = '5px';
rShift.style.border = 1 + 'px solid grey';
line5.append(rShift);

new EventsMouseKey(rShift, 'Shift');

const line6 = document.createElement('div');
line6.style.display = 'flex';
wrapper.append(line6);

const lCtrl = document.createElement('div');
lCtrl.textContent = 'LCtrl';
lCtrl.style.padding = '5px 10px';
lCtrl.style.border = 1 + 'px solid grey';
line6.append(lCtrl);

new EventsMouseKey(lCtrl, 'Control');

const win = document.createElement('div');
win.textContent = 'win';
win.style.padding = '5px 10px';
win.style.border = 1 + 'px solid grey';
line6.append(win);

new EventsMouseKey(win, 'Meta');

const lAlt = document.createElement('div');
lAlt.textContent = 'Alt';
lAlt.style.padding = '5px 10px';
lAlt.style.border = 1 + 'px solid grey';
line6.append(lAlt);

new EventsMouseKey(lAlt, 'Alt');

const space = document.createElement('div');
space.textContent = '';
space.style.padding = '5px 15px';
space.style.border = 1 + 'px solid grey';
space.style.width = '100px';
line6.append(space);

new EventsMouseKey(space, ' ');

const rAlt = document.createElement('div');
rAlt.textContent = 'Alt gr';
rAlt.style.padding = '5px 10px';
rAlt.style.border = 1 + 'px solid grey';
line6.append(rAlt);

new EventsMouseKey(rAlt, 'Alt');

const rCtrl = document.createElement('div');
rCtrl.textContent = 'Ctrl';
rCtrl.style.padding = '5px 10px';
rCtrl.style.border = 1 + 'px solid grey';
line6.append(rCtrl);

new EventsMouseKey(rCtrl, 'Control');

const arrowLeft = document.createElement('div');
arrowLeft.textContent = 'left';
arrowLeft.style.padding = '5px 10px';
arrowLeft.style.border = 1 + 'px solid grey';
line6.append(arrowLeft);

new EventsMouseKey(arrowLeft, 'ArrowLeft');


const blockArrows = document.createElement('div');
const arrowUp = document.createElement('div');
arrowUp.textContent = 'up';
arrowUp.style.border = '1px solid grey';
new EventsMouseKey(arrowUp, 'ArrowUp');

const arrowDown = document.createElement('div');
arrowDown.textContent = 'down';
arrowDown.style.border = '1px solid grey';
blockArrows.append(arrowUp, arrowDown);
line6.append(blockArrows);

new EventsMouseKey(arrowDown, 'ArrowDown');

const arrowRight = document.createElement('div');
arrowRight.textContent = 'right';
arrowRight.style.padding = '5px';
arrowRight.style.border = 1 + 'px solid grey';
line6.append(arrowRight);

new EventsMouseKey(arrowRight, 'ArrowRight');

const txt = document.createElement('textarea');
txt.setAttribute('placeholder', 'Введите текст');
txt.setAttribute('cols', '71');
txt.setAttribute('rows', '5');
txt.style.margin = '20px 0 0 125px';
document.body.append(txt);
