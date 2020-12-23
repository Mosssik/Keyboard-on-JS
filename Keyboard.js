function EventsMouseKey(btn, key) {

  btn.addEventListener('mousedown', (event) => {
    btn.classList.add('active')

  })

  btn.addEventListener('mouseup', (event) => {
    btn.classList.remove('active')
  })

  document.addEventListener('keydown', (event) => {
    if (event.key == key) {
      btn.classList.add('active')
    }
  })

  document.addEventListener('keyup', (event) => {
    if (event.key == key) {
      btn.classList.remove('active')
    }
  })
}

const wrapper = document.createElement('div');
wrapper.style.border = 1 + 'px solid grey';
wrapper.style.width = '450px';
wrapper.style.margin = "0 auto";
document.body.append(wrapper);

const line2 = document.createElement('div');
line2.style.display = 'flex';
line2.style.margin = '0 0 3px 0';
wrapper.append(line2);

const ltr = document.createElement('div');
ltr.textContent = 'Ё';
ltr.style.padding = '5px';
ltr.style.border = 1 + 'px solid grey';
line2.append(ltr);

new EventsMouseKey(ltr, '`')

const num1 = document.createElement('div');
num1.textContent = '1';
num1.style.padding = '5px';
num1.style.border = 1 + 'px solid grey';
line2.append(num1);

new EventsMouseKey(num1, '1');

const num2 = document.createElement('div');
num2.textContent = '2';
num2.style.padding = '5px';
num2.style.border = 1 + 'px solid grey';
line2.append(num2);

new EventsMouseKey(num2, '2');

const num3 = document.createElement('div');
num3.textContent = '3';
num3.style.padding = '5px';
num3.style.border = 1 + 'px solid grey';
line2.append(num3);

new EventsMouseKey(num3, '3');

const num4 = document.createElement('div');
num4.textContent = '4';
num4.style.padding = '5px';
num4.style.border = 1 + 'px solid grey';
line2.append(num4);

new EventsMouseKey(num4, '4');

const num5 = document.createElement('div');
num5.textContent = '5';
num5.style.padding = '5px';
num5.style.border = 1 + 'px solid grey';
line2.append(num5);

new EventsMouseKey(num5, '5');

const num6 = document.createElement('div');
num6.textContent = '6';
num6.style.padding = '5px';
num6.style.border = 1 + 'px solid grey';
line2.append(num6);

new EventsMouseKey(num6, '6');

const num7 = document.createElement('div');
num7.textContent = '7';
num7.style.padding = '5px';
num7.style.border = 1 + 'px solid grey';
line2.append(num7);

new EventsMouseKey(num7, '7');

const num8 = document.createElement('div');
num8.textContent = '8';
num8.style.padding = '5px';
num8.style.border = 1 + 'px solid grey';
line2.append(num8);

new EventsMouseKey(num8, '8');

const num9 = document.createElement('div');
num9.textContent = '9';
num9.style.padding = '5px';
num9.style.border = 1 + 'px solid grey';
line2.append(num9);

new EventsMouseKey(num9, '9');

const num0 = document.createElement('div');
num0.textContent = '0';
num0.style.padding = '5px';
num0.style.border = 1 + 'px solid grey';
line2.append(num0);

new EventsMouseKey(num0, '0');

const subtr = document.createElement('div');
subtr.textContent = '-';
subtr.style.padding = '5px';
subtr.style.border = 1 + 'px solid grey';
line2.append(subtr);

new EventsMouseKey(subtr, '-');

const sum = document.createElement('div');
sum.textContent = '= +';
sum.style.padding = '5px';
sum.style.border = 1 + 'px solid grey';
line2.append(sum);

new EventsMouseKey(sum, '=');

const backspace = document.createElement('div');
backspace.textContent = 'Backspace';
backspace.style.padding = '5px';
backspace.style.border = 1 + 'px solid grey';
line2.append(backspace);

new EventsMouseKey(backspace, 'Backspace');

const line3 = document.createElement('div');
line3.style.display = 'flex';
line3.style.margin = '0 0 3px 0';
wrapper.append(line3);

const tab = document.createElement('div');
tab.textContent = 'Tab';
tab.style.padding = '5px';
tab.style.border = 1 + 'px solid grey';
line3.append(tab);

new EventsMouseKey(tab, 'Tab');

const q = document.createElement('div');
q.textContent = 'Q';
q.style.padding = '5px';
q.style.border = 1 + 'px solid grey';
line3.append(q);

new EventsMouseKey(q, 'q');

const w = document.createElement('div');
w.textContent = 'W';
w.style.padding = '5px';
w.style.border = 1 + 'px solid grey';
line3.append(w);

new EventsMouseKey(w, 'w');

const e = document.createElement('div');
e.textContent = 'E';
e.style.padding = '5px';
e.style.border = 1 + 'px solid grey';
line3.append(e);

