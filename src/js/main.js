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

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});
$('[data-count = "second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});
$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

$('.wrap').html(
    ` <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" id="drowdownMenuButton">Dropdown button</button>
    <div class="dropdown-menu" data-toggle-id="drowdownMenuButton">
        <a href="#" class="dropdown-item">Action</a>
        <a href="#" class="dropdown-item">Action #2</a>
        <a href="#" class="dropdown-item">Action #3</a>
    </div>
</div>
</div>`
);
$('.dropdown-toggle').dropdown();