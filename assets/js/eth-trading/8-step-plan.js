function calculation(event) {
  var userInputNumber;
  userInputNumber = Number(document.getElementById("inputNumber").value);
  if (userInputNumber < 17) {
    alert("Please enter the number above 16");
  } else {
    document.getElementById("userEnteredNumber").firstChild.nodeValue =
      userInputNumber;

    buy1st = (userInputNumber * (0.0588235294117647 / 100)).toFixed(4);
    buy2nd = (userInputNumber * (0.1294117647058824 / 100)).toFixed(4);
    buy3rd = (userInputNumber * (0.2764705882352941 / 100)).toFixed(4);
    buy4th = (userInputNumber * (0.5764705882352941 / 100)).toFixed(4);
    buy5th = (userInputNumber * (1.188235294117647 / 100)).toFixed(4);
    buy6th = (userInputNumber * (2.441176470588235 / 100)).toFixed(4);
    buy7th = (userInputNumber * (5.017647058823529 / 100)).toFixed(4);
    buy8th = (userInputNumber * (10.31176470588235 / 100)).toFixed(4);

    tbuy1st = (buy1st * 5).toFixed(4);
    tbuy2nd = (buy2nd * 5).toFixed(4);
    tbuy3rd = (buy3rd * 5).toFixed(4);
    tbuy4th = (buy4th * 5).toFixed(4);
    tbuy5th = (buy5th * 5).toFixed(4);
    tbuy6th = (buy6th * 5).toFixed(4);
    tbuy7th = (buy7th * 5).toFixed(4);
    tbuy8th = (buy8th * 5).toFixed(4);

    win1st = (buy1st * 9.75).toFixed(4);
    win2nd = (buy2nd * 9.75).toFixed(4);
    win3rd = (buy3rd * 9.75).toFixed(4);
    win4th = (buy4th * 9.75).toFixed(4);
    win5th = (buy5th * 9.75).toFixed(4);
    win6th = (buy6th * 9.75).toFixed(4);
    win7th = (buy7th * 9.75).toFixed(4);
    win8th = (buy8th * 9.75).toFixed(4);

    net1st = (win1st - tbuy1st).toFixed(4);
    net2nd = (win2nd - tbuy2nd - tbuy1st).toFixed(4);
    net3rd = (win3rd - tbuy3rd - tbuy2nd - tbuy1st).toFixed(4);
    net4th = (win4th - tbuy4th - tbuy3rd - tbuy2nd - tbuy1st).toFixed(4);
    net5th = (win5th - tbuy5th - tbuy4th - tbuy3rd - tbuy2nd - tbuy1st).toFixed(
      4
    );
    net6th = (
      win6th -
      tbuy6th -
      tbuy5th -
      tbuy4th -
      tbuy3rd -
      tbuy2nd -
      tbuy1st
    ).toFixed(4);
    net7th = (
      win7th -
      tbuy7th -
      tbuy6th -
      tbuy5th -
      tbuy1st -
      tbuy2nd -
      tbuy3rd -
      tbuy4th
    ).toFixed(4);
    net8th = (
      win8th -
      tbuy8th -
      tbuy7th -
      tbuy6th -
      tbuy5th -
      tbuy1st -
      tbuy2nd -
      tbuy3rd -
      tbuy4th
    ).toFixed(4);

    cost1st = tbuy1st;
    cost2nd = (+tbuy1st + +tbuy2nd).toFixed(4);
    cost3rd = (+tbuy1st + +tbuy2nd + +tbuy3rd).toFixed(4);
    cost4th = (+tbuy1st + +tbuy2nd + +tbuy3rd + +tbuy4th).toFixed(4);
    cost5th = (+tbuy1st + +tbuy2nd + +tbuy3rd + +tbuy4th + +tbuy5th).toFixed(4);
    cost6th = (
      +tbuy1st +
      +tbuy2nd +
      +tbuy3rd +
      +tbuy4th +
      +tbuy5th +
      +tbuy6th
    ).toFixed(4);
    cost7th = (
      +tbuy1st +
      +tbuy2nd +
      +tbuy3rd +
      +tbuy4th +
      +tbuy5th +
      +tbuy6th +
      +tbuy7th
    ).toFixed(4);
    cost8th = (
      +tbuy1st +
      +tbuy2nd +
      +tbuy3rd +
      +tbuy4th +
      +tbuy5th +
      +tbuy6th +
      +tbuy7th +
      +tbuy8th
    ).toFixed(4);

    document.getElementById("b1st").firstChild.nodeValue = buy1st;
    document.getElementById("b2nd").firstChild.nodeValue = buy2nd;
    document.getElementById("b3rd").firstChild.nodeValue = buy3rd;
    document.getElementById("b4th").firstChild.nodeValue = buy4th;
    document.getElementById("b5th").firstChild.nodeValue = buy5th;
    document.getElementById("b6th").firstChild.nodeValue = buy6th;
    document.getElementById("b7th").firstChild.nodeValue = buy7th;
    document.getElementById("b8th").firstChild.nodeValue = buy8th;

    document.getElementById("tb1st").firstChild.nodeValue = tbuy1st;
    document.getElementById("tb2nd").firstChild.nodeValue = tbuy2nd;
    document.getElementById("tb3rd").firstChild.nodeValue = tbuy3rd;
    document.getElementById("tb4th").firstChild.nodeValue = tbuy4th;
    document.getElementById("tb5th").firstChild.nodeValue = tbuy5th;
    document.getElementById("tb6th").firstChild.nodeValue = tbuy6th;
    document.getElementById("tb7th").firstChild.nodeValue = tbuy7th;
    document.getElementById("tb8th").firstChild.nodeValue = tbuy8th;

    document.getElementById("w1st").firstChild.nodeValue = win1st;
    document.getElementById("w2nd").firstChild.nodeValue = win2nd;
    document.getElementById("w3rd").firstChild.nodeValue = win3rd;
    document.getElementById("w4th").firstChild.nodeValue = win4th;
    document.getElementById("w5th").firstChild.nodeValue = win5th;
    document.getElementById("w6th").firstChild.nodeValue = win6th;
    document.getElementById("w7th").firstChild.nodeValue = win7th;
    document.getElementById("w8th").firstChild.nodeValue = win8th;

    document.getElementById("n1st").firstChild.nodeValue = net1st;
    document.getElementById("n2nd").firstChild.nodeValue = net2nd;
    document.getElementById("n3rd").firstChild.nodeValue = net3rd;
    document.getElementById("n4th").firstChild.nodeValue = net4th;
    document.getElementById("n5th").firstChild.nodeValue = net5th;
    document.getElementById("n6th").firstChild.nodeValue = net6th;
    document.getElementById("n7th").firstChild.nodeValue = net7th;
    document.getElementById("n8th").firstChild.nodeValue = net8th;

    document.getElementById("c1st").firstChild.nodeValue = cost1st;
    document.getElementById("c2nd").firstChild.nodeValue = cost2nd;
    document.getElementById("c3rd").firstChild.nodeValue = cost3rd;
    document.getElementById("c4th").firstChild.nodeValue = cost4th;
    document.getElementById("c5th").firstChild.nodeValue = cost5th;
    document.getElementById("c6th").firstChild.nodeValue = cost6th;
    document.getElementById("c7th").firstChild.nodeValue = cost7th;
    document.getElementById("c8th").firstChild.nodeValue = cost8th;

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
