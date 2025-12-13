/*************************************************
 BRITS ABROAD 2025 – CORE APP LOGIC
 Beginner-safe / No frameworks / GitHub friendly
**************************************************/

/* GLOBAL USER PROFILE (VERY IMPORTANT) */
const userProfile = {
  destination: "",
  passport: "UK",
  workRights: "",
  monthlyIncome: 0,
  budgetLevel: "",
};

/* PHASE DEFINITIONS */
const phases = [
  {
    id: 1,
    title: "Dream Destination",
    html: `
      <h2>🌍 Choose Your Destination</h2>
      <label>Where are you considering moving?</label>
      <select id="destination">
        <option value="">-- Select Country --</option>
        <option value="Portugal">Portugal</option>
        <option value="Spain">Spain</option>
        <option value="France">France</option>
        <option value="Cyprus">Cyprus</option>
        <option value="Thailand">Thailand</option>
        <option value="UAE">UAE</option>
      </select>

      <div class="phase-result" id="destination-result"></div>
      <button onclick="savePhase1()">Continue</button>
    `
  },

  {
    id: 2,
    title: "Work & Residency Rights",
    html: `
      <h2>🛂 Your Legal Rights</h2>

      <label>What passport do you hold?</label>
      <select id="passport">
        <option value="UK">UK Passport</option>
        <option value="EU">EU Passport</option>
      </select>

      <label>Do you plan to work?</label>
      <select id="work">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <div class="phase-result" id="rights-result"></div>
      <button onclick="savePhase2()">Continue</button>
    `
  },

  {
    id: 3,
    title: "Income & Budget",
    html: `
      <h2>💰 Financial Reality Check</h2>

      <label>Monthly Income (£)</label>
      <input type="range" min="500" max="5000" step="100" id="income" value="1500"
        oninput="document.getElementById('incomeValue').innerText = this.value" />
      <p>£<span id="incomeValue">1500</span> / month</p>

      <label>How cost-sensitive are you?</label>
      <select id="budget">
        <option value="">-- Select --</option>
        <option value="low">Low (flexible)</option>
        <option value="medium">Medium</option>
        <option value="high">High (tight budget)</option>
      </select>

      <div class="phase-result" id="budget-result"></div>
      <button onclick="savePhase3()">Continue</button>
    `
  }
];

/* RENDER PHASES */
const container = document.getElementById("phases-container");

phases.forEach(phase => {
  const card = document.createElement("section");
  card.className = "phase-card";
  card.id = `phase-${phase.id}`;
  card.innerHTML = phase.html;
  container.appendChild(card);
});

/* PHASE 1 LOGIC */
function savePhase1() {
  const dest = document.getElementById("destination").value;
  if (!dest) {
    alert("Please select a country");
    return;
  }
  userProfile.destination = dest;

  document.getElementById("destination-result").innerHTML =
    `✔ ${dest} selected. We will analyse visas, tax & lifestyle.`;
}

/* PHASE 2 LOGIC */
function savePhase2() {
  const passport = document.getElementById("passport").value;
  const work = document.getElementById("work").value;

  if (!work) {
    alert("Please choose whether you plan to work");
    return;
  }

  userProfile.passport = passport;
  userProfile.workRights = work;

  let msg = "";

  if (passport === "EU") {
    msg = "✔ You have full freedom to live & work in the EU.";
  } else if (passport === "UK" && work === "yes") {
    msg = "⚠ UK citizens usually need a work visa or residency permit.";
  } else {
    msg = "✔ Passive income visas may suit you well.";
  }

  document.getElementById("rights-result").innerHTML = msg;
}

/* PHASE 3 LOGIC */
function savePhase3() {
  const income = document.getElementById("income").value;
  const budget = document.getElementById("budget").value;

  if (!budget) {
    alert("Please select a budget level");
    return;
  }

  userProfile.monthlyIncome = income;
  userProfile.budgetLevel = budget;

  let msg = "";

  if (income < 1200) {
    msg = "⚠ Your income may restrict visa options in Western Europe.";
  } else if (income < 2000) {
    msg = "✔ Southern Europe & Eastern Europe are strong options.";
  } else {
    msg = "✔ You have strong flexibility across multiple regions.";
  }

  document.getElementById("budget-result").innerHTML = msg;
}

/* AI PLACEHOLDER */
function getAIAdvice() {
  const out = document.getElementById("ai-output");

  let advice = `Based on your inputs:\n\n`;
  advice += `Destination: ${userProfile.destination}\n`;
  advice += `Passport: ${userProfile.passport}\n`;
  advice += `Income: £${userProfile.monthlyIncome}/month\n\n`;

  if (userProfile.destination === "Portugal" && userProfile.monthlyIncome >= 1200) {
    advice += "✔ Portugal is a strong match (D7 visa likely).\n";
  }

  if (userProfile.budgetLevel === "high") {
    advice += "⚠ You should prioritise low-cost countries.\n";
  }

  out.innerText = advice;
}

/* START BUTTON SCROLL */
function startApp() {
  document.getElementById("phase-1").scrollIntoView({ behavior: "smooth" });
}
// ============================
// PROGRESS BAR LOGIC
// ============================
const totalPhases = 11;

window.addEventListener("scroll", () => {
  const phases = document.querySelectorAll(".phase-card");
  let currentPhase = 1;

  phases.forEach((phase, index) => {
    const rect = phase.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.5) {
      currentPhase = index + 1;
    }
  });

  const progressPercent = (currentPhase / totalPhases) * 100;

  document.getElementById("progress-fill").style.width =
    progressPercent + "%";

  document.getElementById("progress-text").innerText =
    `Phase ${currentPhase} of ${totalPhases}`;
});
