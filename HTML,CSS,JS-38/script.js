let search = document.getElementById("serch-svg");
let input = document.getElementById("cityName");
let printData = document.querySelector(".data");


async function weatherReport() {

    let inputValue = input.value;
    console.log("Fetching data, please wait...");

    let response = fetch(`https://goweather.herokuapp.com/weather/${inputValue}`);

    try {
        let a = await response;
        let b = await (a.text());
        printData.innerHTML = b;
    }
    catch (error) {
        console.log(error)
    }
    finally {
        console.log("Done!")
    }

};

search.addEventListener("click", weatherReport);

