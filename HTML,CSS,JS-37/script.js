// let cityName = prompt("City Name: ");
// location.href = `https://goweather.herokuapp.com/weather/${cityName}`;

// let cityName = prompt("Enter city name: ");

// let weather = fetch(`https://goweather.herokuapp.com/weather/${cityName}`);

// weather.then(function (value) {
//     console.log(value.status);
//     console.log(value.ok);
//     // return (value).text();
//     return (value).json();
// }).then(function (value) {
//     console.log(value)
// });

async function getData() {
    let cityName = prompt("Enter city name: ");
    let response = fetch(`https://goweather.herokuapp.com/weather/${cityName}`);

    try {
        console.log("Fetching Data...")
        let r = await response;
        // console.log(r.status);
        // console.log(r.ok);
        // console.log(r.text());
        console.log(r.json());
    }

    catch (error) {
        console.log(error);
    }

};

getData();