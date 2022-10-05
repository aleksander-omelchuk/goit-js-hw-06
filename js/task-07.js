const elem = {
    inputChange:document.querySelector ('input#font-size-control'),
    abracadabra:document.querySelector('span#text'),
}

elem.input.addEventListener('change', onInputValueChange);
function onInputValueChange(event) {
    elem.span.style.fontSize = `${event.currentTarget.value}px`;
}

// inputChange.addEventListener('change', event => {
//     abracadabra.span.style.fontSize = `${event.currentTarget.value}px`
// inputTextRef.span.style.fontSize = inputControlRef.value + 'px';

// })




// const refs = {
//     input: document.querySelector('input#font-size-control'),
//     span: document.querySelector('span#text'),
//   };
  
//   refs.input.addEventListener('input', onInputValueChange);
  
//   function onInputValueChange(event) {
//     refs.span.style.fontSize = `${event.currentTarget.value}px`;
//   }