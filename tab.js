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






function openTab(num){
    tabBtn.removeClass('orange')
    tabBtn.eq(num).addClass('orange')
    tabCon.removeClass('show')
    tabCon.eq(num).addClass('show')
}




var 출석부 = ['흥민', '영희', '철수', '재석', '철수'];

function 이름찾기(name){

    // for (var i = 0; i < 출석부.length; i++)
    // {
    //     if (출석부[i] == name){
    //         console.log("있음")
    //     }
    // }
    출석부.forEach(function(a){
        if (a == name){     
            console.log("있음")
        }
    })
}

function nine(){
    for (var i = 2; i < 10; i++){
        for (var j = 1; j < 10; j++){
            console.log(i * j)
        }
    }
}

function avg(legacy, current){
    var sum = 0;
    var result = 0;
    var last = 0;
    legacy.forEach(function(a){
        sum += a;
    })
    result = sum / legacy.length
    if (result > current){
        last = result - current
        console.log(`평균보다 ${last}점 떨어졌네요 재수 ㄱ`)
    }
    else if (result < current){
        last = current - result
        console.log(`평균보다 ${last}점 올랐네요 ㅊㅊ`)
    }
    else{
        console.log('평균임')
    }
}
