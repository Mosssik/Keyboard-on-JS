function createLine(nameLine) {
  nameLine = document.createElement("div");
  nameLine.style.display = "flex";
  nameLine.style.margin = "0 0 3px 0";
  wrapper.append(nameLine);
  return nameLine
}

const line1 = createLine('line1'),
  		line2 = createLine('line2'),
  		line3 = createLine('line3'),
  		line4 = createLine('line4'),
  		line5 = createLine('line5');

export { line1 , line2 , line3 , line4 , line5 };
