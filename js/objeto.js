var hotel = {
    totalQuartos: 100,
    Reservados: 30,
     
    disponibilidade: function () {
        return this.totalQuartos, this.Reservados;



    }

}

var totalQuartos = document.getElementById('totalQuartos');
totalQuartos.textContent = hotel.totalQuartos;

document.getElementById('totalQuartos').click(function () {
    totalQuartos--;  
});
var Reservados = document.getElementById('reservados');
Reservados.textContent = hotel.Reservados;

document.getElementById('reservados').click(function () {
    Reservados++;
});
