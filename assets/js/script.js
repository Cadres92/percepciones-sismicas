const validarDatos = () => {
    usuario = document.querySelector("#usuario-input").value
    contraseña = document.querySelector("#contraseña-input").value
    if (usuario === "tirana" && contraseña === "Tir.2022") {
        window.location.assign("main.html")
    }
    else if (usuario === "camilo" && contraseña === "inacap") {
        window.location.assign("main.html")
    }
    else if (usuario === "Tirana" && contraseña === "Tir.2022") {
        window.location.assign("main.html")
    }
    else {
        alert("Los datos ingresados no son correctos.")
    }
}
