
function fetchData(){
    const selectElement = document.getElementById('countries')

    fetch("https://restcountries.com/v2/all")
    .then((data)=> data.json())
    .then((result)=> 
    result.forEach((country)=>{
        const countryOption = document.createElement('option');
        countryOption.text = country.name;
        countryOption.value = country.name;

        selectElement.append(countryOption)
        //console.log(country);
    })
    )
}

function getCountryData(){
    const selectedCountry = document.getElementById('countries').value
    fetch(`https://restcountries.com/v2/name/${selectedCountry}?fullText=true`)
    .then((data)=>data.json())
    .then((countryData)=>{
        
        const countryName = countryData[0].name;
        const countryFlag = countryData[0].flags.png;
        const countryCapital = countryData[0].capital;
        const countryPopulation = countryData[0].population;
        const countryCurrencies = countryData[0].currencies[0].name;
        const countryRegion = countryData[0].region;

        let htmlData = `<div class="card" style="width: 18rem;">
        <img src="${countryFlag}" class="card-img-top" alt="${countryName}">
        <div class="card-body">
          <h2 class="card-title">${countryName}</h2>
          <h6 class="card-title">Capital: ${countryCapital}</h6>
          <h6 class="card-title">Population: ${countryPopulation}</h6>
          <h6 class="card-title">Currency Name: ${countryCurrencies}</h6>
          <h6 class="card-title">Region: ${countryRegion}</h6>
        </div>
      </div>`

      document.getElementById('countryDataDisplay').innerHTML = htmlData;
        //const countryCurrency = countryData.currency[0].symbol;
        //console.log(countryName);
        //console.log(countryFlag);
        // console.log(countryCapital);
        // console.log(countryCurrency);
         console.log(countryData);
    })
   console.log("Selected country" , selectedCountry);
}

window.addEventListener('load', function(){
    fetchData();
})
