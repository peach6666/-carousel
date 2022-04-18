//輪播鈕
const leftBtn=document.getElementById('arr-left');
const rightBtn=document.getElementById('arr-right');
//圖檔
const image=document.getElementById('carousel-img');
let contentArr=["1.png",'2.png','3.png','4.png'];
let start=0;

rightBtn.addEventListener('click',()=>{
    if(start<contentArr.length-1){
        image.style.animation="slide 0.8s ease";
        start+=1;
        image.src=`./assets/${contentArr[start]}`;
    }
    image.addEventListener('animationend',()=>{
        image.style.animation="";
    })
})
leftBtn.addEventListener('click',()=>{
    if(start<contentArr.length && start>=1){
        image.style.animation="slide 0.8s ease";
        start-=1;
        image.src=`./assets/${contentArr[start]}`;
    }
    image.addEventListener('animationend',()=>{
        image.style.animation="";
    })
})