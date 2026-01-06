var tabBtn = $('.tab-button')
var tabCon = $('.tab-content')

for (let i = 0; i < tabBtn.length; i++){
    $('.tab-button').eq(i).on('click', function(){
        tabBtn.removeClass('orange')
        tabBtn.eq(i).addClass('orange')
        tabCon.removeClass('show')
        tabCon.eq(i).addClass('show')
    })
}
// $('.tab-button').eq(0).on('click', function(){
//     tabBtn.removeClass('orange')
//     tabBtn.eq(0).addClass('orange')
//     tabCon.removeClass('show')
//     tabCon.eq(0).addClass('show')
// })
// $('.tab-button').eq(1).on('click', function(){
//     tabBtn.removeClass('orange')
//     tabBtn.eq(1).addClass('orange')
//     tabCon.removeClass('show')
//     tabCon.eq(1).addClass('show')
// })
// $('.tab-button').eq(2).on('click', function(){
//     tabBtn.removeClass('orange')
//     tabBtn.eq(2).addClass('orange')
//     tabCon.removeClass('show')
//     tabCon.eq(2).addClass('show')
// })