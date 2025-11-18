const { leerStockExcel } = require('./stock_utils')

export default function handler (req, res) {
  try {
    let productos

    try {
      // Primero intenta con mayúsculas
      productos = leerStockExcel('cba.XLS')
    } catch (errorMayus) {
      // Si falla, intenta con minúsculas
      try {
        productos = leerStockExcel('cba.xls')
      } catch (errorMinus) {
        // Si también falla, lanzo el error para que lo agarre el catch externo
        throw errorMinus
      }
    }

    res.status(200).json(productos)
  } catch (error) {
    res.status(500).json({ error: 'No se pudo leer cba.XLS ni cba.xls.' })
  }
}
