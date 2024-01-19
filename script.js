let bundeslaender = [];
let letters = [];


async function init() {
    let response = await fetch('./bundesland.json');
    bundeslaender = await response.json();
    renderBundeslaender()
}


function renderBundeslaender(filter) {
    let laenderContent = document.getElementById('bundeslaender');
    laenderContent.innerHTML = '';

    for (let i = 0; i < bundeslaender.length; i++) {  // Hier wird die toLocaleString-Methode mit dem Argument 'de-DE' aufgerufen, um das deutsche Zahlenformat zu verwenden. 
        let land = bundeslaender[i];
        const firstLetter = land['name'].charAt(0);

        if (!filter || filter == firstLetter) {
            laenderContent.innerHTML += laenderTemplate(land);
        }
        
        if(!letters.includes(firstLetter)) {
            letters.push(firstLetter);
        }   
    }
    renderLetters();
}

function laenderTemplate(land) {
    return `
        <a href="${land['url']}" target="_blank" class="laenderBox">
            <div class="name">${land['name']}</div>
            <div class="population">${land['population'].toLocaleString('de-DE')} Millionen</div>
        </a>
        `;
}

function setFilter(letter) {
    renderBundeslaender(letter);
}

function renderLetters() {
    let letterbox = document.getElementById('search');
    letterbox.innerHTML = '';

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        letterbox.innerHTML += /* html */ `<div class="letters" onclick="setFilter(${letter})">${letter}</div>`;
    }
}

