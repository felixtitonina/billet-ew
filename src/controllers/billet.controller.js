const clear = require('../services/clear.services')
const validadeBilletService = require('../services/validadeBillet.service')
const calcDigitoVerificadorService = require('../services/calcDigitoVerificador.service')
const barCodeService = require('../services/barCode.service')


module.exports = {

    async validadeBillet(req, res, next) {
        try {

            const boleto = req.params.boleto

            const clearBillet = await clear(boleto)

            const billetValid = await validadeBilletService(clearBillet)

            if (billetValid.statuCode == 400) {
                return res.status(billetValid.statuCode).json(billetValid)
            }

            let barCode = await barCodeService(clearBillet)

            let dataBase = new Date(`1997-10-07 20:54:59.000Z`)
            dataBase.setDate(dataBase.getDate() + 8350)
            let dataVencimento = dataBase.toLocaleString()

            let digitoVerificador = calcDigitoVerificadorService(barCode.barcode)

            let objetoResultado = {
                amount: barCode.amount,
                expirationDate: dataVencimento,
                barCode: digitoVerificador.barcode,
                digitoVerificador: digitoVerificador.digitoVerificador

            }
            return res.status(200).json(objetoResultado)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}
