function calculation(event) {
    var userInputNumber;
    userInputNumber = Number(document.getElementById("inputNumber").value);
    document.getElementById("userEnteredNumber").value = userInputNumber;
    if (userInputNumber < 10) {
        alert('Please enter the number above 9')
    } else {
        document.getElementById("userEnteredNumber").value = userInputNumber;

        buy1st = (userInputNumber * 0.001).toFixed(4);
        buy2nd = (userInputNumber * 0.0022).toFixed(4);
        buy3rd = (userInputNumber * 0.0048).toFixed(4);
        buy4th = (userInputNumber * 0.0108).toFixed(4);
        buy5th = (userInputNumber * 0.0232).toFixed(4);
        buy6th = (userInputNumber * 0.05).toFixed(4);
        buy7th = (userInputNumber * 0.108).toFixed(4);

        tbuy1st = (buy1st * 5).toFixed(4);
        tbuy2nd = (buy2nd * 5).toFixed(4);
        tbuy3rd = (buy3rd * 5).toFixed(4);
        tbuy4th = (buy4th * 5).toFixed(4);
        tbuy5th = (buy5th * 5).toFixed(4);
        tbuy6th = (buy6th * 5).toFixed(4);
        tbuy7th = (buy7th * 5).toFixed(4);

        win1st = (buy1st * 9.75).toFixed(4);
        win2nd = (buy2nd * 9.75).toFixed(4);
        win3rd = (buy3rd * 9.75).toFixed(4);
        win4th = (buy4th * 9.75).toFixed(4);
        win5th = (buy5th * 9.75).toFixed(4);
        win6th = (buy6th * 9.75).toFixed(4);
        win7th = (buy7th * 9.75).toFixed(4);

        net1st = (win1st - tbuy1st).toFixed(4);
        net2nd = (win2nd - tbuy2nd - tbuy1st).toFixed(4);
        net3rd = (win3rd - tbuy3rd - tbuy2nd - tbuy1st).toFixed(4);
        net4th = (win4th - tbuy4th - tbuy3rd - tbuy2nd - tbuy1st).toFixed(4);
        net5th = (win5th - tbuy5th - tbuy4th - tbuy3rd - tbuy2nd - tbuy1st).toFixed(4);
        net6th = (win6th - tbuy6th - tbuy5th - tbuy4th - tbuy3rd - tbuy2nd - tbuy1st).toFixed(4);
        net7th = (win7th - tbuy7th - tbuy6th - tbuy5th - tbuy1st - tbuy2nd - tbuy3rd - tbuy4th).toFixed(4);

        document.getElementById("tb1st").value = tbuy1st;
        document.getElementById("tb2nd").value = tbuy2nd;
        document.getElementById("tb3rd").value = tbuy3rd;
        document.getElementById("tb4th").value = tbuy4th;
        document.getElementById("tb5th").value = tbuy5th;
        document.getElementById("tb6th").value = tbuy6th;
        document.getElementById("tb7th").value = tbuy7th;

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