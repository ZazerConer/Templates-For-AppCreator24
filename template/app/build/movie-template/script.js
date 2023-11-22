/**
 * Templates for AppCreator24 @ ZazerConer's GitHub
 * Movie Template
 * JS code
**/

  const div = document.createElement("div");
    div.style = "position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;background:rgb(0,0,0);z-index:2000;";
    div.setAttribute("id", "div");
    document.body.appendChild(div);

  $("img").each(function() {
     $(this).hide();
  });
  $(".container-section").each(function() {
     $(this).hide();
  });
  
  $("title").after(
    '<link rel="stylesheet" href="https://ac24.zazerconer.workers.dev/template/app/build/bootstrap-icons/1.10.5/icons.min.css">'+
    '<link rel="stylesheet" href="https://ac24.zazerconer.workers.dev/template/app/build/swiper/10/swiper-bundle.min.css">'
  );

$(document).ready(function() {
  
  $("body").css("visibility", "visible");
  $("#div").fadeOut(200);
  $("#s1").fadeIn();
  
  $("img").each(function() {
    $(this).fadeIn(200);
  });
  setTimeout(function() {
    $("img").attr("alt", "");
  }, 100);
  
  $("#s1").before(
    '<div class="container-swiper swiper">'+
    '<div class="swiper-wrapper">'+
    '<div class="swiper-slide">'+
    '<img id="p1">'+
    '</div>'+
    '<div class="swiper-slide">'+
    '<img id="p2">'+
    '</div>'+
    '<div class="swiper-slide">'+
    '<img id="p3">'+
    '</div>'+
    '<div class="swiper-slide">'+
    '<img id="p4">'+
    '</div>'+
    '<div class="swiper-slide">'+
    '<img id="p5">'+
    '</div>'+
    '<div class="swiper-slide">'+
    '<img id="p6">'+
    '</div>'+
    '<div class="swiper-slide">'+
    '<img id="p7">'+
    '</div>'+
    '<div class="swiper-slide">'+
    '<img id="p8">'+
    '</div>'+
    '</div>'+
    '<div class="swiper-pagination clr"></div>'+
    '</div>'
  );
  
  $(".top-poster img").each(function() {
    var tp = $(this).attr("tp");
    var p1 = $(this).attr("tp", "p1");
    var p2 = $(this).attr("tp", "p2");
    var p3 = $(this).attr("tp", "p3");
    var p4 = $(this).attr("tp", "p4");
    var p5 = $(this).attr("tp", "p5");
    var p6 = $(this).attr("tp", "p6");
    var p7 = $(this).attr("tp", "p7");
    var p8 = $(this).attr("tp", "p8");
    if (tp === "p1") {
      $(".swiper-slide #p1").attr({"src": $(p1).attr("src"), "location": $(p1).attr("location"), "title": $(p1).attr("title"), "desc": $(p1).attr("desc"), "year": $(p1).attr("year"), "rating": $(p1).attr("rating")});
    } else if (tp === "p2") {
      $(".swiper-slide #p2").attr({"src": $(p2).attr("src"), "location": $(p2).attr("location"), "title": $(p2).attr("title"), "desc": $(p2).attr("desc"), "year": $(p2).attr("year"), "rating": $(p2).attr("rating")});
    } else if (tp === "p3") {
      $(".swiper-slide #p3").attr({"src": $(p3).attr("src"), "location": $(p3).attr("location"), "title": $(p3).attr("title"), "desc": $(p3).attr("desc"), "year": $(p3).attr("year"), "rating": $(p3).attr("rating")});
    } else if (tp === "p4") {
      $(".swiper-slide #p4").attr({"src": $(p4).attr("src"), "location": $(p4).attr("location"), "title": $(p4).attr("title"), "desc": $(p4).attr("desc"), "year": $(p4).attr("year"), "rating": $(p4).attr("rating")});
    } else if (tp === "p5") {
      $(".swiper-slide #p5").attr({"src": $(p5).attr("src"), "location": $(p5).attr("location"), "title": $(p5).attr("title"), "desc": $(p5).attr("desc"), "year": $(p5).attr("year"), "rating": $(p5).attr("rating")});
    } else if (tp === "p6") {
      $(".swiper-slide #p6").attr({"src": $(p6).attr("src"), "location": $(p6).attr("location"), "title": $(p6).attr("title"), "desc": $(p6).attr("desc"), "year": $(p6).attr("year"), "rating": $(p6).attr("rating")});
    } else if (tp === "p7") {
      $(".swiper-slide #p7").attr({"src": $(p7).attr("src"), "location": $(p7).attr("location"), "title": $(p7).attr("title"), "desc": $(p7).attr("desc"), "year": $(p7).attr("year"), "rating": $(p7).attr("rating")});
    } else if (tp === "p8") {
      $(".swiper-slide #p8").attr({"src": $(p8).attr("src"), "location": $(p8).attr("location"), "title": $(p8).attr("title"), "desc": $(p8).attr("desc"), "year": $(p8).attr("year"), "rating": $(p8).attr("rating")});
    }
  });

  $("body").append(
    '<div class="content-play">'+
    '<div class="content-info">'+
    '<div class="rating">'+
    '<i class="bi bi-bookmark-star-fill"></i>&nbsp;<div class="rating-number">&nbsp;<span class="star"></span><span class="yr"></span></div>'+
    '</div>'+
    '<br>'+
    '<img>'+
    '<abbr><span class="title"></span><small class="desc"></small></abbr>'+
    '</div>'+
    '<button id="back">Back</button>'+
    '<button id="play">Play</button>'+
    '</div>'+
    '<div class="scrollUp"><button id="scrollTop" title="Go to top"><i class="bi bi-chevron-double-up"></i></button></div>'+
    '<div class="select-section">'+
    '<button class="btn-section btn" id="reload"><i class="bi bi-bootstrap-reboot"></i></button>'+
    '<button class="btn-section" id="open"><i class="bi bi-list-nested"></i></button>'+
    '</div>'
  );

  $(".section-bar div").each(function() {
    var sBar = $(this).attr("bar");
    var ix1 = $(this).attr("bar", "section1");
    var ix2 = $(this).attr("bar", "section2");
    var ix3 = $(this).attr("bar", "section3");
    var ix4 = $(this).attr("bar", "section4");
    var ix5 = $(this).attr("bar", "section5");
    var ix6 = $(this).attr("bar", "section6");
    var ix7 = $(this).attr("bar", "section7");
    var ix8 = $(this).attr("bar", "section8");
    var ix9 = $(this).attr("bar", "section9");
    var ix10 = $(this).attr("bar", "section10");
    var append = $(".select-section #open");
    if (sBar === "section1") {
      $(append).before('<button class="btn-section btn" section="1"></button>');
      $("[section='1']").html(ix1);
    } else if (sBar === "section2") {
      $(append).before('<button class="btn-section btn" section="2"></button>');
      $("[section='2']").html(ix2);
    } else if (sBar === "section3") {
      $(append).before('<button class="btn-section btn" section="3"></button>');
      $("[section='3']").html(ix3);
    } else if (sBar === "section4") {
      $(append).before('<button class="btn-section btn" section="4"></button>');
      $("[section='4']").html(ix4);
    } else if (sBar === "section5") {
      $(append).before('<button class="btn-section btn" section="5"></button>');
      $("[section='5']").html(ix5);
    } else if (sBar === "section6") {
      $(append).before('<button class="btn-section btn" section="6"></button>');
      $("[section='6']").html(ix6);
    } else if (sBar === "section7") {
      $(append).before('<button class="btn-section btn" section="7"></button>');
      $("[section='7']").html(ix7);
    } else if (sBar === "section8") {
      $(append).before('<button class="btn-section btn" section="8"></button>');
      $("[section='8']").html(ix8);
    } else if (sBar === "section9") {
      $(append).before('<button class="btn-section btn" section="9"></button>');
      $("[section='9']").html(ix9);
    } else if (sBar === "section10") {
      $(append).before('<button class="btn-section btn" section="10"></button>');
      $("[section='10']").html(ix10);
    }
  });

  $(".select-section .btn").hide();
  $("[section='1']").css("color", "var(--primary-color)");

  $(".swiper-slide img").each(function() {
    setTimeout(function() {
      $(this).attr("alt", "");
    }, 100);
     if ($(this).attr("src") === "") {
       $(this).hide();
     }
    var title = $(this).attr("title");
    var desc = $(this).attr("desc");
    var year = $(this).attr("year");
     $(this).after('<span><div class="t">'+title+' &nbsp;<small class="y">('+year+')</small></div><small>'+desc+'</small></span>');
  }).click(function() {
    var src = $(this).attr("src");
    var title = $(this).attr("title");
    var desc = $(this).attr("desc");
    var year = $(this).attr("year");
    var rating = $(this).attr("rating");
    var url = $(this).attr("location");
     $(".content-play img").attr("src", src);
     $(".content-play .title").html(title);
     $(".content-play .desc").html(desc);
     $(".content-play .rating-number .star").html(rating);
     $(".content-play .rating-number .yr").html(year);
     $(".content-play").attr("location", url);
     $(".content-play").fadeIn(200);
     $(".container-section").css("pointerEvents", "none");
     $("body").css("overflow", "hidden");
  });

  $(".content-section img").each(function() {
    if ($(this).attr("src") === "") {
       $(this).addClass("placeholder");
    } else {
       $(this).addClass("poster");
    }
  }).click(function() {
     $(".content-play").fadeIn(200);
     $(".container-section").css("pointerEvents", "none");
     $("body").css("overflow", "hidden");
    var src = $(this).attr("src");
    var title = $(this).attr("title");
    var desc = $(this).attr("desc");
    var year = $(this).attr("year");
    var rating = $(this).attr("rating");
    var url = $(this).attr("location");
     $(".content-play img").attr("src", src);
     $(".content-play .title").html(title);
     $(".content-play .desc").html(desc);
     $(".content-play .rating-number .star").html(rating);
     $(".content-play .rating-number .yr").html(year);
     $(".content-play").attr("location", url);
  }).on("contextmenu", function() {
    var src = $(this).attr("src");
    var title = $(this).attr("title");
    var desc = $(this).attr("desc");
    var year = $(this).attr("year");
    var rating = $(this).attr("rating");
    var url = $(this).attr("location");
     $(".content-play img").attr("src", src);
     $(".content-play .title").html(title);
     $(".content-play .desc").html(desc);
     $(".content-play .rating-number .star").html(rating);
     $(".content-play .rating-number .yr").html(year);
     $(".content-play").attr("location", url);
     $(".content-play").fadeIn(200);
     $(".container-section").css("pointerEvents", "none");
     $("body").css("overflow", "hidden");
  });

  $(".content-play #back").click(function() {
    $(".content-play").fadeOut(200);
    $(".container-section").css("pointerEvents", "auto");
    $("body").css("overflow", "auto");
    $(".content-play .rating-number .yr").html("");
  });

  $(".content-play #play").click(function() {
    var location = $(".content-play").attr("location");
    if (location === "") {
     return false;
    } else {
      $(window.location).attr("href", location);
      $(".content-play").fadeOut(200);
      $(".container-section").css("pointerEvents", "auto");
      $("body").css("overflow", "auto");
     return true;
    }
  });

  $(".select-section #open").click(function() {
    if ($(".select-section .btn").hide()) {
      $(".select-section .btn").show();
     setTimeout(function() {
       $(".select-section .btn").fadeOut(800);
     }, 5000);
    }
     $(".content-play").fadeOut(200);
     $(".container-section").css("pointerEvents", "auto");
     $("body").css("overflow", "auto");
  });

  $("#reload").click(function() {
    window.location = window.location.pathname;
     $("#div").show();
    setTimeout(function() {
      $("#div").fadeOut(200);
    }, 1000);
  });

  $(".select-section .btn").click(function() {
   var section = $(this).attr("section");
   if (section === "1") {
      $(".container-section").hide();
     setTimeout(function() {
       $(".container-swiper").fadeIn();
       $("#s1").fadeIn();
     }, 500);
   } else if (section === "2") {
      $(".container-section").hide();
      $(".container-swiper").hide();
     setTimeout(function() {
       $("#s2").fadeIn();
     }, 500);
   } else if (section === "3") {
      $(".container-section").hide();
      $(".container-swiper").hide();
     setTimeout(function() {
       $("#s3").fadeIn();
     }, 500);
   } else if (section === "4") {
      $(".container-section").hide();
      $(".container-swiper").hide();
     setTimeout(function() {
       $("#s4").fadeIn();
     }, 500);
   } else if (section === "5") {
      $(".container-section").hide();
      $(".container-swiper").hide();
     setTimeout(function() {
       $("#s5").fadeIn();
     }, 500);
   } else if (section === "6") {
      $(".container-section").hide();
      $(".container-swiper").hide();
     setTimeout(function() {
       $("#s6").fadeIn();
     }, 500);
   } else if (section === "7") {
      $(".container-section").hide();
      $(".container-swiper").hide();
     setTimeout(function() {
       $("#s7").fadeIn();
     }, 500);
   } else if (section === "8") {
      $(".container-section").hide();
      $(".container-swiper").hide();
     setTimeout(function() {
       $("#s8").fadeIn();
     }, 500);
   } else if (section === "9") {
      $(".container-section").hide();
      $(".container-swiper").hide();
     setTimeout(function() {
       $("#9").fadeIn();
     }, 500);
   } else if (section === "10") {
      $(".container-section").hide();
      $(".container-swiper").hide();
     setTimeout(function() {
       $("#s10").fadeIn();
     }, 500);
   }
     $(".btn-section").css("color", "rgb(250,250,255)");
     $(this).css("color", "var(--primary-color)");
     $(document.body).animate({scrollTop: 0});
     $(document.documentElement).animate({scrollTop: 0});
  }).each(function() {
    var text = this.innerText;
    var word1 = text.substr(0, 1);
    var word2 = text.substr(1, 1);
    if (text) {
      $(this).text(word1+word2).css({
        "font-size": "large", 
        "font-weight": "bold", 
        "text-transform": "uppercase"
      });
    }
  });

  var swiper = new Swiper(".swiper", {
      spaceBetween: 30,
      centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  window.onscroll = function() {scroll()};
  function scroll() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      $(".scrollUp").fadeIn(100);
    } else {
      $(".scrollUp").fadeOut(100);
    }
  }
  $("#scrollTop").click(function() {
    $(document.body).animate({scrollTop: 0});
    $(document.documentElement).animate({scrollTop: 0});
  });

});

  var primaryContent = document.querySelector(":root"),
     color = "--primary-color",
     primaryFont = document.querySelector(":root"),
    fontFamily = "--primary-font",
   docElement = document.querySelector("title");
