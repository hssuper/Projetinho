var hotel = {
    totalQuartos: 100,
    reservados: 30,
     
    disponibilidade: function () {
        return this.totalQuartos - this.reservados;
    },
    Reservados: function(){
return reservados--;
    }
}
var quartos = document.getElementById('totalQuartos');
quartos.textContent = hotel.totalQuartos;

var reserva = document.getElementById('reservados');
reserva.textContent = hotel.reservados;