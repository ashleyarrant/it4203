var FRONT = "https://www.googleapis.com/books/v1/volumes?q=";
var BACK = "&maxResults=10&key=AIzaSyC-wlqPCqrufdjLxSiKFHIIEIBHYpc7TZc";

$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        var terms = $("#searchterms").val().replace(/\s/i,"+");
        var page = "&startIndex=0";
        var dataurl = generateURL(FRONT, BACK, terms, page);
        getResults(dataurl);
        $("#pagination").removeClass("d-none");
    });
    
});

//generates JSON url
function generateURL(FRONT, BACK, terms, page) {
    return FRONT + terms + page + BACK;
}

//performs the search
function getResults(dataurl) {
    $("#searchResults").html("");
    $.getJSON(dataurl, function(x){
        var c = $("#searchResults");

        for(var i = 0; i < x.items.length; i++) {
            c.append("<div class='col my-3'><div class='card h-100'><div class='row no-gutters'><div class='col-lg'> <img src='" + x.items[i].volumeInfo.imageLinks.thumbnail + "' class='align-self-center card-img d-flex' alt='" + x.items[i].volumeInfo.title + "' /></div><div class='col-lg'><div class='card-body'><h4 class='card-title'>" + x.items[i].volumeInfo.title + "</h4><p class='lead'>By " + x.items[i].volumeInfo.authors + "</p><a href='/milestone2/details.html?id=" + x.items[i].id + "' class='btn btn-primary'>Details</a></div></div></div></div></div>");
        }
    });
}

//changes page
function changePage() {
    var terms = $("#searchterms").val().replace(/\s/i,"+");
    var pg = "&startIndex=" + $("input[name='page']:checked").val();
    var data = generateURL(FRONT, BACK, terms, pg);
    getResults(data);
}
