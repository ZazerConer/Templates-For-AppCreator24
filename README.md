<h2 align="center">Templates for AppCreator24</h2>

<br>

**This design uses HTML CSS and JavaScript.**

Custom templates on your design.

## About AppCreator24

Many app makers want to create their own android apps, but don’t have an interesting idea or design on their apps. 

But not on this **AppCreator24**, it makes it easy for you to create your own applications without programming code that is very difficult for you to remember. 

## Advantages of applications you can create : 

- _Blog_

- _Website_

- _Music_ 

- _Video_

- _And much more.._

#### Go here : https://www.appcreator24.com

<hr>

## Is this template free?

Yes, you can use this template without any hesitation.

You can place this template on the _HTML code section_ (AppCreator24).

Using HTML code is easier and more interesting because you can create things you like to create on your app with your own design.

Feel free to change the html code with your own design to make it look more attractive.

If you want more templates for your app **[Here](https://www.w3schools.com/w3css/w3css_templates.asp)**

You can edit and preview the html source code : **[Online HTML Editor](https://www.tutorialspoint.com/online_html_editor.php)**

<hr>

## Build your App with HTML

Starting with **HTML** it is very easy for you to style or design your App. But now you don't have to do that, you just have to copy the **_code_** that has been designed in the **template** and all you have to do is put the content in your App later.

<br>

**Let's start now**

<br>

<details>
<summary><b>Expand</b></summary>

<br>

`HTML`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <title>Content Title</title>

  <!-- Link to app template source -->
  <link rel="stylesheet" href="https://ac24.zazerconer.workers.dev/template/app/build/template-app.min.css">
  <script src="https://ac24.zazerconer.workers.dev/template/app/build/template-app.min.js"></script>
  <link rel="stylesheet" href="https://ac24.zazerconer.workers.dev/template/app/build/bootstrap-icons/1.10.5/icons.min.css">
  <script src="https://ac24.zazerconer.workers.dev/template/app/build/jquery/3.7.1/jquery.min.js"></script>

</head>
<body>

  <!-- Loading section -->
  <div id="loading">
    <div class="loader"><div class="loaderBar"></div></div>
  </div>

  <!-- Top navigation -->
  <div id="top-navigation">
    <div>	
     <!-- Menu button -->
     <button class="menuBtn" id="btn-menu">&#xF5D3;</button>		
     <!-- App logo -->
     <img id="app-logo" src="http://app-logo" alt="logo">		
     <!-- App name -->
     <span id="app-name">App Name</span>
    </div>
    <div>
      <!-- 
       • Action button.
       • Remove/hide any action buttons if you don't need them.
       • Do not change or delete action links, unless you want to 
       • replace an existing link with another.
      -->
      <!-- Search -->
      <button class="btnNav" id="btn-search" onclick="window.location.href='http://action_search'">&#xF52A;</button>
      <!-- Notification -->	
      <button class="btnNav" id="btn-notif" onclick="window.location.href='http://action_notifications'">&#xF18A;</button>
      <!-- Profile -->	
      <button class="btnNav" id="btn-profile" onclick="window.location.href='http://action_profile'">&#xF4E1;</button>
      <!-- Exit -->	
      <button class="btnNav" id="btn-exit" onclick="window.location.href='http://action_exit'">&#xF1C3;</button>
    </div>
  </div>

  <!-- Menu section -->
  <div id="container-menu">
   <div class="menu-section">
     <!-- 
      • Rename the section button.
      • Add location link » go:Section or https//..
      • Add more section buttons or remove existing buttons.
      • To add an icon with text, do this » <button><i class="bi bi-icon"></i>Section Name</button>
     -->
     <button class="btn-section btn" id="btn-st-1" onclick="window.location.href=''">Section 1</button>
     <button class="btn-section btn" id="btn-st-3" onclick="window.location.href=''">Section 2</button>
     <button class="btn-section btn" id="btn-st-4" onclick="window.location.href=''">Section 3</button>
     <button class="btn-section btn" id="btn-st-2" onclick="window.location.href=''">Section 4</button>
     <button class="btn-section btn" id="btn-st-2" onclick="window.location.href=''">Section 5</button>
   </div>
  </div>

  <!-- Content -->
  <div id="container-content">
    <section id="content">
    <!-- 
     • Place your content here (Main page).
     • Do not use <p> or <span> tags for text..
     • just using » <h1>/<h2>/<h3>/<h4>/<h5>/<h6>.
    -->
    </section>
  </div>

  <!-- Bottom navigation -->
  <div id="bottom-navigation">
    <!-- 
     • Add location link » go:Section or https//.. 
     • Add an icon to the button.
    -->
    <button class="btnNav btn" id="btn-go-1" onclick="window.location.href=''"></button>
    <button class="btnNav btn" id="btn-go-2" onclick="window.location.href=''"></button>
    <button class="btnNav btn" id="btn-go-3" onclick="window.location.href=''"></button>
    <button class="btnNav btn" id="btn-go-4" onclick="window.location.href=''"></button>
    <button class="btnNav btn" id="btn-go-5" onclick="window.location.href=''"></button>
  </div>

  <!-- 
   • App theme color.
   • Do not move this position, place this <script> link 
   • before the end of the closing </body>.
  -->
  <script src="https://ac24.zazerconer.workers.dev/template/app/build/theme/default.min.js"></script>

</body>
</html>
```

<br>

- **[DEMO](https://zazerconer.github.io/Templates-For-AppCreator24/template/app/demo/app/)**

<br>

Get the Icon font here » **[Bootstrap Icons](https://icons.getbootstrap.com/)**

<br>
<br>

Action Links are available in the App:

| Name | Link |
| --- | --- |
| Search | `http://action_search` |
| Notification | `http://action_notifications` |
| Profile | `http://action_profile` |
| Exit | `http://action_exit` |
| Share | `http://action_share` |
| Office | `http://action_offices` |
| Product | `http://action_products` |

<br>

### How to load content from URL and insert into current section?

Let's do it and see how easy you can make it.

<br>

1. Remove `onclick=""` from any button tags you want to use.

2. Place this `<script>` link in the HTML.

**Vue.js**
```url
 <script src="https://ac24.zazerconer.workers.dev/template/app/build/vue/3.3.4/global.prod/vue.min.js"></script>
```

<br>

3. Create JS code **_jQuery_**.

<br>

<details>
<summary><b>See Code</b></summary>

<br>

`JS` _jQuery_
```js
$(document).ready(function() {

   // Get components from Vue.js.
  const {createApp} = Vue;

/* Create content with <iframe> */

   // Load the main content first (Home).
  var home = "http://home-page";
   createApp({
      template: `<iframe id="load-content" src="${home}"></iframe>`
   }).mount("#content");
   $("#btn-go-3").css({
       // Active section buton on main content.
      "opacity": "0.5",
       // Disable click on the first button.
      "pointerEvents": "none"
   });

/**
 * Section content (Bottom navigation) 
 * Button action works,
 * left-3 ‹ left-2 ‹ middle-1 › right-4 › right-5.
**/
   $("#btn-go-1").click(function() {
     var content3 = "http://content-3";
      createApp({
         template: `<iframe id="load-content" src="${content3}"></iframe>`
      }).mount("#content");
   });
   $("#btn-go-2").click(function() {
     var content2 = "http://content-2";
      createApp({
         template: `<iframe id="load-content" src="${content2}"></iframe>`
      }).mount("#content");
   });
   $("#btn-go-3").click(function() {
      // Same as URL link above (Home).
     var content1 = "http://content-1";
      createApp({
         template: `<iframe id="load-content" src="${content1}"></iframe>`
      }).mount("#content");
   });
   /* Add more below */

    // Section page (Menu).
   $("#btn-st-1").click(function() {
     var page1 = "http://home-page";
      createApp({
         template: `<iframe id="load-content" src="${page1}"></iframe>`
      }).mount("#content");
   });
   $("#btn-st-2").click(function() {
     var page2 = "http://page-2";
      createApp({
         template: `<iframe id="load-content" src="${page2}"></iframe>`
      }).mount("#content");
   });
   /* Add more below */

    // Click the (Contents/Pages) button.
   $(".btn").click(function(e) {
     e.preventDefault();
        // Start Loading content.
       $("#loading").css({"visibility": "visible", "opacity": "1", "z-index": "700"});
       $("#content").animate({scrollTop: 0},0);
       $("#bottom-navigation button").css("pointerEvents", "auto");
       $(".menu-section button").css("pointerEvents", "auto");
       $(this).css("pointerEvents", "none");
       $("#container-menu").css("width", "0");
         var btnSection = $(".btn-section");
       for (let i = 0; i < btnSection.length; i++) {
         $(btnSection[i]).css("opacity", "0");
       }
         $("#container-content").css({"pointerEvents": "auto", "overflow": "visible"});
      // Finished loading content.
     $("#load-content").on("load", function() {
         $("#loading").css({"visibility": "hidden", "opacity": "0", "z-index": "0"});
     });
   });

    // Set iframe attributes.
   $("#load-content").attr({
     role: "application",
     title: "Web App",
     loading: "lazy",
     scrolling: "auto",
     frameborder: "0",
     referrerpolicy: "no-referrer",
     allow: "fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
   });

});
```

<br>

- **[DEMO](https://zazerconer.github.io/Templates-For-AppCreator24/template/app/demo/iframe/)**

<br>

For the `<iframe>` tag you don't need to style it in css, because it is already adapted to the content you will place later. If you want to change it just go to the **CSS** **[file](https://github.com/ZazerConer/Templates-For-AppCreator24/blob/main/template/app/build/template-app.css)**, find `#load-content` and read in the _code_ you want to change after that create a new JS code. Do it like this.

```js
$("#load-content").css("", "");

/* or */

$("#load-content").css({
  "": "",
  "": "",
  "": ""
});
```

<br>
<br>

> **Important:**
To use `<iframe>`, make sure your site page for **'X-Frame-Options'** header is set to **"ALLOW"**.
> You can try pasting the **URL** in an `<iframe>` tag to see if it's allowed.

<hr>

Do not use the same `<section>` tag with multiple contents when you are not using `<iframe>`.
- Create more `<section>` with different » **id** or **class** and then set `section` to `display:none`, to open just set it to `display:block` and all other sections are set to `display:none`.

<br>

**Example:**

Without `<iframe>` and `go:Section` links.

<br>
 
`HMTL`
```html
<div id="container-content">
  <section id="content1">Section 1</section>
  <section id="content2">Section 2</section>
  <section id="content3">Section 3</section>
  <section id="content4">Section 4</section>
  <section id="content5">Section 5</section>
</div>
```
 
`JS`
```js
$(document).ready(function() {

  $("#btn-go-1").click(function() {
      // Open this section.
     $("#content1").css("display", "block");
     // Hide all sections.
    $("#container-content section").css("display", "none");
  });
  $("#btn-go-2").click(function() {
     $("#content2").css("display", "block");
    $("#container-content section").css("display", "none");
  });
  /* Add more below */

});
```
 
`CSS`
```css
 /* All section content */
 #container-content section {
   display: none;
 }
 /* Home section content */
 #content1 {
   display: block;
 }
```
</details>

<br>

### App Theme Color

Change the App **Theme** with your favorite color.

<br>

<details>
<summary><b>See Code</b></summary>

<br>

`JS`
```js
 // Top navigation.
$("#top-navigation").css("background", "");
 // Top navigation: icon.
$("#top-navigation button").css("color", "");
 // Top navigation: title.
$("#app-name").css("color", "");
 // Bottom navigation.
$("#bottom-navigation").css("background", "");
 // Bottom navigation: icon.
$("#bottom-navigation .bi").css("color", "");
 // Menu.
$("#container-menu").css("background", "");
 // Menu: section button.
$("#container-menu button").css("color", "");
 // Menu: section icon.
$("#container-menu .bi").css("color", "");
 // Content.
$("section").css({"color": "", "background": ""});
 // Loading section.
$("#loading").css("background", "");
 // body.
$("body").css("background", "");
```

<br>

**OR**

Use pre-built theme color templates.

<br>

- **[GET HERE](https://github.com/ZazerConer/Templates-For-AppCreator24/blob/main/template/app/build/theme/color.md)**
</details>

<br>

</details>

<br>
<hr>

## See more templates below

<br>

### Video Gallery

Template for _Video Gallery_.

<br>

<details>
<summary><b>Expand</b></summary>

<br>

`HTML`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <title>Content Title</title>

  <script src="https://ac24.zazerconer.workers.dev/template/app/build/jquery/3.7.1/jquery.min.js"></script>
  <link rel="stylesheet" href="https://ac24.zazerconer.workers.dev/template/app/build/video-gallery/css/style.min.css">

</head>
<body>

  <div class="container-content">
   <div class="gallery-content">
    <section class="section-content" id="s1">
       <h4>Section 1</h4>
       <img src="" location="" title="" desc="">
       <img src="" location="" title="" desc="">
       <img src="" location="" title="" desc="">
    </section>
    <section class="section-content" id="s2">
      <h4>Section 2</h4>
      <img src="" location="" title="" desc="">
      <img src="" location="" title="" desc="">
      <img src="" location="" title="" desc="">
    </section>
    <section class="section-content" id="s3">
      <h4>Section 3</h4>
      <img src="" location="" title="" desc="">
      <img src="" location="" title="" desc="">
      <img src="" location="" title="" desc="">
    </section>
    <section class="section-content" id="s4">
      <h4>Section 4</h4>
      <img src="" location="" title="" desc="">
      <img src="" location="" title="" desc="">
      <img src="" location="" title="" desc="">
    </section>
    <section class="section-content" id="s5">
      <h4>Section 5</h4>
      <img src="" location="" title="" desc="">
      <img src="" location="" title="" desc="">
      <img src="" location="" title="" desc="">
    </section>
   </div>
  </div>

  <div class="select-section">
   <button class="btn-section" section="1">Section 1</button>
   <button class="btn-section" section="2">Section 2</button>
   <button class="btn-section" section="3">Section 3</button>
   <button class="btn-section" section="4">Section 4</button>
   <button class="btn-section" section="5">Section 5</button>
  </div>

  <script src="https://ac24.zazerconer.workers.dev/template/app/build/video-gallery/js/script.min.js"></script>

<script>
   /* Set color for the primary content */
  $(primaryContent).css(color, "#00BCD4");

   /* Set theme content » value: dark | light */
  $(themeContent).addClass(dark);

   /* Show/Hide scrollbar */
   /* Only active for touchscreen devices */
   /* value: show | hide */
  $(scrollBar).addClass(show);

   /* Image content style */
  $(imgContent).css({
    width: "4.5em",
    height: "4.5em",
    margin: "10px",
    padding: "0",
    borderRadius: "5px",
    background: "transparent"
  });
  
   /* Placeholder Image content (text) */
  $(imgContent).each(function() { 
    $(this).attr(dataContent, "Content");
  });
</script>

</body>
</html>
```

- **[DEMO](https://zazerconer.github.io/Templates-For-AppCreator24/template/app/demo/video-gallery/)**

<br>

<div align="center"><strong>Use of Video Gallery</strong></div>

<br>

**Image content:**

```html
<img src="" location="" title="" desc="">
```

<br>

| Attribute | Value |
| --- | ---|
| src | `image.jpg` |
| location | `go:` |
| title | _optional_ |
| desc | _optional_ |

<br>

1. Image URL

`src="http://img-content.jpg"`

2. Add location link: Reference `go:`

`location="go:Video"`

3. Video title.

Put a video title or leave it blank.

`title="My Video"`

4. Video description

Put a video description or leave it blank.

`desc="My Video Content"`

<br>

To view the **Title** and **Description**, press and hold the _Image content_ for a few seconds then release the hold.
But if the value on the attribute is empty, it will not be shown.

<br>

**Added more content and section buttons**

Max content section: **8**

- `<section class="section-content" id=""></section>`

- `<button class="btn-section" section=""></button>`

<br>

**In Portrait mode the button will be hidden**

- **600px**: _btn_ `7/8` | **500px**: _btn_ `6/7/8` | **400px**: _btn_ `5/6/7/8`.
- Only show all buttons when switching to Landscape mode.

</details>

<br>
<hr>
<br>

### Video Playlist

Template for _Video Playlist_.

<br>

<details>
<summary><b>Expand</b></summary>

<br>

`HTML`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <title>Content Title</title>

  <script src="https://ac24.zazerconer.workers.dev/template/app/build/jquery/3.7.1/jquery.min.js"></script>
  <link rel="stylesheet" href="https://ac24.zazerconer.workers.dev/template/app/build/video-playlist/css/style.min.css">
  <link rel="stylesheet" href="https://ac24.zazerconer.workers.dev/template/app/build/video-playlist/font/Axiforma.min.css">
  <script src="https://ac24.zazerconer.workers.dev/template/app/build/video-playlist/ovpjs/0.10.31/ovenplayer.all.debug.min.js"></script>

</head>
<body>

  <div id="player"></div>

  <div class="container-content">
   <div class="content">
     <div url="" type="" title="" vod=""></div>
     <div url="" type="" title="" vod=""></div>
     <div url="" type="" title="" vod=""></div>
     <div url="" type="" title="" vod=""></div>
     <div url="" type="" title="" vod=""></div>
     <div url="" type="" title="" vod=""></div>
   </div>
  </div>

  <script src="https://ac24.zazerconer.workers.dev/template/app/build/video-playlist/js/script.min.js"></script>

<script>
   /* Set color for the primary content */
  $(primaryContent).css(color, "#00BCD4");

   /* Show/Hide scrollbar */
   /* Only active for touchscreen devices */
   /* value: show | hide */
  $(scrollBar).addClass(show);
</script>

</body>
</html>
```

- **[DEMO](https://zazerconer.github.io/Templates-For-AppCreator24/template/app/demo/video-playlist/)**

<br>

<div align="center"><strong>Use of Video Playlist</strong></div>

<br>

**Element content:** `<div>`

```html
<div url="" type="" title="" vod=""></div>
```

<br>

| Attribute | Value |
| --- | ---|
| url | `video.mp4` |
| type | `mp4 / hls / dash / webm` |
| title | _optional_ |
| vod | `true / false` |

<br>

1. Video URL.

`url="http://video-content.mp4"`

2. Type of media source.

**MP4**

`url="http://video-content.mp4" type="mp4"`

**HLS**

`url="http://video-content.m3u8" type="hls"`

**MPEG-DASH**

`url="http://video-content.mpd" type="dash"`

**WebM**

`url="http://video-content.mkv" type="webm"`

3. Video title.

`title="Video Content Title"`

4. Stream video.

Set value: `true` / `false`

- If the video is **VOD**:

`vod="true"`

- If the video is **LIVE**:

`vod="false"`

<br>

**Player plugins used for video content:**

**[OvenPlayer](https://github.com/AirenSoft/OvenPlayer)**

</details>

<br>
<hr>
<br>

### Movie Template

Template for _Movie App_.

<br>

<details>
<summary><b>Expand</b></summary>

<br>

`HTML`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <title>Content Title</title>

  <link rel="stylesheet" href="https://ac24.zazerconer.workers.dev/template/app/build/movie-template/style.min.css">
  <script src="https://ac24.zazerconer.workers.dev/template/app/build/jquery/3.7.1/jquery.min.js"></script>

</head>
<body>

  <div class="top-poster">
   <img tp="p1" src="" location="" title="" desc="" year="" rating="">
   <img tp="p2" src="" location="" title="" desc="" year="" rating="">
   <img tp="p3" src="" location="" title="" desc="" year="" rating="">
   <img tp="p4" src="" location="" title="" desc="" year="" rating="">
   <img tp="p5" src="" location="" title="" desc="" year="" rating="">
   <img tp="p6" src="" location="" title="" desc="" year="" rating="">
   <img tp="p7" src="" location="" title="" desc="" year="" rating="">
   <img tp="p8" src="" location="" title="" desc="" year="" rating="">
  </div>

  <section class="container-section" id="s1">
   <h3>Section 1</h3>
   <div class="content-section">
    <img src="" location="" title="" desc="" year="" rating="">
    <img src="" location="" title="" desc="" year="" rating="">
    <img src="" location="" title="" desc="" year="" rating="">
   </div>
  </section>

  <section class="container-section" id="s2">
   <h3>Section 2</h3>
   <div class="content-section">
    <img src="" location="" title="" desc="" year="" rating="">
    <img src="" location="" title="" desc="" year="" rating="">
    <img src="" location="" title="" desc="" year="" rating="">
   </div>
  </section>

  <section class="container-section" id="s3">
   <h3>Section 3</h3>
   <div class="content-section">
    <img src="" location="" title="" desc="" year="" rating="">
    <img src="" location="" title="" desc="" year="" rating="">
    <img src="" location="" title="" desc="" year="" rating="">
   </div>
  </section>

  <section class="container-section" id="s4">
   <h3>Section 4</h3>
   <div class="content-section">
    <img src="" location="" title="" desc="" year="" rating="">
    <img src="" location="" title="" desc="" year="" rating="">
    <img src="" location="" title="" desc="" year="" rating="">
   </div>
  </section>
  
  <section class="container-section" id="s5">
   <h3>Section 5</h3>
   <div class="content-section">
    <img src="" location="" title="" desc="" year="" rating="">
    <img src="" location="" title="" desc="" year="" rating="">
    <img src="" location="" title="" desc="" year="" rating="">
   </div>
  </section>

  <div class="section-bar">
   <div bar="section1"><i class="bi bi-film"></i></div>
   <div bar="section2">S2</div>
   <div bar="section3">S3</div>
   <div bar="section4">S4</div>
   <div bar="section5">S5</div>
  </div>

  <script src="https://ac24.zazerconer.workers.dev/template/app/build/movie-template/script.min.js"></script>
  <script src="https://ac24.zazerconer.workers.dev/template/app/build/swiper/10/swiper-bundle.min.js"></script>

<script>
/* Set color for the primary content */
  $(primaryContent).css(color, "#00BCD4");
  
/* Change the primary font */
  const fontface = {
    load: "https://fonts.cdnfonts.com/css/lt-bump"
  }
  $(primaryFont).css(fontFamily, "LT Bump, sans-serif");
  $(docElement).after(`<link rel="stylesheet" href="${fontface.load}">`);
</script>

</body>
</html>
```

- **[DEMO](https://zazerconer.github.io/Templates-For-AppCreator24/template/app/demo/movie-template/)**

<br>

<div align="center"><strong>Use of Movie Templates</strong></div>

<br>

**Image content:** `Poster`

```html
<img src="" location="" title="" desc="" year="" rating="">
```

<br>

| Attribute | Value |
| --- | ---|
| src | `poster.jpg` |
| location | `go:` |
| title | _required_ |
| desc | _required_ |
| year | _optional_ |
| rating | _optional_ |

<br>

1. Image URL.

`src="http://movie-poster.jpg"`

2. Add location link: Reference `go:`

`location="go:Video"`

3. Movie title.

`title="The Name of the Movie"`

4. Movie description.

`desc="Movie description/synopsis/topic"`

5. The Year of the movie.

`year="2023"`

6. Current movie ratings.

Star _rating_ number.

`rating="7.0"`

<br>

#### Top Poster

Trending/Latest movies.

Max TP: **8**

#### Section Content

Max poster content: **Unlimited**

#### Add more section content and section bar

Max Section: **10**

**Section:** `<section class="container-section" id="s{number}"></section>`

**Section bar:** `<div bar="section{number}"></div>`

<br>

Starting with the main section `1`, you can place as much poster content as you want. For the second `2` and other sections, it's up to you to do anything for this, like separate sections by **Genre**, **Year**, **Name** etc.

#### Section Bar

Use `Text` only or `Icon fonts`.

Example:

**_Text_** `<div bar="section">Section Name</div>`

**_Icon_** `<div bar="section"><i class="bi icon-name"></i></div>`

<br>

#### You can find all the _Information_ and _Details_ of the Movie at:

**[IMDb](https://m.imdb.com)**

IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows.

**[Rotten Tomatoes](https://www.rottentomatoes.com)**

Rotten Tomatoes: Movies | TV Shows | Movie Trailers | Reviews - Rotten Tomatoes.

**[The Movie Database](https://www.themoviedb.org)**

The Movie Database (TMDB).

**[Common Sense Media](https://www.commonsensemedia.org/movie-reviews)**

Common Sense Media: Movie Reviews.

**[Box Office Mojo](https://www.boxofficemojo.com)**

Box Office Mojo: Latest popular movies - Top hits and similarities.

<br>

#### Solution if you have problems:

Please see the **[Demo](https://zazerconer.github.io/Templates-For-AppCreator24/template/app/demo/movie-template/)** if you're still confused or you can open this **[HTML](https://github.com/ZazerConer/Templates-For-AppCreator24/blob/main/template/app/demo/movie-template/index.html)** code and read the code I made, find the part you're having problems with.

<br>
</details>

<br>
<hr>
<br>

### Music Player

Template for _Music Player_.

<br>

<details>
<summary><b>Expand</b></summary>

<br>

`HTML`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <title>Content Title</title>

  <link rel="stylesheet" href="https://ac24.zazerconer.workers.dev/template/app/build/music-player/assets/style.min.css">
  <script src="https://ac24.zazerconer.workers.dev/template/app/build/jquery/3.7.1/jquery.min.js"></script>

</head>
<body>

  <div id="list">
   <div url="" artist="" song="" cover=""></div>
   <div url="" artist="" song="" cover=""></div>
   <div url="" artist="" song="" cover=""></div>
   <div url="" artist="" song="" cover=""></div>
   <div url="" artist="" song="" cover=""></div>
  </div>
  
  <!--
   • Add more songs to the list.
  -->

  <script src="https://ac24.zazerconer.workers.dev/template/app/build/music-player/assets/script.min.js"></script>

<script>
/* Set color for the primary content */
  $(primaryContent).css(color, "#00BCD4");

/* Change the primary font */
  const fontface = {
    load: "https://fonts.cdnfonts.com/css/lt-bump"
  }
  $(primaryFont).css(fontFamily, "LT Bump, sans-serif");
  $(docElement).after(`<link rel="stylesheet" href="${fontface.load}">`);
</script>
```

- **[DEMO](https://zazerconer.github.io/Templates-For-AppCreator24/template/app/demo/music-player/)**

<br>

<div align="center"><strong>Use of Music Player</strong></div>

<br>

**Element content:** `<div>`

```html
<div url="" artist="" song="" cover=""></div>
```

<br>

| Attribute | Value |
| --- | ---|
| url | `audio.mp3` |
| artist | _required_ |
| song | _required_ |
| cover | `image.jpg` |

<br>

1. Song URL.

`url="http://song-music.mp3"`

2. Artist name.

`artist="Drake"`

3. Song title.

`song="One Dance"`

4. Album art image.

`cover="http://image.jpg"`

<br>

#### Additional functions

Plays the next song automatically after the end of the current song and will continue to play the music of the next song **continuously** and **non-stop**.

<br>

- **Swipe the screen.**

Swipe _Right_ to _Left_: `Go to the Next song`

Swipe _Left_ to _Right_: `Go to the Previous song`

- **Tap the screen.**

Double Tap: `Play / Pause`

</details>

<br>
<hr>
<br>

### Night Mode Clock

<details>
<summary><b>Expand</b></summary>

<br>

`HTML`
```html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Night Mode Clock</title>
 
<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Orbitron', sans-serif;
}
body {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  text-align: center;
  background: #000;
  opacity: 0.9;
  overflow: hidden;
}
.container {
  width: 20rem;
  height: 6rem;
  color: #fafaff;
}
.container #clock {
  font-size: 2.5em;
}
.container #date {
  margin-top: 3.5em
}
.container #clock, #date {
  position: absolute;
  left: 0;
  right: 0;
  display: block;
  margin: auto;
  letter-spacing: 4px;
}
.container #date {
  font-weight: 500;
  letter-spacing: 3px;
}
#state {
  position: fixed;
  bottom: 30px;
  right: 25px;
  color: #fafaff;
  font-size: 0.7em;
  letter-spacing: 1px;
}
</style>

</head>
<body>

 <div class="container">
  <div id="clock"></div>
  <div id="date"></div>
 </div>
  
 <div id="state"></div>

<script>
 setInterval(function() {
   let time = new Date();
   let min = time.getMinutes();
   let hr = time.getHours();
   let day = 'AM';
   
   if (hr > 12) {day = 'PM'; hr = hr - 12}
   if (hr == 0) {hr = 12}
   if (min < 10) {min = '0' + min}
   if (hr < 10) {hr = '0' + hr}
   
   const clock = document.getElementById("clock");
   clock.innerHTML = `${hr}<span>:</span>${min} <small>${day}</small>`;
 });

 function showDate() {
   var now = new Date();
   var days = new Array('Sun','Mon','Tues','Weds','Thurs','Fri','Sat');
   var months = new Array('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');
   var date = ((now.getDate() < 10) ? "0" : "") + now.getDate();
 
   function fourdigits(number) {
     return (number < 1000) ? number + 1900 : number;
   }

   hour = now.getHours();
   min = now.getMinutes();
   if (min <= 9) {min = "0" + min}
   if (hour < 10) {hour = "0" + hour}
   today = days[now.getDay()] + ", " + date + " " + months[now.getMonth()] + ", " + (fourdigits(now.getYear()));

   document.getElementById("date").innerHTML = today;
 }
  setInterval("showDate()", 1000);

 fetch('https://ipinfo.io', {
   method: 'GET',
   headers: {'Accept': 'application/json'},
 })
 .then(response => response.json())
 .then(response => document.getElementById("state").innerHTML = `<span> ${response.city} <span>&nbsp;</span> ${response.country} </span>`);
</script>

</body>
</html>
```

- **[DEMO](https://zazerconer.github.io/Templates-For-AppCreator24/template/app/demo/night-mode-clock/)**

</details>

<br>
<hr>
<br>

**Please note:** 
For this Demo app preview it may not work well or it may not be adapted in browser like CSS or JS, so please open and use the **Template** on real tester in App.

<br>
<hr>
<br>
<br>

<div align="center"><strong>© 2024 Templates for AppCreator24 • ZazerConer's</strong></div>
