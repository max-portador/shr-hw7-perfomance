import {IMAGES_AMOUNT} from "../constants"

export async function fetchDogImages() {
  let urls = []

  for (let i = 1; i < IMAGES_AMOUNT + 1; i ++){
    const response = await fetch(`https://dog.ceo/api/breeds/image/random/1`)
    const data = await response.json()
    const url = data.message[0]
    urls.push(url)
  }
  return urls
}

export async function fetchCatImages() {
  let urls = []

  for (let i = 1; i < IMAGES_AMOUNT + 1; i ++){
    const response = await fetch(`https://api.thecatapi.com/v1/images/search`)
    const data = await response.json();
    const url = data[0].url
    urls.push(url)
  }
  return urls
}


export async function fetchRandomImages() {
  let urls = []

  for (let i = 1; i < IMAGES_AMOUNT + 1; i ++){
    const response = await fetch("https://picsum.photos/400/400")
    const url = response.url
    urls.push(url)
  }
  return urls
}


//
// let btnDogs = document.querySelector(".loadDogs")
// btnDogs.textContent = `Load ${IMAGES_AMOUNT} dogs images`
// btnDogs.onclick = fetchDogImages
//
// let btnCats = document.querySelector(".loadCats")
// btnCats.textContent = `Load ${IMAGES_AMOUNT} cats images`
// btnCats.onclick = fetchCatImages
//
// let btnRnd = document.querySelector(".loadRandoms")
// btnRnd.textContent = `Load ${IMAGES_AMOUNT} random images`
// btnRnd.onclick = fetchRandomImages
//
// fetchCatImages()

