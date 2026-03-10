async function getWeather() {

    const city = document.getElementById("cityInput").value;

    const apiKey = "751911a64397b8fa2d21fe2335e9d9f3";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weatherResult").innerHTML = "City not found ❌";
            return;
        }

        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const description = data.weather[0].description;
        const cloudsall = data.clouds.all;

        const weatherMain = data.weather[0].main;

          if (weatherMain === "Clear") {
              document.body.style.background = "skyblue";
            }
          else if (weatherMain === "Clouds") {
              document.body.style.background = "lightgray";
            }
          else if (weatherMain === "Rain") {
              document.body.style.background = "darkblue";
            }
          else if (weatherMain === "Snow") {
              document.body.style.background = "white";
            }
          else {
              document.body.style.background = "orange";
            }


        document.getElementById("weatherResult").innerHTML = `
            🌡 Temperature: ${temp}°C <br>
            💧 Humidity: ${humidity}% <br>
            ☁ Clouds: ${cloudsall}% <br>
            🌥 Condition: ${description}
        `;

    } catch (error) {
        document.getElementById("weatherResult").innerHTML = "Error fetching data ⚠";
    }
}

/* Night mode function */
function toggleNightMode() {
    document.body.classList.toggle("night");
}







