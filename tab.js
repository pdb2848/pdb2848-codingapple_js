var tabBtn = $('.tab-button')
var tabCon = $('.tab-content')

var car = ['소나타', 50000, 'white']
var car2 = {name : '소나타', price : 50000}

$('.car-title').html(car2.name + ' / ' + car2.price)

// for (let i = 0; i < tabBtn.length; i++){
//     $('.tab-button').eq(i).on('click', function(){
//         openTab(i)
//     })
// }


$('.list').click(function(e){
    openTab(e.target.dataset.id)
})


function openTab(num){
    tabBtn.removeClass('orange')
    tabBtn.eq(num).addClass('orange')
    tabCon.removeClass('show')
    tabCon.eq(num).addClass('show')
}

