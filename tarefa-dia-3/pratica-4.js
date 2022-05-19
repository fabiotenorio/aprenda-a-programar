let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

let valor = produtoA.valor
if (produtoA.internacional == true) {
    console.log(produtoA.nome,'internacional valor com impostos R$',valor*1.2)
} else {
    console.log(produtoA.nome,'nacional valor com impostos R$',valor*1.12)
}
valor = produtoB.valor
if (produtoB.internacional == true) {
    console.log(produtoB.nome,'internacional valor com impostos R$',valor*1.2)
} else {
    console.log(produtoB.nome,'nacional valor com impostos R$',valor*1.12)
}
valor = produtoC.valor
if (produtoC.internacional == true) {
    console.log(produtoC.nome,'internacional valor com impostos R$',valor*1.2)
} else {
    console.log(produtoC.nome,'nacional valor com impostos R$',valor*1.12)
}
