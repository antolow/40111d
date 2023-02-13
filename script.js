let element = document.querySelector('#element');
// let elementik = document.querySelectorAll('#elementik')
let element1 = document.querySelector('#element1');
let element2 = document.querySelector('#element2');
let spn = document.querySelector('#spn');
console.log(element.firstElementChild)


element.firstElementChild.style.color = 'red'

element.lastElementChild.style.color = 'green'

// for (i = 0; i < elementik.children.length; i++) {
//     elementik.append('!')
// }

let el = element1.previousElementSibling
el.append('!')

let el1 = el.nextElementSibling
el1.append('!')

let el2 = el1.nextElementSibling
el2.append('!')

let el3 = el2.nextElementSibling
el3.append('!')



element.parentNode.style.border = '2px solid red'

element.closest('div')
spn.closest('.www')

