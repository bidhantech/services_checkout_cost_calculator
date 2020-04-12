var total = 0;
var btnr= document.getElementsByClassName("add");
var delet = document.getElementsByClassName("delete");
var totalv=  document.getElementsByClassName("price")[0];
totalv.innerHTML = total;

// for adding service
for(let i=0;i<3;i++){
    btnr[i].addEventListener("click",(e)=>{
        if(e.target.className == "add material-icons o" ){
            total = total + 8000;
            totalv.innerHTML = total;

            document.getElementsByClassName("o")[0].classList.replace("o","oh");                    
            document.getElementsByClassName("do")[0].classList.replace("do","dov");
        }else if(e.target.className == "add material-icons t"){
            total = total + 1000;
            totalv.innerHTML = total;

            document.getElementsByClassName("t")[0].classList.replace("t","thr");              
            document.getElementsByClassName("dt")[0].classList.replace("dt","dtv");
        }else{
            total = total + 3000;
            totalv.innerHTML = total;

            document.getElementsByClassName("th")[0].classList.replace("th","thh"); 
            document.getElementsByClassName("dth")[0].classList.replace("dth","dthv");
        }
    });
}

//for deleting service
for(let i=0;i<3;i++){
    delet[i].addEventListener("click",(e)=>{
        
        if(e.target.className == "delete material-icons dov" ){
            total = total - 8000;
            totalv.innerHTML = total;

            document.getElementsByClassName("oh")[0].classList.replace("oh","o");                    
            document.getElementsByClassName("dov")[0].classList.replace("dov","do");
        }else if(e.target.className == "delete material-icons dtv"){
            total = total - 1000;
            totalv.innerHTML = total;

            document.getElementsByClassName("thr")[0].classList.replace("thr","t");              
            document.getElementsByClassName("dtv")[0].classList.replace("dtv","dt");
        }else{
            total = total - 3000;
            totalv.innerHTML = total;

            document.getElementsByClassName("thh")[0].classList.replace("thh","th"); 
            document.getElementsByClassName("dthv")[0].classList.replace("dthv","dth");
        }
    });
}
