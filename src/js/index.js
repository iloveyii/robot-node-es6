import leftPad from './leftpad';
import Square from './Square';

/*
const serNos = [6934, 23111, 23114, 1001, 211161, 500, 3000, 4];
const partEl = document.getElementById('part-list');
const strList = serNos.reduce(
    (acc, element) => acc += `<li>${leftPad(element, 8, '0')}</li>`, ''
);
partEl.innerHTML = strList;

*/

let s = new Square();
console.log(s.do(5));
