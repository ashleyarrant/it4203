function getDetails(id) {
    var url = "https://www.googleapis.com/books/v1/volumes/" + id;
    
    $.getJSON(url, function(data) {
        var template = $("#modalTemplate").html();
        var text = Mustache.render(template, data);
        $("#templateContent").html(text);
    });
}
