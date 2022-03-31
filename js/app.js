console.log("Js is running");
const APIKEY = 5124188170937473;
let hero="naruto";
let $heroName= $(".hero-name");
let $heroBio= $("#hero-bio")
let $heroPic= $("#hero-pic");
let $searchName= $(".search-name");
let $searchBtn= $("#search-btn");
let $question= $("#hero-question");
let $height = $("#hero-height");
let $heightBtn = $("#height-btn");
let $message = $(".message")

function searchHero(hero){
    $.ajax({
        url: `https://cors-anywhere.herokuapp.com/http://superheroapi.com/api/5124188170937473/search/${hero}`,
    }).then(data =>{ 
      console.log(data.results[0]);
    let results= data.results[0];
    $heroName.text(results.name);
    let img = $("<img id=pic />")
    img.attr("src", results.image.url);
    img.attr("alt", results.name);
    $heroPic.append(img);
    let apr =results.appearance;
    let ps= results.powerstats
    let temp=`
    Gender : ${apr.gender} \n
    Race : ${apr.race} \n
    Combat : ${ps.combat} \n
    Power : ${ps.power} \n
    Speed : ${ps.speed} \n
    Strength : ${ps.strength}`;
    $heroBio.text(temp);
    console.log(temp);
    $question.text(`How old is ${results.name}?`);
    $height.text(apr.height[0]);
    $heightBtn.on("click",(event)=>{
        event.preventDefault();
        if($height.val() === apr.height[0]){
            console.log("Hello")
            $message.text(`You are correct. The height of ${results.name}
            is ${apr.height[0]}!`);
        }else{
            $message.text(`You are incorrect. Please try again.`);

        }
    });
    $searchBtn.on("click",(event) => {
        event.preventDefault();
        $("#pic").remove();
        console.log($searchName.val())
        searchHero($searchName.val());
    });
    }).catch(error => console.log(error));
    //https://superheroapi.com/api/5124188170937473/search/naruto j
        
}
let h = prompt("Please Enter the hero you would like to search for");
//console.log(h);
searchHero(h);
// $.ajax({
//     url: `https://cors-anywhere.herokuapp.com/http://superheroapi.com/api/5124188170937473/search/naruto`,
// }).then(data =>{ 

// }).catch(error => console.log(error));
// //https://superheroapi.com/api/5124188170937473/search/naruto j
