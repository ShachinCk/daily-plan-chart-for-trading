function calculation(event) {
  var userInputNumber;
  userInputNumber = Number(document.getElementById("inputNumber").value);
  if (userInputNumber < 2) {
    alert("Please enter the number greater then 1");
  } else {
    document.getElementById("userEnteredNumber").firstChild.nodeValue =
      userInputNumber;

    buy1st = (userInputNumber * 0.006).toFixed(4);
    buy2nd = (userInputNumber * 0.012).toFixed(4);
    buy3rd = (userInputNumber * 0.026).toFixed(4);
    buy4th = (userInputNumber * 0.056).toFixed(4);
    buy5th = (userInputNumber * 0.12).toFixed(4);
    buy6th = (userInputNumber * 0.25).toFixed(4);
    buy7th = (userInputNumber * 0.53).toFixed(4);

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
    net6th = (
      win6th -
      buy6th -
      buy1st -
      buy2nd -
      buy3rd -
      buy4th -
      buy5th
    ).toFixed(4);
    net7th = (
      win7th -
      buy7th -
      buy1st -
      buy2nd -
      buy3rd -
      buy4th -
      buy5th -
      buy6th
    ).toFixed(4);

    cost1st = buy1st;
    cost2nd = (+buy1st + +buy2nd).toFixed(4);
    cost3rd = (+buy1st + +buy2nd + +buy3rd).toFixed(4);
    cost4th = (+buy1st + +buy2nd + +buy3rd + +buy4th).toFixed(4);
    cost5th = (+buy1st + +buy2nd + +buy3rd + +buy4th + +buy5th).toFixed(4);
    cost6th = (
      +buy1st +
      +buy2nd +
      +buy3rd +
      +buy4th +
      +buy5th +
      +buy6th
    ).toFixed(4);
    cost7th = (
      +buy1st +
      +buy2nd +
      +buy3rd +
      +buy4th +
      +buy5th +
      +buy6th +
      +buy7th
    ).toFixed(4);

    document.getElementById("b1st").firstChild.nodeValue = buy1st;
    document.getElementById("b2nd").firstChild.nodeValue = buy2nd;
    document.getElementById("b3rd").firstChild.nodeValue = buy3rd;
    document.getElementById("b4th").firstChild.nodeValue = buy4th;
    document.getElementById("b5th").firstChild.nodeValue = buy5th;
    document.getElementById("b6th").firstChild.nodeValue = buy6th;
    document.getElementById("b7th").firstChild.nodeValue = buy7th;

    document.getElementById("w1st").firstChild.nodeValue = win1st;
    document.getElementById("w2nd").firstChild.nodeValue = win2nd;
    document.getElementById("w3rd").firstChild.nodeValue = win3rd;
    document.getElementById("w4th").firstChild.nodeValue = win4th;
    document.getElementById("w5th").firstChild.nodeValue = win5th;
    document.getElementById("w6th").firstChild.nodeValue = win6th;
    document.getElementById("w7th").firstChild.nodeValue = win7th;

    document.getElementById("n1st").firstChild.nodeValue = net1st;
    document.getElementById("n2nd").firstChild.nodeValue = net2nd;
    document.getElementById("n3rd").firstChild.nodeValue = net3rd;
    document.getElementById("n4th").firstChild.nodeValue = net4th;
    document.getElementById("n5th").firstChild.nodeValue = net5th;
    document.getElementById("n6th").firstChild.nodeValue = net6th;
    document.getElementById("n7th").firstChild.nodeValue = net7th;

    document.getElementById("c1st").firstChild.nodeValue = cost1st;
    document.getElementById("c2nd").firstChild.nodeValue = cost2nd;
    document.getElementById("c3rd").firstChild.nodeValue = cost3rd;
    document.getElementById("c4th").firstChild.nodeValue = cost4th;
    document.getElementById("c5th").firstChild.nodeValue = cost5th;
    document.getElementById("c6th").firstChild.nodeValue = cost6th;
    document.getElementById("c7th").firstChild.nodeValue = cost7th;

    window.onload = calculation;
  }
}
// Enter press show result JS Script start
var input = document.getElementById("inputNumber");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("mybtn").click();
  }
});
// Enter press show result JS Script end
// Menu List Dropdown JS Script Start
let question = document.querySelectorAll(".question");
question.forEach((qsitem) => {
  qsitem.addEventListener("click", function (e) {
    //   store the .answer div containing the answer
    let sibling = qsitem.nextElementSibling;

    // Nested loop for removing active class from all and set answer height to 0
    question.forEach((item) => {
      item.nextElementSibling.style.height = "0px";
      //   remove class "active" except for the currently clicked item
      item != qsitem && item.parentNode.classList.remove("active");
    });
    //then toggle the "active" class of clicked item's parent ".qna"
    this.parentNode.classList.toggle("active");

    // set actual height for .answer div if .qna has the class "active"
    if (qsitem.parentNode.classList.contains("active")) {
      sibling.style.height = sibling.scrollHeight + "px";
    } else {
      sibling.style.height = "0px";
    }
  });
});
// Menu List Dropdown JS Script End
// Hamburger Menu Button JS Script Start
$(document).ready(function () {
  $(".openMenu").click(function () {
    $("body").toggleClass("menuOpened");
  });

  $(".menu_overlay").click(function () {
    $("body").removeClass("menuOpened");
  });
});
// Hamburger Menu Button JS Script End
