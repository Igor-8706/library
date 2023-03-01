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

// создание модального окна
$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis sed recusandae natus adipisci veniam culpa quo dicta dolorum fugiat accusantium, ad consequuntur dolorem, aperiam repellendus, quibusdam officiis totam pariatur nemo!'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ],
            [
                'Another button',
                ['btn-warning','ml-10'],
                false,
                () =>{
                    alert('Hello world');
                }
            ]
        ]
    }
}));

// тестирование методов get и post
    $().get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res));



// $('.wrap').html(
//     ` <div class="dropdown">
//     <button class="btn btn-primary dropdown-toggle" id="drowdownMenuButton">Dropdown button</button>
//     <div class="dropdown-menu" data-toggle-id="drowdownMenuButton">
//         <a href="#" class="dropdown-item">Action</a>
//         <a href="#" class="dropdown-item">Action #2</a>
//         <a href="#" class="dropdown-item">Action #3</a>
//     </div>
// </div>
// </div>`
// );
// $('.dropdown-toggle').dropdown();

