import buttons from "/ModuleButtons.js";
import { initEventsListener } from "/ModuleinitEventsListener.js";
import { line1, line2, line3, line4, line5 } from "/ModuleCreateLines";

const buttonsArray = buttons;

initEventsListener();

const wrapper = document.createElement("div");
wrapper.style.border = 1 + "px solid grey";
wrapper.style.width = "513px";
wrapper.style.margin = "0 auto";
document.body.append(wrapper);

buttonsArray.forEach((e) => {
  const symb = document.createElement("div");
  symb.textContent = e.textContent;
  symb.style.padding = e.padding;
  symb.style.border = e.border;
  symb.setAttribute("data-click", "");
  symb.setAttribute("id", e.code);
  if (buttonsArray.indexOf(e) < 14) {
    line1.append(symb)
  } else if (buttonsArray.indexOf(e) >= 14 &&
    (buttonsArray.indexOf(e) < 28) ){
      line2.append(symb)
    }else if(buttonsArray.indexOf(e) >= 28 &&
    buttonsArray.indexOf(e) < 41){
    line3.append(symb)
    }else if(buttonsArray.indexOf(e) >= 41 &&
    buttonsArray.indexOf(e) < 53){
    line4.append(symb)}
    else if(buttonsArray.indexOf(e) >= 53 &&
    buttonsArray.indexOf(e) < 60){
    line5.append(symb)}}
 );

const txt = document.createElement("textarea");
txt.setAttribute("placeholder", "Введите текст");
txt.setAttribute("cols", "71");
txt.setAttribute("rows", "5");
txt.style.margin = "20px 0 0 125px";
document.body.append(txt);
