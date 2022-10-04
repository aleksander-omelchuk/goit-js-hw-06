function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputNum = document.querySelector('#controls>input')
const buttonCreate = document.querySelector('button[data-create]')
const buttonDestroy = document.querySelector('button[data-destroy]')
const boxes = document.querySelector('#boxes')


const createBoxes = amount => {
  const elementsToAdd = []
  for (let i=0; i < amount; i++) {
    const div = document.createElement('div')
    div.style.height = `${30+10*i}px`
    div.style.width = `${30+10*i}px`
    div.style.background = getRandomHexColor()
    elementsToAdd.push(div)
  }
  return elementsToAdd
}

const destroyBoxes = () => {
  boxes.innerHTML = ''
}

buttonCreate.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputNum.value)
  boxes.append(...boxesToAdd)
});

console.log(inputNum.value)
buttonDestroy.addEventListener('click',() => {
  destroyBoxes.call()
});