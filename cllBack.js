function greeting(greetingHandler,name){
    greetingHandler(name)
}

function greetingHandler(name){
    console.log('good Morning',name)
}

function greetEvening(name){
    console.log('Good Evening',name)
}

greeting(greetingHandler,'Tanzid Anan')
greeting(greetEvening,'Anan Vai')