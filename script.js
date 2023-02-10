let elem = document.querySelector('#elem');

let elemen = document.querySelector('#ele');
let element = document.querySelector('#element');
let spn = document.querySelector('#spn');
console.log(elem.firstElementChild)


elem.firstElementChild.style.color = 'red'

elem.lastElementChild.style.color = 'green'

elem.nextElementSibling.append('!', elemen)

for (i = 0; i < elem.children.length; i++) {
    elem.append('!')
}

elemen.parentNode.style.border = '2px solid red'

element.closest('div')
spn.closest('.www')

