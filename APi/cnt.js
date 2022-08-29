const countryCode = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => allCode(data));


}
const allCode = data => {

    // for (country of data) {
    //     console.log(country);
    // }
    const id = document.getElementById('conuntry-container');
    data.forEach(country => {
        console.log(country);
        const newElement = document.createElement('div');
        newElement.classList.add('country')
        newElement.innerHTML = `
        <h4>CountryName :${country.name.common}</h4>
        <h2>capital :${country.capital}</h2>
        <h3>Continents:${country.continents}</h3>
        <h4>Area :${country.area}</h4>
        <h5>Region :${country.region}</h5>
        <button onclick="loadDatails('${country.cca2}')">Details</button>
        
        `
        id.appendChild(newElement);
    })
}

const loadDatails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => resultD(data[0]));
}



const resultD = data => {
    const id3 = document.getElementById('images');
    console.log(id3)
    id3.innerHTML = `
    <img src="${data.flags.png}">
    <h2>CountryName:${data.name.common}</h2>
   
   `
}
countryCode();