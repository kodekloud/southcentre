

function validateNewsletterPopup(){

        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var name = firstName + " " + lastName;
        $('#fieldName').val(name);
        return true;
    
}

 function getCookie(name) {
     var value = "; " + document.cookie;
     var parts = value.split("; " + name + "=");
     if (parts.length == 2) return parts.pop().split(";").shift();
   }
    function close_popup(){
        $(".hidden-popup-bg").fadeOut();
    } 
   $(document).ready(function() {
        var pathArray = window.location.pathname.split( '/' );
        var slug = pathArray[pathArray.length-1];

        if (slug.length===0 || slug ==="/" ||slug.match(/^\/?home/)){

            
            var visited = $.cookie("visited");
            var winwidth = $(window).width();
            if(visited == null){ visited = 1; $.cookie('visited', visited, { expires: 7 }); }
            $( "#submit" ).mouseup(function() {
                visited = 100; 
                $.cookie('visited', visited, { expires: 7 });
            });
            
            $( "#submit-mobile").bind('touchstart mousedown', function(event){
                  visited = 100; 
                $.cookie('visited', visited, { expires: 7 });
            
            });
     
            if (visited <= 100) {
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || winwidth <= 600) {
                    $(".hidden-popup-bg").show();
                }else{
                     $(".hidden-popup-bg").show();
                }
                visited++;
                $.cookie('visited', visited, { expires: 7 });
            } else {
                visited++;
                $.cookie('visited', visited, { expires: 7 });
                return false;
            } 
            
        
            
        $(".hidden-popup-bg").click(function(event){
            
            if( !$( event.target).is('.hidden-popup-form') ) {
            close_popup();
        } else {
            event.stopPropagation();
        }
        });
        $(".hidden-popup-bg .hidden-popup-form").click(function(event){
            event.stopPropagation();
        });     
        }
   });