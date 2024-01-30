const reveal = document.querySelectorAll('.reveal');

const revealHandler = () => {
    reveal.forEach((item) => {
        if (window.innerHeight > item.getBoundingClientRect().top) {
            item.classList.add('reveal_active');
        }
    });
};
window.addEventListener('scroll', revealHandler);