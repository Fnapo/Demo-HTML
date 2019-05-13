let incCrono = 0;
let cifras = 1;
let divisor = Math.pow(10, cifras);
let proceso = 0;
let unidad = 6;

let mostrar = function() {
    let tiempo = new Date();
    let segs = tiempo.getSeconds();
    let mins = tiempo.getMinutes();
    let hora = tiempo.getHours();
    let ceroSeg = (segs < 10 ? '0' : '');
    let ceroMin = (mins < 10 ? '0' : '');
    let ceroHora = (hora < 10 ? '0' : '');
    let varH = 30 * hora + mins / 2;

    $("#digital").html(ceroHora + hora + " : " + ceroMin + mins + " : " + ceroSeg + segs);
    $('#v-hora').attr('transform', 'rotate(' + varH + " 50 50)");
    $('#v-min').attr('transform', 'rotate(' + 6 * mins + " 50 50)");
    $('#v-seg').attr('transform', 'rotate(' + 6 * segs + " 50 50)");
};

let arrancar = function() {
    incCrono = !incCrono;
    if (incCrono) {
        proceso = setInterval(mostrarCrono, 1000 / divisor);
    } else {
        clearInterval(proceso);
        proceso = 0;
    }
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
    localStorage.visitas++;
    $('#visitas').html(localStorage.visitas + (localStorage.visitas == 1 ? " visita." : " visitas."));
};

let mostrarCrono = function() {
    localStorage.crono = +localStorage.crono + incCrono; // El signo + convierte a number.
    $("#crono").html((localStorage.crono / divisor).toFixed(cifras) + " s.");
};

const crearLetras = () => {
    let letras = [];
    let svg = document.getElementById("reloj-svg1");

    letras[0] = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    $(letras[0]).attr('x', 50 - unidad / 2);
    $(letras[0]).attr('y', 2 * unidad);
    $(letras[0]).attr('fill', 'orange');
    $(letras[0]).attr('stroke', 'black');
    $(letras[0]).attr('font-size', unidad);
    letras[0].textContent = 12;
    svg.appendChild(letras[0]);
    letras[1] = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    $(letras[1]).attr('x', 50 - unidad / 4);
    $(letras[1]).attr('y', 100 - 5 * unidad / 4);
    $(letras[1]).attr('fill', 'orange');
    $(letras[1]).attr('stroke', 'black');
    $(letras[1]).attr('font-size', unidad);
    letras[1].textContent = 6;
    svg.appendChild(letras[1]);
    letras[2] = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    $(letras[2]).attr('x', 100 - 7 * unidad / 4);
    $(letras[2]).attr('y', 50 + unidad / 4);
    $(letras[2]).attr('fill', 'orange');
    $(letras[2]).attr('stroke', 'black');
    $(letras[2]).attr('font-size', unidad);
    letras[2].textContent = 3;
    svg.appendChild(letras[2]);
    letras[3] = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    $(letras[3]).attr('x', 5 * unidad / 4);
    $(letras[3]).attr('y', 50 + unidad / 4);
    $(letras[3]).attr('fill', 'orange');
    $(letras[3]).attr('stroke', 'black');
    $(letras[3]).attr('font-size', unidad);
    letras[3].textContent = 9;
    svg.appendChild(letras[3]);
};

let crearLineas = function() {
    let svg = document.getElementById("reloj-svg1");
    let elemento;

    for (let indice = 0; indice < 60; ++indice) {
        elemento = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        $(elemento).attr('x1', '50');
        $(elemento).attr('y1', '2');
        $(elemento).attr('x2', '50');
        $(elemento).attr('y2', (indice % 15) == 0 ? '6' : '4');
        $(elemento).attr('stroke', 'black');
        $(elemento).attr('stroke-width', (indice % 5) == 0 ? '2' : '1');
        svg.appendChild(elemento);
        $(elemento).attr('transform', 'rotate(' + 6 * indice + " 50 50)");
    }
};