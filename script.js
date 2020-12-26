let url = 'http://api.openweathermap.org/data/2.5/weather?q=moscow,ru&appid=b4f02a3fcdf0b9799afc7eb3d2f63e09';
fetch(url)
  .then(function (resp) { return resp.json() }) //convert data to json
  .then(function (data) {
    console.log(data);
    document.querySelector(".name").textContent = data.name;
    document.querySelector(".temperature").innerHTML = ((data.main.temp - 273).toFixed(1)) + '&deg';
    document.querySelector(".weather").textContent = data.weather[0]['description'];
    //http://openweathermap.org/img/wn/04n@2x.png
    document.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
  })
  .catch(function () {
    //catch any error
  });

let url1 = 'http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=b4f02a3fcdf0b9799afc7eb3d2f63e09';
fetch(url1)
  .then(function (resp) { return resp.json() }) //convert data to json
  .then(function (data) {
    console.log(data);
    document.querySelector(".name1").textContent = data.name;
    document.querySelector(".temperature1").innerHTML = ((data.main.temp - 273).toFixed(1)) + '&deg';
    document.querySelector(".weather1").textContent = data.weather[0]['description'];
    //http://openweathermap.org/img/wn/04n@2x.png
    document.querySelector(".icon1").innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
  })
  .catch(function () {
    //catch any error
  });
