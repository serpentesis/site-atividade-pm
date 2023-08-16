// init Isotope
var $grid = $('.catalogo-lista').isotope({
    // options
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    resetFilterBotoes();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
});

//criando variavel para os botoes do catalogo ficarem selecionados/ativos de acordo com o filtro
var filterBotoes = $('.filter-button-group').find('button');
function resetFilterBotoes() {
    filterBotoes.each(function () {
        $(this).removeClass('active-filter-btn');
    })
} 