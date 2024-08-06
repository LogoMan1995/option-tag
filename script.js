const cleverSkills = [
    { skill: 'HTML' },
    { skill: 'CSS' },
    { skill: 'GIT' },
    { skill: 'JAVASCRIPT' },
    { skill: 'REACT' }
];

const select = document.createElement('select');

cleverSkills.forEach(item => {
    const option = document.createElement('option');
    option.textContent = item.skill;
    select.append(option);
});

document.querySelector('.selection').append(select);

const selectionText = document.querySelector('.selection p');

select.addEventListener('change', () => {
    select.querySelectorAll('option').forEach(item => {
        item.classList.remove('selected-option');
    });

    const selectedOption = select.querySelector('option:checked');
    if (selectedOption) {
        selectedOption.classList.add('selected-option');
        selectionText.textContent = `Выбранный инструмент: ${selectedOption.textContent}`;
    }
});


