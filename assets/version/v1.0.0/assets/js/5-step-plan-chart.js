function calculation(event) {
    var userInputNumber;
    userInputNumber = Number(document.getElementById("inputNumber").value);
    document.getElementById("userEnteredNumber").value = userInputNumber;
    if (userInputNumber < 5 || userInputNumber > 15) {
        alert('Please enter the number between 5 - 15')
    } else {
        document.getElementById("userEnteredNumber").value = userInputNumber;

        buy1st = (userInputNumber * 0.02).toFixed(2);
        buy2nd = (userInputNumber * 0.048).toFixed(2);
        buy3rd = (userInputNumber * 0.112).toFixed(2);
        buy4th = (userInputNumber * 0.25).toFixed(2);
        buy5th = (userInputNumber * 0.57).toFixed(2);

        win1st = (buy1st * 1.95).toFixed(4);
        win2nd = (buy2nd * 1.95).toFixed(4);
        win3rd = (buy3rd * 1.95).toFixed(4);
        win4th = (buy4th * 1.95).toFixed(4);
        win5th = (buy5th * 1.95).toFixed(4);

        net1st = (win1st - buy1st).toFixed(4);
        net2nd = (win2nd - buy2nd - buy1st).toFixed(4);
        net3rd = (win3rd - buy3rd - buy1st - buy2nd).toFixed(4);
        net4th = (win4th - buy4th - buy1st - buy2nd - buy3rd).toFixed(4);
        net5th = (win5th - buy5th - buy1st - buy2nd - buy3rd - buy4th).toFixed(4);

        document.getElementById("b1st").value = buy1st;
        document.getElementById("b2nd").value = buy2nd;
        document.getElementById("b3rd").value = buy3rd;
        document.getElementById("b4th").value = buy4th;
        document.getElementById("b5th").value = buy5th;

        document.getElementById("w1st").value = win1st;
        document.getElementById("w2nd").value = win2nd;
        document.getElementById("w3rd").value = win3rd;
        document.getElementById("w4th").value = win4th;
        document.getElementById("w5th").value = win5th;

        document.getElementById("n1st").value = net1st;
        document.getElementById("n2nd").value = net2nd;
        document.getElementById("n3rd").value = net3rd;
        document.getElementById("n4th").value = net4th;
        document.getElementById("n5th").value = net5th;
    }
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