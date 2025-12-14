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
      <h2>💳 Banking & Money Transfer</h2>
      <label>Do you already have a bank account in your destination country?</label>
      <select id="bank-account">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <label>Do you plan to use international money transfer services?</label>
      <select id="money-transfer">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <label>Approximate monthly outgoing (£)</label>
      <input type="range" min="100" max="5000" step="50"
        id="transfer-amount" value="500"
        oninput="document.getElementById('transferValue').innerText = this.value" />
      <p>£<span id="transferValue">500</span> / month</p>
      <div class="phase-result" id="banking-result"></div>
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
  updateProgress(1);
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
   SAVE PHASE FUNCTIONS
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
  const passport = document.getElementById("passport").value;
  const work = document.getElementById("work").value;
  if (!passport || !work) return alert("Please answer all questions");
  userProfile.passport = passport;
  userProfile.work = work;
  updateProgress(2);
  const next = document.getElementById("phase-3");
  if (next) next.scrollIntoView({ behavior: "smooth" });
}

function savePhase3() {
  const income = document.getElementById("income").value;
  const budget = document.getElementById("budget").value;
  if (!income || !budget) return alert("Please answer all questions");
  userProfile.monthlyIncome = income;
  userProfile.budgetLevel = budget;
  updateProgress(3);
  const next = document.getElementById("phase-4");
  if (next) next.scrollIntoView({ behavior: "smooth" });
}

function savePhase4() {
  const healthStatus = document.getElementById("health-status").value;
  const statePension = document.getElementById("state-pension").value;
  const resultBox = document.getElementById("healthcare-result");
  if (!healthStatus || !statePension) return alert("Please answer both healthcare questions");

  let message = "";
  if (healthStatus === "retired" && statePension === "yes") {
    message = `
      ✅ You are likely eligible for an <strong>S1 form</strong>.<br><br>
      This allows the UK to cover healthcare in many EU countries.
    `;
  } else if (healthStatus === "working") {
    message = `
      💼 As a worker or self-employed person, you may need to contribute to local healthcare or hold private insurance.
    `;
  } else {
    message = `
      🏥 You may need <strong>private health insurance</strong>, especially initially.
    `;
  }

  resultBox.innerHTML = message;
  resultBox.style.display = "block";
  updateProgress(4);
  const next = document.getElementById("phase-5");
  if (next) next.scrollIntoView({ behavior: "smooth" });
}

function savePhase5() {
  const type = document.getElementById("housing-type").value;
  const budget = document.getElementById("housing-budget").value;
  const style = document.getElementById("location-style").value;
  const resultBox = document.getElementById("housing-result");
  if (!type || !budget || !style) return alert("Please answer all housing questions");

  let message = `🏠 You plan to ${type} with a budget of £${budget}/month in a ${style} area.`;
  resultBox.innerHTML = message;
  resultBox.style.display = "block";
  updateProgress(5);
  const next = document.getElementById("phase-6");
  if (next) next.scrollIntoView({ behavior: "smooth" });
}

function savePhase6() {
  const account = document.getElementById("bank-account").value;
  const transfer = document.getElementById("money-transfer").value;
  const amount = document.getElementById("transfer-amount").value;
  const resultBox = document.getElementById("banking-result");
  if (!account || !transfer || !amount) return alert("Please answer all banking questions");

  let message = `💳 Bank account: ${account}, Money transfer plan: ${transfer}, Monthly outgoing: £${amount}`;
  resultBox.innerHTML = message;
  resultBox.style.display = "block";
  updateProgress(6);
}
