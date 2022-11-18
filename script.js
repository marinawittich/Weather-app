const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "175b62682011ffe141885164bdea256c"
}

const input = document.querySelector('#input');

input.addEventListener('keypress', enter);

function enter(e){
    if(e.keyCode === 13){
        
        getInfo(input.value);  
    }
}

async function getInfo (data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=imperial&appid=${api.key}`);
    const result = await res.json();
    console.log(result);
    displayResult(result);
    
}


function displayResult(result){
    input.value = "";
    let city = document.querySelector('#city');
    city.textContent = `${result.name}, ${result.sys.country}`;
    
    let temp = document.querySelector('#temp');
    // temp.stye.display = "block";
    temp.innerHTML = `${Math.round(result.main.temp)}<span>°</span> `;

     let feelsLile = document.querySelector('#feelsLile');
     feelsLile.innerHTML = `Feels like: ${Math.round(result.main.feels_like)}<span>°</span>`;

     let humidity = document.querySelector('#humidity');
     humidity.textContent = `Humidity: ${result.main.humidity} %`;

     let conditions = document.querySelector('#sky');
     conditions.textContent = `${result.weather[0].description}`;

     let variations = document.querySelector('#variations');
     variations.innerHTML = `Min: ${Math.round(result.main.temp_min)}<span>°</span>` + ` ` + `Max: ${Math.round(result.main.temp_max)}<span>°</span>`

     changeBackground(result);
    }

function getOurDate(){
    const myDate = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let dayOfweek = daysOfWeek[myDate.getDay()];
    let todayDay = myDate.getDate();;
    let month = months[myDate.getMonth()];
    let year = myDate.getFullYear();
    

    let showDate = document.querySelector('#date');
   
    showDate.innerHTML = `${dayOfweek}`+ " " + `${todayDay}` + " " + `${month}` + " " + `${year}`;

}


function changeBackground(result) {
    let conditions = `${result.weather[0].main}`;

    if (conditions === "Clear") {
        
        document.body.style.backgroundImage = 
        "url('https://images.unsplash.com/photo-1582636675488-43c06d4f8d19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')";
    }
    
    if (conditions === "Clouds") {
        document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1536396867955-294153ac3493?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80')";
    }

    if (conditions === "Mist" || conditions === "Smoke" || conditions === "Haze" || conditions === "Fog") {
        document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1522159773307-1976d1531738?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')";
    } 

    if (conditions === "Dust" || conditions === "Ash" || conditions === "Sand") {
        document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1465414829459-d228b58caf6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')";
    } 

    if (conditions === "Squall" || conditions === "Tornado") {
        document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1527482937786-6608f6e14c15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')";
    } 

    if (conditions === "Snow") {
        document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1608315398428-c6d76804838d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')";
    }
    
    if (conditions === "Rain" || conditions === "Drizzle") {
        document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1593981211728-41e4e796ec96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')";
    }

    if (conditions === "Thunderstorm") {
        document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1576613775061-75e52d6e6b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2612&q=80')";
    }
}



