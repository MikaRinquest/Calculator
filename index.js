let sum = " ";
function buildSum(char) {
  sum += char;
  document.getElementById("output").innerHTML += char;
}

function calculate() {
  sum = eval(sum);
  document.getElementById("output").innerHTML = sum;
}

function reset(clear) {
  console.log(" ");
  document.getElementById("output").innerHTML = " ";
  sum = " ";
}

function red() {
  document.getElementById("output").style.color = "red";
}

function green() {
  document.getElementById("output").style.color = "green";
}

function blue() {
  document.getElementById("output").style.color = "blue";
}
