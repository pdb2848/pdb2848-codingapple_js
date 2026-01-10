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

//select
var product_select = $('.form-select').eq(0)
var size_select = $('.form-select').eq(1) 
var pants = [28, 30, 32, 34]
var shirts = [95, 100, 105]

product_select.on('input', function(){
    if (product_select.val() == '셔츠'){
        size_select.removeClass('form-hide')
        size_select.html('')
        shirts.forEach(function(size){
            size_select.append(`<option>${size}</option>`)
        })
    }
    else if(product_select.val() == '바지'){
        size_select.removeClass('form-hide')
        size_select.html('')
        pants.forEach(function(size){
            size_select.append(`<option>${size}</option>`)
        })
    }
    else{
        size_select.addClass('form-hide')
    }
})

var testP = '<option>28</option>'
testP.innerHTML = 'hi'
document.querySelector('#test').appendChild(testP)





function openTab(num){
    tabBtn.removeClass('orange')
    tabBtn.eq(num).addClass('orange')
    tabCon.removeClass('show')
    tabCon.eq(num).addClass('show')
}

