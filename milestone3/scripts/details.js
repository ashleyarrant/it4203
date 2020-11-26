function getDetails(id) {
    var url = "https://www.googleapis.com/books/v1/volumes/" + id;
    
    $.getJSON(url, function(x){
        $("#imageDetail").attr("src",x.volumeInfo.imageLinks.thumbnail);
        
        $("#title").text(x.volumeInfo.title);
        $("#authors").text(authors(x.volumeInfo.authors));
        
        if(x.volumeInfo.publisher !== undefined) {
            $("#publisher").text(x.volumeInfo.publisher + " • ");
        }
        
        if(x.volumeInfo.publishedDate !== undefined) {
            $("#publishDate").text(x.volumeInfo.publishedDate + " • ");
        }
        
        if(x.volumeInfo.pageCount !== undefined) {
            $("#pageNumbers").text(x.volumeInfo.pageCount + " pages");
        }
        
        $("#description").html(x.volumeInfo.description);
        
        if(x.volumeInfo.maturityRating != undefined){
            if(x.volumeInfo.maturityRating == "NOT_MATURE"){
                $("#maturity").html('<span class="text-muted">Maturity:</span> Not mature');
            } else {
                $("#maturity").html('<span class="text-muted">Maturity:</span> Mature');
            }
        }
        
        if(x.saleInfo.saleability != undefined) {
            if(x.saleInfo.saleability == "NOT_FOR_SALE"){
                $("#price").html('<span class="text-muted">Availability:</span> Unavailable</li>');
            } else {
                $("#price").html('<span class="text-muted">Price:</span> $'+x.saleInfo.listPrice.amount+'</li>');
            }
        }
        
        if(x.volumeInfo.categories != undefined) {
           $("#categories").html('<span class="text-muted">Categories:</span> '+x.volumeInfo.categories);
       }
    });
    
    $("#details").removeClass("d-none");
        
    let ht = $("section").outerHeight();
    $(document).scrollTop( ht );
}
