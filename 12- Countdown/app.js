//Acceder au element ou va s'afficher le countdown
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

//La date de fin du countdown
let futureDate = new Date(2022, 10, 2, 11, 30, 0);

//futureDate en ms
const futureTime = futureDate.getTime();
console.log(futureTime);

//console.log(futureDate);

function remainingTime(){
    //date d'aujourd'hui en ms 
    let currentDate = new Date().getTime();
    console.log(currentDate);
    //difference entre entre date d'aujourd'hui et date de fin du countdown
    const t = futureTime - currentDate;

    //Acceder au countdown container
    const countdownContainer = document.querySelector('.countdown-container');
    if(t<0){
        return countdownContainer.innerHTML = "<h4>Sorry this giveaway is no more available<h4>";
    }


    //un jour en ms 
    const oneDay = 24*60*60*1000;

    //une heure en ms 
    const oneHour = 60*60*1000;

    //une minute en ms 
    const oneMin = 60*1000;

    //une seconde en ms
    const oneSec = 1000;


    //jour restant
    let remainingDays = Math.floor(t/oneDay);

    //heures restantes
    let remainingHours = Math.floor((t%oneDay)/oneHour);

    //minutes restantes
    let remainingMinutes = Math.floor(((t%oneDay)%oneHour)/oneMin);

    //secondes restantes
    let remainingSecondes = Math.floor((((t%oneDay)%oneHour)%oneMin)/oneSec);

    days.innerHTML = remainingDays;
    hours.innerHTML = remainingHours;
    minutes.innerHTML = remainingMinutes;
    seconds.innerHTML = remainingSecondes;
} 

//countdown
setInterval(remainingTime, 1000);
