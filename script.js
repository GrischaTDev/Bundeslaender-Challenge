
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


    let bundeslandListe = document.getElementById('bundeslaender');
}





// async function loadCourse() {
//     let url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=' + API_KEY;  // Anstatt die Variable mit dem API Kex per ${} hinzuzufügen, können wir die Variable auch mit + anhängen.
//     let response = await fetch(url); // response übersetzt ANTWORT. Hier rufen wir die Daten von der API ab.
//     let responseAsJson = await response.json(); // Dann wandeln wir die daten in ein JSON um.
//     let bitcoinPrice = (Math.round(responseAsJson['Realtime Currency Exchange Rate']['5. Exchange Rate']));
//     let lastRefresh = (responseAsJson['Realtime Currency Exchange Rate']['6. Last Refreshed']);

//     // console.log(Math.round(responseAsJson['Realtime Currency Exchange Rate']['5. Exchange Rate']));

//     document.getElementById('course').innerHTML = /* html */ `
//     <div class="btc-price">${bitcoinPrice} $</div>
//     <span>Letzes Update</span>
//     <div class="last-refresh">${lastRefresh}</div> 
//     `;
//     loadMonthlyCourse();
// }