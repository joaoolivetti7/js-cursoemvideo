function contar(){
    var inicio = document.getElementById ('txtini')
    var fim = document.getElementById ('txtfim')
    var passo = document.getElementById ('txtpas')
    var res = document.getElementById ('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Por favor, preencha os dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <=0 ){
            alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
    if (i < f){
        for(var c = 1; c <= f; c += p){
            res.innerHTML += ` ${c} `
        }
    } else {
        for(var c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} `
        }
    
    }
    }
}