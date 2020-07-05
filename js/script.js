// ============stiky bar===============
$(window).scroll(function(){
    var scrollamount = $(window).scrollTop()
  
    if(scrollamount > 150){
      $(".menu").addClass("fixed")
    }
   
      else{
      $(".menu").removeClass("fixed")
      }
  
      if(scrollamount > 150){
        $(".btop").fadeIn();
      }
      else{
        $(".btop").fadeOut();
      }
  })




// ===========popup===========
$(".srce").click(function(){
    $(".box").slideDown();
  })
  
  $(".btn").click(function(){
    $(".box").slideUp();
  })
  


// banner slider

$('.banners').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,

})


// count down

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Sep 30, 2020 00:00:00').getTime(),
    x = setInterval(function() {    

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)

