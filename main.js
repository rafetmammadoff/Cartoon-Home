
$(function(){

    $("#hasar-btn").click(function() {
        $("#hasar").toggleClass('has')
    
    })
    $("#car-btn").click(function(){
        $("#car-go").animate({left: "+=500"}, 2500);
        $("#hasar").toggleClass('has')
        $('#car-btn').prop('disabled', true);
        $("#car-go").animate(
            { deg: -72 },
          {
            duration: 1200,
            step: function(pow) {
              $(this).css({ transform: 'rotateY(' + pow + 'deg)' });
            }
          }
           

        )
        $("#car-go").animate({bottom: "+=122"}, 2500);
        $("#car-go").animate(
            { deg: 0 },
          {
            duration: 1200,
            step: function(now) {
              $(this).css({ transform: 'rotateY(' + now + 'deg)' });
            }
          }
           

        )
        $("#car-go").animate({left: "+=100"}, 2500);
        

    })
    $("#light").click(function(){
        $(".window").toggleClass("win")
    })
    $("#hours").click(function(){
        $("#moon").toggleClass("moon-go")
        $("#sun").toggleClass("sun-go")
        $(".container").toggleClass("white")
    })
    // $('#car-btn').click(function() {
    //     $('#car-go').animate(
    //       { deg: 180 },
    //       {
    //         duration: 1200,
    //         step: function(now) {
    //           $(this).css({ transform: 'rotate(' + now + 'deg)' });
    //         }
    //       }
    //     );
    //   });

    $("#helicopter").click(function(){
        $('#helicopter').prop('disabled', true);
        $(".helicopter-per").addClass("h-anim1")
        $(".helicoper-end-per").toggleClass("h-anim2")
        $(".helicopter").delay(5000).animate({bottom: "+=522"}, 7500);
        $(".helicopter").delay(100).animate(
            {deg:-10},
            
            {
                duration:1000,
                step:function(now){
                    $(this).css({transform:'rotateZ('+now+'deg)'});

                }
            }
        )


        

        $(".helicopter").delay().animate({right: "+=1150"}, 4000);
        $(".helicopter").delay(100).animate(
            {deg:0},
            {
                
                step:function(now){
                    $(this).css({transform:'rotateZ('+now+'deg)'});

                }
            }
        )

        $(".helicopter").delay().animate({top: "+=522"}, 7500,);
        // $(".helicopter-per").removeClass('h-anim1', {delay:10000})
        
            setTimeout(function () {
              $(".helicopter-per").removeClass("h-anim1");
            }, 28000);
            setTimeout(function () {
                $(".helicoper-end-per").removeClass("h-anim2");
              }, 28000);
          
        




    })




})






// clip-path: polygon(36% 88%, 60% 88%, 85% 85%, 70% 100%, 30% 100%, 16% 84%);





































































// var hasarbtn=document.querySelector('#hasar-btn')
// var carbtn=document.querySelector('#car-btn')
// carbtn.addEventListener("click",my2)

// hasarbtn.addEventListener("click",my)

// function my(){
//     let hasar=document.querySelector('#hasar')
//     hasar.classList.toggle('has')

// }
// function my2(){
//     let cargo=document.querySelector('#car-go')
//     cargo.classList.toggle('carr')
//    //  cargo.toggleClass('carr')

// }




// $(document).ready(function(){

//     var carbtn=$('#car-btn')
//     hasarbtn.click(function(){
//         let hasar=document.querySelector('#hasar')
//         hasar.toggleClass('has')
//     })
//   });