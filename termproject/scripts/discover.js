function getDiscover() {
    //popular movies
    $.getJSON("https://api.themoviedb.org/3/discover/movie?api_key="+APIKEY+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1", function(x){
        let template = '<div id="discoverPopular'+0+'" class="carousel slide" data-ride="carousel">';
        template += '<ol class="carousel-indicators">';
        for(let i = 0; i < x.results.length; i++){
            if (i == 0) {
                template += '<li data-target="#discoverPopular'+0+'" data-slide-to="'+i+'" class="active"></li>';
            } else {
                template += '<li data-target="#discoverPopular'+0+'" data-slide-to="'+i+'"></li>';
            }
        }
        template += '</ol><div class="carousel-inner">';
        for(let i = 0; i < x.results.length; i++){
            template += '<div class="carousel-item';
            if (i == 0) {  
                template += ' active';
            }
            template += '">';
            
            if(x.results[i].backdrop_path !== null){
                template += '<img src="https://image.tmdb.org/t/p/original'+x.results[i].backdrop_path+'" class="d-block w-100" style="opacity:0.5; cursor:pointer;" ';
                template += 'onclick="getDetails(&#39;'+x.results[i].id+'&#39;,&#39;movies&#39;);">';
            } else {
                template += '<img src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" class="d-block w-100" style="opacity:0.5; cursor:pointer;" ';
                template += 'onclick="getDetails(&#39;'+x.results[i].id+'&#39;,&#39;movies&#39;);">';
            }
            template += '<div class="carousel-caption d-none d-md-block"><h3 class="text-light bg-dark">'+ (i+1) +". "+x.results[i].title+'</h3></div>';
            
            template += '</div>';
        }
        template += '</div><a class="carousel-control-prev" href="#discoverPopular'+0+'" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span>    <span class="sr-only">Previous</span></a> <a class="carousel-control-next" href="#discoverPopular'+0+'" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a></div>';
        
        $("#discover").append("<h2 class='mt-3'>Popular Movies</h2>"+template);
                
    });
    
    //popular tv shows
    $.getJSON("https://api.themoviedb.org/3/discover/tv?api_key="+APIKEY+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1", function(x){
        let template = '<div id="discoverPopular'+1+'" class="carousel slide" data-ride="carousel">';
        template += '<ol class="carousel-indicators">';
        for(let i = 0; i < x.results.length; i++){
            if (i == 0) {
                template += '<li data-target="#discoverPopular'+1+'" data-slide-to="'+i+'" class="active"></li>';
            } else {
                template += '<li data-target="#discoverPopular'+1+'" data-slide-to="'+i+'"></li>';
            }
        }
        template += '</ol><div class="carousel-inner">';
        for(let i = 0; i < x.results.length; i++){
            template += '<div class="carousel-item';
            if (i == 0) { 
                template += ' active';
            }
            template += '">';
            
            if(x.results[i].backdrop_path !== null){
                template += '<img src="https://image.tmdb.org/t/p/original'+x.results[i].backdrop_path+'" class="d-block w-100" style="opacity:0.5; cursor:pointer;" ';
                template += 'onclick="getDetails(&#39;'+x.results[i].id+'&#39;,&#39;tv&#39;);">';
            } else {
                template += '<img src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" class="d-block w-100" style="opacity:0.5; cursor:pointer;" ';
                template += 'onclick="getDetails(&#39;'+x.results[i].id+'&#39;,&#39;tv&#39;);">';
            }
            template += '<div class="carousel-caption d-none d-md-block"><h3 class="text-light bg-dark">'+ (i+1) +". "+x.results[i].name+'</h3></div>';
            
            template += '</div>';
        }
        template += '</div><a class="carousel-control-prev" href="#discoverPopular'+1+'" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span>    <span class="sr-only">Previous</span></a> <a class="carousel-control-next" href="#discoverPopular'+1+'" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a></div>';
        
        $("#discover").append("<h2 class='mt-3'>Popular TV Shows</h2>"+template);
                
    });
    
    //popular movies
    $.getJSON("https://api.themoviedb.org/3/discover/movie?api_key="+APIKEY+"&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1", function(x){
        let template = '<div id="discoverPopular'+2+'" class="carousel slide" data-ride="carousel">';
        template += '<ol class="carousel-indicators">';
        for(let i = 0; i < x.results.length; i++){
            if (i == 0) {
                template += '<li data-target="#discoverPopular'+2+'" data-slide-to="'+i+'" class="active"></li>';
            } else {
                template += '<li data-target="#discoverPopular'+2+'" data-slide-to="'+i+'"></li>';
            }
        }
        template += '</ol><div class="carousel-inner">';
        for(let i = 0; i < x.results.length; i++){
            template += '<div class="carousel-item';
            if (i == 0) {  
                template += ' active';
            }
            template += '">';
            
            if(x.results[i].backdrop_path !== null){
                template += '<img src="https://image.tmdb.org/t/p/original'+x.results[i].backdrop_path+'" class="d-block w-100" style="opacity:0.5; cursor:pointer;" ';
                template += 'onclick="getDetails(&#39;'+x.results[i].id+'&#39;,&#39;movies&#39;);">';
            } else {
                template += '<img src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" class="d-block w-100" style="opacity:0.5; cursor:pointer;" ';
                template += 'onclick="getDetails(&#39;'+x.results[i].id+'&#39;,&#39;movies&#39;);">';
            }
            template += '<div class="carousel-caption d-none d-md-block"><h3 class="text-light bg-dark">'+ (i+1) +". "+x.results[i].title+'</h3></div>';
            
            template += '</div>';
        }
        template += '</div><a class="carousel-control-prev" href="#discoverPopular'+2+'" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span>    <span class="sr-only">Previous</span></a> <a class="carousel-control-next" href="#discoverPopular'+2+'" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a></div>';
        
        $("#discover").append("<h2 class='mt-3'>Highest Rated Movies</h2>"+template);
                
    });
    
    //popular tv shows
    $.getJSON("https://api.themoviedb.org/3/discover/tv?api_key="+APIKEY+"&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1", function(x){
        let template = '<div id="discoverPopular'+3+'" class="carousel slide" data-ride="carousel">';
        template += '<ol class="carousel-indicators">';
        for(let i = 0; i < x.results.length; i++){
            if (i == 0) {
                template += '<li data-target="#discoverPopular'+3+'" data-slide-to="'+i+'" class="active"></li>';
            } else {
                template += '<li data-target="#discoverPopular'+3+'" data-slide-to="'+i+'"></li>';
            }
        }
        template += '</ol><div class="carousel-inner">';
        for(let i = 0; i < x.results.length; i++){
            template += '<div class="carousel-item';
            if (i == 0) { 
                template += ' active';
            }
            template += '">';
            
            if(x.results[i].backdrop_path !== null){
                template += '<img src="https://image.tmdb.org/t/p/original'+x.results[i].backdrop_path+'" class="d-block w-100" style="opacity:0.5; cursor:pointer;" ';
                template += 'onclick="getDetails(&#39;'+x.results[i].id+'&#39;,&#39;tv&#39;);">';
            } else {
                template += '<img src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" class="d-block w-100" style="opacity:0.5; cursor:pointer;" ';
                template += 'onclick="getDetails(&#39;'+x.results[i].id+'&#39;,&#39;tv&#39;);">';
            }
            template += '<div class="carousel-caption d-none d-md-block"><h3 class="text-light bg-dark">'+ (i+1) +". "+x.results[i].name+'</h3></div>';
            
            template += '</div>';
        }
        template += '</div><a class="carousel-control-prev" href="#discoverPopular'+3+'" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span>    <span class="sr-only">Previous</span></a> <a class="carousel-control-next" href="#discoverPopular'+3+'" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a></div>';
        
        $("#discover").append("<h2 class='mt-3'>Highest Rated TV Shows</h2>"+template);
                
    });
}