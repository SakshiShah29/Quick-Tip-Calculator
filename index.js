function formatMoney(value) {
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2);
    return value + " Rs"
}

function formatSplit(value) {
    if (value === "1") {
        return value + " Person";
    } else {
        return value + " People";
    }
}

function update() {
    let bill = Number(document.getElementById("yourBill").value);
    let tipPercent = document.getElementById("tipInput").value;
    let split = document.getElementById("splitInput").value;

    let tipValue = bill * (tipPercent / 100);
    let tipEach = tipValue / split;
    let newBillEach = (bill + tipValue) / split;

    document.getElementById("tipPercent").innerHTML = tipPercent + "%";
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
    document.getElementById("billEach").innerHTML = formatMoney(newBillEach);
    document.getElementById("tipEach").innerHTML = formatMoney(tipEach);
    document.getElementById("totalWithTip").innerHTML = formatMoney(bill + tipValue);
    document.getElementById("splitValue").innerHTML = formatSplit(split);
}
let container = document.getElementById("container");
container.addEventListener("input", update);