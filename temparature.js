const searchLocation = () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q= ${searchValue} &appid=2b2812e1c2a72f68ca17145c2c712b58`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLocation(data));

}

// searchLocation();

const displayLocation = data => {
    // const infos = data.main;
    // console.log(infos);
    const bigDiv = document.getElementById('weather-status');
    console.log(data);
    // const div = document.createElement('div');
    // div.innerHTML = `
    //     <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
    //     <h1>${data.name}</h1>
    //     <h3><span>${data.main.temp}</span>&deg;C</h3>
    //     <h1 class="lead"><h1>
    //     `;
    // bigDiv.appendChild(div);
    // // bigDiv.textContent = '';


}

