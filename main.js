import "./style.css";
import { createApi } from "unsplash-js"

// HEADER 
let searchButton = '<svg aria-label="Icono de búsqueda" class="BNH gUZ U9O kVc" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M10 16a6 6 0 1 1 .01-12.01A6 6 0 0 1 10 16m13.12 2.88-4.26-4.26a10 10 0 1 0-4.24 4.24l4.26 4.26a3 3 0 1 0 4.24-4.24"></path></svg>'
  const headerTemplate= () => {
    return `
    <h1><svg aria-hidden="true" aria-label="" class="g_1 gUZ U9O kVc" height="40" role="img" viewBox="0 0 24 24" width="40" fill="#e60023"><path d="M7.54 23.15q-.2-2.05.26-3.93L9 14.04a7 7 0 0 1-.35-2.07c0-1.68.81-2.88 2.09-2.88.88 0 1.53.62 1.53 1.8q0 .57-.23 1.28l-.52 1.72q-.15.5-.15.92c0 1.2.91 1.87 2.08 1.87 2.09 0 3.57-2.16 3.57-4.96 0-3.12-2.04-5.12-5.05-5.12-3.36 0-5.49 2.19-5.49 5.24 0 1.22.38 2.36 1.11 3.14-.24.41-.5.48-.88.48-1.2 0-2.34-1.69-2.34-4 0-4 3.2-7.17 7.68-7.17 4.7 0 7.66 3.29 7.66 7.33s-2.88 7.15-5.98 7.15a3.8 3.8 0 0 1-3.06-1.48l-.62 2.5a11 11 0 0 1-1.62 3.67A11.98 11.98 0 0 0 24 12a11.99 11.99 0 1 0-24 0 12 12 0 0 0 7.54 11.15"></path></svg></h1>
    <ul class="menu-li">
      <li class="inicio active">Inicio</li>
      <li class="explorar">Explorar</li>
      <li class="crear">Crear</li>
    </ul>
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

    const fecha = new Date(item.created_at);

    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear();

    const formato = `${dia}/${mes}/${anio}`;

    return `
      <li class="gallery-item" style="background-image: url(${item.urls.regular}); position: relative;">
      <div class="info">
          <div class="visit-btn">
              <a href=${item.user.portfolio_url} target="_blank">Visitar</a>
          </div>
          <div class="links">
              <a href="#" class="full-link" >
              <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.4524 4.64579V15.8424C20.4524 16.8726 19.6166 17.7085 18.5863 17.7085H2.41346C1.38322 17.7085 0.547363 16.8726 0.547363 15.8424V4.64579C0.547363 3.61555 1.38322 2.7797 2.41346 2.7797H5.83464L6.31283 1.50064C6.58497 0.77364 7.28087 0.291565 8.05841 0.291565H12.9375C13.715 0.291565 14.4109 0.77364 14.6831 1.50064L15.1651 2.7797H18.5863C19.6166 2.7797 20.4524 3.61555 20.4524 4.64579ZM15.1651 10.2441C15.1651 7.67043 13.0736 5.57884 10.4999 5.57884C7.92623 5.57884 5.83464 7.67043 5.83464 10.2441C5.83464 12.8178 7.92623 14.9093 10.4999 14.9093C13.0736 14.9093 15.1651 12.8178 15.1651 10.2441ZM13.9211 10.2441C13.9211 12.1296 12.3854 13.6653 10.4999 13.6653C8.61435 13.6653 7.07871 12.1296 7.07871 10.2441C7.07871 8.35855 8.61435 6.82291 10.4999 6.82291C12.3854 6.82291 13.9211 8.35855 13.9211 10.2441Z" fill="black"/>
              </svg>
              <br> ${item.user.total_photos}
              </a>
              <div>
                  <a href=${item.urls.full} target="_blank" class="links-icon">
                  <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.0345 5.10018C26.8379 -3.39079 16.449 0.405171 15.5 4.65065C14.2014 0.155437 4.06217 -3.191 0.965466 5.10018C-2.48087 14.3403 14.3013 22.6315 15.5 23.9801C16.6987 22.8813 33.4809 14.1905 30.0345 5.10018Z" fill="#FF5A79"/>
                  </svg>
                  <br> ${item.likes}
                  </a>  
              </div>
          </div>
      </div>
      <div class="user">
        <img src="${item.user.profile_image.large}" alt="${item.user.name}" style="border: 8px solid ${item.color};">
        <div class="user-name">
          <p>${item.user.name}</p>
          <div class="display-flex user-icon">
            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 12.1332V18.2059C1.5 19.3239 2.40628 20.2301 3.52422 20.2301H17.6938C18.8118 20.2301 19.718 19.3239 19.718 18.2059V12.1332" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.6089 15.1696V1M10.6089 1L5.54834 6.5104M10.6089 1L15.6695 6.51038" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p class="user-date">${formato}</p>
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

    const images = await searchPhotos("photography")
    printItems(images.response.results)
  }

  printTemplate();

