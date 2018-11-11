 $( document ).ready(function() {

   // This is the hamburger nav
    $(".burger-button").click(function(){
      $(".burger-button").toggleClass("active");
      $(".burger-menu").slideToggle();
    });
    // end hamburger nav


    // number counter 2
        var a = 0;
            $(window).scroll(function() {

              var oTop = $('#counter').offset().top - window.innerHeight;
              if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function() {
                  var $this = $(this),
                    countTo = $this.attr('data-count');
                  $({
                    countNum: $this.text()
                  }).animate({
                      countNum: countTo
                    },

                    {

                      duration: 2000,
                      easing: 'swing',
                      step: function() {
                        $this.text(Math.floor(this.countNum));
                      },
                      complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                      }

                    });
                });
                a = 1;
              }

            });

    // end number counter 2

 });
