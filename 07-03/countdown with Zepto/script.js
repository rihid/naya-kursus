let counter = 5;
$('#btn').on('click', function() {
    $('span').text('...');
    const interval = setInterval( function() {
        if( counter == 0){
            $('.container').css('display', 'none');
            $('body').append('<h1>Selamat Datang</h1>')
            clearInterval(interval);
        } else{
            $('span').text(counter);
        }
        counter--;
    }, 1000)
})