var FRONT = "https://www.googleapis.com/books/v1/volumes?q=";
var BACK = "&maxResults=10&key=AIzaSyC-wlqPCqrufdjLxSiKFHIIEIBHYpc7TZc";
var terms, pg, data, temp, orientation;
var resultsIndex = 0, shelfIndex = 0;

//generates JSON url
function generateURL(FRONT, BACK, terms, page) {
    return FRONT + terms + page + BACK;
}

//list view
function showList(sel){
    let c = $("#"+sel);
    c.removeClass("row-cols-3 row-cols-md-4 row-cols-lg-5");
    c.addClass("row-cols-1");
    $(".gridButton").removeClass("active");
    $(".listButton").addClass("active");
    $(".media").removeClass("d-none");
    $(".grid").addClass("d-none");
    orientation = "list";
}

//grid view
function showGrid(sel){
    let c = $("#"+sel);
    c.removeClass("row-cols-1");
    c.addClass("row-cols-3 row-cols-md-4 row-cols-lg-5");
    $(".gridButton").addClass("active");
    $(".listButton").removeClass("active");
    $(".media").addClass("d-none");
    $(".grid").removeClass("d-none");
    orientation = "grid";
}

//get results
function getResults(data, sel) {    
    $("#"+sel).prev(".btn-group").removeClass("d-none");
    $.getJSON(data,function(data){
        var template = $("#resultsTemplate").html();
        var text = Mustache.render(template, data);
        $("#"+sel).append(text);
        if (orientation == "grid") {
            showGrid(sel);
        } else {
            showList(sel);
        }
    });
    $("#"+sel).next(".load-more-button").removeClass("d-none");
}

//load more
function loadMore(sel) {
    if(sel == "searchResults") {
        resultsIndex += 10;
        pg = "&startIndex=" + resultsIndex;
        getResults(generateURL(FRONT, BACK, terms, pg),"searchResults");
    }
}

$(document).ready(function(){
    
    $.getJSON('https://www.googleapis.com/books/v1/users/104216728027131876317/bookshelves/1001/volumes?key=AIzaSyC-wlqPCqrufdjLxSiKFHIIEIBHYpc7TZc', function(data) {
        var template = $("#resultsTemplate").html();
        var text = Mustache.render(template, data);
        $("#shelfResults").html(text);
        showList("shelfResults");
    });
    
    //form submit
    $("form").submit(function(e){
        e.preventDefault();
        $("#disclaimer").remove();
        temp = terms;
        terms = $("#searchterms").val().replace(/\s/g,"+");
        if( temp !== terms) {
            $("#searchResults").html("");
            resultsIndex = 0;
        }
        pg = "&startIndex=0";
        data = generateURL(FRONT, BACK, terms, pg);
        getResults(data, "searchResults");
        showList("searchResults");
    });
});
