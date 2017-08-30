var count = 1;
$('document').ready(function () {
    $('button').click(function () {
        count++;

        /*
        Disparition du nombre
        */
        $('.count-leave').addClass('count-leave-active');
        setTimeout(function () {
            $('.count-leave').remove();
        }, 1000);

        /*
        Apparition du nombre suivant
        */
        $('.count-enter').addClass('count-enter-active');
        setTimeout(function () {
            $('.count-enter').addClass('count-leave').removeClass('count-enter count-enter-active');
            $('body').append('<h2 class= "count count-enter">' + count + '</h2>')
        }, 1000);
    })
})
