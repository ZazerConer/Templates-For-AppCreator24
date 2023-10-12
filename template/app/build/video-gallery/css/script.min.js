/**
  * Templates for AppCreator24 @ ZazerConer's GitHub
  * Video Gallery.
  * JS code.
**/

  var primaryContent = document.querySelector(":root"),
   color = "--primary-color",
    themeContent = document.querySelectorAll(".container-content, .select-section"),
     dark = "dark",
      light = "light",
       imgContent = document.querySelectorAll(".gallery-content img"),
        width = "width",
         height = "height",
          margin = "margin",
         padding = "padding",
        borderRadius = "border-radius",
       background = "background",
      scrollBar = document.querySelector(".gallery-content"),
     show = "show-scrollbar",
    hide = "hide-scrollbar",
   dataContent = "content";

  $("#s1").fadeIn();
  $(".btn-section:first").css("border-bottom", "1.5px solid var(--primary-color)");
  $(imgContent).attr({"alt": ""});
      
$(document).ready(function() {

  $(".btn-section").click(function() {
    $(".btn-section").css("border-bottom", "1.5px solid transparent");
     $(this).css("border-bottom", "1.5px solid var(--primary-color)");
      var section = $(this).attr("section");
    if (section === "1") {
       $(".section-content").hide();
       $("#s1").fadeIn(800);
    } else if (section === "2") {
       $(".section-content").hide();
       $("#s2").fadeIn(800);
    } else if (section === "3") {
       $(".section-content").hide();
       $("#s3").fadeIn(800);
    } else if (section === "4") {
       $(".section-content").hide();
       $("#s4").fadeIn(800);
    } else if (section === "5") {
       $(".section-content").hide();
       $("#s5").fadeIn(800);
    } else if (section === "6") {
       $(".section-content").hide();
       $("#s6").fadeIn(800);
    } else if (section === "7") {
       $(".section-content").hide();
       $("#s7").fadeIn(800);
    } else if (section === "8") {
       $(".section-content").hide();
       $("#s8").fadeIn(800);
    }
  });

  $(".section-content img").each(function() { 
    if (!$(this).attr("location") === "") { 
       $(this).removeAttr("location");
    } else if (!$(this).attr("title") === "") {
       $(this).removeAttr("title");
    }
  });
  
  $(".section-content img").click(function() {
   var goSection = $(this).attr("location");
    if (goSection) { 
       $(window.location).attr("href", goSection);
      return true;
    } else {
      return false;
    }
  });

   var touchstart;
   var touchend;
  $(".section-content img").on("touchstart", function(e) {
    touchstart = e.timeStamp;
  }).on("touchend", function(e) {
   let title = $(this).attr("title");
    let desc = $(this).attr("desc");
     touchend = e.timeStamp - touchstart;
     if(touchend >= 800) {
       if (title) { 
         $(".vid-desc").fadeIn(300);
          $(".vid-desc").html(`<span class="info-desc">${title}<br><small>${desc}</small></span>`);
         setTimeout(function() {
            $(".vid-desc").fadeOut(300);
         }, 5000);
       } else {
          $(".vid-desc").fadeOut(0);
       }
     }
  });

  $("body").append('<div class="vid-desc"></div>');
  
  $(".gallery-content").on("touchstart", function() {
    $(".gallery-content").addClass("scrollbar");
  });
  var inActivity = function() {
    var time;
     document.ontouchend = resetTimer;
     function endTime() {
       $(".gallery-content").removeClass("scrollbar");
     }
     function resetTimer() {
       clearTimeout(time);
       time = setTimeout(endTime, 1000);
     }
  } 
   inActivity();

});
