window.onload = function(){
    //模拟select
   var selects = document.getElementsByClassName('select');
   for(var i=0;i<selects.length;i++){
       var select = selects[i];
       select.addEventListener('click',function(event){
           event = event || window.event;
			if(event.stopPropagation)
				{event.stopPropagation();}
			else
				{event.cancleBubble = true;}
                var box = this;
           var ul = box.getElementsByTagName("ul")[0];//这个返回的是一个数组
                ul.style.display = "block";
                box.style.border ="1px solid #be4e48";
                ul.style.border = "1px solid #be4e48";
                ul.style.borderTop = "1px solid transparent";

            var Lis = ul.getElementsByTagName('li');
            var title = box.getElementsByTagName('span')[0];
            for(var j=0;j<Lis.length;j++){
                var li = Lis[j];
                li.addEventListener('click',function(event){
                     event = event || window.event;
                     if(event.stopPropagation){
                         event.stopPropagation();
                     }else{
                         event.cancleBubble = true;
                     }
                    title.innerHTML = this.innerHTML; 
                    ul.style.display = "none";
                    box.style.border = "1px solid transparent";
                })
            }
       })

      
   }
   //点击空白处隐藏
   document.addEventListener('click',function(){
       for(var i=0;i<selects.length;i++){
           var ul = selects[i].getElementsByTagName('ul')[0];
           ul.style.display = "none";
           selects[i].style.border = "1px solid transparent";
       }
   })

}