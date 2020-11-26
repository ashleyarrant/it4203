$(document).ready(function(){
    var id = new URL(window.location.href).searchParams.get("id");
    var data = "https://www.googleapis.com/books/v1/volumes/" + id;

    $.getJSON(data,function(x){
        //generate header
        $("section").html('<header class="jumbotron mb-0"><div class="row"><div class="col-sm"><h1 class="display-3">'+x.volumeInfo.title+'</h1></div><div class="col-sm text-md-right text-center"> <img src="'+x.volumeInfo.imageLinks.thumbnail+'" class="mw-100" style="max-height:180px;"/></div></div> </header>');
        
        //add subtitle if exists
        if(x.volumeInfo.subtitle != undefined) {
            $("h1.display-3").after("<h2>"+x.volumeInfo.subtitle+"</h2>");
        }
        
        //format authors
        var authors = "";
        for(var i = 0; i < x.volumeInfo.authors.length; i++) {
            // for the first
            if (i == 0) {
                authors += x.volumeInfo.authors[i];
            } else
            //for the last if 3+
            if ( i == x.volumeInfo.authors.length - 1 && x.volumeInfo.authors.length > 2) {
                authors += ", and " + x.volumeInfo.authors[i];
            } else 
            //for the last if 2
            if ( i == x.volumeInfo.authors.length - 1 && x.volumeInfo.authors.length <= 2) {
                authors += " and " + x.volumeInfo.authors[i];
            }
            //for the rest
            else {
                authors += ", " + x.volumeInfo.authors[i];
            }
        }
        $("header .col-sm:first").append('<p class="lead">By '+ authors +'</p>');
        
        //content row
        $("section").append('<div class="row" id="content"></div>');
        
        //first box
        if (x.volumeInfo.categories != undefined || x.volumeInfo.maturityRating != undefined || x.saleInfo.saleability != undefined) {
            $("#content").append('<div class="my-3 col-md-3"><div class="border p-3"><ul class="list-unstyled mb-0"></ul></div></div>');
            
            //maturity
            if(x.volumeInfo.maturityRating != undefined){
                if(x.volumeInfo.maturityRating == "NOT_MATURE"){
                    $("#content ul:first").append('<li><span class="text-muted">Maturity:</span> Not mature</li>');
                } else {
                    $("#content ul").append('<li><span class="text-muted">Maturity:</span> Mature</li>');
                }
            }
            
            //saleability
            if(x.saleInfo.saleability != undefined) {
                if(x.saleInfo.saleability == "NOT_FOR_SALE"){
                    $("#content ul:first").append('<li><span class="text-muted">Availability:</span> Unavailable</li>');
                } else {
                    $("#content ul").append('<li><span class="text-muted">Price:</span> $'+x.saleInfo.listPrice.amount+'</li>');
                }
            }
            
            //categories
            if(x.volumeInfo.categories != undefined){
                $("#content ul:first").append('<li><span class="text-muted">Categories:</span> '+x.volumeInfo.categories+'</li>');
            }
        }
        
        //description box
        $("#content").append('<div class="my-3 col-md"><div class="border p-3"><p class="mb-0 lead">'+x.volumeInfo.description+'</p></div></div>');
        
        //last box
        if (x.volumeInfo.publishedDate != undefined || x.volumeInfo.publisher != undefined || x.volumeInfo.pageCount != undefined) {
            $("#content").append('<div class="my-3 col-md-3"><div class="border p-3"><ul class="list-unstyled mb-0"></ul></div></div>');
            
            //date
            if(x.volumeInfo.publishedDate != undefined){
                $("#content ul:last").append('<li><span class="text-muted">Published:</span> '+ new Date(x.volumeInfo.publishedDate).getFullYear()+'</li>');
            }
            
            //publisher
            if(x.volumeInfo.publisher != undefined){
                $("#content ul:last").append('<li><span class="text-muted">Publisher:</span> '+ x.volumeInfo.publisher +'</li>');
            }
            
            //pages
            if(x.volumeInfo.pageCount != undefined){
                $("#content ul:last").append('<li><span class="text-muted">Pages:</span> '+ x.volumeInfo.pageCount +'</li>');
            }
        }

    });

});
