var APIKEY = "9ffb28cd0b9367b1a5861d1469bb2067";
var terms, data, pg, orientation = "list", sm, total_pages;

//create JSON url request
function generateURL(terms, pg, sm) {
    switch (sm) {
        case "movies":
            return "https://api.themoviedb.org/3/search/movie?api_key="+ APIKEY +"&query=" + terms + "&page=" + pg + "&include_adult=false"; break;
        case "tv":
            return "https://api.themoviedb.org/3/search/tv?api_key="+ APIKEY +"&query=" + terms + "&page=" + pg + "&include_adult=false"; break;
        case "people":
            return "https://api.themoviedb.org/3/search/person?api_key="+ APIKEY +"&query=" + terms + "&page=" + pg + "&include_adult=false"; break;
        case "company":
            return "https://api.themoviedb.org/3/search/company?api_key="+ APIKEY +"&query=" + terms + "&page=" + pg; break;
        case "collection":
            return "https://api.themoviedb.org/3/search/collection?api_key="+ APIKEY +"&query=" + terms + "&page=" + pg;
    }
}

//list view
function showList(){
    let c = $("#searchResults");
    c.removeClass("row-cols-3 row-cols-md-4 row-cols-lg-5");
    c.addClass("row-cols-1");
    $(".gridButton").removeClass("active");
    $(".listButton").addClass("active");
    $(".displayList").removeClass("d-none");
    $(".displayGrid").addClass("d-none");
    orientation = "list";
}

//grid view
function showGrid(){
    let c = $("#searchResults");
    c.removeClass("row-cols-1");
    c.addClass("row-cols-3 row-cols-md-4 row-cols-lg-5");
    $(".gridButton").addClass("active");
    $(".listButton").removeClass("active");
    $(".displayList").addClass("d-none");
    $(".displayGrid").removeClass("d-none");
    orientation = "grid";
}

//populate results
function getResults(data, sm) {
    if(sm == "movies"){
        getMovies(data);
    } else if (sm == "tv") {
        getTV(data);
    } else if (sm == "people") {
        getPeople(data);
    } else if (sm == "company") {
        getCompany(data);
    } else {
        getCollection(data);
    }
}

//load more results
function loadMore(){
    pg++;
    getResults(generateURL(terms, pg, sm),sm);
}

$(document).ready(function(){
    
    getDiscover();
    
    //form events
    $("#searchterms").submit(function(e){
        e.preventDefault();
        terms = $("#searchterms input[type='search']").val().replace(/\s/g,"+");
        $("#searchResults").html("");
        sm = $("#searchOptions input[name='searchMethods']:checked").val();
        pg = 1;
        data = generateURL(terms, pg, sm);
        getResults(data, sm);
        $("#resultsTab").tab("show");
    });
    
});

/********************************/

function getMovies(data){
    $.getJSON(data, function(x){
        let template = $("#moviesTemplate").html();
        let text = Mustache.render(template, x);
        $("#searchResults").append(text);
        if (orientation == "grid") {
            showGrid();
        } else {
            showList();
        }
        
        //display the load more button
        if(pg < x.total_pages){
            $(".load-more-button").removeClass("d-none");
        } else {
            $(".load-more-button").addClass("d-none");
        }
    });
}

function getTV(data){
    $.getJSON(data, function(x){
        let template = $("#tvTemplate").html();
        let text = Mustache.render(template, x);
        $("#searchResults").append(text);
        if (orientation == "grid") {
            showGrid();
        } else {
            showList();
        }
        
        //display the load more button
        if(pg < x.total_pages){
            $(".load-more-button").removeClass("d-none");
        } else {
            $(".load-more-button").addClass("d-none");
        }
    });
}

function getPeople(data){
    $.getJSON(data, function(x){
        let template = $("#peopleTemplate").html();
        let text = Mustache.render(template, x);
        $("#searchResults").append(text);
        if (orientation == "grid") {
            showGrid();
        } else {
            showList();
        }
        
        //display the load more button
        if(pg < x.total_pages){
            $(".load-more-button").removeClass("d-none");
        } else {
            $(".load-more-button").addClass("d-none");
        }
    });
}

function getCompany(data){
    $.getJSON(data, function(x){
        let template = $("#companyTemplate").html();
        let text = Mustache.render(template, x);
        $("#searchResults").append(text);
        if (orientation == "grid") {
            showGrid();
        } else {
            showList();
        }
        
        //display the load more button
        if(pg < x.total_pages){
            $(".load-more-button").removeClass("d-none");
        } else {
            $(".load-more-button").addClass("d-none");
        }
    });
}

function getCollection(data){
    $.getJSON(data, function(x){
        let template = $("#collectionTemplate").html();
        let text = Mustache.render(template, x);
        $("#searchResults").append(text);
        if (orientation == "grid") {
            showGrid();
        } else {
            showList();
        }
        
        //display the load more button
        if(pg < x.total_pages){
            $(".load-more-button").removeClass("d-none");
        } else {
            $(".load-more-button").addClass("d-none");
        }
    });
}