function initEventsListener() {

  document.addEventListener('click', (event) => {
  if(event.target.dataset.click != undefined){
  event.target.classList.add('active');
  setTimeout(() => {
      event.target.classList.remove('active')}, 200
    )
  }
  });
    
  document.addEventListener('keydown', (event) => {
    const code = event.code;
    const letr = document.querySelector(`#${code}`);
    letr.classList.add('active');
    setTimeout(()=>{letr.classList.remove('active')},200)
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

const ltr = document.createElement('div');
ltr.textContent = '` Ё';
ltr.style.padding = '5px';
ltr.style.border = 1 + 'px solid grey';
ltr.setAttribute('id','Backquote');
ltr.setAttribute('data-click','');
line2.append(ltr);

const num1 = document.createElement('div');
num1.textContent = '1';
num1.style.padding = '5px 10px';
num1.style.border = 1 + 'px solid grey';
num1.setAttribute('id','Digit1');
num1.setAttribute('data-click','');
line2.append(num1);

const num2 = document.createElement('div');
num2.textContent = '2';
num2.style.padding = '5px 10px';
num2.style.border = 1 + 'px solid grey';
num2.setAttribute('id','Digit2');
num2.setAttribute('data-click','');
line2.append(num2);

const num3 = document.createElement('div');
num3.textContent = '3';
num3.style.padding = '5px 10px';
num3.style.border = 1 + 'px solid grey';
num3.setAttribute('id','Digit3');
num3.setAttribute('data-click','');
line2.append(num3);

const num4 = document.createElement('div');
num4.textContent = '4';
num4.style.padding = '5px 10px';
num4.style.border = 1 + 'px solid grey';
line2.append(num4);

new EventsMouseKey(num4, '4');

const num5 = document.createElement('div');
num5.textContent = '5';
num5.style.padding = '5px 10px';
num5.style.border = 1 + 'px solid grey';
line2.append(num5);

new EventsMouseKey(num5, '5');

const num6 = document.createElement('div');
num6.textContent = '6';
num6.style.padding = '5px 10px';
num6.style.border = 1 + 'px solid grey';
line2.append(num6);

new EventsMouseKey(num6, '6');

const num7 = document.createElement('div');
num7.textContent = '7';
num7.style.padding = '5px 10px';
num7.style.border = 1 + 'px solid grey';
line2.append(num7);

new EventsMouseKey(num7, '7');

const num8 = document.createElement('div');
num8.textContent = '8';
num8.style.padding = '5px 10px';
num8.style.border = 1 + 'px solid grey';
line2.append(num8);

new EventsMouseKey(num8, '8');

const num9 = document.createElement('div');
num9.textContent = '9';
num9.style.padding = '5px 10px';
num9.style.border = 1 + 'px solid grey';
line2.append(num9);

new EventsMouseKey(num9, '9');

const num0 = document.createElement('div');
num0.textContent = '0';
num0.style.padding = '5px 10px';
num0.style.border = 1 + 'px solid grey';
line2.append(num0);

new EventsMouseKey(num0, '0');

const subtr = document.createElement('div');
subtr.textContent = '-';
subtr.style.padding = '5px 10px';
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
q.textContent = 'Q й';
q.style.padding = '5px';
q.style.border = 1 + 'px solid grey';
line3.append(q);

new EventsMouseKey(q, 'q');
new EventsMouseKey(q, 'й');

const w = document.createElement('div');
w.textContent = 'W ц';
w.style.padding = '5px';
w.style.border = 1 + 'px solid grey';
line3.append(w);

new EventsMouseKey(w, 'w');
new EventsMouseKey(w, 'ц');

const e = document.createElement('div');
e.textContent = 'E у';
e.style.padding = '5px';
e.style.border = 1 + 'px solid grey';
line3.append(e);

new EventsMouseKey(e, 'e');
new EventsMouseKey(e, 'у');

const r = document.createElement('div');
r.textContent = 'R к';
r.style.padding = '5px';
r.style.border = 1 + 'px solid grey';
line3.append(r);

new EventsMouseKey(r, 'r');
new EventsMouseKey(r, 'к');

const t = document.createElement('div');
t.textContent = 'T е';
t.style.padding = '5px';
t.style.border = 1 + 'px solid grey';
line3.append(t);

new EventsMouseKey(t, 't');
new EventsMouseKey(t, 'е');

const y = document.createElement('div');
y.textContent = 'Y н';
y.style.padding = '5px';
y.style.border = 1 + 'px solid grey';
line3.append(y);

new EventsMouseKey(y, 'y');
new EventsMouseKey(y, 'н');

const u = document.createElement('div');
u.textContent = 'U г';
u.style.padding = '5px';
u.style.border = 1 + 'px solid grey';
line3.append(u);

new EventsMouseKey(u, 'u');
new EventsMouseKey(u, 'г');

const i = document.createElement('div');
i.textContent = 'I ш';
i.style.padding = '5px';
i.style.border = 1 + 'px solid grey';
line3.append(i);

new EventsMouseKey(i, 'i');
new EventsMouseKey(i, 'ш');

const o = document.createElement('div');
o.textContent = 'O щ';
o.style.padding = '5px';
o.style.border = 1 + 'px solid grey';
line3.append(o);

new EventsMouseKey(o, 'o');
new EventsMouseKey(o, 'щ');

const p = document.createElement('div');
p.textContent = 'P з';
p.style.padding = '5px';
p.style.border = 1 + 'px solid grey';
line3.append(p);

new EventsMouseKey(p, 'p');
new EventsMouseKey(p, 'з');

const ltr12 = document.createElement('div');
ltr12.textContent = '[{ х';
ltr12.style.padding = '5px';
ltr12.style.border = 1 + 'px solid grey';
line3.append(ltr12);

new EventsMouseKey(ltr12, '[');
new EventsMouseKey(ltr12, 'х');

const ltr13 = document.createElement('div');
ltr13.textContent = ']} ъ';
ltr13.style.padding = '5px';
ltr13.style.border = 1 + 'px solid grey';
line3.append(ltr13);

new EventsMouseKey(ltr13, ']');
new EventsMouseKey(ltr13, 'ъ');

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
a.textContent = 'A ф';
a.style.padding = '5px';
a.style.border = 1 + 'px solid grey';
line4.append(a);

new EventsMouseKey(a, 'a');
new EventsMouseKey(a, 'ф');

const s = document.createElement('div');
s.textContent = 'S ы';
s.style.padding = '5px';
s.style.border = 1 + 'px solid grey';
line4.append(s);

new EventsMouseKey(s, 's');
new EventsMouseKey(s, 'ы');

const d = document.createElement('div');
d.textContent = 'D в';
d.style.padding = '5px';
d.style.border = 1 + 'px solid grey';
line4.append(d);

new EventsMouseKey(d, 'd');
new EventsMouseKey(d, 'в');

const f = document.createElement('div');
f.textContent = 'F а';
f.style.padding = '5px';
f.style.border = 1 + 'px solid grey';
line4.append(f);

new EventsMouseKey(f, 'f');
new EventsMouseKey(f, 'а');

const g = document.createElement('div');
g.textContent = 'G п';
g.style.padding = '5px';
g.style.border = 1 + 'px solid grey';
line4.append(g);

new EventsMouseKey(g, 'g');
new EventsMouseKey(g, 'п');

const h = document.createElement('div');
h.textContent = 'H р';
h.style.padding = '5px';
h.style.border = 1 + 'px solid grey';
line4.append(h);

new EventsMouseKey(h, 'h');
new EventsMouseKey(h, 'р');

const j = document.createElement('div');
j.textContent = 'J о';
j.style.padding = '5px';
j.style.border = 1 + 'px solid grey';
line4.append(j);

new EventsMouseKey(j, 'j');
new EventsMouseKey(j, 'о');

const k = document.createElement('div');
k.textContent = 'K л';
k.style.padding = '5px';
k.style.border = 1 + 'px solid grey';
line4.append(k);

new EventsMouseKey(k, 'k');
new EventsMouseKey(k, 'л');

const l = document.createElement('div');
l.textContent = 'L д';
l.style.padding = '5px';
l.style.border = 1 + 'px solid grey';
line4.append(l);

new EventsMouseKey(l, 'l');
new EventsMouseKey(l, 'д');

const line4ltr11 = document.createElement('div');
line4ltr11.textContent = ': ; ж';
line4ltr11.style.padding = '5px';
line4ltr11.style.border = 1 + 'px solid grey';
line4.append(line4ltr11);

new EventsMouseKey(line4ltr11, ';');
new EventsMouseKey(line4ltr11, 'ж');

const line4ltr12 = document.createElement('div');
line4ltr12.textContent = '" э';
line4ltr12.style.padding = '5px';
line4ltr12.style.border = 1 + 'px solid grey';
line4.append(line4ltr12);

new EventsMouseKey(line4ltr12, "'");
new EventsMouseKey(line4ltr12, "э");

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
