
var params = {
	left: 0,
	top: 0,
	currentX: 0,
	currentY: 0,
	flag: false
};
var isdrag = false;

var getCss = function (o, key) {
	return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key];
};


var startDrag = function (bar, target, callback) {
	// if(getCss(target, "left") !== "auto"){
	// 	params.left = getCss(target, "left");
	// }
	// if(getCss(target, "top") !== "auto"){
	// 	params.top = getCss(target, "top");
	// }


	bar.onmousedown = function (event) {
		params.flag = true;
		if (!event) {
			event = window.event;

			bar.onselectstart = function () {
				return false;
			}
		}
		var e = event;
		params.currentX = e.clientX;
		params.currentY = e.clientY;
		if (getCss(target, "left") !== "auto") {
			params.left = getCss(target, "left");
		}
		if (getCss(target, "top") !== "auto") {
			params.top = getCss(target, "top");
		}

	};
	bar.onmouseup = function () {
		params.flag = false;
		isdrag = true;
		if (getCss(target, "left") !== "auto") {
			params.left = getCss(target, "left");
		}
		if (getCss(target, "top") !== "auto") {
			params.top = getCss(target, "top");
		}

	};
	bar.onmousemove = function (event) {
		var e = event ? event : window.event;
		if (params.flag) {
			var nowX = e.clientX, nowY = e.clientY;
			var disX = nowX - params.currentX, disY = nowY - params.currentY;
			target.style.left = parseInt(params.left) + disX + "px";
			target.style.top = parseInt(params.top) + disY + "px";
		}

		if (typeof callback == "function") {
			callback(parseInt(params.left) + disX, parseInt(params.top) + disY);
		}
	}
};






window.onresize = function () {
	//如果盒子没被拖动过，盒子要一直水平垂直居中
	
	if (!isdrag) {
		var pageWidth = document.body.offsetWidth,
			pageHeight = container.offsetHeight,
			boxWidth = parseInt(box.style.width),
			boxHeight = parseInt(box.style.height);


		//js设置居中,这样可以获得到box的left和top值
		box.style.left = pageWidth / 2 - boxWidth / 2 + 'px';
		box.style.top = pageHeight / 2 - boxHeight / 2 + 'px';
	}

}