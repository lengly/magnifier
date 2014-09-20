window.onload = function() {

	var win = document.getElementById("win");
	var small_box = document.getElementById("small-box");
	var small_img = document.getElementById("small-img");
	var big_box = document.getElementById("big-box");
	var big_img = document.getElementById("big-img");

	small_box.onmouseenter = function() {
		win.style.display = "block";
		big_box.style.display = "block";
	}

	small_box.onmouseleave = function() {
		win.style.display = "none";
		big_box.style.display = "none";
	}

	small_box.onmousemove = function(event) {
		var e = event || window.event;

		var left = e.clientX - small_box.offsetLeft - win.clientWidth / 2;
		var top = e.clientY - small_box.offsetTop - win.clientHeight / 2;

		if (left < 0) left = 0;
		if (left > small_img.offsetWidth - win.clientWidth) left = small_img.offsetWidth - win.clientWidth;

		if (top < 0) top = 0;
		if (top > small_img.offsetHeight - win.clientHeight) top = small_img.offsetHeight - win.clientHeight;

		win.style.left = left + 'px';
		win.style.top = top + 'px';

		var rate = big_img.offsetWidth / small_img.offsetWidth;

		var rleft = left * rate;
		var rtop = top * rate;

		big_img.style.left = -rleft + 'px';
		big_img.style.top = -rtop + 'px';
	}
}