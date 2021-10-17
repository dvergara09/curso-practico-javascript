//cuadrado
console.group('Cuadrados')
const ladoCuadrado = 5
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm')

const perimetroCuadrado = ladoCuadrado * 4
console.log('El perimetro del cuadrado es: ' + perimetroCuadrado + 'cm')

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log('El area del cuadrado es: ' + areaCuadrado + 'cm²')

console.groupEnd()

//triangulo
console.group('Triangulos')
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
const alturaTriangulo = 5.5
console.log(
  'Los lados del triangulo miden: ' +
    ladoTriangulo1 +
    'cm, ' +
    ladoTriangulo2 +
    'cm, ' +
    baseTriangulo +
    'cm'
)

console.log('La altura del triangulo es ' + alturaTriangulo + 'cm')

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log('El perimetro del triangulo es ' + perimetroTriangulo + 'cm')

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log('El area del triangulo es ' + areaTriangulo + 'cm²')

console.groupEnd()

//circulos
console.group('Circulos')
const radioCirculo = 4
const diametroCirculo = radioCirculo * 2
const PI = Math.PI
console.log('El radio del circulo es ' + radioCirculo + 'cm')
console.log('El diametro del circulo es ' + diametroCirculo + 'cm')
console.log('PI es' + PI)

const perimetroCirculo = diametroCirculo * PI
console.log('El perimetro del circulo es ' + perimetroCirculo + 'cm')
const areaCirculo = radioCirculo * radioCirculo * PI
console.log('El area del circulo es ' + areaCirculo + 'cm²')

console.groupEnd()
