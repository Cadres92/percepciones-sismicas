const validarDatos = () => {
    usuario = document.querySelector("#usuario-input").value
    contraseña = document.querySelector("#contraseña-input").value
    if (usuario === "inacap" && contraseña === "4310") {
        window.location.assign("main.html")
    }
    else if (usuario === "camilo" && contraseña === "inacap") {
        window.location.assign("main.html")
    }
    else if (usuario === "Inacap" && contraseña === "4310") {
        window.location.assign("main.html")
    }
    else {
        alert("Los datos ingresados no son correctos.")
    }
}