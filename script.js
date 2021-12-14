ville = document.getElementById('localisation');
pays = document.getElementById('pays');
meteo = document.getElementById('Météo');
icone_meteo = document.getElementById('icone');
temperature = document.getElementById('température-actuelle');
description = document.getElementById('Description')
carte = document.getElementById('Carte')
erreur = document.getElementById('error')

inputVille = document.getElementById('ville-choisie');
submitBtn = document.getElementById('btn');

const apikey = "bba8293e774383f024cf3c8187983953";

const url = 'https://api.openweathermap.org/data/2.5/weather?appid=' + apikey + '&q=';

function Data(){

    fetch(url + inputVille.value)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            erreur.style.visibility = 'hidden'
            ville.innerText = data.name;
            pays.innerText = data.sys.country;
            meteo.innerText = data.weather[0].main;
            description.innerText = data.weather[0].description;
            temperature.innerText = Math.round((data.main.temp) - 273.15);
            icone_meteo.src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
            carte.style.visibility = "visible";
        })
        .catch(() => {
            erreur.style.visibility = 'visible'
            carte.style.visibility = 'hidden'
        });
}



submitBtn.addEventListener('click',Data);
