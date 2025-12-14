/*************************************************
 BRITS ABROAD 2025 – FULL APP LOGIC
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
  locationStyle: "",
  schooling: "",
  taxes: "",
  transport: "",
  languageLevel: "",
  socialLife: "",
};

/* =========================
   PHASE DEFINITIONS (HTML)
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
      <h2>🏫 Schooling & Education</h2>
      <label>Do you have children or plan to?</label>
      <select id="schooling">
        <option value="">-- Select --</option>
        <option value="none">No children</option>
        <option value="primary">Primary school age</option>
        <option value="secondary">Secondary school age</option>
      </select>
      <div class="phase-result" id="schooling-result"></div>
      <button onclick="savePhase6()">Continue</button>
    `
  },
  {
    id: 7,
    html: `
      <h2>💸 Taxes & Cost of Living</h2>
      <label>Are you familiar with local taxes?</label>
      <select id="taxes">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div class="phase-result" id="taxes-result"></div>
      <button onclick="savePhase7()">Continue</button>
    `
  },
  {
    id: 8,
    html: `
      <h2>🚗 Transport & Mobility</h2>
      <label>Do you need a car or public transport?</label>
      <select id="transport">
        <option value="">-- Select --</option>
        <option value="car">Car</option>
        <option value="public">Public Transport</option>
      </select>
      <div class="phase-result" id="transport-result"></div>
      <button onclick="savePhase8()">Continue</button>
    `
  },
  {
    id: 9,
    html: `
      <h2>🗣 Language Skills</h2>
      <label>Current level in local language</label>
      <select id="language-level">
        <option value="">-- Select --</option>
        <option value="none">None</option>
        <option value="basic">Basic</option>
        <option value="conversational">Conversational</option>
      </select>
      <div class="phase-result" id="language-result"></div>
      <button onclick="savePhase9()">Continue</button>
    `
  },
  {
    id: 10,
    html: `
      <h2>🎉 Social & Lifestyle</h2>
      <label>Preferred social life intensity</label>
      <select id="social-life">
        <option value="">-- Select --</option>
        <option value="quiet">Quiet</option>
        <option value="moderate">Moderate</option>
        <option value="active">Active</option>
      </select>
      <div class="phase-result" id="social-result"></div>
      <button onclick="savePhase10()">Continue</button>
    `
  },
  {
    id: 11,
    html: `
      <h2>✅ Summary & Next Steps</h2>
      <div id="summary"></div>
      <button onclick="showSummary()">Finish</button>
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
  card.style.opacity = 0;
  container.appendChild(card);

  // Fade-in animation
  setTimeout(() => {
    card.style.transition = "opacity 0.6s ease";
    card.style.opacity = 1;
  }, 100);
});

/* =========================
   APP FUNCTIONS
========================= */
function startApp() {
  document.getElementById("phase-1").scrollIntoView({ behavior: "smooth" });
}

function updateProgress(phaseNumber) {
  const percent = (phaseNumber / 11) * 100;
  const fill = document.getElementById("progress-fill");
  fill.style.transition = "width 0.6s ease-out";
  fill.style.width = percent + "%";
  document.getElementById("progress-text").innerText =
    `Phase ${phaseNumber} of 11`;
}

/* =========================
   SAVE FUNCTIONS FOR PHASES
========================= */

function savePhase1() {
  const val = document.getElementById("destination").value;
  if (!val) return alert("Please select a destination");
  userProfile.destination = val;
  document.getElementById("destination-result").innerHTML = `✅ ${val}`;
  updateProgress(1);
  scrollNext(2);
}

function savePhase2() {
  const pass = document.getElementById("passport").value;
  const work = document.getElementById("work").value;
  if (!pass || !work) return alert("Please answer all questions");
  userProfile.passport = pass;
  userProfile.work = work;
  document.getElementById("rights-result").innerHTML = `✅ ${pass}, ${work}`;
  updateProgress(2);
  scrollNext(3);
}

function savePhase3() {
  const income = document.getElementById("income").value;
  const budget = document.getElementById("budget").value;
  if (!income || !budget) return alert("Please answer all questions");
  userProfile.monthlyIncome = income;
  userProfile.budgetLevel = budget;
  document.getElementById("budget-result").innerHTML = `✅ £${income} / ${budget}`;
  updateProgress(3);
  scrollNext(4);
}

