console.log("Welcome to tic tac toe")
let audioturn =new Audio("ding.mp3")
let gameover=new Audio("gameover.wav")
let turn="X"
let isgameover=false

const changeturn=()=>{
    if (turn==="X") {
        turn= 0;
        
    } else {
       turn = "X";

    }
    return turn;
}
const checkwin=()=>{
   
    let boxtext=document.getElementsByClassName("box");
   if((boxtext[0].innerText===boxtext[1].innerText)&&(boxtext[1].innerText===boxtext[2].innerText)&&(boxtext[1].innerText!=='')){
       isgameover=true;
       document.getElementsByClassName("info")[0].innerText=turn+" won";
       
       gameover.play();
       document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width='14vw';
     document.querySelectorAll('.textbox')[0].style.color='brown';
     document.querySelectorAll('.textbox')[1].style.color='brown';
     document.querySelectorAll('.textbox')[2].style.color='brown';
       

       
     

   }
   else if((boxtext[3].innerText===boxtext[4].innerText)&&(boxtext[4].innerText===boxtext[5].innerText)&&(boxtext[5].innerText!=='')){
    isgameover=true;
    document.getElementsByClassName("info")[0].innerText=turn+" won";
    gameover.play();
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width='14vw';
    document.querySelectorAll('.textbox')[3].style.color='brown';
    document.querySelectorAll('.textbox')[4].style.color='brown';
    document.querySelectorAll('.textbox')[5].style.color='brown';
    

}

else if((boxtext[6].innerText===boxtext[7].innerText)&&(boxtext[7].innerText===boxtext[8].innerText)&&(boxtext[8].innerText!=='')){
    isgameover=true;
    document.getElementsByClassName("info")[0].innerText=turn+" won";
    gameover.play();
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width='14vw';
    document.querySelectorAll('.textbox')[6].style.color='brown';
    document.querySelectorAll('.textbox')[7].style.color='brown';
    document.querySelectorAll('.textbox')[8].style.color='brown';
    

}
 
else if((boxtext[2].innerText===boxtext[5].innerText)&&(boxtext[5].innerText===boxtext[8].innerText)&&(boxtext[5].innerText!=='')){
    isgameover=true;
    document.getElementsByClassName("info")[0].innerText=turn+" won";
    gameover.play();
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width='14vw';
    document.querySelectorAll('.textbox')[0].style.color='brown';
    document.querySelectorAll('.textbox')[1].style.color='brown';
    document.querySelectorAll('.textbox')[2].style.color='brown';
    document.querySelectorAll('.textbox')[2].style.color='brown';
    document.querySelectorAll('.textbox')[5].style.color='brown';
    document.querySelectorAll('.textbox')[8].style.color='brown';
    
}

else if((boxtext[0].innerText===boxtext[3].innerText)&&(boxtext[3].innerText===boxtext[6].innerText)&&(boxtext[6].innerText!=='')){
    isgameover=true;
    document.getElementsByClassName("info")[0].innerText=turn+" won";
    gameover.play();
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width='14vw';
    document.querySelectorAll('.textbox')[0].style.color='brown';
    document.querySelectorAll('.textbox')[3].style.color='brown';
    document.querySelectorAll('.textbox')[6].style.color='brown';
    

}

else if((boxtext[1].innerText===boxtext[4].innerText)&&(boxtext[4].innerText===boxtext[7].innerText)&&(boxtext[1].innerText!=='')){
    isgameover=true;
    document.getElementsByClassName("info")[0].innerText=turn+" won";
    gameover.play();
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width='14vw';
    document.querySelectorAll('.textbox')[4].style.color='brown';
    document.querySelectorAll('.textbox')[1].style.color='brown';
    document.querySelectorAll('.textbox')[7].style.color='brown';
    

}
else if((boxtext[0].innerText===boxtext[4].innerText)&&(boxtext[4].innerText===boxtext[8].innerText)&&(boxtext[0].innerText!=='')){
    isgameover=true;
    document.getElementsByClassName("info")[0].innerText=turn+" won";
    gameover.play();
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width='14vw';
    document.querySelectorAll('.textbox')[0].style.color='brown';
    document.querySelectorAll('.textbox')[4].style.color='brown';
    document.querySelectorAll('.textbox')[8].style.color='brown';
    

}
else if((boxtext[2].innerText===boxtext[4].innerText)&&(boxtext[4].innerText===boxtext[6].innerText)&&(boxtext[2].innerText!=='')){
    isgameover=true;
    document.getElementsByClassName("info")[0].innerText=turn+" won";
    gameover.play();
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width='14vw';
    document.querySelectorAll('.textbox')[4].style.color='brown';
    document.querySelectorAll('.textbox')[6].style.color='brown';
    document.querySelectorAll('.textbox')[2].style.color='brown';
    

}


}




let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{

    let boxtext=element.querySelector(".textbox");
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            checkwin();
            changeturn();
            audioturn.play();
           
            
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText="Turn for"+turn;
            }
        }
    } )

})




reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.textbox');
   Array.from(boxtext).forEach(element=>{
       element.innerText=""
       turn='X'
       isgameover=false;
       if(!isgameover){
       document.getElementsByClassName("info")[0].innerText="Turn for"+turn;}

       document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width='1vw'
       for(let i=0;i<9;i++){
        document.querySelectorAll('.textbox')[i].innerText='';     
       document.querySelectorAll('.textbox')[i].style.color='aliceblue';
     
        
       }
      


   })
});
   


    

    














