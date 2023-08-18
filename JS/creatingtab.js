const addMidTab = document.querySelector('#add-mid-tab');
const middleButtons = [];

let numberOfTabs = 2;

function createMidTab () {
    const button = document.createElement('button');
    button.classList.add('middle-button', 'initial-hover');
    const divTop = document.createElement('div');
    divTop.classList.add('div-top');
    const p = document.createElement('p');
    p.innerHTML = `Middle Tab ${numberOfTabs - 1}`;
    const divBottom = document.createElement('div');
    divBottom.classList.add('div-bottom');

    button.appendChild(divTop);
    button.appendChild(p);
    button.appendChild(divBottom);

    numberOfTabs++;

    middleButtons.push(button);

    return button;
}
function setSizeOfTabs (numberOfTabs) {
    const sizeOfTabs = ` ${Math.round(85 / numberOfTabs)}% `;
    // O tamanho das tabs vai ser sempre espalhado para 85% do tamanho da vid#main
    let tabs = '';
    for (let i = 0; i < numberOfTabs; i++) {
        tabs += sizeOfTabs;
    }
    main.style.gridTemplateColumns = `1fr${tabs}1fr`;
}
function addMiddleTab () {
    if (main.childElementCount < 14) {
    main.insertBefore(createMidTab(), main.children[numberOfTabs - 1]);
    setSizeOfTabs(numberOfTabs);
    }
}

addMidTab.addEventListener('click', addMiddleTab);
