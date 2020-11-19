let knopka = document.querySelector('knopka')
const api = {
    key: 'bcdb488bfe4d9f66ff23dc578e887d33',
    base: "https://api.openweathermap.org/data/2.5/"
}
  
  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setQuery);
  
  function setQuery1() {
        let city = document.querySelector('.location .city');
        city.innerText = `Searching....`;
        let now = new Date();
        let date = document.querySelector('.location .date');
        date.innerText = '';
        let temp = document.querySelector('.current .temp');
        temp.innerHTML = '';
  
        let weather_el = document.querySelector('.current .weather');
        weather_el.innerText = '';
  
        let hilow = document.querySelector('.hi-low');
        hilow.innerText = '';
        
      getResults(searchbox.value);
  }


  function setQuery(evt) {
    if (evt.keyCode == 13) {
        let city = document.querySelector('.location .city');
        city.innerText = `Searching....`;
        let now = new Date();
        let date = document.querySelector('.location .date');
        date.innerText = '';
        let temp = document.querySelector('.current .temp');
        temp.innerHTML = '';
  
        let weather_el = document.querySelector('.current .weather');
        weather_el.innerText = '';
  
        let hilow = document.querySelector('.hi-low');
        hilow.innerText = '';
        
      getResults(searchbox.value);
    }
  }
  
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
          console.log(weather)
          if(weather.ok == false){
              just1();
          }else{
            return weather.json();
          }
        
      }).then(displayResults);
  }

  function just1(){
    setTimeout(()=>{
        let city = document.querySelector('.location .city');
        city.innerText = `Not founded,please try again`;
        let now = new Date();
        let date = document.querySelector('.location .date');
        date.innerText = '';
  
        let temp = document.querySelector('.current .temp');
        temp.innerHTML = '';
  
        let weather_el = document.querySelector('.current .weather');
        weather_el.innerText = '';
  
        let hilow = document.querySelector('.hi-low');
        hilow.innerText = '';
    },3000)
    
  }




  function displayResults (weather) {
      setTimeout(()=>{
        let city = document.querySelector('.location .city');
        var name = weather.name;
        if (name == 'underfined'){
           name = 'none';
        }
        city.innerText = `${name}, ${weather.sys.country}`;
        let now = new Date();
        let date = document.querySelector('.location .date');
        date.innerText = dateBuilder(now);
  
        let temp = document.querySelector('.current .temp');
        temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
        
        let weather_el = document.querySelector('.current .weather');
        weather_el.innerText = weather.weather[0].main;
  
        let hilow = document.querySelector('.hi-low');
        hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
    },3000)
  
  }
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }