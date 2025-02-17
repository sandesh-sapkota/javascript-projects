let subtractButton= document.querySelector('.subtract')
let addButton= document.querySelector('.add')
let field= document.querySelector('#field')
let counterNumber= document.querySelector('.number')
let resetButton= document.querySelector('.reset')

counterNumber.textContent=0

subtractButton.addEventListener('click',()=>{
    let value= parseInt(field.value);
    counterNumber.textContent=parseInt(counterNumber.textContent)-value;

})

addButton.addEventListener('click',()=>{
    let value= parseInt(field.value);
    counterNumber.textContent=parseInt(counterNumber.textContent)+value;
})

resetButton.addEventListener('click',()=>{
    counterNumber.textContent=0
})