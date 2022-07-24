// Formulas Cuadrado
const Perimetro =(lado) => lado*4;
const Area =(lado) => lado*lado;
function CalcularPerimetro(){
    let inputSide = document.getElementById("inputSide")
    let valor = Number( inputSide.value);
    const result = `El Perimetro es ${Perimetro(valor)} cm`
    document.getElementById("Answer").innerText= result;
}
function CalcularArea(){
    let inputSide = document.getElementById("inputSide")
    let valor = Number(inputSide.value);
    const result = `El Area es ${Area(valor)} cm`
    document.getElementById("Answer").innerText= result;
}
//Formulas Triangulo
const PerimetroTri=(Lado1,Lado2,Lado3) => Lado1+Lado2+Lado3;
function CalcularPerimetroTri(){
    let Lado1 = document.getElementById("Lado1")
    let Lado2 = document.getElementById("Lado2")
    let Lado3 = document.getElementById("Lado3")
    let valor1 =Number(Lado1.value)
    let valor2 =Number(Lado2.value)
    let valor3 =Number(Lado3.value)
    const result =`El perimetro del Triangulo es ${PerimetroTri(valor1,valor2,valor3)}cm`
    document.getElementById("Answer").innerText = result
}
const AreaTri =(Base,Altura) => Base*Altura/2;
function CalcularAreaTri(){
    let Base = document.getElementById("Base")
    let Altura = document.getElementById("Altura")
    Base =Number(Base.value)
    Altura =Number(Altura.value)
    const result = `El Área de tu Triangulo es ${AreaTri(Base,Altura)}cm*2`
    document.getElementById("Answer").innerText = result;
}
// Formulas Circulo
const AreaCirc =(Radio) => 3.14 * Radio**2;
function CalcularAreaCirc(){
    let Radio = document.getElementById("Radio")
    Radio=Number(Radio.value);
    const result = `El Área de su Circulo es ${AreaCirc(Radio)} cm`
    document.getElementById("Answer").innerText =result
}
const PerimetroCirc =(Radio) => 2 *3.14 * Radio
function CalcularAPerimetroCirc(){
    let Radio = document.getElementById("Radio")
    Radio=Number(Radio.value);
    const result = `El Perimetro de su Circulo es ${PerimetroCirc(Radio)} cm`
    document.getElementById("Answer").innerText =result
}
const DiametroCirc =(Radio) => 2  * Radio
function CalcularDiametroCirc(){
    let Radio = document.getElementById("Radio")
    Radio=Number(Radio.value);
    const result = `El Diametro de su Circulo es ${DiametroCirc(Radio)} cm`
    document.getElementById("Answer").innerText =result
}