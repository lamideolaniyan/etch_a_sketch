const dom = {
  container: document.querySelector('.container'),
  row: document.querySelector('.box-row'),
  column: document.querySelector('.box-col'),
  form: document.querySelector('.form'),
  input: document.querySelector('.form-input'),
};

const markupRow = `
        <div class="box-row">
            
        </div>    
    `;

const markupCol = `
        <div class="box-col">
            &nbsp;
        </div>
    `;

let numBoxes = 16;
const renderBoxes = () => {
  for (let i = 0; i < numBoxes; i++) {
    dom.container.insertAdjacentHTML('beforeend', markupRow);
  }

  let rowArr = Array.from(document.querySelectorAll('.box-row'));

  for (let i = 0; i < numBoxes; i++) {
    rowArr.forEach((row) => {
      row.insertAdjacentHTML('beforeend', markupCol);
    });
  }
};

window.addEventListener('load', () => {
  renderBoxes();
});

dom.form.addEventListener('submit', () => {
  numBoxes = dom.input.value;
  console.log(numBoxes);

  if (numBoxes) {
    dom.container.textContent = '';
    renderBoxes();
  } else {
    numBoxes = 16;
    renderBoxes();
  }
});