function savePhase4() {
  const health = document.getElementById("health-status").value;
  const pension = document.getElementById("state-pension").value;
  if (!health || !pension) return alert("Please answer both healthcare questions");
  userProfile.healthStatus = health;
  userProfile.statePension = pension;

  let msg = "";
  if (health === "retired" && pension === "yes") {
    msg = "✅ You may be eligible for S1 healthcare coverage.";
  } else if (health === "working") {
    msg = "💼 You will contribute to local healthcare or use private insurance.";
  } else {
    msg = "🏥 Private health insurance may be needed initially.";
  }

  document.getElementById("healthcare-result").innerHTML = msg;
  updateProgress(4);
  scrollNext(5);
}

function savePhase5() {
  const type = document.getElementById("housing-type").value;
  const budget = document.getElementById("housing-budget").value;
  const loc = document.getElementById("location-style").value;
  if (!type || !budget || !loc) return alert("Please answer all housing questions");
  userProfile.housingType = type;
  userProfile.housingBudget = budget;
  userProfile.locationStyle = loc;
  document.getElementById("housing-result").innerHTML = `✅ ${type}, £${budget}, ${loc}`;
  updateProgress(5);
  scrollNext(6);
}

function savePhase6() {
  const school = document.getElementById("schooling").value;
  if (!school) return alert("Please select schooling option");
  userProfile.schooling = school;
  document.getElementById("schooling-result").innerHTML = `✅ ${school}`;
  updateProgress(6);
  scrollNext(7);
}

function savePhase7() {
  const tax = document.getElementById("taxes").value;
  if (!tax) return alert("Please select an option");
  userProfile.taxes = tax;
  document.getElementById("taxes-result").innerHTML = `✅ ${tax}`;
  updateProgress(7);
  scrollNext(8);
}

function savePhase8() {
  const transport = document.getElementById("transport").value;
  if (!transport) return alert("Please select an option");
  userProfile.transport = transport;
  document.getElementById("transport-result").innerHTML = `✅ ${transport}`;
  updateProgress(8);
  scrollNext(9);
}

function savePhase9() {
  const lang = document.getElementById("language-level").value;
  if (!lang) return alert("Please select an option");
  userProfile.languageLevel = lang;
  document.getElementById("language-result").innerHTML = `✅ ${lang}`;
  updateProgress(9);
  scrollNext(10);
}

function savePhase10() {
  const social = document.getElementById("social-life").value;
  if (!social) return alert("Please select an option");
  userProfile.socialLife = social;
  document.getElementById("social-result").innerHTML = `✅ ${social}`;
  updateProgress(10);
  scrollNext(11);
}

function showSummary() {
  const summary = document.getElementById("summary");
  summary.innerHTML = `
    <h3>Your Relocation Plan:</h3>
    <ul>
      <li>Destination: ${userProfile.destination}</li>
      <li>Passport: ${userProfile.passport}</li>
      <li>Work: ${userProfile.work}</li>
      <li>Income: £${userProfile.monthlyIncome}</li>
      <li>Budget: ${userProfile.budgetLevel}</li>
      <li>Healthcare: ${userProfile.healthStatus} / ${userProfile.statePension}</li>
      <li>Housing: ${userProfile.housingType}, £${userProfile.housingBudget}, ${userProfile.locationStyle}</li>
      <li>Schooling: ${userProfile.schooling}</li>
      <li>Taxes: ${userProfile.taxes}</li>
      <li>Transport: ${userProfile.transport}</li>
      <li>Language: ${userProfile.languageLevel}</li>
      <li>Social Life: ${userProfile.socialLife}</li>
    </ul>
  `;
  updateProgress(11);
  summary.scrollIntoView({ behavior: "smooth" });
}

/* =========================
   HELPER: SCROLL NEXT PHASE
========================= */
function scrollNext(id) {
  const nextPhase = document.getElementById(`phase-${id}`);
  if (nextPhase) nextPhase.scrollIntoView({ behavior: "smooth" });
}
