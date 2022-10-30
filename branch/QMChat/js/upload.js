function moduledirfun(){
    var divf=document.getElementById("realdir");
    var moduledir=divf.innerHTML.split("/");
    divf.innerHTML="";
    for(var i=0;i<moduledir.length;i++)
    {
        var ntextfen=document.createTextNode("/");
        divf.appendChild(ntextfen);
        var node=document.createElement("span");
        var ntext=document.createTextNode(moduledir[i]);
        node.appendChild(ntext);
        node.className="dir"+i;
        //node.addEventListener("onclick", function(){clickdir(i);});
         node.onclick=function(){clickdir(this);};
        divf.appendChild(node);  
    }
}

function fileChange1(target){  
//检测上传文件的类型 
    var imgName = document.all.up_file.value;
     var ext,idx;   
    if (imgName==""){  
        alert("请选择需要上传的文件!");  
        return; 
    }
   /*
    else {   
        idx = imgName.lastIndexOf(".");   
        if (idx != -1){   
            ext = imgName.substr(idx+1).toUpperCase();   
            ext = ext.toLowerCase( ); 
           // alert("ext="+ext);
            if (ext != 'zip'){
              document.all.submit_upload.disabled=true;   
                alert("压缩文件格式必须为zip，请重新压缩为zip格式后上传"); 
                return;  
            }   
        } else {  
          document.all.submit_upload.disabled=true; 
           alert("压缩文件格式必须为zip，请重新压缩为zip格式后上传"); 
            return;
        }   
    }*/
    
    //检测上传文件的大小        
    var isIE = /msie/i.test(navigator.userAgent) && !window.opera;  
    var fileSize = 0;           
    if (isIE && !document.all.up_file.files){       
        var filePath = target.value;       
        var fileSystem = new ActiveXObject("Scripting.FileSystemObject");          
        var file = fileSystem.GetFile (filePath);       
        fileSize = file.Size;      
    } else {      
        fileSize = document.all.up_file.files[0].size;       
    }     

    var size = fileSize / 1024*1024;   

    if(size>(1024*1024*50)){    
        alert("文件大小不能超过50MB");   
    }else{
        var form = document.getElementById('test_form');
        form.submit();
    }    
} 

function fileChange(boj){
    
    var imgName = document.all.up_file.value; 
    if (imgName!=""){  
       var form = document.getElementById('test_form');
    //再次修改input内容
    form.submit();
    }
    else{
        alert("请选择需要上传的文件!");  
        return; 
    }

}

function getCookie(c_name)  //获取cookies
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
        { 
            c_start=c_start + c_name.length+1 
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) 
                c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        } 
    }
    return ""
}
function setCookie(c_name,value,expiredays) //设置cookies
{
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+((expiredays==null)? "":";expires="+exdate.toGMTString())
}

function relive(boj){
    alert("激活成功");
}

function Download(boj){ //下载
    var checkboxs=document.getElementsByName("item");
    for(var i=0;i<checkboxs.length;i++){
        if(checkboxs[i].checked == true)
            //window.location.href="download"+checkboxs[i].value;
            downloadFile("download"+checkboxs[i].value);
        checkboxs[i].checked = false;
    } 
}
function downloadFile(url){
  var iframe = document.createElement("iframe");
  iframe.style.display = "none"; // 防止影响页面
  iframe.style.height = 0; // 防止影响页面
  iframe.style.width = 0; // 防止影响页面
  iframe.src = url; 
  document.body.appendChild(iframe); // 这一行必须，iframe挂在到dom树上才会发请求
  // 5分钟之后删除（onload方法对于下载链接不起作用，就先抠脚一下吧）
  setTimeout(function(){
    iframe.remove();
  }, 5 * 60 * 1000);
  
  
}

function refresh(obj){
    //hrefurl="{% url 'mainpage:showFiles' %}";
    window.location.href="showFiles";
}
