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
  healthStatus: "",
  statePension: "",
  housingType: "",
  housingBudget: 800,
  locationStyle: ""
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
  },
  {
    id: 5,
    html: `
      <h2>🏠 Housing & Rent Reality</h2>
      <label>Do you plan to rent or buy?</label>
      <select id="housing-type">
        <option value="">-- Select --</option>
        <option value="rent">Rent</option>
        <option value="buy">Buy</option>
      </select>
      <label>Monthly housing budget (£)</label>
      <input type="range" min="300" max="3000" step="50"
        id="housing-budget" value="800"
        oninput="document.getElementById('housingValue').innerText = this.value" />
      <p>£<span id="housingValue">800</span> / month</p>
      <label>Preferred location style</label>
      <select id="location-style">
        <option value="">-- Select --</option>
        <option value="city">City</option>
        <option value="town">Town</option>
        <option value="rural">Rural</option>
      </select>
      <div class="phase-result" id="housing-result"></div>
      <button onclick="savePhase5()">Continue</button>
    `
  },
  {
    id: 6,
    html: `
      <h2>📦 Packing & Logistics</h2>
      <label>Will you ship furniture or buy new?</label>
      <select id="packing-choice">
        <option value="">-- Select --</option>
        <option value="ship">Ship existing furniture</option>
        <option value="new">Buy new at destination</option>
      </select>
      <label>Do you need professional movers?</label>
      <select id="movers">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div class="phase-result" id="packing-result"></div>
      <button onclick="savePhase6()">Continue</button>
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
   PHASE SAVE FUNCTIONS
========================= */
function savePhase1() {
  const dest = document.getElementById("destination").value;
  if (!dest) return alert("Please select a destination");
  userProfile.destination = dest;
  updateProgress(1);
  const next = document.getElementById("phase-2");
  if (next) next.scrollIntoView({ behavior: "smooth" });
}

function savePhase2() {
  const pass = document.getElementById("passport").value;
  const work = document.getElementById("work").value;
  if (!pass || !work) return alert("Please answer all questions");
  userProfile.passport = pass;
  userProfile.work = work;
  updateProgress(2);
  const next = document.getElementById("phase-3");
  if (next) next.scrollIntoView({ behavior: "smooth" });
}

function savePhase3() {
  const income = document.getElementById("income").value;
  const budget = document.getElementById("budget").value;
  if (!income || !budget) return alert("Please complete both fields");
  userProfile.monthlyIncome = income;
  userProfile.budgetLevel = budget;
  updateProgress(3);
  const next = document.getElementById("phase-4");
  if (next) next.scrollIntoView({ behavior: "smooth" });
}

function savePhase4() {
  const healthStatus = document.getElementById("health-status").value;
  const statePension = document.getElementById("state-pension").value;
  if (!healthStatus || !statePension) return alert("Please answer both healthcare questions");
  userProfile.healthStatus = healthStatus;
  userProfile.statePension = statePension;

  let message = "";
  if (healthStatus === "retired" && statePension === "yes") {
    message = `✅ You are likely eligible for an <strong>S1 form</strong>.`;
  } else if (healthStatus === "working") {
    message = `💼 You will normally contribute to local healthcare or use private insurance.`;
  } else {
    message = `🏥 You may need private health insurance initially.`;
  }
  document.getElementById("healthcare-result").innerHTML = message;

  updateProgress(4);
  const next = document.getElementById("phase-5");
  if (next) next.scrollIntoView({ behavior: "smooth" });
}

function savePhase5() {
  const type = document.getElementById("housing-type").value;
  const budget = document.getElementById("housing-budget").value;
  const style = document.getElementById("location-style").value;
  if (!type || !budget || !style) return alert("Please answer all housing questions");
  userProfile.housingType = type;
  userProfile.housingBudget = budget;
  userProfile.locationStyle = style;

  updateProgress(5);
  const next = document.getElementById("phase-6");
  if (next) next.scrollIntoView({ behavior: "smooth" });
}

function savePhase6() {
  const packing = document.getElementById("packing-choice").value;
  const movers = document.getElementById("movers").value;
  if (!packing || !movers) return alert("Please answer all packing questions");
  userProfile.packingChoice = packing;
  userProfile.movers = movers;

  updateProgress(6);
  // Scroll to next phase if exists
}