new EventsMouseKey(e, 'e');

const r = document.createElement('div');
r.textContent = 'R';
r.style.padding = '5px';
r.style.border = 1 + 'px solid grey';
line3.append(r);

new EventsMouseKey(r, 'r');

const t = document.createElement('div');
t.textContent = 'T';
t.style.padding = '5px';
t.style.border = 1 + 'px solid grey';
line3.append(t);

new EventsMouseKey(t, 't');

const y = document.createElement('div');
y.textContent = 'Y';
y.style.padding = '5px';
y.style.border = 1 + 'px solid grey';
line3.append(y);

new EventsMouseKey(y, 'y');

const u = document.createElement('div');
u.textContent = 'U';
u.style.padding = '5px';
u.style.border = 1 + 'px solid grey';
line3.append(u);

new EventsMouseKey(u, 'u');

const i = document.createElement('div');
i.textContent = 'I';
i.style.padding = '5px';
i.style.border = 1 + 'px solid grey';
line3.append(i);

new EventsMouseKey(i, 'i');

const o = document.createElement('div');
o.textContent = 'O';
o.style.padding = '5px';
o.style.border = 1 + 'px solid grey';
line3.append(o);

new EventsMouseKey(o, 'o');

const p = document.createElement('div');
p.textContent = 'P';
p.style.padding = '5px';
p.style.border = 1 + 'px solid grey';
line3.append(p);

new EventsMouseKey(p, 'p');

const ltr12 = document.createElement('div');
ltr12.textContent = '[{';
ltr12.style.padding = '5px';
ltr12.style.border = 1 + 'px solid grey';
line3.append(ltr12);

new EventsMouseKey(ltr12, '[');

const ltr13 = document.createElement('div');
ltr13.textContent = ']}';
ltr13.style.padding = '5px';
ltr13.style.border = 1 + 'px solid grey';
line3.append(ltr13);

new EventsMouseKey(ltr13, ']');

const ltr14 = document.createElement('div');
ltr14.textContent = '\\ |';
ltr14.style.padding = '5px';
ltr14.style.border = 1 + 'px solid grey';
line3.append(ltr14);

new EventsMouseKey(ltr14, '\\');

const line4 = document.createElement('div');
line4.style.display = 'flex';
line4.style.margin = '0 0 3px 0';
wrapper.append(line4);

const capsLock = document.createElement('div');
capsLock.textContent = 'CapsLock';
capsLock.style.padding = '5px';
capsLock.style.border = 1 + 'px solid grey';
line4.append(capsLock);

capsLock.addEventListener('mousedown', () => {
  if (!capsLock.classList.contains('active')) {
    capsLock.classList.add('active');
    console.log(`click CapsLock on`);
  } else {
    capsLock.classList.remove('active');
    console.log(`click CapsLock off`);
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key == 'CapsLock') {
    if (!capsLock.classList.contains('active')) {
      capsLock.classList.add('active');
      console.log(`click CapsLock on`);
    } else {
      capsLock.classList.remove('active');
      console.log(`click CapsLock off`);
    }
  }
})



const a = document.createElement('div');
a.textContent = 'A';
a.style.padding = '5px';
a.style.border = 1 + 'px solid grey';
line4.append(a);

new EventsMouseKey(a, 'a');

const s = document.createElement('div');
s.textContent = 'S';
s.style.padding = '5px';
s.style.border = 1 + 'px solid grey';
line4.append(s);

new EventsMouseKey(s, 's');

const d = document.createElement('div');
d.textContent = 'D';
d.style.padding = '5px';
d.style.border = 1 + 'px solid grey';
line4.append(d);

new EventsMouseKey(d, 'd');

const f = document.createElement('div');
f.textContent = 'F';
f.style.padding = '5px';
f.style.border = 1 + 'px solid grey';
line4.append(f);

new EventsMouseKey(f, 'f');

const g = document.createElement('div');
g.textContent = 'G';
g.style.padding = '5px';
g.style.border = 1 + 'px solid grey';
line4.append(g);

new EventsMouseKey(g, 'g');

const h = document.createElement('div');
h.textContent = 'H';
h.style.padding = '5px';
h.style.border = 1 + 'px solid grey';
line4.append(h);

new EventsMouseKey(h, 'h');

const j = document.createElement('div');
j.textContent = 'J';
j.style.padding = '5px';
j.style.border = 1 + 'px solid grey';
line4.append(j);

new EventsMouseKey(j, 'j');

const k = document.createElement('div');
k.textContent = 'K';
k.style.padding = '5px';
k.style.border = 1 + 'px solid grey';
line4.append(k);

new EventsMouseKey(k, 'k');

const l = document.createElement('div');
l.textContent = 'L';
l.style.padding = '5px';
l.style.border = 1 + 'px solid grey';
line4.append(l);

