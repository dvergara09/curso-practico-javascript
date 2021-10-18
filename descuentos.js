const precioOriginal = 100
const descuento = 15

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100
  return precioConDescuento
}

/* console.log({
  precioOriginal,
  descuento,
  porcentajePrecioConDescuento,
  precioConDescuento
}) */

function priceDiscount() {
  const inputPrice = document.getElementById('inputPrice')
  const priceValue = parseInt(inputPrice.value)
  const inputDiscount = document.getElementById('inputDiscount')
  const discountValue = parseInt(inputDiscount.value)

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  )

  const resultP = document.getElementById('resultP')
  resultP.innerText = `El precio con descuento es $${precioConDescuento}`
}
