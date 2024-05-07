let today = new Date();

function updateTime() {
    let today = new Date();
    let thisHour = today.getHours();
    let thisMinute = today.getMinutes();
    let thisSecond = today.getSeconds();
    //// DATE ////
    let thisMonth = today.getMonth();
  
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    let thisDate = today.getDate();

    let thisWeekday = today.getDay();
  
    let days = ["Sun", "Mon", "Tues", "Wed" , "Thurs", "Fri", "Sat"];
  
    let thisYear = today.getFullYear();


    //// TIME ////
    let timeOfDay;

    if(thisHour == 0){
        timeOfDay = "AM";
        thisHour = 12;
    }
    else if(thisHour < 12){
      timeOfDay = "AM";
    }
    else{
      timeOfDay = "PM";
      thisHour = thisHour - 12;
    }
    
    let timeElem = document.getElementById("datetime");
    if(thisMinute < 10) {
      timeElem.innerHTML = thisHour + ":" + "0" + thisMinute + " " + timeOfDay; 
    }
    else{
        timeElem.innerHTML = thisHour + ":" + thisMinute + " " + timeOfDay; 
    }
    
    if(thisHour < 10) {
      timeElem.innerHTML = "0" + thisHour + ":" + thisMinute + " " + timeOfDay; 
    }
    else{
        timeElem.innerHTML = thisHour + ":" + thisMinute + " " + timeOfDay; 
    }

    if(thisMinute % 10) {
        timeElem.innerHTML = thisHour + ":" + thisMinute + " " + timeOfDay; 
      }
      else{
        timeElem.innerHTML = thisHour + ":" + "0" + thisMinute + " " + timeOfDay; 
    }
    
    
    timeElem.innerHTML += "<br>" + " " + (thisMonth + 1)+ "/" + thisDate + "/" + thisYear;
}
setInterval(updateTime, 1000);

function skyChange() {
    let thisHour2 = today.getHours();

    let hourCloud = document.querySelectorAll(".ellipseH");
    let minCloud = document.querySelectorAll(".ellipseM");
    let secCloud = document.querySelectorAll(".ellipseS");

    if(thisHour2 >= 4 && thisHour2 < 7){
        //sunrise
        document.body.style.background = "linear-gradient(180deg, #9880F9 0%, #FFF8B6 65.26%)";

        for(clouds of hourCloud){
            clouds.style.backgroundColor = "#FFF2E5";
        }
        for(clouds of minCloud){
            clouds.style.backgroundColor = "#FFF2E5";
        }
        for(clouds of secCloud){
            clouds.style.backgroundColor = "#FFF2E5";
        }
    }else if(thisHour2 >= 7 && thisHour2 < 12){
        //morning
        document.body.style.background = "linear-gradient(180deg, #5F9BF4 0%, #A7EFFF 65.26%)";

        for(clouds of hourCloud){
            clouds.style.backgroundColor = "white";
        }
        for(clouds of minCloud){
            clouds.style.backgroundColor = "white";
        }
        for(clouds of secCloud){
            clouds.style.backgroundColor = "white";
        }
    }else if(thisHour2 >= 12 && thisHour2 < 17){
        //daylight
        document.body.style.background = "linear-gradient(180deg, #2174EA 0%, #A7CCFF 65.26%)";

        for(clouds of hourCloud){
            clouds.style.backgroundColor = "#F4F4F4";
        }
        for(clouds of minCloud){
            clouds.style.backgroundColor = "#F4F4F4";
        }
        for(clouds of secCloud){
            clouds.style.backgroundColor = "#F4F4F4";
        }
    }else if(thisHour2 >= 17 && thisHour2 < 20){
        //afternoon or sunset
        document.body.style.background = "linear-gradient(180deg, #4921EA 0%, #4B24E9 0.01%, #FFC2A7 65.26%)";

        for(clouds of hourCloud){
            clouds.style.backgroundColor = "#FFEFF7";
        }
        for(clouds of minCloud){
            clouds.style.backgroundColor = "#FFEFF7";
        }
        for(clouds of secCloud){
            clouds.style.backgroundColor = "#FFEFF7";
        }
    }else if((thisHour2 >= 20 && thisHour2 <= 24) || (thisHour2 >= 0 && thisHour2 < 4)){
        //night
        document.body.style.background = "linear-gradient(180deg, #160E38 11%, #949EAD 72.5%)";
        
        for(clouds of hourCloud){
            clouds.style.backgroundColor = "#DCDCDC";
        }
        for(clouds of minCloud){
            clouds.style.backgroundColor = "#DCDCDC";
        }
        for(clouds of secCloud){
            clouds.style.backgroundColor = "#DCDCDC";
        }
    }else{
        //daylight/default
        document.body.style.background = "linear-gradient(180deg, #2174EA 0%, #A7CCFF 65.26%)";

        for(clouds of hourCloud){
            clouds.style.backgroundColor = "#F4F4F4";
        }
        for(clouds of minCloud){
            clouds.style.backgroundColor = "#F4F4F4";
        }
        for(clouds of secCloud){
            clouds.style.backgroundColor = "#F4F4F4";
        }
    }
}
skyChange();


function cloudMovement(){
    let today = new Date();

    let thisHour3 = today.getHours();
    let thisMinute3 = today.getMinutes();
    let thisSecond3 = today.getSeconds();

    let hour = document.getElementById("hour-group");
    let minute = document.getElementById("minute-group");
    let seconds = document.getElementById("second-group");

    let hourToVW = map(thisHour3, 0, 23, -8, 100);
    let minToVW = map(thisMinute3, 0, 59, -5, 100);
    let secToVW = map(thisSecond3, 0, 59, -5.5, 100);

    hour.style.left = hourToVW + "vw";
    minute.style.left = minToVW + "vw";
    seconds.style.left = secToVW + "vw";

}
setInterval(cloudMovement, 1000);

function map(value, low1, high1, low2, high2){
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}