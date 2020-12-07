function getDetails(id, sm) {
    $("#detailsTab").removeClass("d-none");
    $('#detailsTab').tab('show');
    if(sm == "movies"){
        
        //populate details template
        let detailsURL = "https://api.themoviedb.org/3/movie/"+id+"?api_key="+APIKEY;
        $.getJSON(detailsURL, function(x){
            let template = $("#moviesDetails").html();
            let text = Mustache.render(template, x);
            $("#details").html(text);
        });
        
        //populate similar template
        let mvp = 1;
        let similarURL = "https://api.themoviedb.org/3/movie/"+id+"/similar?api_key="+APIKEY+"&page="+mvp;
        $.getJSON(similarURL, function(x){
            let template = $("#similarMovies").html();
            let text = Mustache.render(template, x);
            $("#similarResults").html(text);
        });
        
        //populate credits
        let creditsURL = "https://api.themoviedb.org/3/movie/"+id+"/credits?api_key="+APIKEY;
        $.getJSON(creditsURL, function(x){
            let template = $("#creditsTemplate").html();
            let text = Mustache.render(template, x);
            $("#credits").html(text);
        });
        
             
    } else if (sm == "tv") {
        
        //populate details template
        let detailsURL = "https://api.themoviedb.org/3/tv/"+id+"?api_key="+APIKEY;
        $.getJSON(detailsURL, function(x){
            let template = $("#tvDetails").html();
            let text = Mustache.render(template, x);
            $("#details").html(text);
        });
        
        
        //populate similar template
        let mvp = 1;
        let similarURL = "https://api.themoviedb.org/3/tv/"+id+"/similar?api_key="+APIKEY+"&page="+mvp;
        $.getJSON(similarURL, function(x){
            let template = $("#similarTV").html();
            let text = Mustache.render(template, x);
            $("#similarResults").html(text);
        });
        
        //populate credits
        let creditsURL = "https://api.themoviedb.org/3/tv/"+id+"/credits?api_key="+APIKEY;
        $.getJSON(creditsURL, function(x){
            let template = $("#creditsTemplate").html();
            let text = Mustache.render(template, x);
            $("#credits").html(text);
        });
        
        
    } else if (sm == "people") {
        
        //populate details template
        let detailsURL = "https://api.themoviedb.org/3/person/"+id+"?api_key="+APIKEY;
        $.getJSON(detailsURL, function(x){
            let template = $("#peopleDetails").html();
            let text = Mustache.render(template, x);
            $("#details").html(text);
        });
        
        
    } else if (sm == "company") {
        
        //populate details template
        let detailsURL = "https://api.themoviedb.org/3/company/"+id+"?api_key="+APIKEY;
        $.getJSON(detailsURL, function(x){
            let template = $("#companyDetails").html();
            let text = Mustache.render(template, x);
            $("#details").html(text);
        });
        
        
    } else {
        
        //populate details template
        let detailsURL = "https://api.themoviedb.org/3/collection/"+id+"?api_key="+APIKEY;
        $.getJSON(detailsURL, function(x){
            let template = $("#collectionDetails").html();
            let text = Mustache.render(template, x);
            $("#details").html(text);
        });
        
        
    }
    
    
}