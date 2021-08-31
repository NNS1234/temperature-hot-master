const search = () => {
    const cityName = document.getElementById("search-text")
    const name = cityName.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=565eacaa779595b1867b6486b251e086`)
        .then(response => response.json())
        .then(data => display1(data))
}

const display1 = data => {
    const q = data
    const w = q.weather

    // console.log(q.name)
    // console.log(q)
    const temp1 = q.main.temp
    const kelvin = 273.15
    const result = temp1 - kelvin

    // console.log(result.toFixed(0))
    const result1 = result.toFixed(0)

    // w.forEach(element => {
    //     console.log(element.main)
    //     console.log(element.icon)
    // });

    const myCity = document.getElementById("myCity")
    myCity.innerHTML = `

                <img src="https://openweathermap.org/img/wn/${q.weather[0].icon}@2x.png" alt="">
            <h1>${q.name}</h1>
            <h3><span>${result1}</span>&deg;C</h3>
                
                    <h1 class="lead">${q.weather[0].main}</h1>
 

            
    `
}