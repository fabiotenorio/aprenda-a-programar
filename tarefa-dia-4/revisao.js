
function aplicarImposto (valor, internacional, nome) {
    if (internacional == true){
        console.log(nome, 'importado',valor * 1.2)
    } else        
        console.log(nome, 'nacional', valor * 1.12)
}

let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

//for (let i = 0; i <= 3; i++) {
    //o codigo que estiver será repetido até o contatod obedecer a condiçao
    //aplicarImposto(valor[i].produtoA, nome[i].produtoA)

aplicarImposto(produtoA)
aplicarImposto(produtoB)
aplicarImposto(produtoC)
