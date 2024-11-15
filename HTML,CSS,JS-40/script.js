let data1 = (document.getElementsByClassName('data')[0]);
let data2 = (document.getElementsByClassName('data')[1]);
let data3 = (document.getElementsByClassName('data')[2]);

let cut = document.querySelector('.cut');
let searchButton = document.querySelector('#search-button');
let inputSearch = document.querySelector('#input-search');
let cityName = document.querySelector('.cityName');


async function getData() {
    cityName.innerHTML = inputSearch.value
    cut.style.display = "block"
    let inputValue = inputSearch.value;
    console.log("fetching data, please wait...");
    let p = fetch(`https://goweather.herokuapp.com/weather/${inputValue}`);

    try {

        let response = await p;
        let response2 = await response.json();
        data1.innerHTML = `<span>${response2.temperature}</span>`;
        data1.innerHTML = data1.innerHTML + "<span>🌡️</span>";

        data2.innerHTML = `<span>${response2.description}</span>`;
        data2.innerHTML = data2.innerHTML + "<span>⛅</span>";

        data3.innerHTML = `<span>${response2.wind}</span>`;
        data3.innerHTML = data3.innerHTML + "<span>💨</span>";

    }

    catch (error) {
        console.log(error)
    }

    finally {
        console.log("Done!")
    }
}

searchButton.addEventListener("click", getData);


cut.addEventListener("click", function () {
    inputSearch.value = ""
    cut.style.display = "none"
    cityName.innerHTML = "'Enter city name'";
    data1.innerHTML = "";
    data2.innerHTML = "";
    data3.innerHTML = "";
})

