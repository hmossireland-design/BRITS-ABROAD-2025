/* ===============================
   BRITS ABROAD 2025 – APP LOGIC
   =============================== */

let currentPhase = 1;
const totalPhases = 11;

/* -------- DATA -------- */
const countries = {
  Portugal: { tax: 0.10, cost: 0.75 },
  Spain: { tax: 0.18, cost: 0.85 },
  Cyprus: { tax: 0.05, cost: 0.70 },
  Greece: { tax: 0.15, cost: 0.78 },
  Thailand: { tax: 0.00, cost: 0.55 },
  UAE: { tax: 0.00, cost: 1.00 }
};

/* -------- INIT -------- */
document.addEventListener("DOMContentLoaded", () => {
  updatePhase();
  populateCountries();
});

/* -------- PHASE CONTROL -------- */
function updatePhase() {
  document.querySelectorAll(".phase-card").forEach(card => {
    card.style.display = "none";
  });

  const active = document.getElementById(`phase-${currentPhase}`);
  if (active) active.style.display = "block";

  const progress = document.getElementById("progress-fill");
  if (progress) progress.style.width = `${(currentPhase / totalPhases) * 100}%`;
}

function nextPhase() {
  if (currentPhase < totalPhases) {
    currentPhase++;
    updatePhase();
  }
}

function prevPhase() {
  if (currentPhase > 1) {
    currentPhase--;
    updatePhase();
  }
}

/* -------- COUNTRY -------- */
function populateCountries() {
  const select = document.getElementById("country");
  if (!select) return;

  select.innerHTML = "";
  Object.keys(countries).forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    select.appendChild(opt);
  });
}

/* -------- CALCULATIONS -------- */
function calculateSavings() {
  const pension = Number(document.getElementById("pension").value);
  const property = Number(document.getElementById("property").value);
  const country = document.getElementById("country").value;

  const taxRate = countries[country].tax;
  const costFactor = countries[country].cost;

  const ukTax = pension * 0.20;
  const abroadTax = pension * taxRate;

  const savings =
    (ukTax - abroadTax) +
    (property * 0.002) +
    ((pension * 0.30) * (1 - costFactor));

  document.getElementById("result").innerText =
    `Estimated annual benefit: £${Math.round(savings).toLocaleString()}`;
}

/* -------- AI SUMMARY -------- */
function generateAIInsight() {
  const country = document.getElementById("country").value;
  const pension = document.getElementById("pension").value;

  const insight = `
  Based on your inputs, ${country} offers a strong retirement profile for UK citizens.
  With your pension level, you are likely eligible for long-term residency options,
  lower taxation, and improved quality of life versus the UK in 2025.
  `;

  document.getElementById("ai-output").innerText = insight;
}

/* -------- SLIDER DISPLAY -------- */
function updateSlider(id, output) {
  const val = document.getElementById(id).value;
  document.getElementById(output).innerText = Number(val).toLocaleString();
}
