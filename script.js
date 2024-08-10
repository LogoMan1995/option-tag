const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(item => {
    const select = item.querySelector('.select');
    const caret = item.querySelector('.caret');
    const menu = item.querySelector('.menu');
    const selected = item.querySelector('.selected');

    select.addEventListener('click', () => {
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    menu.querySelectorAll('li').forEach(option => {
        option.addEventListener('click', event => {
            event.stopPropagation();

            const clickedItem = event.currentTarget;

            if (clickedItem.querySelector('ul')) {

                const nextMenu = clickedItem.querySelector('ul');
                nextMenu.classList.toggle('open2');
            } else {

                clickedItem.classList.toggle('checked');

                const checkedOptions = Array.from(menu.querySelectorAll('li')).filter(item => item.classList.contains('checked'));
                if (checkedOptions.length === 0) {
                    selected.innerText = 'CHOOSE SKILLS';
                } else {
                    const selectedText = checkedOptions.map(item => item.innerText).join(' , ');
                    selected.innerText = selectedText;
                }
            }
        });
    });
});
