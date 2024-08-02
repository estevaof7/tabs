const main = document.querySelector('#main');

const firstButton = document.querySelector('#first-button');
const lastButton = document.querySelector('#last-button');

const emptyLeft = document.querySelector('#empty-left');
const emptyRight = document.querySelector('#empty-right');

const leftAux = document.querySelector('#left-aux');
const rightAux = document.querySelector('#right-aux');

const content = document.querySelector('#content');

function defaultOnClick() {
    for (let i = 0; i < main.childElementCount; i++) {
        main.children[i].classList.remove('activated', 'initial-hover', 'border-bottom-right-radius-activated', 'border-bottom-left-radius-activated');
        //Para controlar essa bordinha "para fora" das tabs do lado
        if (i === 0 || i === main.childElementCount - 1) continue;
        main.children[i].classList.add('disabled');
    }
    emptyLeft.classList.add('empty-left-activated');
    emptyRight.classList.add('empty-right-activated');
    leftAux.style.display = 'block';
    rightAux.style.display = 'block';
    content.style.display = 'block';

    addMidTab.removeEventListener('click', addMiddleTab);
    addMidTab.innerHTML = 'Go back';
    addMidTab.addEventListener('click', refreshPage);
}

firstButton.addEventListener('click', function () {
    defaultOnClick();
    firstButton.classList.add('activated');
    firstButton.classList.remove('disabled');
    emptyLeft.classList.add('border-bottom-right-radius-activated');
    main.children[2].classList.add('border-bottom-left-radius-activated');
    content.children[0].innerHTML = `1`;
});

lastButton.addEventListener('click', function () {
    defaultOnClick();
    lastButton.classList.add('activated');
    lastButton.classList.remove('disabled');
    emptyRight.classList.add('border-bottom-left-radius-activated');
    main.children[main.childElementCount - 3].classList.add('border-bottom-right-radius-activated');
    content.children[0].innerHTML = `${main.childElementCount - 2}`;
});

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.parentElement && el.parentElement.classList.contains('middle-button')) {
        //Verifica primeiro se tem elemento pai (pois estava clicando no body e estava dando erro)
        //Quando eu clico nos botões o target é a div-top ou a div-botton e não o botão em si
        //Aqui estou verificando se o elemento pai do target tem a classe middle-button
        defaultOnClick();
        el.parentElement.classList.add('activated');
        el.parentElement.classList.remove('disabled');

        for (let i = 0; i < main.childElementCount; i++) {
            if (main.children[i] === el.parentElement) {
                main.children[i + 1].classList.add('border-bottom-left-radius-activated');
                main.children[i - 1].classList.add('border-bottom-right-radius-activated');
                content.children[0].innerHTML = `${i}`;
            }
        }
    }
});