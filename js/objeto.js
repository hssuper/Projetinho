var hotel = {
    totalQuartos: 100,
    Reservados: 30,
    disponibilidade: function () {
        return this.totalQuartos, this.Reservados;



    }

}

var totalQuartos = document.getElementById('disponibilidade');
totalQuartos = 100;

document.getElementById('disponibilidade').click(function () {
    totalQuartos--;
});
var Reservados = document.getElementById('disponibilidade');
Reservados = 30;

document.getElementById('disponibilidade').click(function () {
    Reservados--;
});

var totalQuartos = document.getElementById('totalQuartos');
totalQuartos.textContent = hotel.totalQuartos;

var Reservados = document.getElementById('reservados');
Reservados.textContent = hotel.Reservados;



