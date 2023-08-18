document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", function() {
        const latValue = document.getElementById("lat").value;
        const longValue = document.getElementById("long").value;
	const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat='+latValue+'&lon='+longValue+'&appid=1e8ad0d5dcd33812b8ae27fe57755d1f';
    fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
 document.getElementById("info").innerText="Temp : "+data .list[0].main.temp; 
document.getElementById("info").innerText+="\nFeels Like : "+data .list[0].main.feels_like; 
document.getElementById("info").innerText+="\nTemp_min : "+data .list[0].main.temp_min; 
document.getElementById("info").innerText+="\nTemp_max: "+data .list[0].main.temp_max; 
document.getElementById("info").innerText+="\nPressure : "+data .list[0].main.pressure;    
document.getElementById("info").innerText+="\nSea Level : "+data .list[0].main.sea_level;    
document.getElementById("info").innerText+="\nHumidity: "+data .list[0].main.humidity;    

  })
  .catch(error => console.error("Error fetching data:", error));


    });
});