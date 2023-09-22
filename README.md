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
<summary><b>See Code</b></summary>

<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <title>Your Name App</title>

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

</details>

<br>
<hr>

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

<br>
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
<hr>

### App Theme Color

Change the App theme with your favorite color.

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
<hr>
<br>

**Please note:** 
For this Demo app preview it may not work well or it may not be adapted in browser like CSS or JS, so please open and use the **template** on real tester in App.

<br>
<hr>
<br>
<br>

<div align="center"><strong>© 2023 Templates for AppCreator24 • ZazerConer's</strong></div>
