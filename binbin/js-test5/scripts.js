window.onload =function(){

         $ = function(id){
           return document.getElementById(id);
       }
   var  data = [];

   var box = $('box'),
       leftin = $('leftin'),
       rightin = $('rightin'),
       leftout = $('leftout'),
       rightout = $('rightout'),
       max = $('max'),
       min = $('min');
       
       leftin.addEventListener("click",function(){
           var divs = box.getElementsByTagName('div');
           var num = Number($('num').value)
           var div = document.createElement('div');
           var top = 100 - num;
           if(num<10||num>100||!num){
               alert("请输入10-100之间的数字");
               return;
           }else{
               div.style.height = num + "px";
               div.style.top = top + "px";
           }
          
            if(divs.length==60){
               alert("队列元素已满60个，不能再继续添加")
               return;
           }    
           if(divs.length == 0){             
                box.appendChild(div);
           }else{
               box.insertBefore(div,divs[0]);
           }
           
         
       })

        rightin.addEventListener("click",function(){
           var divs = box.getElementsByTagName('div');
           var num = Number($('num').value)
           var div = document.createElement('div');
           var top = 100 - num;
         
                if(num<10||num>100||!num){
                    alert("请输入10-100之间的数字");
                    return;
                }else{
                    div.style.height = num + "px";
                    div.style.top = top + "px";
                }

                 if(divs.length==60){
                    alert("队列元素已满60个，不能再继续添加")
                    return;
                 }

                box.appendChild(div);     
       })

       leftout.addEventListener("click",function(){
           var divs = box.getElementsByTagName('div');
           if(divs.length==0){
               alert("请先添加元素!")
               return;
           }
            box.removeChild(divs[0]);
       })

       rightout.addEventListener("click",function(){
           var divs = box.getElementsByTagName('div');
            if(divs.length==0){
               alert("请先添加元素!")
               return;
           }
            box.removeChild(divs[divs.length-1]);
       })
       
       max.addEventListener('click',function(){
           var divs = box.getElementsByTagName('div');
           for(var i=0;i<divs.length;i++){
               data[i] = parseInt(divs[i].style.height)
           }
           data.sort(function(a,b){
               return  b - a;
           })
           for(var i=0;i<divs.length;i++){
               console.log(data[i]);
               divs[i].style.height = data[i] + "px";
               divs[i].style.top = 100 - parseInt(divs[i].style.height) + "px";
           }
       })

        min.addEventListener('click',function(){
           var divs = box.getElementsByTagName('div');
           for(var i=0;i<divs.length;i++){
               data[i] = parseInt(divs[i].style.height)
           }
           data.sort(function(a,b){
               return  a - b;
           })
           for(var i=0;i<divs.length;i++){
               console.log(data[i]);
               divs[i].style.height = data[i] + "px";
               divs[i].style.top = 100 - parseInt(divs[i].style.height) + "px";
           }
       })





       


      
    
}