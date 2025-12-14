/*************************************************
 BRITS ABROAD 2025 – CORE APP LOGIC
 Beginner-safe / No frameworks / GitHub friendly
**************************************************/

/* GLOBAL USER PROFILE */
const userProfile = {
  destination: "",
  passport: "UK",
  work: "",
  monthlyIncome: 1500,
  budgetLevel: "",
};

/* PHASE DEFINITIONS */
const phases = [
  {
    id: 1,
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
    html: `
      <h2>🛂 Work & Residency Rights</h2>

      <label>Passport held</label>
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
    html: `
      <h2>💰 Income & Budget</h2>

      <label>Monthly Income (£)</label>
      <input type="range" min="500" max="5000" step="100"
        id="income" value="1500"
        oninput="document.getElementById('incomeValue').innerText = this.value" />
      <p>£<span id="incomeValue">1500</span> / month</p>

      <label>Budget sensitivity</label>
      <select id="budget">
        <option value="">-- Select --</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <div class="phase-result" id="budget-result"></div>
      <button onclick="savePhase3()">Continue</button>
    `
  },
{
  /* PHASE 4 */
function savePhase4() {
  const healthStatus = document.getElementById("health-status").value;
  const statePension = document.getElementById("state-pension").value;
  const resultBox = document.getElementById("healthcare-result");

  if (!healthStatus || !statePension) {
    alert("Please answer both healthcare questions");
    return;
  }

  let message = "";

  if (healthStatus === "retired" && statePension === "yes") {
    message = `
      ✅ You are likely eligible for an <strong>S1 form</strong>.<br><br>
      This means the UK covers your state healthcare costs in many EU countries,
      allowing you to register with the local healthcare system.
    `;
  } else if (healthStatus === "working") {
    message = `
      💼 As a worker or self-employed person, you will normally need to
      contribute to the local healthcare system or hold private insurance
      until registered.
    `;
  } else {
    message = `
      🏥 You may need <strong>private health insurance</strong>,
      especially during your initial residency period.
    `;
  }

  resultBox.innerHTML = message;
  resultBox.style.display = "block";

  updateProgress(4);

  // Scroll to Phase 5 when it exists
  const nextPhase = document.getElementById("phase-5");
  if (nextPhase) {
    nextPhase.scrollIntoView({ behavior: "smooth" });
  }
}

/* RENDER PHASES */
const container = document.getElementById("phases-container");
phases.forEach(phase => {
  const card = document.createElement("section");
  card.className = "phase-card";
  card.id = `phase-${phase.id}`;
  card.innerHTML = phase.html;
  container.appendChild(card);
});

/* START APP */
function startApp() {
  document.getElementById("phase-1").scrollIntoView({ behavior: "smooth" });
}

/* PROGRESS BAR */
function updateProgress(phaseNumber) {
  const percent = (phaseNumber / 11) * 100;
  document.getElementById("progress-fill").style.width = percent + "%";
  document.getElementById("progress-text").innerText =
    `Phase ${phaseNumber} of 11`;
}

/* PHASE 1 */
function savePhase1() {
  const dest = document.getElementById("destination").value;
  if (!dest) return alert("Please select a destination");

  userProfile.destination = dest;

  document.getElementById("destination-result").innerHTML =
    `✅ <strong>${dest}</strong> is a popular relocation choice for UK nationals.`;

  updateProgress(1);
  document.getElementById("phase-2").scrollIntoView({ behavior: "smooth" });
}

/* PHASE 2 */
function savePhase2() {
  userProfile.passport = document.getElementById("passport").value;
  userProfile.work = document.getElementById("work").value;

  let advice = "";

  if (userProfile.passport === "UK" && userProfile.work === "yes") {
    advice = "⚠️ You will require a visa or residency permit to work.";
  } else if (userProfile.passport === "EU") {
    advice = "✅ You have full EU freedom of movement.";
  } else {
    advice = "ℹ️ Non-working residency routes may be available.";
  }

  document.getElementById("rights-result").innerHTML = advice;

  updateProgress(2);
  document.getElementById("phase-3").scrollIntoView({ behavior: "smooth" });
}

/* PHASE 3 */
function savePhase3() {
  userProfile.monthlyIncome = document.getElementById("income").value;
  userProfile.budgetLevel = document.getElementById("budget").value;

  let result = "";

  if (userProfile.monthlyIncome < 1200) {
    result = "⚠️ Budget will be tight in most Western Europe countries.";
  } else if (userProfile.monthlyIncome >= 2000) {
    result = "✅ Comfortable budget for many destinations.";
  } else {
    result = "ℹ️ Budget feasible with planning.";
  }

  document.getElementById("budget-result").innerHTML = result;

  updateProgress(3);
}

/* AI ADVICE BUTTON */
function getAIAdvice() {
  const output = `
    <strong>Your Relocation Snapshot:</strong><br><br>
    🌍 Destination: ${userProfile.destination}<br>
    🛂 Passport: ${userProfile.passport}<br>
    💼 Working: ${userProfile.work}<br>
    💰 Income: £${userProfile.monthlyIncome}/month<br><br>
    <em>This plan looks viable. Next steps: visas, healthcare, and housing.</em>
  `;

  document.getElementById("ai-output").innerHTML = output;
}
