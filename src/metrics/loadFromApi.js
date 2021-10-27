import {IMAGES_AMOUNT} from "../constants/constants";

async function fetchSomeImages(callback) {
  let urls = []

  for (let i = 1; i < IMAGES_AMOUNT + 1; i ++){
    urls.push(await callback())
  }

  return urls
}


const getDogsUrls = async () => {
  const response = await fetch(`https://dog.ceo/api/breeds/image/random/1`)
  const data = await response.json()
  return data.message[0]
}

const getCatsUrls = async () => {
  const response = await fetch(`https://api.thecatapi.com/v1/images/search`)
  const data = await response.json();
  return data[0].url
}

const getRandomUrls = async () => {
  const response = await fetch("https://picsum.photos/400/400")
  return response.url
}


// получате с внешнего API 8 url изображений собак
export async function fetchDogImages() {
  return fetchSomeImages(getDogsUrls)
}

// получате с внешнего API 8 url изображений кошек
export async function fetchCatImages() {
  return fetchSomeImages(getCatsUrls)
}

// получате с внешнего API 8 url случацных изображений
export async function fetchRandomImages() {
  return fetchSomeImages(getRandomUrls)
}
