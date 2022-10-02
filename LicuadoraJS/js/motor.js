var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender_button-sound");

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        hacerbrrbrr();
        licuadora.classList.add("active");
        console.log("Encendido");
    } else {
        estadoLicuadora = "apagada"
        hacerbrrbrr();
        licuadora.classList.remove("active")
        console.log("Apagado");
    }
}

function hacerbrrbrr() {
    if( sonidoLicuadora.paused ) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}

