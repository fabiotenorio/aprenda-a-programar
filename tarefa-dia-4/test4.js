let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};


if (produtoA.internacional == true) {
    //executar se for verdadeiro
    let preco = produtoA.valor
    let imposto = 0.2
    let valorComImposto = preco + preco * imposto
    console.log(valorComImposto)

} else {
    console.log('o produto é nacional')
    console.log(produtoA.valor + produtoA.valor * 0.12)
}