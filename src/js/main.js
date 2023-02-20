import './lib/lib';

// $('button').on('click', function(){
//     $('div').eq(2).toggleClass('active');
// });
// $('div').click(function () {
// console.log($(this).index());
// });
// console.log($('div').eq(2).find('.more'));
// console.log($('button').html('Hello'));
// console.log($('.some').closest('.findmeG'));
// console.log($('.more').eq(0).siblings());
// $('button').fadeIn(1800);

$('#first').on('click',() =>{
    $('div').eq(1).fadeOut(800);
});
$('[data-count = "second"]').on('click',() =>{
    $('div').eq(2).fadeOut(800);
});
$('button').eq(2).on('click',() =>{
    $('.w-500').fadeOut(800);
});