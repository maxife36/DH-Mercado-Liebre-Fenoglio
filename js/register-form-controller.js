//Manjeo del Imagen de Perfil

const inputProfileImg = document.querySelector("#add-img")
const customProfileImg= document.querySelector("#profile-img")

inputProfileImg.addEventListener("change", ()=>{
  if (inputProfileImg.files.length > 0) {
    const supportedFormats= ["jpg", "jpeg", "png"]
    let typeImg = inputProfileImg.files[0].type.slice(6)
    let formatFlag = false

    supportedFormats.forEach(el => {el === typeImg? formatFlag = true : ""})

    if (formatFlag) {
      const url = URL.createObjectURL(inputProfileImg.files[0]);
      customProfileImg.src = url 
    } else{
      window.alert("Formato de imagen no soportado")
    }
  }
})
