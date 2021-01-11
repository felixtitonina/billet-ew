module.exports = function calcDigitoVerificador(barcode) {
    // 237
    // 432

    // 9 
    // 9

    // 4 

    // 849700000200003381260050907774400006330
    // 876543298765432987654329876543298765432

    let bloco1 = barcode.substr(0, 3)
    let bloco2 = barcode.substr(3, 1)
    let bloco3 = barcode.substr(5, 39)
    let dv = barcode.substr(4, 1)

    // console.log(bloco1); // 237
    // console.log(bloco2); // 9 
    // console.log(bloco3); // 849700000200003381260050907774400006330
    // console.log("dv", dv) //4
    let calcBloco1 = [4, 3, 2]
    let calcBloco2 = 9
    let calcBloco3 = [8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

    let bloco1StringArray = transformStringArray(bloco1)
    let bloco3StringArray = transformStringArray(bloco3)

    let bloco1Array = transformArrayString(bloco1StringArray)
    let bloco3Array = transformArrayString(bloco3StringArray)


    let somaBloco1 = somaArray(bloco1, calcBloco1)
    let somaBloco2 = bloco2 * calcBloco2
    let somaBloco3 = somaArray(bloco3, calcBloco3)

    let somaAll = (somaBloco1 + somaBloco2 + somaBloco3) % 11
    let somaAllMod = 11 - somaAll

    if (somaAllMod == 0 || somaAllMod == 10 || somaAllMod == 11) {
        somaAllMod = 1
    }


    let resultadoObjeto = {
        digitoVerificador: somaAllMod,
        barcode: bloco1 + bloco2 + somaAllMod + bloco3
    }

    function somaArray(arr1, arr2) {
        let returnSomaArray = []
        for (var i = 0; i < arr1.length; i++) {
            returnSomaArray.push(parseInt(arr1[i]) * parseInt(arr2[i]));
        }
        let ret = returnSomaArray.reduce(function (total, numero) {
            return total + numero;
        }, 0);
        return ret
    }

    function transformArrayString(arr) {
        let returnArray = []
        for (let v of arr) {
            returnArray.push(parseInt(v))
        }
        return returnArray
    }

    function transformStringArray(textString) {
        let returnStringArray = new Array();
        let string = textString
        returnStringArray = string.split("")
        return returnStringArray
    }

    return resultadoObjeto
}



/**
Por definição do BACEN, na 5ª posição do código de barras, deve ser indicado,
obrigatoriamente, o “dígito verificador” (DV), do Código de Barras, calculado pelo módulo
11, conforme segue:
a) O código de barras possui 44 (quarenta e quatro) posições, incluindo o DV;
b) Para calcular o DV considerar 43 posições do Código de Barras sendo da posição 1
a 4 e da posição 6 a 44;
c) Multiplicar cada algarismo que compõe o número pelo seu respectivo multiplicador
(peso), iniciando-se pela 44a posição e saltando a 5a posição;
d) Os multiplicadores (pesos) variam de 2 a 9;
e) O primeiro dígito da direita para a esquerda deverá ser multiplicado por 2, o segundo
por 3 e assim sucessivamente;
f) Os resultados das multiplicações devem ser somados:
a. Exemplo:(6 X 2) + (3 X 1) + (4 X 8) + ... + (4 X 0) = 712;
g) O total da soma deverá ser dividido por 11:
a. Exemplo: 712/11 = 64. Resto igual a 8;
h) O resto da divisão deverá ser subtraído de 11:
a. Exemplo: 11 - 8 = 3, Portando “3” é o Dígito verificador
i) Se o resultado da subtração for:
I - igual a 0.....................D.V. igual a 1
II - igual a 10....................D.V. igual a 1
III - igual a 11....................D.V. igual a 1
IV - diferente de 10 e 11..........D.V. será o próprio dígito, no caso do exemplo “3”
OBS: EM NENHUMA HIPOTESE
 */