'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.eu/rest/v2/name/portugal");
request.send();
request.addEventListener('load', function(){

    const [data] = JSON.parse(this.responseText);
    console.log(data);
})