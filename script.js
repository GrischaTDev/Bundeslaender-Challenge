let bundeslaender = [];


async function init() {
    let response = await fetch('./bundesland.json');
    bundeslaender = await response.json();
    renderBundeslaender()
}


function renderBundeslaender(responseAsJson) {
    let laenderContent = document.getElementById('bundeslaender');
    laenderContent.innerHTML = '';

    for (let i = 0; i < bundeslaender.length; i++) {  // Hier wird die toLocaleString-Methode mit dem Argument 'de-DE' aufgerufen, um das deutsche Zahlenformat zu verwenden. 
        let land = bundeslaender[i];

        laenderContent.innerHTML += /* html */ `
        <a href="${land['url']}" target="_blank" class="laenderBox">
            <div class="name">${land['name']}</div>
            <div class="population">${land['population'].toLocaleString('de-DE')} Millionen</div>
        </a>
        `;
    }
}