function calculation(event) {
    var userInputNumber;
    userInputNumber = Number(document.getElementById("inputNumber").value);
    document.getElementById("userEnteredNumber").value = userInputNumber;
    profitOf7days = (userInputNumber * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05).toFixed(2);
    profitOf30days = (userInputNumber * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05 * 1.05).toFixed(2);
    document.getElementById("p7days").value = profitOf7days;
    document.getElementById("p30days").value = profitOf30days;

    buy1st = (userInputNumber * 0.006).toFixed(2);
    buy2nd = (userInputNumber * 0.012).toFixed(2);
    buy3rd = (userInputNumber * 0.026).toFixed(2);
    buy4th = (userInputNumber * 0.056).toFixed(2);
    buy5th = (userInputNumber * 0.12).toFixed(2);
    buy6th = (userInputNumber * 0.25).toFixed(2);
    buy7th = (userInputNumber * 0.53).toFixed(2);

    win1st = (buy1st * 1.95).toFixed(4);
    win2nd = (buy2nd * 1.95).toFixed(4);
    win3rd = (buy3rd * 1.95).toFixed(4);
    win4th = (buy4th * 1.95).toFixed(4);
    win5th = (buy5th * 1.95).toFixed(4);
    win6th = (buy6th * 1.95).toFixed(4);
    win7th = (buy7th * 1.95).toFixed(4);

    net1st = (win1st - buy1st).toFixed(4);
    net2nd = (win2nd - buy2nd - buy1st).toFixed(4);
    net3rd = (win3rd - buy3rd - buy1st - buy2nd).toFixed(4);
    net4th = (win4th - buy4th - buy1st - buy2nd - buy3rd).toFixed(4);
    net5th = (win5th - buy5th - buy1st - buy2nd - buy3rd - buy4th).toFixed(4);
    net6th = (win6th - buy6th - buy1st - buy2nd - buy3rd - buy4th - buy5th).toFixed(4);
    net7th = (win7th - buy7th - buy1st - buy2nd - buy3rd - buy4th - buy5th - buy6th).toFixed(4);

    document.getElementById("b1st").value = buy1st;
    document.getElementById("b2nd").value = buy2nd;
    document.getElementById("b3rd").value = buy3rd;
    document.getElementById("b4th").value = buy4th;
    document.getElementById("b5th").value = buy5th;
    document.getElementById("b6th").value = buy6th;
    document.getElementById("b7th").value = buy7th;

    document.getElementById("w1st").value = win1st;
    document.getElementById("w2nd").value = win2nd;
    document.getElementById("w3rd").value = win3rd;
    document.getElementById("w4th").value = win4th;
    document.getElementById("w5th").value = win5th;
    document.getElementById("w6th").value = win6th;
    document.getElementById("w7th").value = win7th;

    document.getElementById("n1st").value = net1st;
    document.getElementById("n2nd").value = net2nd;
    document.getElementById("n3rd").value = net3rd;
    document.getElementById("n4th").value = net4th;
    document.getElementById("n5th").value = net5th;
    document.getElementById("n6th").value = net6th;
    document.getElementById("n7th").value = net7th;
}

var input = document.getElementById("inputNumber");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("mybtn").click();
    }
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}