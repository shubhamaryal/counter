let count=0;

document.getElementById("decreaseBtn").onclick=function(){
    count--;
    document.getElementById("countLabel").textContent=count;
}

document.getElementById("increaseBtn").onclick=function(){
    count++;
    document.getElementById("countLabel").textContent=count;
}

document.getElementById("resetBtn").onclick=function(){
    count=0;
    document.getElementById("countLabel").textContent=count;
}