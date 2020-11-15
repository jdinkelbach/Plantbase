/*global $*/
/*global fetch*/

var token =  `B7fsZ2B9TQi8nW3_4GY2ih2XWGB4bqIk9FXY6P_IF28`;
var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
var nav = $("#nav");
var results = [];

$("#submit").on("click", function(){
    search();
    updateResults();
});

$("#search").on("keyup", function(e) {
    if (e.keyCode === 13) {
        search();
        updateResults();
    }
});

// Handles Trefle API requests/responses
async function search(){
    let search = $("#search").val();
    const response = await fetch(proxyUrl + `https://trefle.io/api/v1/species/search?q=${search}&token=${token}`);
    let json = await response.json();
    results = json.data;
}

// Updates search results
function updateResults(){
    resetCards();
    nullImages();
    loadCards();
}

// Loads cards with plant pictures and information
function loadCards(){
    console.log(results);
    for (var i = 0; i < results.length; i++){
        $("#results").append(   '<div class="card my-3" style="width: 16rem;">' +
                                '<img class="card-img-top" src="' + results[i].image_url 
                                + '" alt=""> <div class="card-body"> <h5 class="card-title">' + getName(i) + '</h5><p class="card-text text-left">Family: ' 
                                + results[i].family + '<br>Scientific name: ' + results[i].scientific_name 
                                + '</p></div></div>');
    }
}

// Removes all cards from page
function resetCards(){
    $("#results").html("");
}

// Deletes cards with null images
function nullImages(){
    for (var i = 0; i < results.length; i++){
        if(results[i].image_url == null){
            console.log(results[i]);
            results.splice(i, 1);
        }
    }
}

// Returns common name if not null
function getName(i){
    if (results[i].common_name != null){
        return results[i].common_name;
    }
    else{
        return "";
    }
}

// When user scrolls execute navShadow()
window.onscroll = function() {navShadow()};

// When user scrolls toggle navbar shadow
function navShadow() {
    // Scroll down
    if (window.pageYOffset > 0){
        nav.addClass("nav-shadow");
    }
    // At top of page
    else{
        nav.removeClass("nav-shadow");
    }
}