Courtains.js
===========

A jQuery plugin for creating a cool courtain lazyload-like effect.

This plugin uses waypoints.js (https://github.com/imakewebthings/waypoints) for triggering the animations.

This plugin currently uses the animate() function of jQuery. You can use the jquery.gsap plugin by Greensock (https://github.com/greensock/GreenSock-JS) to gain some performance boost.

Demo
====
- http://demos.kozulowski.pl/courtains-js/

Installation
============

1. Include jQuery
```html
<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
```
2. Include waypoints.js
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.5/waypoints.min.js"></script>
```
3. Include the jQuery-Courtains plugin
```html
<script src="/path/to/jquery-courtains.min.js"></script>
```

Usage
=====
```javascript
$('.element').courtain();
```
Options
=======
You can pass some configuration options to the plugin. The following settings are available:
```javascript
$('.element').courtain({

    // direction of the courtain animation (left, right, up, down)
    direction: 'right', 
    
    // courtain in aniation duration
    inSpeed: 500,
    
    // courtain out aniation duration 
    outSpeed: 500,
    
    // delay between in and out animations
    delayBetween: 250,
    
    // easing function name
    ease: 'linear',
    
    // colour of the courtains
    background: '#FFF',
    
    // offset of the created waypoint
    offset: '100%',
    
    // additional delay (in ms)
    delay: 0,
    
    // enable shadow behind the courtain
    shadow: false,
    
    // change the color of the shadow
    shadowColor: '#000'
});
```

Todo
====
- Optional CSS3 animations
