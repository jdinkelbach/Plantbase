/*global $*/
/*global fetch*/

// var token =  `B7fsZ2B9TQi8nW3_4GY2ih2XWGB4bqIk9FXY6P_IF28`;
var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
var nav = $("#nav");
var results = [];

$("#submit").on("click", async function(){
    let search = $("#search").val();
    const response = await fetch(proxyUrl + 'https://trefle.io/api/v1/species/search?q=coconut&token=B7fsZ2B9TQi8nW3_4GY2ih2XWGB4bqIk9FXY6P_IF28');
    let json = await response.json();
    results = json.data;
    resetCards();
    loadCards();
})

function loadCards(){
    for (var i = 0; i < results.length; i++){
        console.log(i + ": " + results[i].image_url);
        $("#results").append(   '<div class="card my-3" style="width: 12rem;">' +
                                '<img class="card-img-top" src="' + results[i].image_url + '" alt=""> <div class="card-body"> <h5>'
                                + results[i].common_name + '</h5></div></div>');
    }
}

function resetCards(){
    $("#results").html("");
}

// When user scrolls execute sticky()
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