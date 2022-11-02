function calculat() {
    let firstInputValue = document.getElementById("number1")
    secondInputValue = document.getElementById("number2")
    if(firstInputValue.value,secondInputValue.value == ''){
alert("Please file input value")
}else{
    let addValue = Number(firstInputValue.value) + Number(secondInputValue.value)
    var printAddValue = document.getElementById("add")
    printAddValue.innerHTML = "Addition Input Value (A+B) = " + addValue

    let subtractionValue = Number(firstInputValue.value) - Number(secondInputValue.value)
    var printSubtractionValue = document.getElementById("subtraction")
    printSubtractionValue.innerHTML = "Subraction Input Value (A-B) = " + subtractionValue

    let multiplicationValue = Number(firstInputValue.value) * Number(secondInputValue.value)
    var printMultiplicationValueValue3 = document.getElementById("multiplication")
    printMultiplicationValueValue3.innerHTML = "Multiplication Input Value (A*B) = " + multiplicationValue

    let divisionValue = Number(firstInputValue.value) / Number(secondInputValue.value)
    var printDivisionValueValue = document.getElementById("division")
    printDivisionValueValue.innerHTML = "Division Input Value (A/B) = " + divisionValue
    
    let logValue = Math.log(firstInputValue.value)
    var printLogValue = document.getElementById("log")
    printLogValue.innerHTML = "Log (A) = " + logValue

    let log1Value = Math.log(secondInputValue.value)
    var printLog1Value6 = document.getElementById("log1")
    printLog1Value6.innerHTML = "Log (B) = " + log1Value

    let signValue = Math.sin(firstInputValue.value)
    var printSignValue = document.getElementById("sign")
    printSignValue.innerHTML = "Sign (A) = " + signValue

    let sign1Value = Math.sin(secondInputValue.value)
    var printSign1Value = document.getElementById("sign1")
    printSign1Value.innerHTML = "Sign (B) = " + sign1Value

    let squreValue = Number(firstInputValue.value)*Number(firstInputValue.value)
    var printSqureValue = document.getElementById("squre")
    printSqureValue.innerHTML = "Squred (A) = " + squreValue

    let squre1Value = Number(secondInputValue.value)*Number(secondInputValue.value)
    var printSqure1Value = document.getElementById("squre1")
    printSqure1Value.innerHTML = "Squred (B) = " + squre1Value

    let squreRootCotValue = Math.sqrt(firstInputValue.value)
    var printsqureRootValue = document.getElementById("squrroot")
    printsqureRootValue.innerHTML = "SquredRoot (A) = " + squreRootCotValue

    let squreRootCotValue1 = Math.sqrt(secondInputValue.value)
    var printSqureRootValue1 = document.getElementById("squrroot1")
    printSqureRootValue1.innerHTML = "SquredRoot (B) = " + squreRootCotValue1
    
    let cosvalue =  Math.cos(firstInputValue.value)
    var printCosValue = document.getElementById("cos")
    printCosValue.innerHTML = "Cos (A) = "+ cosvalue

    let cosValue1 =  Math.cos(secondInputValue.value)
    var printCosValue1 = document.getElementById("cos1")
    printCosValue1.innerHTML = "Cos (B) = " + cosValue1

}
}
