var hotel = {
    total: 100,
    Reservados: 30,
    ChecaDisponibilidade:function(){
        return this.quartosHotel = this.quartosReservados + this.reservarQuartos;
    }

}



var quartosHotel = document.getElementById('HotelQuartos');
quartosHotel.textContent = this.total;

var quartosReservados = document.getElementById('ReservadosQuartos');
quartosReservados.textContent = this.Reservados;



var reservarQuartos = document.getElementById('ReservaQuartos')
reservarQuartos.textContent += quartosReservados -= quartosHotel;