  const 
   primaryContent = document.querySelector(":root"),
    color = "--primary-color",
     scrollBar = document.querySelector(".container-content"),
     show = "show-scrollbar",
    hide = "hide-scrollbar";
      
$(document).ready(function() {

  $(".content div").each(function() {
    $(this).html($(this).attr("title"));
  });

  const div = $(".content div:first");
   $(div).css("border-bottom", "1.2px solid var(--primary-color)");
    OvenPlayer.create("player", {
   sources: [{
      file: $(div).attr("url"),
      type: $(div).attr("type")
   }],
   waterMark: {
      text: $(div).attr("title"),
      position: "top-left",
      opacity: 0.7,
      font: {
        "font-size": "12px",
        "color": "#fafaff",
        "font-weight": "400",
      }
    },
 
    image: "https://iili.io/J3ItixI.jpg",
    aspectRatio: "16:9",
    autoStart: false,
    autoFallback: true,
    controls : true,
    loop: false,
    showBigPlayButton: false,
    seekControlInterval: 10,
    expandFullScreenUI: true,
    disableSeekUI: false,
    showSeekControl: $(div).attr("vod"),
    mute: false,
    timecode: true,
    playbackRate: 1,
    playbackRates: [2, 1.5, 1, 0.5, 0.25],
    currentProtocolOnly: true,
    volume: 100,
  });
    
    $("video").attr("autoplay", true).ready(function() {
       $("video").trigger("play");
    });

  $(".content div").click(function(e) {
    e.preventDefault();
      $(".content div").css("border-bottom", "1.2px solid transparent");
      $(this).css("border-bottom", "1.2px solid var(--primary-color)");
      var vidUrl = $(this).attr("url");
      var vidType = $(this).attr("type");
      var vidTitle = $(this).attr("title");
      var vidVod = $(this).attr("vod");

    let player = OvenPlayer.create("player", {
       sources: [{
         file:  vidUrl,
         type: vidType
       }],
       
       waterMark: {
         text: vidTitle,
         position: "top-left",
         opacity: 0.7,
         font: {
          "font-size": "12px",
          "color": "#fafaff",
          "font-weight": "400",
         }
       },
       
        image: "https://iili.io/J3ItixI.jpg",
        aspectRatio: "16:9",
        autoStart: false,
        autoFallback: true,
        controls : true,
        loop: false,
        showBigPlayButton: false,
        seekControlInterval: 10,
        expandFullScreenUI: true,
        disableSeekUI: false,
        showSeekControl: vidVod,
        mute: false,
        timecode: true,
        playbackRate: 1,
        playbackRates: [2, 1.5, 1, 0.5, 0.25],
        currentProtocolOnly: true,
        volume: 100,
     });
    
    setTimeout(function() {
        $("video").trigger("play");
    }, 2000);
  });

  $(".content div").each(function() { 
    if ($(this).attr("title") === "") { 
      $(this).removeAttr("title"); 
    } 
  });

  $(".container-content").on("touchstart", function() {
    $(".container-content").addClass("scrollbar");
  });
   var inActivity = function() {
    var time;
     document.ontouchend = resetTimer;
     function endTime() {
       $(".container-content").removeClass("scrollbar");
     }
     function resetTimer() {
       clearTimeout(time);
       time = setTimeout(endTime, 1000);
     }
   } 
  inActivity();
  
});

  let plugin = OvenPlayer.create("player");
  console.log("OvenPlayer v"+plugin.getVersion());
