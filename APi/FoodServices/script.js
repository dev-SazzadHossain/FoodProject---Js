const Api = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => mealDatails(data.meals));
}

const mealDatails = (singleItem) => {

    const id = document.getElementById('FoodContainer');
    id.innerText = '';

    for (singleMeal of singleItem) {
        console.log(singleMeal);
        const newId = document.createElement('div');
        newId.innerHTML = `
        <div id="foods-Item">
                <div class="images">
                    <img src="${singleMeal.strMealThumb}" alt="">
                </div>
                <div class="title">
                    <h2>${singleMeal.strMeal}</h2>
                </div>
                <div class="dsc">
                    <p>${singleMeal.strInstructions.slice(0, 200)}</p>
                </div>
                <div class="btn">
                    <button onclick="idDetails (${singleMeal.idMeal} )"id="button">Oder Now</button>
                </div>
            </div>
       `
        id.appendChild(newId);
    }
}


const searchFood = () => {
    const inputId = document.getElementById('inputField');
    const inputValue = inputId.value;
    console.log(inputValue);
    Api(inputValue);
    inputId.value = '';
}

const idDetails = (idMeal) => {
    console.log(idMeal);
}
Api('')

