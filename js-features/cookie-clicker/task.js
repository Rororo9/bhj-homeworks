const image = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');

const initialWidth = image.width; // сохраняем стандартную ширину изображения в переменную  initialWidth

function clickAct() {
    counter.textContent ++;
    if (counter.textContent % 2 !== 0) {
        image.width = 230;
    } else {
        image.width = initialWidth;
    }
}
image.onclick = clickAct;