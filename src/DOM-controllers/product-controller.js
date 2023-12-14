import {informacionProvisoria} from "/js/product-info"
/* import {informacionProvisoria} from "../Temporary-DB/productos-Prueba.js" */

const productConstructor = (obj) => {
    /* ----Creacion de Elementos---- */
    const productContainer = document.createElement("article")
    productContainer.className = "product-item flx-col-nowrap"

    const productImage = document.createElement("img")
    productImage.src = obj.img;
    productImage.alt = obj.alt

    const productInfoContainer = document.createElement("div")
    productInfoContainer.className = "info-container flx-row-wrap"

    const truckIconContainer = document.createElement("div")
    truckIconContainer.className = "truck-icon  flx-col-nowrap"

    const truckIcon = document.createElement("i")
    truckIcon.className = "fa-solid fa-truck"

    const productPrice = document.createElement("h4")
    productPrice.className = "price-item flx-row-nowrap"
    productPrice.innerText = obj.price.toLocaleString("es-AR")

    const productDiscount = document.createElement("h4")
    productDiscount.className = "discount-item flx-row-nowrap"
    productDiscount.innerText = obj.discount

    const productDescription = document.createElement("h4")
    productDescription.className = "description-item flx-row-nowrap"
    productDescription.innerText = obj.product

    /* ----Relaciones entre Elementos---- */

    productContainer.appendChild(productImage)
    productContainer.appendChild(productInfoContainer)

    productInfoContainer.appendChild(truckIconContainer)
    productInfoContainer.appendChild(productPrice)
    productInfoContainer.appendChild(productDiscount)
    productInfoContainer.appendChild(productDescription)

    truckIconContainer.appendChild(truckIcon)

    return productContainer
}


/* ----Event Listener---- */

document.addEventListener('DOMContentLoaded', ()=>{
    /* ----Carga Inicial de Products en Ultima Visita---- */
    const sectionLastView = document.querySelector(".section-lastView")
    
    for (let product of informacionProvisoria) {
        let productItem = productConstructor(product)
        sectionLastView.appendChild(productItem)
    }

    /* ----Carga Inicial de Products en Ultima Visita---- */
    const sectionOffers = document.querySelector(".section-ofertas")
    
    for (let product of informacionProvisoria) {
        let productItem = productConstructor(product)
        sectionOffers.appendChild(productItem)
    }

})