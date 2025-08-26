const handleOpen = (e) => {
    document.querySelector(".open").style.display = "none"
    document.querySelector(".close").style.display = "flex"
    document.querySelector("nav").style.display = "flex"
}

const handleClose = (e) => {
    document.querySelector(".open").style.display = "flex"
    document.querySelector(".close").style.display = "none"
    document.querySelector("nav").style.display = "none"
}

document.querySelector(".open").addEventListener("pointerdown", handleOpen)
document.querySelector(".close").addEventListener("pointerdown", handleClose)