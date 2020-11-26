$(document).ready(function(){
    $.getJSON("/it4203/data/nav.json", function(x){
        var cont = $("#navcontent ul");
        for(var a = 0; a < x.links.length; a++){
            //populate links on nav
            if (x.links[a].ddlinks !== undefined) {
                cont.append('<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="'+x.links[a].path+'" role="button" data-toggle="dropdown">'+x.links[a].name+'</a><div class="dropdown-menu dropdown-menu-right ddm'+a+'"></div></li>');
                
                //populate dd menu
                let y = x.links[a];
                for(var b = 0; b < y.ddlinks.length; b++){
                    if (y.ddlinks[b].drlinks !== undefined) {
                        $(".ddm"+a).append('<h6 class="dropdown-header">'+y.ddlinks[b].l1_name+'</h6>');
                        //populate submenu
                        for (var c = 0; c < y.ddlinks[b].drlinks.length; c++){
                            $(".ddm"+a).append('<a class="dropdown-item" href="'+y.ddlinks[b].drlinks[c].l2_path+'">'+y.ddlinks[b].drlinks[c].l2_name+'</a>');
                        }
                        //if this is NOT the last link
                        if (c !== (y.ddlinks[b].drlinks.length - 1)){
                            $(".ddm"+a).append('<div class="dropdown-divider"></div>');
                        }
                    } else {
                        $(".ddm"+a).append('<a class="dropdown-item" href="'+y.ddlinks[b].l1_path+'">'+y.ddlinks[b].l1_name+'</a>');
                    }
                }
            } else {
                cont.append('<li class="nav-item"><a href="'+x.links[a].path+'" class="nav-link">'+x.links[a].name+'</a></li>');
            }
        }
    });
});
