const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    let isOpen = false;
    let timeoutId;

    select.addEventListener('click', () => {

        caret.classList.toggle('caret-rotate');
        if (!isOpen) {

            timeoutId = setTimeout(() => {
                menu.classList.add('menu-open');
                isOpen = true;
            }, 200);
        } else {

            clearTimeout(timeoutId);
            menu.classList.remove('menu-open');
            isOpen = false;
        }
    })

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
        });
    });
});



