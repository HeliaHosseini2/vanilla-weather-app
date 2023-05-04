function formatDate(timestamp){
    // calculate the date
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date(timestamp)
    let hours = date.getHours()
    if (hours < 10) {return `0${hours}`}
    let minutes = date.getMinutes()
    if (minutes < 10) {return `0${minutes}`}
    let day =  days[date.getDay()] 

    return (`${day}  ${hours}:${minutes}`)


}

function displayTemperature(response){console.log(response.data)
document.querySelector("#temperature").innerHTML = Math.round(response.data.temperature.current)
document.querySelector("#city").innerHTML= response.data.city
document.querySelector("#description").innerHTML = response.data.condition.description 
document.querySelector("#humidity").innerHTML = response.data.temperature.humidity
document.querySelector("#wind").innerHTML =  Math.round(response.data.wind.speed)
document.querySelector("#date").innerHTML = formatDate(response.data.time) }


let apiKey ="d921b380ob8fd44ea6tdafd048cb353a"
let city = "paris"
let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`

axios.get(apiUrl).then(displayTemperature)