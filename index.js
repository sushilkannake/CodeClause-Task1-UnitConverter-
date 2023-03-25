const input = document.getElementById('input-value');
const inputUnit = document.getElementById('input-unit');
const output = document.getElementById('output-value');
const outputUnit = document.getElementById('output-unit');
const convertBtn = document.getElementById('convert-btn');

function convert() {
 const inputUnit = document.getElementById("input-unit").value;
 const outputUnit = document.getElementById("output-unit").value;
 const inputValue = parseFloat(document.getElementById("input-value").value);

 if (inputUnit === "mile" && outputUnit === "kilometer") {
   document.getElementById("output-value").value = (inputValue * 1.60934).toFixed(2);
 } else if (inputUnit === "mile" && outputUnit === "meter") {
   document.getElementById("output-value").value = (inputValue * 1609.34).toFixed(2);
 } else if (inputUnit === "mile" && outputUnit === "centimeter") {
   document.getElementById("output-value").value = (inputValue * 160934).toFixed(2);
 } else if (inputUnit === "kilometer" && outputUnit === "mile") {
   document.getElementById("output-value").value = (inputValue * 0.621371).toFixed(2);
 } else if (inputUnit === "kilometer" && outputUnit === "meter") {
   document.getElementById("output-value").value = (inputValue * 1000).toFixed(2);
 } else if (inputUnit === "kilometer" && outputUnit === "centimeter") {
   document.getElementById("output-value").value = (inputValue * 100000).toFixed(2);
 } else if (inputUnit === "meter" && outputUnit === "mile") {
   document.getElementById("output-value").value = (inputValue * 0.000621371).toFixed(2);
 } else if (inputUnit === "meter" && outputUnit === "kilometer") {
   document.getElementById("output-value").value = (inputValue * 0.001).toFixed(2);
 } else if (inputUnit === "meter" && outputUnit === "centimeter") {
   document.getElementById("output-value").value = (inputValue * 100).toFixed(2);
 } else if (inputUnit === "centimeter" && outputUnit === "mile") {
   document.getElementById("output-value").value = (inputValue * 0.00000621371).toFixed(2);
 } else if (inputUnit === "centimeter" && outputUnit === "kilometer") {
   document.getElementById("output-value").value = (inputValue * 0.00001).toFixed(2);
 } else if (inputUnit === "centimeter" && outputUnit === "meter") {
   document.getElementById("output-value").value = (inputValue * 0.01).toFixed(2);
 } else {
   document.getElementById("output-value").value = "";
 }
}

convertBtn.addEventListener('click', convert);