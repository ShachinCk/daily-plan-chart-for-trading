function calculation(event) {
    var userInputNumber;
    userInputNumber = Number(document.getElementById("inputNumber").value);
    document.getElementById("userEnteredNumber").value = userInputNumber;
    if (userInputNumber < 13) {
        alert('Please enter the number greater then 12')
    } else {
        document.getElementById("userEnteredNumber").value = userInputNumber;

        buy1st = (userInputNumber * (0.0796273291925466 / 100)).toFixed(4);
        buy2nd = (userInputNumber * (0.16324016563147 / 100)).toFixed(4);
        buy3rd = (userInputNumber * (0.334451345755693 / 100)).toFixed(4);
        buy4th = (userInputNumber * (0.684824016563147 / 100)).toFixed(4);
        buy5th = (userInputNumber * (1.40946169772256 / 100)).toFixed(4);
        buy6th = (userInputNumber * (2.8905900621118 / 100)).toFixed(4);
        buy7th = (userInputNumber * (5.93247412008281 / 100)).toFixed(4);
        buy8th = (userInputNumber * (12.1793995859213 / 100)).toFixed(4);
        buy9th = (userInputNumber * (24.9979296066252 / 100)).toFixed(4);
        buy10th = (userInputNumber * (51.3280020703933 / 100)).toFixed(4);

        win1st = (buy1st * 1.95).toFixed(4);
        win2nd = (buy2nd * 1.95).toFixed(4);
        win3rd = (buy3rd * 1.95).toFixed(4);
        win4th = (buy4th * 1.95).toFixed(4);
        win5th = (buy5th * 1.95).toFixed(4);
        win6th = (buy6th * 1.95).toFixed(4);
        win7th = (buy7th * 1.95).toFixed(4);
        win8th = (buy8th * 1.95).toFixed(4);
        win9th = (buy9th * 1.95).toFixed(4);
        win10th = (buy10th * 1.95).toFixed(4);

        net1st = (win1st - buy1st).toFixed(4);
        net2nd = (win2nd - buy1st - buy2nd).toFixed(4);
        net3rd = (win3rd - buy1st - buy2nd - buy3rd).toFixed(4);
        net4th = (win4th - buy1st - buy2nd - buy3rd - buy4th).toFixed(4);
        net5th = (win5th - buy1st - buy2nd - buy3rd - buy4th - buy5th).toFixed(4);
        net6th = (win6th - buy1st - buy2nd - buy3rd - buy4th - buy5th - buy6th).toFixed(4);
        net7th = (win7th - buy1st - buy2nd - buy3rd - buy4th - buy5th - buy6th - buy7th).toFixed(4);
        net8th = (win8th - buy1st - buy2nd - buy3rd - buy4th - buy5th - buy6th - buy7th - buy8th).toFixed(4);
        net9th = (win9th - buy1st - buy2nd - buy3rd - buy4th - buy5th - buy6th - buy7th - buy8th - buy9th).toFixed(4);
        net10th = (win10th - buy1st - buy2nd - buy3rd - buy4th - buy5th - buy6th - buy7th - buy8th - buy9th - buy10th).toFixed(4);

        document.getElementById("b1st").value = buy1st;
        document.getElementById("b2nd").value = buy2nd;
        document.getElementById("b3rd").value = buy3rd;
        document.getElementById("b4th").value = buy4th;
        document.getElementById("b5th").value = buy5th;
        document.getElementById("b6th").value = buy6th;
        document.getElementById("b7th").value = buy7th;
        document.getElementById("b8th").value = buy8th;
        document.getElementById("b9th").value = buy9th;
        document.getElementById("b10th").value = buy10th;

        document.getElementById("w1st").value = win1st;
        document.getElementById("w2nd").value = win2nd;
        document.getElementById("w3rd").value = win3rd;
        document.getElementById("w4th").value = win4th;
        document.getElementById("w5th").value = win5th;
        document.getElementById("w6th").value = win6th;
        document.getElementById("w7th").value = win7th;
        document.getElementById("w8th").value = win8th;
        document.getElementById("w9th").value = win9th;
        document.getElementById("w10th").value = win10th;

        document.getElementById("n1st").value = net1st;
        document.getElementById("n2nd").value = net2nd;
        document.getElementById("n3rd").value = net3rd;
        document.getElementById("n4th").value = net4th;
        document.getElementById("n5th").value = net5th;
        document.getElementById("n6th").value = net6th;
        document.getElementById("n7th").value = net7th;
        document.getElementById("n8th").value = net8th;
        document.getElementById("n9th").value = net9th;
        document.getElementById("n10th").value = net10th;
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