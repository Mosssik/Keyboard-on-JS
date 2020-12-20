const wrapper = document.createElement('div');
wrapper.style.border = 1 + 'px solid grey';
document.body.append(wrapper);

const line = document.createElement('div');
line.style.display = 'flex';
wrapper.append(line);

const esc = document.createElement('div');
esc.textContent = 'ESC';
esc.style.padding = '2px';
esc.style.border = '1px solid grey';
esc.style.margin = '0 5px 0 0';
line.append(esc);

document.addEventListener('keydown',(event)=>{
 if (event.key == 'Escape') {
    esc.style.color='red';
  }
});
document.addEventListener('keyup',(event)=>{
 if (event.key == 'Escape') {
    esc.style.color='';
  }
});

const f1 = document.createElement('div');
f1.textContent = 'F1'
f1.style.padding = '2px'
f1.style.border = 1 + 'px solid grey'
line.append(f1);

const f2 = document.createElement('div');
f2.textContent = 'F2'
f2.style.padding = '2px'
f2.style.border = 1 + 'px solid grey'
line.append(f2);

const f3 = document.createElement('div');
f3.textContent = 'F3'
f3.style.padding = '2px'
f3.style.border = 1 + 'px solid grey'
line.append(f3);

const f4 = document.createElement('div');
f4.textContent = 'F4'
f4.style.padding = '2px'
f4.style.border = 1 + 'px solid grey'
f4.style.margin = '0 5px 0 0'
line.append(f4);

const f5 = document.createElement('div');
f5.textContent = 'F5'
f5.style.padding = '2px'
f5.style.border = 1 + 'px solid grey'
line.append(f5);

const f6 = document.createElement('div');
f6.textContent = 'F6'
f6.style.padding = '2px'
f6.style.border = 1 + 'px solid grey'
line.append(f6);

const f7 = document.createElement('div');
f7.textContent = 'F7'
f7.style.padding = '2px'
f7.style.border = 1 + 'px solid grey'
line.append(f7);

const f8 = document.createElement('div');
f8.textContent = 'F8'
f8.style.padding = '2px'
f8.style.border = 1 + 'px solid grey'
f8.style.margin = '0 5px 0 0'
line.append(f8);

const f9 = document.createElement('div');
f9.textContent = 'F9'
f9.style.padding = '2px'
f9.style.border = 1 + 'px solid grey'
line.append(f9);

const f10 = document.createElement('div');
f10.textContent = 'F10'
f10.style.padding = '2px'
f10.style.border = 1 + 'px solid grey'
line.append(f10);

const f11 = document.createElement('div');
f11.textContent = 'F11'
f11.style.padding = '2px'
f11.style.border = 1 + 'px solid grey'
line.append(f11);

const f12 = document.createElement('div');
f12.textContent = 'F12'
f12.style.padding = '2px'
f12.style.border = 1 + 'px solid grey'
f12.style.margin = '0 5px 0 0'
line.append(f12);

const line2 = document.createElement('div');
line2.style.display = 'flex';
wrapper.append(line2);

const ltr = document.createElement('div');
ltr.textContent = 'Ё';
ltr.style.padding = '2px'
ltr.style.border = 1 + 'px solid grey'
line2.append(ltr);

const num1 = document.createElement('div');
num1.textContent = '1'
num1.style.padding = '2px'
num1.style.border = 1 + 'px solid grey'
line2.append(num1);

const num2 = document.createElement('div');
num2.textContent = '2'
num2.style.padding = '2px'
num2.style.border = 1 + 'px solid grey'
line2.append(num2);

const num3 = document.createElement('div');
num3.textContent = '3'
num3.style.padding = '2px'
num3.style.border = 1 + 'px solid grey'
line2.append(num3);

const num4 = document.createElement('div');
num4.textContent = '4'
num4.style.padding = '2px'
num4.style.border = 1 + 'px solid grey'
line2.append(num4);

const num5 = document.createElement('div');
num5.textContent = '5'
num5.style.padding = '2px'
num5.style.border = 1 + 'px solid grey'
line2.append(num5);

const num6 = document.createElement('div');
num6.textContent = '6'
num6.style.padding = '2px'
num6.style.border = 1 + 'px solid grey'
line2.append(num6);

