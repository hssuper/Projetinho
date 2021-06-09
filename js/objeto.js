var hotel = {
    totalQuartos: 70,
    Reservados: 30,
    ChecaDisponibilidade: function () {
        return this.totalQuartos - this.Reservados;
    }
    }





var totalQuartos = document.getElementById('totalQuartos');
totalQuartos.textContent = hotel.totalQuartos;

var Reservados = document.getElementById('reservados');
Reservados.textContent = hotel.Reservados;

var disponibilidade = document.getElementById('disponibilidade')
disponibilidade.textContent = hotel.ChecaDisponibilidade ;

