const fontSizes = document.querySelectorAll('.font-size');

fontSizes.forEach((fontSize) => {
    const size = fontSize.getAttribute('data-size');
    const book = document.getElementById('book');

    fontSize.addEventListener('click', (event) => {
        event.preventDefault();
        fontSizes.forEach((size) => {
            size.classList.remove('font-size_active');
        });
        fontSize.classList.add('font-size_active');
        book.classList.remove('book_fs-small', 'book_fs-big');

        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});