new EventsMouseKey(l, 'l');

const line4ltr11 = document.createElement('div');
line4ltr11.textContent = ': ;';
line4ltr11.style.padding = '5px';
line4ltr11.style.border = 1 + 'px solid grey';
line4.append(line4ltr11);

new EventsMouseKey(line4ltr11, ';');

const line4ltr12 = document.createElement('div');
line4ltr12.textContent = '"';
line4ltr12.style.padding = '5px';
line4ltr12.style.border = 1 + 'px solid grey';
line4.append(line4ltr12);

new EventsMouseKey(line4ltr12, "'");

const enter = document.createElement('div');
enter.textContent = 'Enter';
enter.style.padding = '5px';
enter.style.border = 1 + 'px solid grey';
line4.append(enter);

new EventsMouseKey(enter, 'Enter');

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
z.textContent = 'Z';
z.style.padding = '5px';
z.style.border = 1 + 'px solid grey';
line5.append(z);

new EventsMouseKey(z, 'z');

const x = document.createElement('div');
x.textContent = 'X';
x.style.padding = '5px';
x.style.border = 1 + 'px solid grey';
line5.append(x);

new EventsMouseKey(x, 'x');

const c = document.createElement('div');
c.textContent = 'C';
c.style.padding = '5px';
c.style.border = 1 + 'px solid grey';
line5.append(c);

new EventsMouseKey(c, 'c');

const v = document.createElement('div');
v.textContent = 'V';
v.style.padding = '5px';
v.style.border = 1 + 'px solid grey';
line5.append(v);

new EventsMouseKey(v, 'v');

const b = document.createElement('div');
b.textContent = 'B';
b.style.padding = '5px';
b.style.border = 1 + 'px solid grey';
line5.append(b);

new EventsMouseKey(b, 'b');

const n = document.createElement('div');
n.textContent = 'N';
n.style.padding = '5px';
n.style.border = 1 + 'px solid grey';
line5.append(n);

new EventsMouseKey(n, 'n');

const m = document.createElement('div');
m.textContent = 'M';
m.style.padding = '5px';
m.style.border = 1 + 'px solid grey';
line5.append(m);

new EventsMouseKey(m, 'm');

const line5ltr9 = document.createElement('div');
line5ltr9.textContent = ',<';
line5ltr9.style.padding = '5px';
line5ltr9.style.border = 1 + 'px solid grey';
line5.append(line5ltr9);

new EventsMouseKey(line5ltr9, ',');

const line5ltr10 = document.createElement('div');
line5ltr10.textContent = '.>';
line5ltr10.style.padding = '5px';
line5ltr10.style.border = 1 + 'px solid grey';
line5.append(line5ltr10);

new EventsMouseKey(line5ltr10, '.');

const line5ltr11 = document.createElement('div');
line5ltr11.textContent = '/?';
line5ltr11.style.padding = '5px';
line5ltr11.style.border = 1 + 'px solid grey';
line5.append(line5ltr11);

new EventsMouseKey(line5ltr11, '/');

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
lCtrl.style.padding = '5px';
lCtrl.style.border = 1 + 'px solid grey';
line6.append(lCtrl);

new EventsMouseKey(lCtrl, 'Control');

const win = document.createElement('div');
win.textContent = 'win';
win.style.padding = '5px';
win.style.border = 1 + 'px solid grey';
line6.append(win);

new EventsMouseKey(win, 'Meta');

const lAlt = document.createElement('div');
lAlt.textContent = 'Alt';
lAlt.style.padding = '5px';
lAlt.style.border = 1 + 'px solid grey';
line6.append(lAlt);

new EventsMouseKey(lAlt, 'Alt');

const space = document.createElement('div');
space.textContent = '';
space.style.padding = '5px';
space.style.border = 1 + 'px solid grey';
space.style.width = '100px';
line6.append(space);

new EventsMouseKey(space, ' ');

const rAlt = document.createElement('div');
rAlt.textContent = 'Alt gr';
rAlt.style.padding = '5px';
rAlt.style.border = 1 + 'px solid grey';
line6.append(rAlt);

new EventsMouseKey(rAlt, 'Alt');

const rCtrl = document.createElement('div');
rCtrl.textContent = 'Ctrl';
rCtrl.style.padding = '5px';
rCtrl.style.border = 1 + 'px solid grey';
line6.append(rCtrl);

new EventsMouseKey(rCtrl, 'Control');

const arrowLeft = document.createElement('div');
arrowLeft.textContent = 'left';
arrowLeft.style.padding = '5px';
arrowLeft.style.border = 1 + 'px solid grey';
line6.append(arrowLeft);

new EventsMouseKey(arrowLeft, 'ArrowLeft');


const blockArrows = document.createElement('div');
const arrowUp = document.createElement('div');
arrowUp.textContent = 'top';
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
