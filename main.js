import "./style.css";
import { createApi } from "unsplash-js"

// HEADER 
let searchButton = '<svg aria-label="Icono de búsqueda" class="BNH gUZ U9O kVc" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M10 16a6 6 0 1 1 .01-12.01A6 6 0 0 1 10 16m13.12 2.88-4.26-4.26a10 10 0 1 0-4.24 4.24l4.26 4.26a3 3 0 1 0 4.24-4.24"></path></svg>'
  const headerTemplate= () => {
    return `
    <h1>I</h1>
    <input type="text" placeholder="Search" id="searchinput"/>
    <button id="searchbtn">${searchButton}</button>
    <button id="darkmodebtn"><img src="https://static.thenounproject.com/png/4066357-200.png" width="20px" height="20px" alt="Dark mode icon"/ id="darkmodeicon"></button>
    <img
      src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
      alt="Profile image"
      class="profileimg"
    /> 
      `
  }

  const themeSwitch = () => {
    document.body.classList.toggle("dark")
  }

  const listeners = () => {
    const darkmodebtn = document.querySelector("#darkmodebtn")
    darkmodebtn.addEventListener("click", () => {
      themeSwitch()
      const theme = document.body.classList.contains("dark")
      if (theme) {
        document.querySelector("#darkmodeicon").src = "https://static.thenounproject.com/png/4066357-200.png";
      } else {
        document.querySelector("#darkmodeicon").src = "https://static.thenounproject.com/png/4066357-200.png";
      }
    })
  }

  const printHeaderTemplate = () => {
    document.querySelector("header").innerHTML = headerTemplate()
    listeners()
  }

  printHeaderTemplate();

// FOOTER
  const templateFooter = () => {
    return `
      <h4>Copyright 2024 - Inspirest - Guillermo Morillo</h4>
      `
  }

  const printFooterTemplate = () => {
    document.querySelector("footer").innerHTML = templateFooter()
  }

  printFooterTemplate();

  //CARDS
  const cardTemplate = (item) => {
    return `
      <li class="gallery-item" style="background-image: url(${item.urls.regular}); border: 10px solid ${item.color}">
      <div class="info">
          <div class="save-btn">
              <button>Guardar</button>
          </div>
          <div class="links">
              <a href=${item.links.html} class="full-link">${item.links.html}</a>
              <div>
                  <a href=${item.urls.full} target="_blank" class="links-icon">
                      <img src="/icons/upload.svg" alt="Upload icon"/>
                  </a>
                  <a href="#null" class="links-icon">
                      <img src="/icons/more.svg" alt="More icon"/>
                  </a>    
              </div>
          </div>
      </div>
      </li>
      `
  }


// API
  const unsplash = createApi({
    accessKey: import.meta.env.VITE_ACCESS_KEY,
  })
  
  const searchPhotos = async (keyword) => {
    const images = await unsplash.search.getPhotos({
      query: keyword,
      page: 1,
      perPage: 30,
    })
    return images
  }

//GALLERY
  const galleryTemplate = () => {
    return `
      <ul class="gallery">
      </ul>
      `
  }

  const printItems = (items) => {
    const gallery = document.querySelector(".gallery")
    gallery.innerHTML = ""
    for (const item of items) {
      gallery.innerHTML += cardTemplate(item)
    }
  }

  const galleryListeners = async () => {
    const input = document.querySelector("#searchinput")
    const btn = document.querySelector("#searchbtn")
    btn.addEventListener("click", async () => {
      const images = await searchPhotos(input.value)
      printItems(images.response.results)
    })
  }

  const printTemplate = async () => {
    document.querySelector("main").innerHTML = galleryTemplate()
    galleryListeners()

    const images = await searchPhotos("moon")
    printItems(images.response.results)
  }

  printTemplate();

