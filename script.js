
async function loadBundeslaender() {
    let bundeslaender = 'bundesland.json';
    let response = await fetch(bundeslaender);
    let responseAsJson = await response.json();
    console.log(responseAsJson);

    renderBundeslaender(responseAsJson)
}


function renderBundeslaender(responseAsJson) {

    for (let i = 0; i < responseAsJson.length; i++) {
        let laender = responseAsJson[i];

        document.getElementById('bundeslaender').innerHTML += /* html */ `
        <div class="laenderCard">
            <div>${laender['name']}</div>
            <div>${laender['population']}</div>
        </div>
        `;
        
    }
}