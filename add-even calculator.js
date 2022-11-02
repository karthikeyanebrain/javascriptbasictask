function calculatr() {

    let firstInputValue = document.getElementById("number1").value
    secondInputValue = document.getElementById("number2").value
    if(Number(firstInputValue),Number(secondInputValue) == ''){
        alert("Please file input value")
    }else if(Number(firstInputValue) >=Number(secondInputValue)){
        alert("A value is greater than or equal to B please change the values")
    }else{
    var list = [];
    var even = [];
    var add = [];
    sum = 0;
    evensum = 0;
    addsum = 0;
    evenSumTotal=0;
    addSumTotal=0;
    for (var i = Number(firstInputValue); i <= Number(secondInputValue); i++) {
        list.push(i);
        sum += i;
        var printAddValue = document.getElementById("add")
        printAddValue.innerHTML = "The Numbers  Between A and B = " + list
        var printAddValue = document.getElementById("sum")
        printAddValue.innerHTML = "The Sum Of Total Numners Between A and B = " + sum
        if (i % 2 == 0) {
            evensum += i;
            even.push(i);
            var printAddValue = document.getElementById("evenNumber")
            printAddValue.innerHTML = "Even Number Is Bettween A and B = " + even

            evenSumTotal +=i;
            var printAddValue = document.getElementById("totalEvenNumber")
            printAddValue.innerHTML = "Even Number Total A and B = " + evenSumTotal
        } else {
            addsum += i;
            add.push(i);
            var printAddValue = document.getElementById("addNumber")
            printAddValue.innerHTML = "Add Nmber Is Bettween A and B = " + add

            addSumTotal +=i;
            var printAddValue = document.getElementById("totalAddNumber")
            printAddValue.innerHTML = "Add Number Total A and B = " + addSumTotal
        }
    }
}
}