/* Require node-fetch and declare baseURL and key */
const fetch = require("node-fetch");
const baseURL = 'https://api.themoviedb.org/4/';
const key = 'YOUR KEY here'; // TODO: put key in js/key.js

/* Get a random movie or TV show with Movie Discover and TV Discover */
let randomMovie = function() {
    // Evenly choose either TV show or movie, 0 is TV show, 1 is Movie
    let bool = Math.random() < .5;
    // Choose random page from 500
    page = Math.floor(Math.random() * 500) + 1;
    // Choose random item from page
    result = Math.floor(Math.random() * 20);
    // Get url from either movie or TV show
    let url;
    let medium;
    if (bool) { // Movie
        url = ''.concat(baseURL, 'discover/movie?api_key=', key,
            '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=',
            page, '&vote_average.gte=0.0');
        medium = '/movie/'
    } else { // TV show
        url = ''.concat(baseURL, 'discover/tv?api_key=', key,
            '&language=en-US&sort_by=popularity.desc&page=', page,
            '&vote_average.gte=0.0&include_null_first_air_dates=false');
        medium = '/tv/';
    }
    // Get as JSON, select randomly from 20 results, set movie poster and link to webpage
    let img;
    let info;
    fetch(url)
        .then(response => { return response.json(); })
        .then(json => {
            img = ''.concat('https://image.tmdb.org/t/p/w185', json.results[result].poster_path);
            console.log(img);
            info = ''.concat('https://www.themoviedb.org', medium, json.results[result].id);
            console.log(info);
            console.log("***");
            return [img, info];
        })
}

rm = randomMovie();
console.log(rm);
// disp = document.querySelectorAll('#rounded');
// console.log(disp);

let search = function(query) {
    let url = ''.concat(baseURL, 'search/movie?api_key=', key, '&query=', query);
    fetch(url)
        .then()
}

// /* Launch when content is loaded */
// document.addEventListener('DOMContentLoaded', getConfig);                                                                                                                                                                                             