$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-studen').show('1000');
        } else {
            $('.cont-studen').not('.' + valor).hide('1000');
            $('.cont-studen').filter('.' + valor).show('1000');
        }
    });
    let equipo = $('#sobremi').offset().top,
        servicio = $('#estudio').offset().top,
        trabajo = $('#experiencia').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let equipo = $('#sobremi').offset().top,
        servicio = $('#estudio').offset().top,
        trabajo = $('#experiencia').offset().top,
        contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-sobremi').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: equipo -58
        },600);
    });

    $('#enlace-estudios').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio -25
        },600);
    });

    $('#enlace-experiencia').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trabajo -100
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });

});