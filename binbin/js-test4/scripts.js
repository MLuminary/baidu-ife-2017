window.onload =function(){

         $ = function(id){
           return document.getElementById(id);
       }


   var box = $('box'),
       leftin = $('leftin'),
       rightin = $('rightin'),
       leftout = $('leftout'),
       rightout = $('rightout');
       
       leftin.addEventListener("click",function(){
           var divs = box.getElementsByTagName('div');
           var num = Number($('num').value)
           var div = document.createElement('div');

           if(!num){
               alert("请输入数字");
               return;
           }else{
               div.innerHTML = num;
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
         
                if(!num){
                    alert("请输入数字");
                    return;
                }else{
                     div.innerHTML = num;
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
       


       


      
    
}