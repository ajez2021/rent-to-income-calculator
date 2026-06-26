function calculate() {
  const income = parseFloat(document.getElementById("income").value);
  const rent = parseFloat(document.getElementById("rent").value);

  if (!income || !rent) return;

  const max2_5 = income / 2.5;
  const max3 = income / 3;
  const max3_5 = income / 3.5;

  document.getElementById("results").classList.remove("hidden");

  document.getElementById("maxRent").innerText = `$${max3.toFixed(0)}`;
  document.getElementById("twoFive").innerText = `$${max2_5.toFixed(0)}`;
  document.getElementById("three").innerText = `$${max3.toFixed(0)}`;
  document.getElementById("threeFive").innerText = `$${max3_5.toFixed(0)}`;

  const badge = document.getElementById("badge");

  if (rent <= max3) {
    badge.innerText = "QUALIFIED (3x Rule Met)";
    badge.style.background = "#d4edda";
    badge.style.color = "#155724";
  } else if (rent <= max2_5) {
    badge.innerText = "WARNING (Near Limit)";
    badge.style.background = "#fff3cd";
    badge.style.color = "#856404";
  } else {
    badge.innerText = "NOT QUALIFIED";
    badge.style.background = "#f8d7da";
    badge.style.color = "#721c24";
  }
}

function resetForm() {
  document.getElementById("income").value = "";
  document.getElementById("rent").value = "";
  document.getElementById("results").classList.add("hidden");
}

function copyResults() {
  const text = `Rent Affordability Results
Max Rent (3x): ${document.getElementById("three").innerText}
2.5x: ${document.getElementById("twoFive").innerText}
3.5x: ${document.getElementById("threeFive").innerText}`;

  navigator.clipboard.writeText(text);
  alert("Copied!");
}
