const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(item => {
    const select = item.querySelector('.select');
    const caret = item.querySelector('.caret');
    const menu = item.querySelector('.menu');
    const options = item.querySelectorAll('.menu li');
    const selected = item.querySelector('.selected');

    select.addEventListener('click', () => {
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            option.classList.toggle('checked');
            const checkedOptions = Array.from(options).filter(item => item.classList.contains('checked'));
            if (checkedOptions.length === 0) {
                selected.innerText = 'Choose skills';
            } else {
                const selectedText = checkedOptions.map(item => item.innerText).join(' , ');
                selected.innerText = selectedText;
            } 
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');
        });
    });
});
