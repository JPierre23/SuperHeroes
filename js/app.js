console.log("Js is running");
const APIKEY = 5124188170937473;
let hero="naruto";
$.ajax({
    url: `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/5124188170937473/search/naruto`,
}).then(data =>{ 
    console.log(data);

}).catch(error => console.log(error));
//https://superheroapi.com/api/5124188170937473/search/naruto j