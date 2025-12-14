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

/* =========================
   PHASE DEFINITIONS
========================= */
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
    id: 4,
    html: `
      <h2>🏥 Healthcare & S1 Planning</h2>

      <label>What best describes you?</label>
      <select id="health-status">
        <option value="">-- Select --</option>
        <option value="working">Working / Self-employed</option>
        <option value="retired">Retired / State Pension</option>
      </select>

      <label>Do you receive the UK State Pension?</label>
      <select id="state-pension">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <div class="phase-result" id="healthcare-result"></div>
      <button onclick="savePhase4()">Continue</button>
    `
  }
];

/* =========================
   RENDER PHASES
========================= */
const container = document.getElementById("phases-container");

phases.forEach(phase => {
  const card = document.createElement("section");
  card.className = "phase-card";
  card.id = `phase-${phase.id}`;
  card.innerHTML = phase.html;
  container.appendChild(card);
});

/* =========================
   START APP
========================= */
function startApp() {
  document.getElementById("phase-1").scrollIntoView({ behavior: "smooth" });
}

/* =========================
   PROGRESS BAR
========================= */
function updateProgress(phaseNumber) {
  const percent = (phaseNumber / 11) * 100;
  document.getElementById("progress-fill").style.width = percent + "%";
  document.getElementById("progress-text").innerText =
    `Phase ${phaseNumber} of 11`;
}

/* =========================
   PHASE LOGIC
========================= */

/* PHASE 1 */
function savePhase1() {
  const dest = document.getElementById("destination").value;
  if (!dest) return alert("Please select a destination");

  userProfile.destination = dest;
  document.getElementById("destination-result").innerHTML =
    `✅ Destination selected: <strong>${dest}</strong>`;

  updateProgress(1);
  document.getElementById("phase-2").scrollIntoView({ behavior: "smooth" });
}

/* PHASE 2 */
function savePhase2() {
  const passport = document.getElementById("passport").value;
  const work = document.getElementById("work").value;
  if (!work) return alert("Please select work intention");

  userProfile.passport = passport;
  userProfile.work = work;

  document.getElementById("rights-result").innerHTML =
    `🛂 Passport: ${passport}<br>💼 Working: ${work}`;

  updateProgress(2);
  document.getElementById("phase-3").scrollIntoView({ behavior: "smooth" });
}

/* PHASE 3 */
function savePhase3() {
  const income = document.getElementById("income").value;
  const budget = document.getElementById("budget").value;
  if (!budget) return alert("Please select budget sensitivity");

  userProfile.monthlyIncome = income;
  userProfile.budgetLevel = budget;

  document.getElementById("budget-result").innerHTML =
    `💰 £${income}/month | Budget: ${budget}`;

  updateProgress(3);
  document.getElementById("phase-4").scrollIntoView({ behavior: "smooth" });
}

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
      The UK may cover your state healthcare costs in many EU countries.
    `;
  } else if (healthStatus === "working") {
    message = `
      💼 You will usually need to contribute to the local healthcare system
      or hold private insurance initially.
    `;
  } else {
    message = `
      🏥 Private health insurance may be required during early residency.
    `;
  }

  resultBox.innerHTML = message;
  resultBox.style.display = "block";

  updateProgress(4);
}
