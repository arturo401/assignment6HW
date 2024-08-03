// TIP CAL
function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    let tipPercent;
  
    if (billAmount >= 30 && billAmount <= 300) {
      tipPercent = 0.15;
    } else {
      tipPercent = 0.20;
    }
  
    const tipAmount = billAmount * tipPercent;
    const totalAmount = billAmount + tipAmount;
  
    document.getElementById('tipAmount').innerText = tipAmount.toFixed(2);
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
  }
// END OF TIP CAL



var modals = document.getElementsByClassName("modal");

var btns = [
    document.getElementById("openModalBtn1"),
    document.getElementById("openModalBtn2"),
    document.getElementById("openModalBtn3")
];

var spans = document.getElementsByClassName("close");

btns.forEach((btn, index) => {
    btn.onclick = function() {
        modals[index].style.display = "block";
    };
});

for (let i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        modals[i].style.display = "none";
    };
}

window.onclick = function(event) {
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
};



