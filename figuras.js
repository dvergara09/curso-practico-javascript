//cuadrado
console.group('Cuadrados')

function perimetroCuadrado(lado) {
  return lado * 4
}

perimetroCuadrado()

function areaCuadrado(lado) {
  return lado * lado
}

console.groupEnd()

//triangulo
console.group('Triangulos')

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2
}

function alturaIsosceles(lado, base) {
  return Math.sqrt(lado * lado - (base * base) / 4)
}
console.groupEnd()

//circulos
console.group('Circulos')

function diametroCirculo(radio) {
  return radio * 2
}

const PI = Math.PI

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio)
  return diametro * PI
}

function areaCirculo(radio) {
  return radio * radio * PI
}

console.groupEnd()

//Integrar con HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById('inputCuadrado')
  const value = input.value

  const perimetro = perimetroCuadrado(value)
  document.getElementById('resultado').innerHTML = perimetro
}

function calcularAreaCuadrado() {
  const input = document.getElementById('inputCuadrado')
  const value = input.value

  const area = areaCuadrado(value)
  document.getElementById('resultado').innerHTML = area
}

function calcularPerimetroTriangulo() {
  const lado1 = document.getElementById('lado1')
  const value1 = parseInt(lado1.value)

  const lado2 = document.getElementById('lado2')
  const value2 = parseInt(lado2.value)

  const base = document.getElementById('base')
  const valueBase = parseInt(base.value)

  const perimetroT = perimetroTriangulo(value1, value2, valueBase)
  document.getElementById('resultadoTriangulo').innerHTML = perimetroT
  console.log(perimetroT)
}

function calcularAreaTriangulo() {
  const base = document.getElementById('base')
  const valueBase = parseInt(base.value)

  const altura = document.getElementById('altura')
  const valueAltura = parseInt(altura.value)

  const areaT = areaTriangulo(valueBase, valueAltura)
  document.getElementById('resultadoTriangulo').innerHTML = areaT
}

function calcularAlturaIsosceles() {
  const lado1 = document.getElementById('lado1')
  const value1 = parseInt(lado1.value)

  const lado2 = document.getElementById('lado2')
  const value2 = parseInt(lado2.value)

  const base = document.getElementById('base')
  const valueBase = parseInt(base.value)

  if (value1 === value2 && value1 !== valueBase && value2 !== valueBase) {
    const alturaI = alturaIsosceles(value1, valueBase)
    document.getElementById('resultadoTriangulo').innerHTML = alturaI
  } else {
    document.getElementById('resultadoTriangulo').innerHTML = 'No es Isosceles'
  }
}

function calcularPerimetroCirculo() {
  const radio = document.getElementById('radio')
  const valueRadio = parseInt(radio.value)

  const perimetroC = perimetroCirculo(valueRadio)
  document.getElementById('resultadoCirculo').innerHTML = perimetroC
  console.log(perimetroC)
}

function calcularAreaCirculo() {
  const radio = document.getElementById('radio')
  const valueRadio = parseInt(radio.value)

  const areaC = areaCirculo(valueRadio)
  document.getElementById('resultadoCirculo').innerHTML = areaC
}
