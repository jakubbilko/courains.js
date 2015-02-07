/*
jQuery-Courtains v0.1 (https://github.com/jakubbilko/jQuery-Courtains)
Copyright (c) 2015 Jakub Bilko (http://jakubbilko.pl)
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
(function($) {

	$.fn.courtain = function(options) {

		var settings, element, positions, triggered=false;

		if(this.length > 1) {
			this.each(function() { $(this).courtain(options) });
			return this;
		}

		element = this;

		settings = $.extend({
			direction: 'right', 	// left, right, down, up
			inSpeed: 500,
			outSpeed: 500,
			delayBetween: 250,
			ease: 'linear',
			background: '#FFF',		// hex value
			offset: '100%',
			delay: 0,
			shadow: false,
			shadowColor: '#000'
		}, options);

		// set css properties for container

		if(element.css('overflow') != 'hidden') element.css('overflow', 'hidden');
		if(element.css('position') != 'relative' && element.css('position') != 'absolute') element.css('position', 'relative');

		// style courtain

		var courtain = $(document.createElement('div'));
		if(settings.shadow)  {
			var shadow = $(document.createElement('div'));
			shadow.width(element.outerWidth()).height(element.outerHeight()).css('background-color', settings.shadowColor).css('position', 'absolute');
			courtain.append(shadow);
		}
		courtain.width(element.outerWidth()).height(element.outerHeight()).css('background-color', settings.background).css('position', 'absolute');

		// position courtain

		if(settings.direction == 'right') {
			courtain.css('left',  -courtain.outerWidth()-1).css('top', 0);
			if(settings.shadow) shadow.css('left',  -courtain.outerWidth()-1).css('top', 0);
		}
		else if(settings.direction == 'left') {
			courtain.css('left', courtain.outerWidth()+1).css('top', 0);
			if(settings.shadow) shadow.css('left', courtain.outerWidth()+1).css('top', 0);
		}
		else if(settings.direction == 'down') {
			courtain.css('top', -courtain.outerHeight()-1);
			if(settings.shadow) shadow.css('top', -courtain.outerHeight()-1);
		}
		else if(settings.direction == 'up') {
			courtain.css('top', courtain.outerHeight()+1);
			if(settings.shadow) shadow.css('top', courtain.outerHeight()+1);
		}

		// add courtain to element & create waypoint

		var inner = element.children();

		element.append(courtain);
		inner.css('visibility', 'hidden');

		// create waypoint

		element.waypoint(function() {setTimeout(handleCourtain, settings.delay)}, { offset: settings.offset });

		// handle waypoint

		function handleCourtain() {
			if(settings.direction == 'left' || settings.direction == 'right') {
				if(!triggered) { 
					triggered = true;
					courtain.animate({ left: 0}, settings.inSpeed, function() { inner.css('visibility', 'visible') }).delay(settings.delayBetween).animate({ left: settings.direction == 'left' ? -courtain.width()-1 : courtain.width()+1 }, settings.outSpeed, function() { courtain.remove()});
					if(settings.shadow) shadow.delay(settings.inSpeed+settings.delayBetween).fadeOut(settings.outSpeed);
				}
			}
			if(settings.direction == 'up' || settings.direction == 'down') {
				if(!triggered) { 
					triggered = true;
					courtain.animate({ top: 0}, settings.inSpeed, function() { inner.css('visibility', 'visible') }).delay(settings.delayBetween).animate({ top: settings.direction == 'up' ? -courtain.height()-1 : courtain.height()+1 }, settings.outSpeed, function() { courtain.remove()});
					if(settings.shadow) shadow.delay(settings.inSpeed+settings.delayBetween).fadeOut(settings.outSpeed);
				}
			}
		}

	}

})(jQuery);