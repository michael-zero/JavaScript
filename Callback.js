
function rand(max = 1000, min = 3000){
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

function f1(callback){
    setTimeout(() => {
        console.log('f1')
        if(callback) callback()
    }, rand())
}

function f2(callback){
    setTimeout(()=>{
        console.log('f2')
        if(callback) callback()
    },rand())
}

function f3(callback){
    setTimeout(()=>{
        console.log('f3')
        if(callback) callback()
    },rand())
}

f1(() => f2(() => f3(function(){
    (function(num1, num2){
    console.log(num1 + num2)
    })(10,9)
})))
