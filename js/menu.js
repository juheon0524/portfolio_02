        $(document).ready(function(){

            $(".nav2").click(function(){
                $(".nav1").slideToggle();
            });

        $(window).resize(function(){

          if(window.innerWidth>=1250){

            $(".nav1").show(); 

          }

          if(window.innerWidth<=1249){

            $(".nav1").hide(); 

          }

        });

        });