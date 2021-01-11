module.exports = function validadeBillet(billet) {
    let menasge

    let errorMensage = {
        statuCode: 400,
        error: "Boleto inválido",
        menasge: !menasge ?"Boleto inválido": menasge
    }
    if (billet.length == 44) {
        return 'codigoBarras'
    } else if (billet.length == 46 || billet.length == 47 || billet.length == 48) {
        return 'LINHA_DIGITAVEL'
    } else if (billet.length < 44) {
        errorMensage.menasge = "Quantidade de digitos informado insuficientes para validar boleto"
        return errorMensage
    } else if (billet.length > 49) {
        errorMensage.menasge = "Digitos informados excedeu o limite de 48 caracteres."
        return errorMensage
    } else {
        return errorMensage
    }
}

