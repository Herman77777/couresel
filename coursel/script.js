const images=document.getElementById('images');

const img=document.querySelectorAll('img');

let index=0;
function coursel(){
index++;

if(index > img.length-1){
  index=0;
  
}
else if(index < 0){
  index =img.length-1;
}
//`translateX(${-index *500}px)`
images.style.transform=`translateX(${-index* 500}px)`;

}
setInterval(coursel,3000);