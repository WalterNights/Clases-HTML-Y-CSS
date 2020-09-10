(function(){
    var actualizarHora = function () {
        var fecha = new Date (),
            horas = fecha.getHours (),
            ampm,
            minutos = fecha.getMinutes (),
            segundos = fecha.getSeconds (),
            diasSemana = fecha.getDate (),
            dia = fecha.getDay (),
            mes = fecha.getMonth (),
            year = fecha.getFullYear ();

        var pHoras = document.getElementById ('horas'),
            pAMPMs = document.getElementById ('ampm'),
            pMinutos = document.getElementById ('minutos'),
            pSegundos = document.getElementById ('segundos'),
            pDiaSemana = document.getElementById ('diasemana'),
            pDia = document.getElementById ('dia'),
            pMes = document.getElementById ('mes'),
            pAño = document.getElementById ('año');

        var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        pDiaSemana.textContent = semana [diasSemana];

    }

    actualizarHora ();

}())
