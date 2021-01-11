module.exports = function barCodeService(boleto) {

    let barCode = 
        boleto.substr(0, 4) +
        boleto.substr(32, 1) +
        boleto.substr(33, 14) +
        boleto.substr(4, 5) +
        boleto.substr(10, 10) +
        boleto.substr(21, 10)


    let amount = barCode.substr(9, 10) 
    let amountFormat = parseFloat(Number(amount.substr(0, 8) + '.' + amount.substr(8, 2)).toString())
    let returnObjeto = {
        barcode: barCode,
        amount: amountFormat 
    }
    return returnObjeto
}

/**
HELP 

Posição     Tamanho     Picture         Conteúdo
01 a 03     03          9(03)           Código do Banco na Câmara de Compensação = '001'
04 a 04     01          9(01)           Código da Moeda = 9 (Real)
05 a 05     01          9(01)           Digito Verificador (DV) do código de Barras*
06 a 09     04          9(04)           Fator de Vencimento **
10 a 19     10          9(08)V(2)       Valor
20 a 44     03          9(03)           Campo Livre ***

 */