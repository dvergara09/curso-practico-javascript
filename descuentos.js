const precioOriginal = 100
const descuento = 15

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100
  return precioConDescuento
}

const coupons = [
  {
    name: 'Cupon 1',
    discount: 15
  },
  {
    name: 'Cupon 2',
    discount: 30
  },
  {
    name: 'Cupon 3',
    discount: 50
  }
]

function priceDiscount() {
  const inputPrice = document.getElementById('inputPrice')
  const priceValue = inputPrice.value
  const inputDiscount = document.getElementById('inputDiscount')
  const discountValue = inputDiscount.value
  const inputCoupon = document.getElementById('inputCoupon')
  const couponValue = inputCoupon.value
  let descuentoTotal = 0

  if (priceValue === '') {
    alert('El precio no puede ser vacio')
  } else {
    const couponUser = coupons.find(
      (element) => element.discount === parseInt(couponValue)
    )

    if (couponUser !== undefined) {
      descuentoTotal += couponUser.discount
    }

    if (discountValue !== '') {
      descuentoTotal += parseInt(discountValue)
    }

    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      descuentoTotal
    )

    const resultP = document.getElementById('resultP')
    resultP.innerText = `El precio con descuento es $${precioConDescuento}`
  }
}
