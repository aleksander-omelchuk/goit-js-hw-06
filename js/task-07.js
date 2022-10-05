
const elem = {
    input: document.querySelector('input#font-size-control'),
    span: document.querySelector('span#text'),
  };
  
  elem.input.addEventListener('input', onInputValueChange);
  
  function onInputValueChange(event) {
    elem.span.style.fontSize = `${event.currentTarget.value}px`;
  }