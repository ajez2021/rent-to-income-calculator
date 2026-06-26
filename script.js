
function calculate() {
  const income = parseFloat(document.getElementById('income').value);
  if (!income) return alert("Please enter income");

  const r25 = (income / (2.5 * 12)).toFixed(2);
  const r3 = (income / (3 * 12)).toFixed(2);
  const r35 = (income / (3.5 * 12)).toFixed(2);

  document.getElementById('r25').innerText = "$" + r25;
  document.getElementById('r3').innerText = "$" + r3;
  document.getElementById('r35').innerText = "$" + r35;

  document.getElementById('results').classList.remove('hidden');
}

function resetForm() {
  document.getElementById('income').value = "";
  document.getElementById('results').classList.add('hidden');
}

function copyResults() {
  const text = `
Rent Calculator Results:
2.5x: ${document.getElementById('r25').innerText}
3x: ${document.getElementById('r3').innerText}
3.5x: ${document.getElementById('r35').innerText}
`;
  navigator.clipboard.writeText(text);
  alert("Copied!");
}
