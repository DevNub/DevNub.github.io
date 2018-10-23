var maze;
var status;
var start;
var end;
var begin;
var hitBoundary;

window.onload = function(){

  maze = document.getElementById("maze");
  start = document.getElementById("start");
  end = document.getElementById("end");
  begin  = false;
  hitBoundary = document.querySelectorAll(".boundary");
  

  start.onclick = function(){
    reset();
    status = document.getElementById("status").innerText='\nMove your mouse from S to E to win!';
  }

  start.onmouseover = function(){
    begin = true;
    //status = document.getElementById("status").innerText='Move your mouse from S to E to win!';
    for(var i=0; i<hitBoundary.length-1; i++){
      hitBoundary[i].onmouseover=iloss;
    }
  }

  end.onmouseover = function(){
    if(begin) won();
  }
 
  maze.onmouseleave = function(){
    status = document.getElementById("status").innerText='Attempt to cheat detected';
    iloss();
  }

 function won(){
   alert("You won!");
   status = document.getElementById("status").innerText='Winner Winner Chicken Dinner';
   begin = false;
 }


 function iloss(){
  for(i=0; i<hitBoundary.length-1; i++){
     hitBoundary[i].className+=' youlose';
    }
   console.log('Sorry Try agiain');
   status = document.getElementById("status").innerText='Sorry, you did not make it'+'\nClick S to restart';
   begin = false;
  }
 
 function reset(){
    //reset walls
    for (var i=0; i<hitBoundary.length-1; i++){
      if(hitBoundary[i].className =' youlose'){
        hitBoundary[i].className = "boundary";
      }
      
    }
 } 
}

