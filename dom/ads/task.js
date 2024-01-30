const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));

const timer = setInterval(() => {
    const currentIndex = rotatorCase.findIndex(value => value.classList.contains('rotator__case_active'));
    rotatorCase[currentIndex].classList.remove('rotator__case_active');
    const nextIndex = (currentIndex + 1) % rotatorCase.length;
    rotatorCase[nextIndex].classList.add('rotator__case_active');
}, 1000);