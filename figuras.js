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