const num7 = document.createElement('div');
num7.textContent = '7'
num7.style.padding = '2px'
num7.style.border = 1 + 'px solid grey'
line2.append(num7);

const num8 = document.createElement('div');
num8.textContent = '8'
num8.style.padding = '2px'
num8.style.border = 1 + 'px solid grey'
line2.append(num8);

const num9 = document.createElement('div');
num9.textContent = '9'
num9.style.padding = '2px'
num9.style.border = 1 + 'px solid grey'
line2.append(num9);

const num0 = document.createElement('div');
num0.textContent = '0'
num0.style.padding = '2px'
num0.style.border = 1 + 'px solid grey'
line2.append(num0);

const subtr = document.createElement('div');
subtr.textContent = '-'
subtr.style.padding = '2px'
subtr.style.border = 1 + 'px solid grey';
line2.append(subtr);

const sum = document.createElement('div');
sum.textContent = '+'
sum.style.padding = '2px'
sum.style.border = 1 + 'px solid grey'
line2.append(sum);

const backspace = document.createElement('div');
backspace.textContent = 'Backspace'
backspace.style.padding = '2px'
backspace.style.border = 1 + 'px solid grey'
line2.append(backspace);

const input = document.createElement('input');
document.body.append(input);

const line3 = document.createElement('div');
line3.style.display = 'flex';
wrapper.append(line3);

const tab = document.createElement('div');
tab.textContent = 'Tab'
tab.style.padding = '2px'
tab.style.border = 1 + 'px solid grey'
line3.append(tab);

const q = document.createElement('div');
q.textContent = 'Q'
q.style.padding = '2px'
q.style.border = 1 + 'px solid grey'
line3.append(q);

const w = document.createElement('div');
w.textContent = 'W'
w.style.padding = '2px'
w.style.border = 1 + 'px solid grey'
line3.append(w);

const e = document.createElement('div');
e.textContent = 'E'
e.style.padding = '2px'
e.style.border = 1 + 'px solid grey'
line3.append(e);

const r = document.createElement('div');
r.textContent = 'R'
r.style.padding = '2px'
r.style.border = 1 + 'px solid grey'
line3.append(r);

const t = document.createElement('div');
t.textContent = 'T'
t.style.padding = '2px'
t.style.border = 1 + 'px solid grey'
line3.append(t);

const y = document.createElement('div');
y.textContent = 'Y'
y.style.padding = '2px'
y.style.border = 1 + 'px solid grey'
line3.append(y);

const u = document.createElement('div');
u.textContent = 'U'
u.style.padding = '2px'
u.style.border = 1 + 'px solid grey'
line3.append(u);

const i = document.createElement('div');
i.textContent = 'I'
i.style.padding = '2px'
i.style.border = 1 + 'px solid grey'
line3.append(i);

const o = document.createElement('div');
o.textContent = 'O'
o.style.padding = '2px'
o.style.border = 1 + 'px solid grey'
line3.append(o);

const p = document.createElement('div');
p.textContent = 'P'
p.style.padding = '2px'
p.style.border = 1 + 'px solid grey'
line3.append(p);

const ltr12 = document.createElement('div');
ltr12.textContent = '{'
ltr12.style.padding = '2px'
ltr12.style.border = 1 + 'px solid grey'
line3.append(ltr12);

const ltr13 = document.createElement('div');
ltr13.textContent = '}'
ltr13.style.padding = '2px'
ltr13.style.border = 1 + 'px solid grey'
line3.append(ltr13);

const ltr14 = document.createElement('div');
ltr14.textContent = '|'
ltr14.style.padding = '2px'
ltr14.style.border = 1 + 'px solid grey'
line3.append(ltr14);

const line4 = document.createElement('div');
line4.style.display = 'flex';
wrapper.append(line4);

const capsLock = document.createElement('div');
capsLock.textContent = 'CapsLock'
capsLock.style.padding = '2px'
capsLock.style.border = 1 + 'px solid grey'
line4.append(capsLock);

const a = document.createElement('div');
a.textContent = 'A'
a.style.padding = '2px'
a.style.border = 1 + 'px solid grey'
line4.append(a);

