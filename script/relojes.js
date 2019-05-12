let incCrono = 0;
let cifras = 1;
let divisor = Math.pow(10, cifras);

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
    incCrono = !incCrono;
    $('#arrancar').html(incCrono ? 'Parar' : 'Arrancar');
    $('#inicializar').prop('class', 'botones-' + (incCrono ? 'des' : 'act'));
    $('#inicializar').prop('disabled', (incCrono ? 'disabled' : ''));
};

let inicializar = function() {
    if (!incCrono) {
        localStorage.crono = 0;
    }
};

let mostrarVisitas = function() {
    localStorage.visitas = (localStorage.visitas || 0);
    localStorage.visitas++;
    $('#visitas').html(localStorage.visitas + " visitas.");
};

let mostrarCrono = function() {
    localStorage.crono = (localStorage.crono || 0);
    localStorage.crono = +localStorage.crono + incCrono; // El signo + convierte a number.
    $("#crono").html((localStorage.crono / divisor).toFixed(cifras) + " s.");
};