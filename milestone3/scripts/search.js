var FRONT = "https://www.googleapis.com/books/v1/volumes?q=";
var BACK = "&maxResults=10&key=AIzaSyC-wlqPCqrufdjLxSiKFHIIEIBHYpc7TZc";
var terms, pg, data;

//generates JSON url
function generateURL(FRONT, BACK, terms, page) {
    return FRONT + terms + page + BACK;
}

//format authors 
function authors(x) {
    if (x !== undefined) {
        let authors = "";
        for(let i = 0; i < x.length; i++) {

            // for the first
            if (i === 0) {
                authors += x[i];
            } else
            //for the last if 3+
            if ( i == x.length - 1 && x.length > 2) {
                authors += ", and " + x[i];
            } else 
            //for the last if 2
            if ( i == x.length - 1 && x.length <= 2) {
                authors += " and " + x[i];
            }
            //for the rest
            else {
                authors += ", " + x[i];
            }        
        }
        return authors;
    } else {
        return "Anonymous";
    }
}

//pull search results
function getResults(data) {
    $.getJSON(data, function(x){
        $("#details").addClass("d-none");
        var c = $("#searchResults");
        c.html("");
        for(var i = 0; i < x.items.length; i++) {
            c.append('<div class="col my-3"><div class="media p-2 border" onclick="$(&#39;.media&#39;).removeClass(&#39;active&#39;);$(this).addClass(&#39;active&#39;);getDetails(&#39;'+x.items[i].id+'&#39;);"> <img src="' + x.items[i].volumeInfo.imageLinks.thumbnail + '" class="mr-3 align-self-center" alt="' + x.items[i].volumeInfo.title + '" style="max-height:100px"><div class="media-body align-self-center"><h5>' + x.items[i].volumeInfo.title + '</h5><p class="mb-0">&mdash; ' + authors(x.items[i].volumeInfo.authors) + '</p></div></div></div>');
        }
    });
}

//change page
function changePage(x) {
    pg = "&startIndex=" + x;
    data = generateURL(FRONT, BACK, terms, pg);
    getResults(data);
}

$(document).ready(function(){
    
    getResults("https://www.googleapis.com/books/v1/users/104216728027131876317/bookshelves/1001/volumes?key=AIzaSyC-wlqPCqrufdjLxSiKFHIIEIBHYpc7TZc");
    
    //pagination buttons
    $("#pagination button").click(function(){
        $("#pagination button").removeClass("active");
        $(this).addClass("active");
        changePage(this.value);
    });
    
    //form submit
    $("form").submit(function(e){
        e.preventDefault();
        terms = $("#searchterms").val().replace(/\s/g,"+");
        pg = "&startIndex=0";
        data = generateURL(FRONT, BACK, terms, pg);
        getResults(data);
        $("#pagination").removeClass("d-none");
    });
});