const s = document.createElement('div');
s.textContent = 'S'
s.style.padding = '2px'
s.style.border = 1 + 'px solid grey'
line4.append(s);

const d = document.createElement('div');
d.textContent = 'D'
d.style.padding = '2px'
d.style.border = 1 + 'px solid grey'
line4.append(d);

const f = document.createElement('div');
f.textContent = 'F'
f.style.padding = '2px'
f.style.border = 1 + 'px solid grey'
line4.append(f);

const g = document.createElement('div');
g.textContent = 'G'
g.style.padding = '2px'
g.style.border = 1 + 'px solid grey'
line4.append(g);

const h = document.createElement('div');
h.textContent = 'H'
h.style.padding = '2px'
h.style.border = 1 + 'px solid grey'
line4.append(h);

const j = document.createElement('div');
j.textContent = 'J'
j.style.padding = '2px'
j.style.border = 1 + 'px solid grey'
line4.append(j);

const k = document.createElement('div');
k.textContent = 'K'
k.style.padding = '2px'
k.style.border = 1 + 'px solid grey'
line4.append(k);

const l = document.createElement('div');
l.textContent = 'L'
l.style.padding = '2px'
l.style.border = 1 + 'px solid grey'
line4.append(l);

const line4ltr11 = document.createElement('div');
line4ltr11.textContent = ': ;'
line4ltr11.style.padding = '2px'
line4ltr11.style.border = 1 + 'px solid grey'
line4.append(line4ltr11);

const line4ltr12 = document.createElement('div');
line4ltr12.textContent = '"'
line4ltr12.style.padding = '2px'
line4ltr12.style.border = 1 + 'px solid grey'
line4.append(line4ltr12);

const enter = document.createElement('div');
enter.textContent = 'Enter'
enter.style.padding = '2px'
enter.style.border = 1 + 'px solid grey'
line4.append(enter);

const line5 = document.createElement('div');
line5.style.display = 'flex';
wrapper.append(line5);

const lShift = document.createElement('div');
lShift.textContent = 'LShift'
lShift.style.padding = '2px'
lShift.style.border = 1 + 'px solid grey'
line5.append(lShift);

const z = document.createElement('div');
z.textContent = 'Z'
z.style.padding = '2px'
z.style.border = 1 + 'px solid grey'
line5.append(z);

const x = document.createElement('div');
x.textContent = 'X'
x.style.padding = '2px'
x.style.border = 1 + 'px solid grey'
line5.append(x);

const c = document.createElement('div');
c.textContent = 'C'
c.style.padding = '2px'
c.style.border = 1 + 'px solid grey'
line5.append(c);

const v = document.createElement('div');
v.textContent = 'V'
v.style.padding = '2px'
v.style.border = 1 + 'px solid grey'
line5.append(v);

const b = document.createElement('div');
b.textContent = 'B'
b.style.padding = '2px'
b.style.border = 1 + 'px solid grey'
line5.append(b);

const n = document.createElement('div');
n.textContent = 'N'
n.style.padding = '2px'
n.style.border = 1 + 'px solid grey'
line5.append(n);

const m = document.createElement('div');
m.textContent = 'M'
m.style.padding = '2px'
m.style.border = 1 + 'px solid grey'
line5.append(m);

const line5ltr9 = document.createElement('div');
line5ltr9.textContent = '<'
line5ltr9.style.padding = '2px'
line5ltr9.style.border = 1 + 'px solid grey'
line5.append(line5ltr9);

const line5ltr10 = document.createElement('div');
line5ltr10.textContent = '>'
line5ltr10.style.padding = '2px'
line5ltr10.style.border = 1 + 'px solid grey'
line5.append(line5ltr10);

const line5ltr11 = document.createElement('div');
line5ltr11.textContent = '?'
line5ltr11.style.padding = '2px'
line5ltr11.style.border = 1 + 'px solid grey'
line5.append(line5ltr11);

const rShift = document.createElement('div');
rShift.textContent = 'RShift'
rShift.style.padding = '2px'
rShift.style.border = 1 + 'px solid grey'
line5.append(rShift);

