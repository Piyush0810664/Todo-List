


//   $('li').click(function(){
//   $(this).toggleClass('completed')
//   })


$('ul').on('click', 'li', function () {

    $(this).toggleClass('completed')
});



//     $('span').click(function(){
//     $(this).parent().remove();
//     })

$('ul').on('click', 'span', function (e) {

    $(this).parent().fadeOut(500,function () {
        $(this).remove();
    })


    e.stopPropagation();
})


$('input').keypress(function (e) {

    if (e.which === 13) {
        const todotext = $(this).val();

        const todo = `<li><span><i class="fas fa-trash-alt"></i></span> ${todotext}</li>`

        $('ul').append(todo);

        $(this).val("");
    }


})


$('#plus').click(function(){
    $('input[type="text"]').fadeToggle(500);
})