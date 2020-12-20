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
    esc.style.color='green';
  }
})
document.addEventListener('keyup',(event)=>{
 if (event.key == 'Escape') {
    esc.style.color='';
  }
})
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
ltr.textContent = 'Ё'
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
document.body.append(input)