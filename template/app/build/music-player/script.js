/**
 * Templates for AppCreator24 @ ZazerConer's GitHub
 * Music Player
 * JS code
**/

  $("#list").before(
    '<div class="wrap-contain" id="content">'+
    '<img class="coverAlbum">'+
    '<h2 class="artist">Artist</h2>'+
    '<h3 class="song">Song Title</h3>'+
    '<audio hidden autoplay preload="metadata" type="audio/mpeg" vlm="100%"></audio>'+
    '<div class="control">'+
    '<div class="audio-progress">'+
    '<span id="time-elapsed">00.00</span>'+
    '<progress id="progress-bar" value="0" min="0" max="100"></progress>'+
    '<input class="seek" id="seek" type="range" value="0" min="0" max="100" step="any">'+
    '<span id="duration">00.00</span>'+
    '</div>'+
    '<button class="play" id="play"><i class="bi bi-play"></i></button>'+
    '<button class="pause" id="pause"><i class="bi bi-pause"></i></button>'+
    '<button class="volDown" id="volDown"><i class="bi bi-volume-down"></i></button>'+
    '<button class="volUp" id="volUp"><i class="bi bi-volume-mute"></i></button>'+
    '<button class="clickPrev" id="prev"><i class="bi bi-chevron-left"></i></button>'+
    '<button class="clickNext" id="next"><i class="bi bi-chevron-right"></i></button>'+
    '<button id="openList"><i class="bi bi-music-note-list"></i></button>'+
    '<button id="closeList"><i class="bi bi-x-lg"></i></button>'+
    '<div class="vol-face">'+
    '<svg class="mute" id="mute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M18 23l-9.305-5.998.835-.651 7.47 4.815v-10.65l1-.781v13.265zm0-15.794l5.384-4.206.616.788-23.384 18.264-.616-.788 5.46-4.264h-2.46v-10h5.691l9.309-6v6.206zm-11.26 8.794l1.26-.984v-7.016h-4v8h2.74zm10.26-8.013v-5.153l-8 5.157v6.244l8-6.248z"/></svg>'+
    '<svg class="unmute" id="unmute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M15 23l-9.309-6h-5.691v-10h5.691l9.309-6v22zm-9-15.009v8.018l8 5.157v-18.332l-8 5.157zm14.228-4.219c2.327 1.989 3.772 4.942 3.772 8.229 0 3.288-1.445 6.241-3.77 8.229l-.708-.708c2.136-1.791 3.478-4.501 3.478-7.522s-1.342-5.731-3.478-7.522l.706-.706zm-2.929 2.929c1.521 1.257 2.476 3.167 2.476 5.299 0 2.132-.955 4.042-2.476 5.299l-.706-.706c1.331-1.063 2.182-2.729 2.182-4.591 0-1.863-.851-3.529-2.184-4.593l.708-.708zm-12.299 1.299h-4v8h4v-8z"/></svg>'+
    '</div>'+
    '</div>'+
    '</div>'
  );

   $("#list").hide();
   $("#list div").first().addClass("first");
   $("#list div").last().addClass("last");
   $("#list div").addClass("plList");
   $("img").attr("alt", "");
  
  function setVer() {
    eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$("0").1("2-3-4","5-6");',7,7,'html|attr|data|set|plyr|eR|uIpkMl_Joz'.split('|'),0,{}));
  }
  window.addEventListener("load", setVer());

