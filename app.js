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
  let height = `${100 / numBoxes}%`;
  let width = `${100 / numBoxes}%`;

  for (let i = 0; i < numBoxes; i++) {
    dom.container.insertAdjacentHTML('beforeend', markupRow);
  }

  let rowArr = Array.from(document.querySelectorAll('.box-row'));

  for (let i = 0; i < numBoxes; i++) {
    rowArr.forEach((row) => {
      row.style.height = height;
      row.insertAdjacentHTML('beforeend', markupCol);
    });
  }

  let colArr = Array.from(document.querySelectorAll('.box-col'));
  colArr.forEach((col) => {
    col.style.width = width;
  });
};

window.addEventListener('load', () => {
  renderBoxes();
});

dom.form.addEventListener('submit', () => {
  numBoxes = dom.input.value;
  dom.input.value = '';

  if (numBoxes) {
    dom.container.textContent = '';
    renderBoxes();
  } else {
    dom.container.textContent = '';
    numBoxes = 16;
    renderBoxes();
  }
});

document.querySelector('.container').addEventListener('mouseover', (e) => {
  e.target.classList.add('active');
});
