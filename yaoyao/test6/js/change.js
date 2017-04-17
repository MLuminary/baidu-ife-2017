var theobject = null;
function resizeObject() {
    this.el = null; //pointer to the object
    this.dir = ""; //type of current resize (n,s,e,w,ne,nw,se,sw)
    this.grabx = null; //Some useful values
    this.graby = null;
    this.width = null;
    this.height = null;
    this.left = null;
    this.top = null;
}
//在边框鼠标改变相应的样式
function getDirection(el) {
    var xPos, yPos, offset, dir;
    dir = "";
    xPos = window.event.offsetX;//相对于一个元素的位置
    yPos = window.event.offsetY;
    offset = 8;  //边框的宽度
    if (yPos < offset) dir += "n";
    else if (yPos > el.offsetHeight - offset) dir += "s";
    if (xPos < offset) dir += "w";
    else if (xPos > el.offsetWidth - offset) dir += "e";
    return dir;
}
function doDown() {
    //获取要改变大小的元素
    var el = document.getElementById('box');
    if (el == null) {
        theobject = null;
        return;
    }
    dir = getDirection(el);
    if (dir == "") return;
    theobject = new resizeObject();
    //每次点击都记录下此时的盒子的所有信息和鼠标点击的位置
    theobject.el = el;
    theobject.dir = dir;
    theobject.grabx = window.event.clientX;
    theobject.graby = window.event.clientY;
    theobject.width = el.offsetWidth;
    theobject.height = el.offsetHeight;
    theobject.left = el.offsetLeft;
    theobject.top = el.offsetTop;
    window.event.returnValue = false;
    window.event.cancelBubble = true;
}

function doUp() {
    if (theobject != null) {
        theobject = null;
    }
}

function doMove() {
    var el, xPos, yPos, str, xMin, yMin;
    xMin = 250;//最小宽度
    yMin = 200;//最小高度
    el = document.getElementById('box');

    str = getDirection(el);
    if (str == "") str = "default";
    else str += "-resize";
    el.style.cursor = str;

    if (theobject != null) {
        if (theobject.dir.indexOf("e") != -1)
            theobject.el.style.width = Math.max(xMin, theobject.width + window.event.clientX - theobject.grabx) + "px";
        if (theobject.dir.indexOf("s") != -1)
            theobject.el.style.height = Math.max(yMin, theobject.height + window.event.clientY - theobject.graby) + "px";
        if (theobject.dir.indexOf("w") != -1) {
            theobject.el.style.left = Math.min(theobject.left + window.event.clientX - theobject.grabx, theobject.left + theobject.width - xMin) + "px";
            // theobject.el.style.left =  theobject.left + window.event.clientX - theobject.grabx + "px";
            theobject.el.style.width = Math.max(xMin, theobject.width - window.event.clientX + theobject.grabx) + "px";
        }
        if (theobject.dir.indexOf("n") != -1) {
            theobject.el.style.top = Math.min(theobject.top + window.event.clientY - theobject.graby, theobject.top + theobject.height - yMin) + "px";
            theobject.el.style.height = Math.max(yMin, theobject.height - window.event.clientY + theobject.graby) + "px";
        }
        window.event.returnValue = false;
        window.event.cancelBubble = true;

    }
}


document.onmousedown = doDown;
document.onmouseup = doUp;
document.onmousemove = doMove;