$(document).ready(function() {

  $("#list div").each(function() {
    var artist = $(this).attr("artist");
    var song = $(this).attr("song");
    if (artist && song) {
      $(this).html(`<b>${artist}</b><br><small>${song}</small>`);
    } else {
      $(this).hide();
    }
  });

  $("#list div:first").addClass("play").attr("id", "active").css({"color": "var(--primary-color)", "border-bottom": "1px solid var(--primary-color)", "background": "rgba(0,0,0,0.5)", "pointerEvents": "none"});
  $("audio").attr("src", $("#list div.first").attr("url"));
  $("audio").on("loadedmetadata", function(ready) {
    var audio = this;
     if (ready) {
       audio.play();
       if (audio.paused === true) {
         $("#play").hide();
         $("#pause").show();
       }
     } else {
       return false;
     }
  });
  var cover = $("#list div:first").attr("cover");
    $(".coverAlbum").attr("src", cover);
    $("body").css({
      "background": `url('${cover}')`,
      "background-repeat": "no-repeat",
      "background-size": "cover",
      "background-position": "center"
    });
    $(".artist").html($("#list div:first").attr("artist"));
    $(".song").html($("#list div:first").attr("song"));

  $("#next").click(function(e) {
    e.preventDefault();
    if ($("#list div.play").hasClass("last")) {
      $("#list div").first().addClass("play").attr("id", "active").css({"color": "var(--primary-color)", "border-bottom": "1px solid var(--primary-color)", "background": "rgba(0,0,0,0.5)", "pointerEvents": "none"});
      $("#list div.play:last").removeClass("play").attr("id", "").css({"color": "#fafaff", "border-bottom": "1px solid transparent", "background": "", "pointerEvents": "auto"});
      $("#list").animate({scrollTop: 0}, 150);
      $(window.location).attr("href", "#active");
      $("audio").attr("src", $("#list div.play").attr("url"));
     var cover = $("#list div.play").attr("cover");
      $(".coverAlbum").attr("src", cover);
      $("body").css({
        "background": `url('${cover}')`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center"
      });
      $(".artist").html($("#list div.play").attr("artist"));
      $(".song").html($("#list div.play").attr("song"));
        $("#pause").hide();
        $("#play").show();
        $("audio").trigger("pause");
      var source = $("#list div.play").attr("url");
      if (source === "") {
        $("#pause").hide();
        $("#play").show();
        $("audio").trigger("pause");
        return false;
      } else {
        setTimeout(function() {
          $("#pause").show();
          $("#play").hide();
          $("audio").trigger("play");
        }, 1000);
        return true;
      }
    } else {
      $("#list div.play").next().addClass("play").attr("id", "active").css({"color": "var(--primary-color)", "border-bottom": "1px solid var(--primary-color)", "background": "rgba(0,0,0,0.5)", "pointerEvents": "none"});
      $("#list div.play:first").removeClass("play").attr("id", "").css({"color": "#fafaff", "border-bottom": "1px solid transparent", "background": "", "pointerEvents": "auto"});
      $(window.location).attr("href", "#active");
      $("audio").attr("src", $("#list div.play").attr("url"));
     var cover = $("#list div.play").attr("cover");
      $(".coverAlbum").attr("src", cover);
      $("body").css({
        "background": `url('${cover}')`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center"
      });
      $(".artist").html($("#list div.play").attr("artist"));
      $(".song").html($("#list div.play").attr("song"));
        $("#pause").hide();
        $("#play").show();
        $("audio").trigger("pause");
      var source = $("#list div.play").attr("url");
      if (source === "") {
        $("#pause").hide();
        $("#play").show();
        $("audio").trigger("pause");
        return false;
      } else {
        setTimeout(function() {
          $("#pause").show();
          $("#play").hide();
          $("audio").trigger("play");
        }, 1000);
        return true;
      }
    }
      $("#list div").each(function() {
        var type = $(this).attr("url");
        var matchType = {mp3: type.match(".mp3"), wav: type.match(".wav"), ogg: type.match(".ogg"), aac: type.match(".aac")}
        var format = {mp3: "audio/mpeg", wav: "audio/wav", ogg: "audio/ogg", aac: "audio/aac"}
        if (matchType.mp3) {
          $("audio").attr("type", format.mp3);
        } else if (matchType.wav) {
          $("audio").attr("type", format.wav);
        } else if (matchType.ogg) {
          $("audio").attr("type", format.ogg);
        } else if (matchType.aac) {
          $("audio").attr("type", format.aac);
        } else {
          $("audio").attr("type", format.mp3);
        }
      });
  });
  $("#prev").click(function(e) {
   e.preventDefault();
    if ($("#list div.play").hasClass("first")) {
      $("#list div").last().addClass("play").attr("id", "active").css({"color": "var(--primary-color)", "border-bottom": "1px solid var(--primary-color)", "background": "rgba(0,0,0,0.5)", "pointerEvents": "none"});
      $("#list div.play:first").removeClass("play").attr("id", "").css({"color": "#fafaff", "border-bottom": "1px solid transparent", "background": "", "pointerEvents": "auto"});
      $("#list").animate({scrollTop: 10000}, 600);
      $(window.location).attr("href", "#active");
      $("audio").attr("src", $("#list div.play").attr("url"));
     var cover = $("#list div.play").attr("cover");
      $(".coverAlbum").attr("src", cover);
      $("body").css({
        "background": `url('${cover}')`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center"
      });
      $(".artist").html($("#list div.play").attr("artist"));
      $(".song").html($("#list div.play").attr("song"));
        $("#pause").hide();
        $("#play").show();
        $("audio").trigger("pause");
      var source = $("#list div.play").attr("url");
      if (source === "") {
        $("#pause").hide();
        $("#play").show();
        $("audio").trigger("pause");
        return false;
      } else {
        setTimeout(function() {
          $("#pause").show();
          $("#play").hide();
          $("audio").trigger("play");
        }, 1000);
        return true;
      }
    } else {
      $("#list div.play").prev().addClass("play").attr("id", "active").css({"color": "var(--primary-color)", "border-bottom": "1px solid var(--primary-color)", "background": "rgba(0,0,0,0.5)", "pointerEvents": "none"});
      $("#list div.play:last").removeClass("play").attr("id", "").css({"color": "#fafaff", "border-bottom": "1px solid transparent", "background": "", "pointerEvents": "auto"});
      $(window.location).attr("href", "#active");
      $("audio").attr("src", $("#list div.play").attr("url"));
     var cover = $("#list div.play").attr("cover");
       $(".coverAlbum").attr("src", cover);
       $("body").css({
         "background": `url('${cover}')`,
         "background-repeat": "no-repeat",
         "background-size": "cover",
         "background-position": "center"
       });
       $(".artist").html($("#list div.play").attr("artist"));
       $(".song").html($("#list div.play").attr("song"));
         $("#pause").hide();
         $("#play").show();
         $("audio").trigger("pause");
       var source = $("#list div.play").attr("url");
       if (source === "") {
         $("#pause").hide();
         $("#play").show();
         $("audio").trigger("pause");
         return false;
       } else {
         setTimeout(function() {
           $("#pause").show();
           $("#play").hide();
           $("audio").trigger("play");
         }, 1000);
         return true;
       }
     }
       $("#list div").each(function() {
         var type = $(this).attr("url");
         var matchType = {mp3: type.match(".mp3"), wav: type.match(".wav"), ogg: type.match(".ogg"), aac: type.match(".aac")}
         var format = {mp3: "audio/mpeg", wav: "audio/wav", ogg: "audio/ogg", aac: "audio/aac"}
         if (matchType.mp3) {
           $("audio").attr("type", format.mp3);
         } else if (matchType.wav) {
           $("audio").attr("type", format.wav);
         } else if (matchType.ogg) {
           $("audio").attr("type", format.ogg);
         } else if (matchType.aac) {
           $("audio").attr("type", format.aac);
         } else {
           $("audio").attr("type", format.mp3);
         }
       });
  });

  $("#list div").click(function(e) {
    e.preventDefault();
      $("#list div").removeClass("play").attr("id", "").css({"color": "#fafaff", "border-bottom": "1px solid transparent", "background": "", "pointerEvents": "auto"});
      $(this).addClass("play").attr("id", "active").css({"color": "var(--primary-color)", "border-bottom": "1px solid var(--primary-color)", "background": "rgba(0,0,0,0.5)", "pointerEvents": "none"});
      $(window.location).attr("href", "#active");
     var cover = $(this).attr("cover");
      $(".coverAlbum").attr("src", cover);
      $("body").css({
        "background": `url('${cover}')`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center"
      });
      $(".artist").html($(this).attr("artist"));
      $(".song").html($(this).attr("song"));
        $("#pause").hide();
        $("#play").show();
        $("audio").trigger("pause");
      var source = $(this).attr("url");
      if (source === "") {
        $("#pause").hide();
        $("#play").show();
        $("audio").trigger("pause");
        return false;
      } else {
        $("audio").attr("src", source);
        setTimeout(function() {
          $("#pause").show();
          $("#play").hide();
          $("audio").trigger("play");
        }, 1000);
        return true;
      }
      $("#list div").each(function() {
        var type = $(this).attr("url");
        var matchType = {mp3: type.match(".mp3"), wav: type.match(".wav"), ogg: type.match(".ogg"), aac: type.match(".aac")}
        var format = {mp3: "audio/mpeg", wav: "audio/wav", ogg: "audio/ogg", aac: "audio/aac"}
        if (matchType.mp3) {
          $("audio").attr("type", format.mp3);
        } else if (matchType.wav) {
          $("audio").attr("type", format.wav);
        } else if (matchType.ogg) {
          $("audio").attr("type", format.ogg);
        } else if (matchType.aac) {
          $("audio").attr("type", format.aac);
        } else {
          $("audio").attr("type", format.mp3);
        }
      });
  });

  $("audio").on("ended", function() {
   if ($("#list .plList.play").hasClass("last")) {
     $("#list .plList").first().addClass("play").attr("id", "active").css({"color": "var(--primary-color)", "border-bottom": "1px solid var(--primary-color)", "background": "rgba(0,0,0,0.5)", "pointerEvents": "none"});
     $("#list .plList.play:last").removeClass("play").attr("id", "").css({"color": "#fafaff", "border-bottom": "1px solid transparent", "background": "", "pointerEvents": "auto"});
     $("#list").animate({scrollTop: 0}, 150);
     $(window.location).attr("href", "#active");
     $("audio").attr("src", $("#list .plList.play").attr("url"));
    var cover = $("#list .plList.play").attr("cover");
     $(".coverAlbum").attr("src", cover);
     $("body").css({
       "background": `url('${cover}')`,
       "background-repeat": "no-repeat",
       "background-size": "cover",
       "background-position": "center"
     });
     $(".artist").html($("#list .plList.play").attr("artist"));
     $(".song").html($("#list .plList.play").attr("song"));
       $("#pause").hide();
       $("#play").show();
       $("audio").trigger("pause");
     var source = $("#list .plList.play").attr("url");
     if (source === "") {
       $("#pause").hide();
       $("#play").show();
       $("audio").trigger("pause");
       return false;
     } else {
       setTimeout(function() {
         $("#pause").show();
         $("#play").hide();
         $("audio").trigger("play");
       }, 1000);
       return true;
     }
   } else {
     $("#list .plList.play").next().addClass("play").attr("id", "active").css({"color": "var(--primary-color)", "border-bottom": "1px solid var(--primary-color)", "background": "rgba(0,0,0,0.5)", "pointerEvents": "none"});
     $("#list .plList.play:first").removeClass("play").attr("id", "").css({"color": "#fafaff", "border-bottom": "1px solid transparent", "background": "", "pointerEvents": "auto"});
     $("audio").attr("src", $("#list .plList.play").attr("url"));
     $(window.location).attr("href", "#active");
    var cover = $("#list .plList.play").attr("cover");
     $(".coverAlbum").attr("src", cover);
     $("body").css({
      "background": `url('${cover}')`,
      "background-repeat": "no-repeat",
      "background-size": "cover",
      "background-position": "center"
     });
     $(".artist").html($("#list .plList.play").attr("artist"));
     $(".song").html($("#list .plList.play").attr("song"));
       $("#pause").hide();
       $("#play").show();
       $("audio").trigger("pause");
     var source = $("#list .plList.play").attr("url");
     if (source === "") {
       $("#pause").hide();
       $("#play").show();
       $("audio").trigger("pause");
       return false;
     } else {
       setTimeout(function() {
         $("#pause").show();
         $("#play").hide();
         $("audio").trigger("play");
       }, 1000);
         return true;
     }
   }
     $("#list .plList").each(function() {
       var type = $(this).attr("url");
       var matchType = {mp3: type.match(".mp3"), wav: type.match(".wav"), ogg: type.match(".ogg"), aac: type.match(".aac")}
       var format = {mp3: "audio/mpeg", wav: "audio/wav", ogg: "audio/ogg", aac: "audio/aac"}
       if (matchType.mp3) {
         $("audio").attr("type", format.mp3);
       } else if (matchType.wav) {
         $("audio").attr("type", format.wav);
       } else if (matchType.ogg) {
         $("audio").attr("type", format.ogg);
       } else if (matchType.aac) {
         $("audio").attr("type", format.aac);
       } else {
         $("audio").attr("type", format.mp3);
       }
     });
  });

  $("#openList").click(function(e) {
    e.preventDefault();
     $("#list").fadeIn(100).addClass("open");
     $(".control #prev").removeClass("clickPrev").addClass("prev").html('<i class="bi bi-chevron-up"></i>').hide();
     $(".control #next").removeClass("clickNext").addClass("next").html('<i class="bi bi-chevron-down"></i>').hide();
     $(this).hide();
     $("#closeList").fadeIn(50);
     $(".audio-progress").fadeOut(100);
     setTimeout(function() {
       $(".control #prev").fadeIn(0);
       $(".control #next").fadeIn(0);
     }, 300);
     $(window.location).attr("href", "#active");
  });
  $("#closeList").click(function(e) {
    e.preventDefault();
     $("#list").fadeOut(100).removeClass("open");
     $(".control #prev").removeClass("prev").addClass("clickPrev").html('<i class="bi bi-chevron-left"></i>').hide();
     $(".control #next").removeClass("next").addClass("clickNext").html('<i class="bi bi-chevron-right"></i>').hide();
     $(this).hide();
     $("#openList").fadeIn(50);
     $(".audio-progress").fadeIn(100);
     setTimeout(function() {
       $(".control #prev").fadeIn(0);
       $(".control #next").fadeIn(0);
     }, 300);
  });

  function count() {
    const count = $("#list div").find("b").length;
     setTimeout(function() {
       $("#openList").append(`<span class="list-count">${count}</span>`);
       $(".list-count").css({
         "color": "rgb(250,250,255)",
         "font-size": "x-small",
         "font-weight": "400"
       });
     }, 1000);
  }
  document.addEventListener("DOMContentLoaded", count());

  $("#play").click(function(e) {
    e.preventDefault();
     $(this).hide();
     $("#pause").show();
     $("audio").trigger("play");
     $(window.location).attr("href", "#active");
  });
  $("#pause").click(function(e) {
    e.preventDefault();
     $(this).hide();
     $("#play").show();
     $("audio").trigger("pause");
  });

  document.ondblclick =()=> {
    var ad = document.querySelector("audio");
    if (ad.paused === false) {
      $("#play").show();
      $("#pause").hide();
      $("audio").trigger("pause");
    } else {
      $("#pause").show();
      $("#play").hide();
      $("audio").trigger("play");
    }
  }

  $("audio").on("playing", function() {
     $("#play").hide();
     $("#pause").show();
  }).on("pause", function() {
     $("#play").show();
     $("#pause").hide();
  }).on("error", function(err) {
    if (err) {
      $("#play").show();
      $("#pause").hide();
      $("audio").trigger("pause");
    }
  });

  $("#volDown").click(function(e) {
    e.preventDefault();
     $(this).hide();
     $("#volUp").show();
     $("#mute").fadeIn(100);
      setTimeout(function() {
        $("#mute").fadeOut(200);
      }, 1500);
      $("audio").prop("muted", true);
      if (navigator.vibrate) {
        navigator.vibrate(180);
        navigator.vibrate([180, 30]);
      }
  });
  $("#volUp").click(function(e) {
    e.preventDefault();
     $(this).hide();
     $("#volDown").show();
     $("#unmute").fadeIn(100);
      setTimeout(function() {
        $("#unmute").fadeOut(200);
      }, 1500);
      $("audio").prop("muted", false);
  });
  
  $(".coverAlbum").on("contextmenu", function(e) {
    e.preventDefault();
     $(this).css("pointerEvents", "none");
     return false;
  });

  $("#list").after(
    '<button id="open-asses"><i class="bi bi-three-dots-vertical"></i></button>'+
    '<div class="file-asses">'+
    '<span id="add-color"><i class="bi bi-palette-fill"></i>Theme Color</span>'+
    '</div>'+
    '<fieldset class="add-color">'+
    '<span class="add-label">Change Theme Color</span>'+
    '<span class="cur-color">Color</span>'+
    '<div data-color="#F0F8FF" themeColor="AliceBlue"></div>'+
    '<div data-color="#FAEBD7" themeColor="AntiqueWhite"></div>'+
    '<div data-color="#00FFFF" themeColor="Aqua"></div>'+
    '<div data-color="#7FFFD4" themeColor="Aquamarine"></div>'+
    '<div data-color="#F0FFFF" themeColor="Azure"></div>'+
    '<div data-color="#FFE4C4" themeColor="Bisque"></div>'+
    '<div data-color="#FFEBCD" themeColor="BlanchedAlmond"></div>'+
    '<div data-color="#0000FF" themeColor="Blue"></div>'+
    '<div data-color="#8A2BE2" themeColor="BlueViolet"></div>'+
    '<div data-color="#A52A2A" themeColor="Brown"></div>'+
    '<div data-color="#DEB887" themeColor="BurlyWood"></div>'+
    '<div data-color="#5F9EA0" themeColor="CadetBlue"></div>'+
    '<div data-color="#7FFF00" themeColor="Chartreuse"></div>'+
    '<div data-color="#D2691E" themeColor="Chocolate"></div>'+
    '<div data-color="#FF7F50" themeColor="Coral"></div>'+
    '<div data-color="#6495ED" themeColor="CornflowerBlue"></div>'+
    '<div data-color="#DC143C" themeColor="Crimson"></div>'+
    '<div data-color="#FFF8DC" themeColor="Cornsilk"></div>'+
    '<div data-color="#00008B" themeColor="DarkBlue"></div>'+
    '<div data-color="#008B8B" themeColor="DarkCyan"></div>'+
    '<div data-color="#B8860B" themeColor="DarkGoldenRod"></div>'+
    '<div data-color="#A9A9A9" themeColor="DarkGrey"></div>'+
    '<div data-color="#006400" themeColor="DarkGreen"></div>'+
    '<div data-color="#BDB76B" themeColor="DarkKhaki"></div>'+
    '<div data-color="#8B008B" themeColor="DarkMagenta"></div>'+
    '<div data-color="#556B2F" themeColor="DarkOliveGreen"></div>'+
    '<div data-color="#FF8C00" themeColor="DarkOrange"></div>'+
    '<div data-color="#9932CC" themeColor="DarkOrchid"></div>'+
    '<div data-color="#8B0000" themeColor="DarkRed"></div>'+
    '<div data-color="#E9967A" themeColor="DarkSalmon"></div>'+
    '<div data-color="#8FBC8F" themeColor="DarkSeaGreen"></div>'+
    '<div data-color="#483D8B" themeColor="DarkSlateBlue"></div>'+
    '<div data-color="#2F4F4F" themeColor="DarkSlateGrey"></div>'+
    '<div data-color="#00CED1" themeColor="DarkTurquoise"></div>'+
    '<div data-color="#9400D3" themeColor="DarkViolet"></div>'+
    '<div data-color="#FF1493" themeColor="DeepPink"></div>'+
    '<div data-color="#00BFFF" themeColor="DeepSkyBlue"></div>'+
    '<div data-color="#696969" themeColor="DimGrey"></div>'+
    '<div data-color="#1E90FF" themeColor="DodgerBlue"></div>'+
    '<div data-color="#B22222" themeColor="FireBrick"></div>'+
    '<div data-color="#FFFAF0" themeColor="FloralWhite"></div>'+
    '<div data-color="#228B22" themeColor="ForestGreen"></div>'+
    '<div data-color="#FF00FF" themeColor="Fuchsia"></div>'+
    '<div data-color="#DCDCDC" themeColor="Gainsboro"></div>'+
    '<div data-color="#F8F8FF" themeColor="GhostWhite"></div>'+
    '<div data-color="#FFD700" themeColor="Gold"></div>'+
    '<div data-color="#DAA520" themeColor="GoldenRod"></div>'+
    '<div data-color="#008000" themeColor="Green"></div>'+
    '<div data-color="#ADFF2F" themeColor="GreenYellow"></div>'+
    '<div data-color="#F0FFF0" themeColor="HoneyDew"></div>'+
    '<div data-color="#FF69B4" themeColor="HotPink"></div>'+
    '<div data-color="#CD5C5C" themeColor="IndianRed"></div>'+
    '<div data-color="#4B0082" themeColor="Indigo"></div>'+
    '<div data-color="#FFFFF0" themeColor="Ivory"></div>'+
    '<div data-color="#F0E68C" themeColor="Khaki"></div>'+
    '<div data-color="#E6E6FA" themeColor="Lavender"></div>'+
    '<div data-color="#FFF0F5" themeColor="LavenderBlush"></div>'+
    '<div data-color="#7CFC00" themeColor="LawnGreen"></div>'+
    '<div data-color="#FFFACD" themeColor="LemonChiffon"></div>'+
    '<div data-color="#ADD8E6" themeColor="LightBlue"></div>'+
    '<div data-color="#F08080" themeColor="LightCoral"></div>'+
    '<div data-color="#E0FFFF" themeColor="LightCyan"></div>'+
    '<div data-color="#FAFAD2" themeColor="LightGoldenRodYellow"></div>'+
    '<div data-color="#D3D3D3" themeColor="LightGrey"></div>'+
    '<div data-color="#90EE90" themeColor="LightGreen"></div>'+
    '<div data-color="#FFB6C1" themeColor="LightPink"></div>'+
    '<div data-color="#FFA07A" themeColor="LightSalmon"></div>'+
    '<div data-color="#20B2AA" themeColor="LightSeaGreen"></div>'+
    '<div data-color="#87CEFA" themeColor="LightSkyBlue"></div>'+
    '<div data-color="#778899" themeColor="LightSlateGrey"></div>'+
    '<div data-color="#B0C4DE" themeColor="LightSteelBlue"></div>'+
    '<div data-color="#FFFFE0" themeColor="LightYellow"></div>'+
    '<div data-color="#00FF00" themeColor="Lime"></div>'+
    '<div data-color="#32CD32" themeColor="LimeGreen"></div>'+
    '<div data-color="#FAF0E6" themeColor="Linen"></div>'+
    '<div data-color="#FF00FF" themeColor="Magenta"></div>'+
    '<div data-color="#800000" themeColor="Maroon"></div>'+
    '<div data-color="#66CDAA" themeColor="MediumAquaMarine"></div>'+
    '<div data-color="#0000CD" themeColor="MediumBlue"></div>'+
    '<div data-color="#BA55D3" themeColor="MediumOrchid"></div>'+
    '<div data-color="#9370DB" themeColor="MediumPurple"></div>'+
    '<div data-color="#3CB371" themeColor="MediumSeaGreen"></div>'+
    '<div data-color="#7B68EE" themeColor="MediumSlateBlue"></div>'+
    '<div data-color="#00FA9A" themeColor="MediumSpringGreen"></div>'+
    '<div data-color="#48D1CC" themeColor="MediumTurquoise"></div>'+
    '<div data-color="#C71585" themeColor="MediumVioletRed"></div>'+
    '<div data-color="#191970" themeColor="MidnightBlue"></div>'+
    '<div data-color="#F5FFFA" themeColor="MintCream"></div>'+
    '<div data-color="#FFE4E1" themeColor="MistyRose"></div>'+
    '<div data-color="#FFE4B5" themeColor="Moccasin"></div>'+
    '<div data-color="#FFDEAD" themeColor="NavajoWhite"></div>'+
    '<div data-color="#000080" themeColor="Navy"></div>'+
    '<div data-color="#FDF5E6" themeColor="Olive"></div>'+
    '<div data-color="#6B8E23" themeColor="OliveDrab"></div>'+
    '<div data-color="#FFA500" themeColor="Orange"></div>'+
    '<div data-color="#FF4500" themeColor="OrangeRed"></div>'+
    '<div data-color="#DA70D6" themeColor="Orchid"></div>'+
    '<div data-color="#EEE8AA" themeColor="PaleGoldenRod"></div>'+
    '<div data-color="#98FB98" themeColor="PaleGreen"></div>'+
    '<div data-color="#AFEEEE" themeColor="PaleTurquoise"></div>'+
    '<div data-color="#DB7093" themeColor="PaleVioletRed"></div>'+
    '<div data-color="#FFEFD5" themeColor="PapayaWhip"></div>'+
    '<div data-color="#FFDAB9" themeColor="PeachPuff"></div>'+
    '<div data-color="#CD853F" themeColor="Peru"></div>'+
    '<div data-color="#FFC0CB" themeColor="Pink"></div>'+
    '<div data-color="#DDA0DD" themeColor="Plum"></div>'+
    '<div data-color="#B0E0E6" themeColor="PowderBlue"></div>'+
    '<div data-color="#800080" themeColor="Purple"></div>'+
    '<div data-color="#663399" themeColor="RebeccaPurple"></div>'+
    '<div data-color="#FF0000" themeColor="Red"></div>'+
    '<div data-color="#BC8F8F" themeColor="RosyBrown"></div>'+
    '<div data-color="#4169E1" themeColor="RoyalBlue"></div>'+
    '<div data-color="#8B4513" themeColor="SaddleBrown"></div>'+
    '<div data-color="#FA8072" themeColor="Salmon"></div>'+
    '<div data-color="#F4A460" themeColor="SandyBrown"></div>'+
    '<div data-color="#2E8B57" themeColor="SeaGreen"></div>'+
    '<div data-color="#FFF5EE" themeColor="SeaShell"></div>'+
    '<div data-color="#A0522D" themeColor="Sienna"></div>'+
    '<div data-color="#C0C0C0" themeColor="Silver"></div>'+
    '<div data-color="#87CEEB" themeColor="SkyBlue"></div>'+
    '<div data-color="#6A5ACD" themeColor="SlateBlue"></div>'+
    '<div data-color="#708090" themeColor="SlateGrey"></div>'+
    '<div data-color="#FFFAFA" themeColor="Snow"></div>'+
    '<div data-color="#00FF7F" themeColor="SpringGreen"></div>'+
    '<div data-color="#4682B4" themeColor="SteelBlue"></div>'+
    '<div data-color="#D2B48C" themeColor="Tan"></div>'+
    '<div data-color="#008080" themeColor="Teal"></div>'+
    '<div data-color="#D8BFD8" themeColor="Thistle"></div>'+
    '<div data-color="#FF6347" themeColor="Tomato"></div>'+
    '<div data-color="#40E0D0" themeColor="Turquoise"></div>'+
    '<div data-color="#EE82EE" themeColor="Violet"></div>'+
    '<div data-color="#F5DEB3" themeColor="Wheat"></div>'+
    '<div data-color="#FFFFFF" themeColor="White"></div>'+
    '<div data-color="#F5F5F5" themeColor="WhiteSmoke"></div>'+
    '<div data-color="#FFFF00" themeColor="Yellow"></div>'+
    '<div data-color="#9ACD32" themeColor="YellowGreen"></div>'+
    '<button id="cancel">Back</button>'+
    '<button id="save">Save</button>'+
    '</fieldset>'+
    '<div class="file-msg">'+
    '<b id="label-msg"></b>'+
    '<span id="text-msg"></span>'+
    '<button id="close-msg">OK</button>'+
    '</div>'+
    '<button id="open-search"><i class="bi bi-search"></i></button>'+
    '<div id="cont-search"><input type="search" id="search" placeholder="&#xF52A;&nbsp; Track songs.."><div id="list-search"></div></div>'
  );

  $(".file-asses").hide();
  $(".add-color").hide();
  $(".file-msg").hide();
  $("#cont-search").hide();
  
  $("#open-asses").click(function() {
     $(".file-asses").fadeIn(100);
  });
  
  const colorSave1 = localStorage.getItem("color-save-1");
  const colorSave2 = localStorage.getItem("color-save-2");
  const data = $("html").attr("data-set-plyr");
  
  function setColor() {
   const theme = $(".add-color div");
   const set = {color: data}
   if (colorSave1) {
     $(theme).each(function() {
      var clr = $(this).attr("data-color");
      if (clr === colorSave1) {
       var theme1 = $(this).attr("themeColor");
         $("html").attr("data-theme", theme1);
         $(":root").css("--primary-color", colorSave1);
         $(".cur-color").html(theme1);
        console.log("Theme Color: " + theme1);
      }
     });
    } else if (colorSave2) {
      $(theme).each(function() {
       var clr = $(this).attr("data-color");
       if (clr === colorSave2) {
        var theme2 = $(this).attr("themeColor");
          $("html").attr("data-theme", theme2);
          $(":root").css("--primary-color", colorSave2);
          $(".cur-color").html(theme2);
         console.log("Theme Color: " + theme2);
       }
     });
    }
      $("body").attr("data-access-plyr", set.color);
  }
  document.addEventListener("DOMContentLoaded", setColor());

  $(".add-color div").each(function() {
   var setColor = $(this).attr("data-color");
  	$(this).css("background", setColor);
  });

  $("#add-color").click(function() {
    $(".add-color").fadeIn(200);
    $(".add-color").animate({scrollTop: 0},400);
  });
  
  $(".add-color div").click(function(e) {
   e.preventDefault();
    var dataColor = $(this).attr("data-color");
    var themeColor = $(this).attr("themeColor");
     $(":root").css("--primary-color", dataColor);
     $(".cur-color").html(themeColor);
     $(".add-color div").removeClass("select-color");
     $(this).addClass("select-color");
  });
  
  $("#save").click(function(e) {
   e.preventDefault();
    const getClass = $(".add-color div");
    var selectColor = $(getClass).hasClass("select-color");
    var getColor = $(".add-color div.select-color");
    var color = $(getColor).attr("data-color");
    if (selectColor) {
      if (colorSave1) {
        localStorage.removeItem("color-save-1");
        localStorage.setItem("color-save-2", color);
      } else if (colorSave2) {
        localStorage.removeItem("color-save-2");
        localStorage.setItem("color-save-1", color);
      } else {
        localStorage.setItem("color-save-1", color);
    }
      $(".file-msg").fadeIn(60);
      $("#label-msg").html("CHANGE THEME SUCCESSFULLY");
      $("#text-msg").html(`Theme <b style='color:${color}'>Colors</b> have been changed.`);
      $("#close-msg").addClass("success");
    } else {
      $(".file-msg").fadeIn(60);
      $("#label-msg").html("FAILED TO CHANGE THEME");
      $("#text-msg").html("Please select at least one <b>Color</b> before Save.");
      $("#close-msg").removeClass("success");
    }
  });
  
  $("#close-msg").click(function() {
    if ($(this).hasClass("success")) {
      $(window.location).attr("href", location.pathname);
    } else {
      $(".file-msg").fadeOut(80);
    }
  });
  
  $("#cancel").click(function() {
   const curTheme = $(".add-color div");
    if (colorSave1) {
      $(":root").css("--primary-color", colorSave1);
      $(curTheme).each(function() {
        var clr = $(this).attr("data-color");
        if (clr === colorSave1) {
        var theme1 = $(this).attr("themeColor");
          $(".cur-color").html(theme1);
        }
      });
     } else if (colorSave2) {
       $(":root").css("--primary-color", colorSave2);
       $(curTheme).each(function() {
        var clr = $(this).attr("data-color");
        if (clr === colorSave1) {
        var theme1 = $(this).attr("themeColor");
          $(".cur-color").html(theme2);
        }
       });
   	  } else {
    	$(":root").css("--primary-color", "#00FFFF");
        $(".cur-color").html("color");
      }
        $(".add-color div").removeClass("select-color");
        $(".add-color").fadeOut(200);
  });
     
  $("#list div").each(function() {
    var url = $(this).attr("url");
    var artist = $(this).attr("artist");
    var song = $(this).attr("song");
    var cover = $(this).attr("cover");
    if (url) {
      $("#list-search").append(`<span class="ls" url="${url}" artist="${artist}" song="${song}" cover="${cover}"><b>${artist}</b> &nbsp; <small>${song}</small></span>`);
      $("#list-search .ls").hide();
    } else {
      $("#list-search").append();
    }
  });
  
  $("#open-search").click(function(e) {
    e.preventDefault();
    $("#cont-search").fadeIn(100);
  });
  
  $("#cont-search #search").on("keyup", function() {
    const val = $(this).val().toLowerCase().trim();
    if (val.length === 0) {
      $("#list-search .ls").fadeOut(0);
      $(this).removeClass("keyup");
      $("#open-asses").css("pointerEvents", "auto");
      $("#openList").css("pointerEvents", "auto");
    } else {
      $("#list-search .ls").fadeIn(0).filter(function() {
        return $(this).text().toLowerCase().trim().indexOf(val) == -1;
      }).fadeOut(0);
      $(this).addClass("keyup");
      $("#open-asses").css("pointerEvents", "none");
      $("#openList").css("pointerEvents", "none");
    }
  }).on("change", function() {
     if ($(this).val() === "") {
       $("#list-search .ls").fadeOut(0);
       $(this).removeClass("keyup");
       $("#open-asses").css("pointerEvents", "auto");
       $("#openList").css("pointerEvents", "auto");
     }
  }).on("search", function() { 
     if ($(this).val() === "") {
       $("#list-search .ls").fadeOut(0);
       $(this).removeClass("keyup");
       $("#open-asses").css("pointerEvents", "auto");
       $("#openList").css("pointerEvents", "auto");
     }
  }).on("input", function() { 
     if ($(this).val() === "") {
       $("#list-search .ls").fadeOut(0);
       $(this).removeClass("keyup");
       $("#open-asses").css("pointerEvents", "auto");
       $("#openList").css("pointerEvents", "auto");
     }
  });

  $("#list-search .ls").click(function(e) {
    e.preventDefault();
    const tx = $(this).find("b").text();
     $("#list div").each(function() {
       var pl = $(this).find("b").text();
       if (pl.match(tx)) {
         $("#list div").removeClass("play").attr("id", "").css({"color": "#fafaff", "border-bottom": "1px solid transparent", "background": "", "pointerEvents": "auto"});
         $(this).addClass("play").attr("id", "active").css({"color": "var(--primary-color)", "border-bottom": "1px solid var(--primary-color)", "background": "rgba(0,0,0,0.5)", "pointerEvents": "none"});
         $(window.location).attr("href", "#active");
       }
     });
    var cover = $(this).attr("cover");
     $(".coverAlbum").attr("src", cover);
     $("body").css({
       "background": `url('${cover}')`,
       "background-repeat": "no-repeat",
       "background-size": "cover",
       "background-position": "center"
     });
     $(".artist").html($(this).attr("artist"));
     $(".song").html($(this).attr("song"));
     $("#pause").hide();
     $("#play").show();
     $("audio").trigger("pause");
    var source = $(this).attr("url");
    if (source === "") {
      $("#pause").hide();
      $("#play").show();
      $("audio").trigger("pause");
      return false;
    } else {
      $("audio").attr("src", source);
       setTimeout(function() {
         $("#pause").show();
         $("#play").hide();
         $("audio").trigger("play");
       }, 1000);
      return true;
    }
    $("#list-search .ls").each(function() {
      var type = $(this).attr("url");
      var matchType = {mp3: type.match(".mp3"), wav: type.match(".wav"), ogg: type.match(".ogg"), aac: type.match(".aac")}
      var format = {mp3: "audio/mpeg", wav: "audio/wav", ogg: "audio/ogg", aac: "audio/aac"}
      if (matchType.mp3) {
        $("audio").attr("type", format.mp3);
      } else if (matchType.wav) {
        $("audio").attr("type", format.wav);
      } else if (matchType.ogg) {
        $("audio").attr("type", format.ogg);
      } else if (matchType.aac) {
        $("audio").attr("type", format.aac);
      } else {
        $("audio").attr("type", format.mp3);
      }
    });
  });

  $(document).click(function(e) {
    var target = e.target;    
    var fa = document.querySelector(".file-asses");
    var oa = document.getElementById("open-asses");
    var cs = document.getElementById("cont-search");
    var os = document.getElementById("open-search");
    var sc = document.querySelector("#search");
    if (target !== fa && !fa.contains(target) && target !== oa && !oa.contains(target) && target !== cs && !cs.contains(target) && target !== os && !os.contains(target)) {
      if ($(sc).hasClass("keyup")) {
        $(cs).fadeIn(0);
      } else {
        $(fa).fadeOut(100);
        $(cs).fadeOut(100);
      }
    }
  });

  function loadVer() {
    eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$("0").j(r(){9 1=$("0").g("2-s-8");3(1===2){$("0").a();4.c("d e f 5. \\n»» 5 h: "+1)}i{$("0").D();4.k("l: m o p q 6 7. \\t u v w x y z 3 A B C b 6 7.")}});',40,40,'body|getData|data|if|console|Version|this|player|plyr|let|fadeIn|use|log|Load|the|Player|attr|ID|else|ready|error|Error|No||version|detected|on|function|access|nPlease|do|not|modify|any|JS|code|you|want|to|fadeOut'.split('|'),0,{}));
  }
  document.addEventListener("DOMContentLoaded", loadVer());

});

  window.addEventListener("load", function() { 
   const swipe = new SwipeEventDispatcher(document.body);

    swipe.on("SWIPE_RIGHT", function() {
      if ($("#list div.play").hasClass("first")) {
        $("#list div").last().addClass("play").attr("id", "active").css({"color": "var(--primary-color)", "border-bottom": "1px solid var(--primary-color)", "background": "rgba(0,0,0,0.5)", "pointerEvents": "none"});
        $("#list div.play:first").removeClass("play").attr("id", "").css({"color": "#fafaff", "border-bottom": "1px solid transparent", "background": "", "pointerEvents": "auto"});
        $("#list").animate({scrollTop: 10000}, 600);
        $("audio").attr("src", $("#list div.play").attr("url"));
        $(window.location).attr("href", "#active");
       var cover = $("#list div.play").attr("cover");
        $(".coverAlbum").attr("src", cover);
        $("body").css({
          "background": `url('${cover}')`,
          "background-repeat": "no-repeat",
          "background-size": "cover",
          "background-position": "center"
        });
        $(".artist").html($("#list div.play").attr("artist"));
        $(".song").html($("#list div.play").attr("song"));
          $("#pause").hide();
          $("#play").show();
          $("audio").trigger("pause");
        var source = $("#list div.play").attr("url");
        if (source === "") {
          $("#pause").hide();
          $("#play").show();
          $("audio").trigger("pause");
          return false;
        } else {
          setTimeout(function() {
            $("#pause").show();
            $("#play").hide();
            $("audio").trigger("play");
          }, 1000);
          return true;
        }
      } else {
        $("#list div.play").prev().addClass("play").attr("id", "active").css({"color": "var(--primary-color)", "border-bottom": "1px solid var(--primary-color)", "background": "rgba(0,0,0,0.5)", "pointerEvents": "none"});
        $("#list div.play:last").removeClass("play").attr("id", "").css({"color": "#fafaff", "border-bottom": "1px solid transparent", "background": "", "pointerEvents": "auto"});
        $("audio").attr("src", $("#list div.play").attr("url"));
        $(window.location).attr("href", "#active");
       var cover = $("#list div.play").attr("cover");
        $(".coverAlbum").attr("src", cover);
        $("body").css({
          "background": `url('${cover}')`,
          "background-repeat": "no-repeat",
          "background-size": "cover",
          "background-position": "center"
        });
        $(".artist").html($("#list div.play").attr("artist"));
        $(".song").html($("#list div.play").attr("song"));
          $("#pause").hide();
          $("#play").show();
          $("audio").trigger("pause");
        var source = $("#list div.play").attr("url");
        if (source === "") {
          $("#pause").hide();
          $("#play").show();
          $("audio").trigger("pause");
          return false;
        } else {
          setTimeout(function() {
            $("#pause").show();
            $("#play").hide();
            $("audio").trigger("play");
          }, 1000);
          return true;
        }
      }
        $("#list div").each(function() {
          var type = $(this).attr("url");
          var matchType = {mp3: type.match(".mp3"), wav: type.match(".wav"), ogg: type.match(".ogg"), aac: type.match(".aac")}
          var format = {mp3: "audio/mpeg", wav: "audio/wav", ogg: "audio/ogg", aac: "audio/aac"}
          if (matchType.mp3) {
            $("audio").attr("type", format.mp3);
          } else if (matchType.wav) {
            $("audio").attr("type", format.wav);
          } else if (matchType.ogg) {
            $("audio").attr("type", format.ogg);
          } else if (matchType.aac) {
            $("audio").attr("type", format.aac);
          } else {
            $("audio").attr("type", format.mp3);
          }
        });
    });
    swipe.on("SWIPE_LEFT", function() {
      if ($("#list div.play").hasClass("last")) {
        $("#list div").first().addClass("play").attr("id", "active").css({"color": "var(--primary-color)", "border-bottom": "1px solid var(--primary-color)", "background": "rgba(0,0,0,0.5)", "pointerEvents": "none"});
        $("#list div.play:last").removeClass("play").attr("id", "").css({"color": "#fafaff", "border-bottom": "1px solid transparent", "background": "", "pointerEvents": "auto"});
        $("#list").animate({scrollTop: 0}, 150);
        $("audio").attr("src", $("#list div.play").attr("url"));
        $(window.location).attr("href", "#active");
      var cover = $("#list div.play").attr("cover");
        $(".coverAlbum").attr("src", cover);
        $("body").css({
          "background": `url('${cover}')`,
          "background-repeat": "no-repeat",
          "background-size": "cover",
          "background-position": "center"
        });
        $(".artist").html($("#list div.play").attr("artist"));
        $(".song").html($("#list div.play").attr("song"));
          $("#pause").hide();
          $("#play").show();
          $("audio").trigger("pause");
        var source = $("#list div.play").attr("url");
        if (source === "") {
          $("#pause").hide();
          $("#play").show();
          $("audio").trigger("pause");
          return false;
        } else {
          setTimeout(function() {
            $("#pause").show();
            $("#play").hide();
            $("audio").trigger("play");
          }, 1000);
          return true;
        }
      } else {
        $("#list div.play").next().addClass("play").attr("id", "active").css({"color": "var(--primary-color)", "border-bottom": "1px solid var(--primary-color)", "background": "rgba(0,0,0,0.5)", "pointerEvents": "none"});
        $("#list div.play:first").removeClass("play").attr("id", "").css({"color": "#fafaff", "border-bottom": "1px solid transparent", "background": "", "pointerEvents": "auto"});
        $("audio").attr("src", $("#list div.play").attr("url"));
        $(window.location).attr("href", "#active");
      var cover = $("#list div.play").attr("cover");
        $(".coverAlbum").attr("src", cover);
        $("body").css({
          "background": `url('${cover}')`,
          "background-repeat": "no-repeat",
          "background-size": "cover",
          "background-position": "center"
        });
        $(".artist").html($("#list div.play").attr("artist"));
        $(".song").html($("#list div.play").attr("song"));
          $("#pause").hide();
          $("#play").show();
          $("audio").trigger("pause");
        var source = $("#list div.play").attr("url");
        if (source === "") {
          $("#pause").hide();
          $("#play").show();
          $("audio").trigger("pause");
          return false;
        } else {
          setTimeout(function() {
            $("#pause").show();
            $("#play").hide();
            $("audio").trigger("play");
          }, 1000);
          return true;
        }
      }
        $("#list div").each(function() {
          var type = $(this).attr("url");
          var matchType = {mp3: type.match(".mp3"), wav: type.match(".wav"), ogg: type.match(".ogg"), aac: type.match(".acc")}
          var format = {mp3: "audio/mpeg", wav: "audio/wav", ogg: "audio/ogg", aac: "audio/aac"}
          if (matchType.mp3) {
            $("audio").attr("type", format.mp3);
          } else if (matchType.wav) {
            $("audio").attr("type", format.wav);
          } else if (matchType.ogg) {
            $("audio").attr("type", format.ogg);
          } else if (matchType.aac) {
            $("audio").attr("type", format.aac);
          } else {
            $("audio").attr("type", format.mp3);
          }
        });
    });
  });

  class SwipeEventDispatcher {
   constructor(element, options = {}) {
     this.evtMap = {
       SWIPE_LEFT: [],
       SWIPE_RIGHT: [],
       SWIPE_UP: [],
       SWIPE_DOWN: []
    };
     this.xDown = null;
     this.yDown = null;
     this.element = element;
     this.isMouseDown = false;
     this.listenForMouseEvents = true;
     this.options = Object.assign({ 
       triggerPercent: 0.3 
    }, options);

     element.addEventListener('touchstart', evt => this.handleTouchStart(evt), false);
     element.addEventListener('touchend', evt => this.handleTouchEnd(evt), false);
     element.addEventListener('mousedown', evt => this.handleMouseDown(evt), false);
     element.addEventListener('mouseup', evt => this.handleMouseUp(evt), false);
   }
    on(evt, cb) {
      this.evtMap[evt].push(cb);
    }
    off(evt, lcb) {
      this.evtMap[evt] = this.evtMap[evt].filter(cb => cb !== lcb);
    }
    trigger(evt, data) {
      this.evtMap[evt].map(handler => handler(data));
    }
    handleTouchStart(evt) {
      this.xDown = evt.touches[0].clientX;
      this.yDown = evt.touches[0].clientY;
    }
    handleMouseDown(evt) {
     if (this.listenForMouseEvents==false) return;
       this.xDown = evt.clientX;
       this.yDown = evt.clientY;
       this.isMouseDown = true;
    }
    handleMouseUp(evt) {
     if (this.isMouseDown == false) return;
      const deltaX = evt.clientX - this.xDown;
      const deltaY = evt.clientY - this.yDown;
      const distMoved = Math.abs(Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY);
      const activePct = distMoved / this.element.offsetWidth;
      if (activePct > this.options.triggerPercent) {
       if (Math.abs(deltaX) > Math.abs(deltaY)) {
         deltaX < 0 ? this.trigger('SWIPE_LEFT') : this.trigger('SWIPE_RIGHT');
       } else {
         deltaY > 0 ? this.trigger('SWIPE_UP') : this.trigger('SWIPE_DOWN');
       }
      }
    }
    handleTouchEnd(evt) {
     const deltaX = evt.changedTouches[0].clientX - this.xDown;
     const deltaY = evt.changedTouches[0].clientY - this.yDown;
     const distMoved = Math.abs(Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY);
     const activePct = distMoved / this.element.offsetWidth;
     if (activePct > this.options.triggerPercent) {
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        deltaX < 0 ? this.trigger('SWIPE_LEFT') : this.trigger('SWIPE_RIGHT');
      } else {
        deltaY > 0 ? this.trigger('SWIPE_UP') : this.trigger('SWIPE_DOWN');
      }
     }
    }
  }

  const timeElapsed = document.getElementById("time-elapsed");
  const duration = document.getElementById("duration");
  const audio = document.querySelector("audio");
  
  function formatTime(timeInSeconds) {
   const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);
     return {
       minutes: result.substr(3, 2),
       seconds: result.substr(6, 2),
     }
  }

  function initializeAudio() {
   const audioDuration = Math.round(audio.duration);
   const time = formatTime(audioDuration);
    duration.innerText = `${time.minutes}:${time.seconds}`;
    duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
  }
  audio.addEventListener('loadedmetadata', initializeAudio);
  
  function updateTimeElapsed() {
   const time = formatTime(Math.round(audio.currentTime));
    timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
    timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
  }
  audio.addEventListener('timeupdate', updateTimeElapsed);
  
  const progressBar = document.getElementById('progress-bar');
  const seek = document.getElementById('seek');
  
  function initializeAudio() {
   const audioDuration = Math.round(audio.duration);
    seek.setAttribute('max', audioDuration);
    progressBar.setAttribute('max', audioDuration);
   const time = formatTime(audioDuration);
    duration.innerText = `${time.minutes}:${time.seconds}`;
    duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
  }

  function updateProgress() {
    seek.value = Math.floor(audio.currentTime);
    progressBar.value = Math.floor(audio.currentTime);
  }
  audio.addEventListener('timeupdate', updateProgress);
  
  function updateSeek(event) {
   const skipTo = Math.round((event.offsetX / event.target.clientWidth) * parseInt(event.target.getAttribute('max'), 10));
    seek.setAttribute('data-seek', skipTo);
  }
  seek.addEventListener('mousemove', updateSeek);
  
  function skipAhead(event) {
   const skipTo = event.target.dataset.seek ? event.target.dataset.seek : event.target.value;
    audio.currentTime = skipTo;
    progressBar.value = skipTo;
    seek.value = skipTo;
  }
  seek.addEventListener('input', skipAhead);

  const primaryFont = document.querySelector(":root"),
       fontFamily = "--primary-font",
      docElement = document.querySelector("title");
