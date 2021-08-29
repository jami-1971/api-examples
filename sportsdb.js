document.getElementById('spinner').style.display = "hide";
const searchTeam = () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTeam(data));

}

const displayTeam = data => {
    const bigDiv = document.getElementById('weather-status');

    // console.log(data);
    const teams = data.teams[0];
    console.log(teams);
    const div = document.createElement('div');
    div.innerHTML = `
            <img src="${teams.strTeamLogo}" alt="">
            <img class="w-50" src="${teams.strStadiumThumb}" alt="">




            `;
    bigDiv.appendChild(div);
    // bigDiv.textContent = '';


}
bigDiv.innerHTML = '';
