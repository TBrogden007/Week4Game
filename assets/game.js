


    $(document).ready(function() {

      // VARIABLES
      var red = Math.floor(Math.random() * 12 + 1);
      var blue = Math.floor(Math.random() * 12 + 1);
      var green = Math.floor(Math.random() * 12 + 1);
      var yellow = Math.floor(Math.random() * 12 + 1);
      var goal = Math.floor(Math.random() * 89 + 19);
      var counter = 

// console.log(red);
// console.log(blue);
// console.log(green);
// console.log(yellow);
// console.log(goal);
  
  // Magic Number Generator
  $("#magicNumber").append(goal);



//Gem Colors on click

  $(".gemRed").on("click", function(){
    counter = counter + red
    
    console.log("redclicked: " + red);
  })

  $(".gemBlue").on("click", function(){
    var b = blue
    console.log("blueclicked: " + blue);
  })
  $(".gemGreen").on("click", function(){  
    var g = green
    console.log("greenclicked: "+ green);
  })
  $(".gemYellow").on("click", function(){
    var y = yellow
    console.log("yellowclicked: "+ yellow);
  })
  console.log(counter)

     // if(counter > goal){
     //    looses++;

     //  }

     //  else (counter === goal)
     //    wins++;
     //  }

  




});