let incCrono = 0;
let decimales = 1;

let mostrar = function() {
    let tiempo = new Date();
    let segs = tiempo.getSeconds();
    let mins = tiempo.getMinutes();
    let hora = tiempo.getHours();
    let ceroSeg = (segs < 10 ? '0' : '');
    let ceroMin = (mins < 10 ? '0' : '');
    let ceroHora = (hora < 10 ? '0' : '');

    $("#digital").html(ceroHora + hora + " : " + ceroMin + mins + " : " + ceroSeg + segs);
};

let arrancar = function() {
    incCrono = (!incCrono ? Math.pow(10, -decimales) : 0);
};

let inicializar = function() {
    if (!incCrono) {
        localStorage.crono = 0;
    }
};

let initVisitas = function() {
    localStorage.visitas = (localStorage.visitas || 0);
    mostrarVisitas();
};

let mostrarVisitas = function() {
    localStorage.visitas++;
    $('#visitas').html(localStorage.visitas + " visitas.");
};

let initCrono = function() {
    localStorage.crono = (localStorage.crono || 0);
    mostrarCrono();
};

let mostrarCrono = function() {
    localStorage.crono = parseFloat(parseFloat(localStorage.crono) + incCrono).toFixed(decimales);
    $("#crono").html(localStorage.crono + " s.");
};