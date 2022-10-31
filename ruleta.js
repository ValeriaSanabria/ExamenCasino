var giros = 0;
function girar() {
    if (giros < 3) {
        var rand = Math.random() * 7200;
        calcular(rand);
        giros++;
    }
    else {
        console.log("Sigue girando");
    }
}
function calcular(rand) {
    var valor = rand / 360;
    valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
    switch (true) {
        case valor > 0 && valor <= 45:
            console.log("Has ganado $2000");
            break;
        case valor > 45 && valor <= 90:
            console.log("Has ganado $5000");
            break;
        case valor > 90 && valor <= 135:
            console.log("Segui participando");
            break;
        case valor > 135 && valor <= 180:
            console.log("Has ganado $10000");
            break;
        case valor > 180 && valor <= 225:
            console.log("Has ganado $500");
            break;
        case valor > 225 && valor <= 270:
            console.log("Segui participando");
            break;
        case valor > 270 && valor <= 315:
            console.log("Has ganado otro intento");
            break;
        case valor > 315 && valor <= 360:
            console.log("Has ganado $1000");
            break;
    }
}
;
console.log(calcular);
/*let dinero = 50;

function girar(){
    if (dinero >= 20) {
        let rand = Math.random()*7200;
        sumarPuntos(-20);
        calcular(rand);
    }
    else {
        alert("no te queda suficiente dinero");
    }
}

function calcular(rand){
    let valor = rand / 360;
    valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
    ruleta.style.transform = "rotate("+rand+"deg)";
    setTimeout(()=>{
    switch(true){
        case valor > 0 && valor <= 45:
            alert("Has ganado y te has llevado 500 USD");
            break;
        case valor > 45 && valor <= 90:
            alert("Has ganado 20 USD");
            sumarPuntos(20);
            break;
        case valor > 90 && valor <= 135:
            alert("has sumado 5 puntos");
            sumarPuntos(5);
            break;
        case valor > 135 && valor <= 180:
            alert("has sumado 50 puntos");
            sumarPuntos(50);
            break;
        case valor > 180 && valor <= 225:
            alert("has sumado 100 puntos");
            sumarPuntos(100);
            break;
        case valor > 225 && valor <= 270:
            alert("No has sumado puntos");
            break;
        case valor > 270 && valor <= 315:
            alert("has sumado 70 puntos");
            sumarPuntos(70);
            break;
        case valor > 315 && valor <= 360:
            alert("Has sumado 10 puntos");
            sumarPuntos(10);
            break;
    }},5000);
}*/ 
