new Vue({
    el: '#weather',

    data: {
        weatherInfo: {
            name: "123",
            temperature: "",
            temperatureUnit: "",
            windSpeed: "",
            windDirection: ""
        }
    },
    methods: {
        getWeatherData: function () {
            let obj = this;
            fetch("https://api.weather.gov/points/42.361145,-71.057083")
                .then(response => {
                    if (response.status == 200) {
                        console.log(response);
                        return response.json();
                    } else {
                        console.log("Failure, status code" + response.status);
                    }
                })
                .then(data => {
                    console.log(data);
                    let weatherURL = data.properties.forecast;
                    console.log(weatherURL);
                    fetch(weatherURL)
                        .then(response => {
                            if (response.status == 200) {
                                console.log(response);
                                return response.json();
                            } else {
                                console.log("Failure, status code" + response.status);
                            }
                        })
                        .then(data => {
                            console.log(data);
                            let weatherData = data.properties.periods[0];
                            console.log(weatherData);
                            obj.weatherInfo.name = weatherData.name;
                            obj.weatherInfo.temperature = weatherData.temperature;
                            obj.weatherInfo.temperatureUnit = weatherData.temperatureUnit;
                            obj.weatherInfo.windSpeed = weatherData.windSpeed;
                            obj.weatherInfo.windDirection = weatherData.windDirection;
                        });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    beforeMount() {
        this.getWeatherData();
    }
});
