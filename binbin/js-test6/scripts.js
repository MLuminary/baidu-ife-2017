window.onload = function(){

         $ = function(id){
           return document.getElementById(id);
       }

       var data = [];
       var Arr = [];

       var buttons = document.getElementsByClassName('btn');
       var box = $('box');

       //给每一个button添加一个点击事件
       for(var i=0;i<buttons.length;i++){
           buttons[i].addEventListener('click',distribution);
       }


       //中转函数
       function distribution(){
        //每次点击要清空盒子
            box.innerHTML = "";

            var type = this.getAttribute('id');
            //将textarea中分割存入数组
            var text = $('text').value;
            Arr = text.split(/\n|,|、| |，|\r|;|；/);
            //判断是否为英文或中文或数字
            if(type == "leftin"||type == "rightin"){
                for(var i=0;i<Arr.length;i++){
                    if((!/[\u4E00-\u9FA5|a-z|A-Z|0-9]/.test(Arr[i]))){
                        alert("请输入中文英文或数字");
                    }
                }
            }

            //根据type调用相应的方法
            switch(type){
                case 'leftin':
                    for(var i=0;i<Arr.length;i++){
                        data.unshift(Arr[i]);
                    }
                    break;
                case 'rightin':
                    for(var i=0;i<Arr.length;i++){
                        data.push(Arr[i]);
                    }    
                    break;
                case 'leftout':
                    data.shift();
                    break;
                case 'rightout':
                    data.pop();
                    break;
            }
            showdata();
            if(type == 'search'){
                search();
            }
            
       }


    function showdata(){
        for(var i=0;i<data.length;i++){
            div = document.createElement('div');
            div.innerHTML = data[i];
            box.appendChild(div);
        }
    }


    function search(){
        var word = $('word').value;
        var Divs = box.getElementsByTagName('div');
        if(Divs.length==0){
            return ;
        }
        for(var i=0;i<Divs.length;i++){
            //如果元素中有匹配到word的词 则颜色改变
            if( Divs[i].innerText.match(word)){
                Divs[i].style.color = "black";
            } 
        }
    }   
    
}