const timer = document.getElementById("timer");
timer.textContent = 40;

const pop_up = function() {
        if (!isNaN(timer.textContent)) {
            timer.textContent--;
            if (timer.textContent == 0) {
                clearTimeout(timerId);
                alert('Вы победили в конкурсе!');
            } else {
                let timerId = setTimeout(pop_up, 1000);
            }
        }
}
const timerId = setTimeout(pop_up, 1000);