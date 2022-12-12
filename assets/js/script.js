const validarDatos = () => {
    usuario = document.querySelector("#usuario-input").value
    contraseña = document.querySelector("#contraseña-input").value
    if (usuario === "abc" && contraseña === "qwe") {
        window.location.assign("main.html")
    }
    else {
        alert("Los datos ingresados no son correctos.")
    }
}