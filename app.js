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
  locationStyle: "",
  language: "",
  schoolNeeds: "",
  transportMode: "",
  lifestylePreferences: "",
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
      <h2>🗣️ Language Preparation</h2>
      <label>Do you want to learn the local language?</label>
      <select id="language">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div class="phase-result" id="language-result"></div>
      <button onclick="savePhase6()">Continue</button>
    `
  },
  {
    id: 7,
    html: `
      <h2>🎓 Schooling & Education</h2>
      <label>Do you have school-age children?</label>
      <select id="school-needs">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div class="phase-result" id="school-result"></div>
      <button onclick="savePhase7()">Continue</button>
    `
  },
  {
    id: 8,
    html: `
      <h2>🚗 Transport & Mobility</h2>
      <label>Preferred transport mode</label>
      <select id="transport-mode">
        <option value="">-- Select --</option>
        <option value="car">Car</option>
        <option value="public">Public Transport</option>
        <option value="bike">Bike / Walking</option>
      </select>
      <div class="phase-result" id="transport-result"></div>
      <button onclick="savePhase8()">Continue</button>
    `
  },
  {
    id: 9,
    html: `
      <h2>🌿 Lifestyle & Social</h2>
      <label>Lifestyle preferences</label>
      <select id="lifestyle-preferences">
        <option value="">-- Select --</option>
        <option value="quiet">Quiet</option>
        <option value="active">Active</option>
        <option value="social">Social</option>
      </select>
      <div class="phase-result" id="lifestyle-result"></div>
      <button onclick="savePhase9()">Continue</button>
    `
  },
  {
    id: 10,
    html: `
      <h2>📅 Timeline & Planning</h2>
      <label>Desired relocation timeline</label>
      <select id="timeline">
        <option value="">-- Select --</option>
        <option value="0-3">0-3 months</option>
        <option value="3-6">3-6 months</option>
        <option value="6-12">6-12 months</option>
        <option value="12+">12+ months</option>
      </select>
      <div class="phase-result" id="timeline-result"></div>
      <button onclick="savePhase10()">Continue</button>
    `
  },
  {
    id: 11,
    html: `
      <h2>✅ Summary & Recommendations</h2>
      <div id="summary-result"></div>
      <button onclick="generateSummary()">Finish</button>
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
   APP FUNCTIONS
========================= */
function startApp() {
  document.getElementById("phase-1").scrollIntoView({ behavior: "smooth" });
}

function updateProgress(phaseNumber) {
  const percent = (phaseNumber / 11) * 100;
  document.getElementById("progress-fill").style.width = percent + "%";
  document.getElementById("progress-text").innerText = `Phase ${phaseNumber} of 11`;
}

/* =========================
   SAVE PHASE FUNCTIONS
========================= */
function savePhase1() {
  const dest = document.getElementById("destination").value;
  if (!dest) return alert("Please select a destination");
  userProfile.destination = dest;
  updateProgress(1);
  document.getElementById("phase-2").scrollIntoView({ behavior: "smooth" });
}

function savePhase2() {
  const pass = document.getElementById("passport").value;
  const work = document.getElementById("work").value;
  if (!pass || !work) return alert("Please answer both questions");
  userProfile.passport = pass;
  userProfile.work = work;
  updateProgress(2);
  document.getElementById("phase-3").scrollIntoView({ behavior: "smooth" });
}

function savePhase3() {
  const income = document.getElementById("income").value;
  const budget = document.getElementById("budget").value;
  if (!income || !budget) return alert("Please enter income and budget");
  userProfile.monthlyIncome = income;
  userProfile.budgetLevel = budget;
  updateProgress(3);
  document.getElementById("phase-4").scrollIntoView({ behavior: "smooth" });
}

function savePhase4() {
  const health = document.getElementById("health-status").value;
  const pension = document.getElementById("state-pension").value;
  if (!health || !pension) return alert("Please answer both healthcare questions");
  userProfile.healthStatus = health;
  userProfile.statePension = pension;
  updateProgress(4);
  document.getElementById("phase-5").scrollIntoView({ behavior: "smooth" });
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
  document.getElementById("phase-6").scrollIntoView({ behavior: "smooth" });
}

function savePhase6() {
  const lang = document.getElementById("language").value;
  if (!lang) return alert("Please select an option");
  userProfile.language = lang;
  updateProgress(6);
  document.getElementById("phase-7").scrollIntoView({ behavior: "smooth" });
}

function savePhase7() {
  const school = document.getElementById("school-needs").value;
  if (!school) return alert("Please select an option");
  userProfile.schoolNeeds = school;
  updateProgress(7);
  document.getElementById("phase-8").scrollIntoView({ behavior: "smooth" });
}

function savePhase8() {
  const transport = document.getElementById("transport-mode").value;
  if (!transport) return alert("Please select an option");
  userProfile.transportMode = transport;
  updateProgress(8);
  document.getElementById("phase-9").scrollIntoView({ behavior: "smooth" });
}

function savePhase9() {
  const life = document.getElementById("lifestyle-preferences").value;
  if (!life) return alert("Please select an option");
  userProfile.lifestylePreferences = life;
  updateProgress(9);
  document.getElementById("phase-10").scrollIntoView({ behavior: "smooth" });
}

function savePhase10() {
  const timeline = document.getElementById("timeline").value;
  if (!timeline) return alert("Please select an option");
  userProfile.timeline = timeline;
  updateProgress(10);
  document.getElementById("phase-11").scrollIntoView({ behavior: "smooth" });
}

function generateSummary() {
  let summary = `
    <h3>Your Relocation Summary</h3>
    <p><strong>Destination:</strong> ${userProfile.destination}</p>
    <p><strong>Passport:</strong> ${userProfile.passport}</p>
    <p><strong>Work:</strong> ${userProfile.work}</p>
    <p><strong>Income:</strong> £${userProfile.monthlyIncome}</p>
    <p><strong>Budget:</strong> ${userProfile.budgetLevel}</p>
    <p><strong>Healthcare:</strong> ${userProfile.healthStatus}, Pension: ${userProfile.statePension}</p>
    <p><strong>Housing:</strong> ${userProfile.housingType}, £${userProfile.housingBudget}, ${userProfile.locationStyle}</p>
    <p><strong>Language:</strong> ${userProfile.language}</p>
    <p><strong>School Needs:</strong> ${userProfile.schoolNeeds}</p>
    <p><strong>Transport:</strong> ${userProfile.transportMode}</p>
    <p><strong>Lifestyle:</strong> ${userProfile.lifestylePreferences}</p>
    <p><strong>Timeline:</strong> ${userProfile.timeline}</p>
  `;
  document.getElementById("summary-result").innerHTML = summary;
  updateProgress(11);
}
