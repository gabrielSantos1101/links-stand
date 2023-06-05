import { Age, DaysFromBirthday } from "./assets/js-modules/age.js"

console.log(Age(), DaysFromBirthday())

const token = "f45befcc"
const tokenDev = "5517e051"
const cors = "https://cors-anyware.up.railway.app/"
const url = `${cors}https://api.hgbrasil.com/weather?key=${tokenDev}&user_ip=remote`
const url2 = `https://api.hgbrasil.com/weather?format=json-cors&key=${tokenDev}`

fetch(url, {
  method: "GET",
  mode: "cors",
  headers: {
    Authorization: `Bearer ${tokenDev}`,
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error))

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const temp = data.results.temp
    const condition = data.results.condition_slug
    const city_name = data.results.city_name

    console.log(temp, condition, city_name)
  })
  .catch((error) => console.error(error))

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "numeric",
})
const date = new Date()

const formattedDate = dateFormatter.format(date)
