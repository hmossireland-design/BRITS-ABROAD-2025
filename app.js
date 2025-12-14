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
  schoolChildren: "",
  schoolType: "",
  insuranceHealth: "",
  insuranceProperty: "",
  shoppingFrequency: "",
  shoppingType: "",
  learnLanguage: "",
  learningMethod: ""
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
      <h2>🚗 Transport & Commuting</h2>
      <label>Do you plan to drive?</label>
      <select id="drive">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <label>Preferred transport type</label>
      <select id="transport">
        <option value="">-- Select --</option>
        <option value="public">Public transport</option>
        <option value="car">Car</option>
        <option value="mixed">Mixed</option>
      </select>
      <div class="phase-result" id="transport-result"></div>
      <button onclick="savePhase6()">Continue</button>
    `
  },
  {
    id: 7,
    html: `
      <h2>📚 Education & Schools</h2>
      <label>Do you have children needing schooling?</label>
      <select id="school-children">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <label>Preferred school type</label>
      <select id="school-type">
        <option value="">-- Select --</option>
        <option value="public">Public</option>
        <option value="private">Private</option>
        <option value="international">International</option>
      </select>
      <div class="phase-result" id="school-result"></div>
      <button onclick="savePhase7()">Continue</button>
    `
  },
  {
    id: 8,
    html: `
      <h2>🛡️ Insurance & Safety</h2>
      <label>Do you plan to get local health insurance?</label>
      <select id="insurance-health">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <label>Do you want property insurance?</label>
      <select id="insurance-property">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div class="phase-result" id="insurance-result"></div>
      <button onclick="savePhase8()">Continue</button>
    `
  },
  {
    id: 9,
    html: `
      <h2>🛒 Cost of Living & Shopping</h2>
      <label>How often do you shop for groceries?</label>
      <select id="shopping-frequency">
        <option value="">-- Select --</option>
        <option value="weekly">Weekly</option>
        <option value="biweekly">Bi-weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <label>Do you prefer local markets or supermarkets?</label>
      <select id="shopping-type">
        <option value="">-- Select --</option>
        <option value="local">Local markets</option>
        <option value="supermarket">Supermarkets</option>
      </select>
      <div class="phase-result" id="shopping-result"></div>
      <button onclick="savePhase9()">Continue</button>
    `
  },
  {
    id: 10,
    html: `
      <h2>🗣️ Language & Communication</h2>
      <label>Do you want to learn the local language?</label>
      <select id="learn-language">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <label>Preferred learning method</label>
      <select id="learning-method">
        <option value="">-- Select --</option>
        <option value="classes">Classes</option>
        <option value="self-study">Self-study</option>
        <option value="online">Online apps</option>
      </select>
      <div class="phase-result" id="language-result"></div>
      <button onclick="savePhase10()">Continue</button>
    `
  },
  {
    id: 11,
    html: `
      <h2>🎯 Final Review & Summary</h2>
      <p>All your choices will be summarized here for final review.</p>
      <div id="summary-result"></div>
      <button onclick="savePhase11()">Finish</button>
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
   START APP & PROGRESS
========================= */
function startApp() {
  document.getElementById("phase-1").scrollIntoView({ behavior: "smooth" });
}

function updateProgress(phaseNumber) {
  const percent = (phaseNumber / 11) * 100;
  document.getElementById("progress-fill").style.width = percent + "%";
  document.getElementById("progress-text").innerText =
    `Phase ${phaseNumber} of 11`;
}

/* =========================
   SAVE FUNCTIONS FOR ALL PHASES
========================= */

function savePhase1() {
  const dest = document.getElementById("destination").value;
  if (!dest) return alert("Please select a destination");
  userProfile.destination = dest;
  document.getElementById("destination-result").innerHTML = `Selected: ${dest}`;
  updateProgress(1);
  document.getElementById("phase-2").scrollIntoView({ behavior: "smooth" });
}

function savePhase2() {
  const passport = document.getElementById("passport").value;
  const work = document.getElementById("work").value;
  if (!passport || !work) return alert("Please answer all questions");
  userProfile.passport = passport;
  userProfile.work = work;
  document.getElementById("rights-result").innerHTML = `Passport: ${passport}, Work: ${work}`;
  updateProgress(2);
  document.getElementById("phase-3").scrollIntoView({ behavior: "smooth" });
}

function savePhase3() {
  const income = document.getElementById("income").value;
  const budget = document.getElementById("budget").value;
  if (!income || !budget) return alert("Please answer all questions");
  userProfile.monthlyIncome = income;
  userProfile.budgetLevel = budget;
  document.getElementById("budget-result").innerHTML = `Income: £${income}, Budget: ${budget}`;
  updateProgress(3);
  document.getElementById("phase-4").scrollIntoView({ behavior: "smooth" });
}

function savePhase4() {
  const healthStatus = document.getElementById("health-status").value;
  const statePension = document.getElementById("state-pension").value;
  if (!healthStatus || !statePension) return alert("Please answer all questions");
  userProfile.healthStatus = healthStatus;
  userProfile.statePension = statePension;

  let message = "";
  if (healthStatus === "retired" && statePension === "yes") {
    message = "✅ Likely eligible for S1 form.";
  } else if (healthStatus === "working") {
    message = "💼 Contribute to local healthcare system or hold private insurance.";
  } else {
    message = "🏥 Private health insurance may be needed.";
  }

  document.getElementById("healthcare-result").innerHTML = message;
  updateProgress(4);
  const nextPhase = document.getElementById("phase-5");
  if (nextPhase) nextPhase.scrollIntoView({ behavior: "smooth" });
}

function savePhase5() {
  const type = document.getElementById("housing-type").value;
  const budget = document.getElementById("housing-budget").value;
  const style = document.getElementById("location-style").value;
  if (!type || !budget || !style) return alert("Please answer all housing questions");
  userProfile.housingType = type;
  userProfile.housingBudget = budget;
  userProfile.locationStyle = style;
  document.getElementById("housing-result").innerHTML = `Type: ${type}, Budget: £${budget}, Style: ${style}`;
  updateProgress(5);
  const nextPhase = document.getElementById("phase-6");
  if (nextPhase) nextPhase.scrollIntoView({ behavior: "smooth" });
}

function savePhase6() {
  const drive = document.getElementById("drive").value;
  const transport = document.getElementById("transport").value;
  if (!drive || !transport) return alert("Please answer all transport questions");
  document.getElementById("transport-result").innerHTML = `Drive: ${drive}, Transport: ${transport}`;
  updateProgress(6);
  const nextPhase = document.getElementById("phase-7");
  if (nextPhase) nextPhase.scrollIntoView({ behavior: "smooth" });
}

function savePhase7() {
  const children = document.getElementById("school-children").value;
  const type = document.getElementById("school-type").value;
  if (!children || !type) return alert("Please answer all education questions");
  userProfile.schoolChildren = children;
  userProfile.schoolType = type;
  document.getElementById("school-result").innerHTML = `Children: ${children}, School type: ${type}`;
  updateProgress(7);
  const nextPhase = document.getElementById("phase-8");
  if (nextPhase) nextPhase.scrollIntoView({ behavior: "smooth" });
}

function savePhase8() {
  const health = document.getElementById("insurance-health").value;
  const property = document.getElementById("insurance-property").value;
  if (!health || !property) return alert("Please answer all insurance questions");
  userProfile.insuranceHealth = health;
  userProfile.insuranceProperty = property;
  document.getElementById("insurance-result").innerHTML = `Health: ${health}, Property: ${property}`;
  updateProgress(8);
  const nextPhase = document.getElementById("phase-9");
  if (nextPhase) nextPhase.scrollIntoView({ behavior: "smooth" });
}

function savePhase9() {
  const freq = document.getElementById("shopping-frequency").value;
  const type = document.getElementById("shopping-type").value;
  if (!freq || !type) return alert("Please answer all shopping questions");
  userProfile.shoppingFrequency = freq;
  userProfile.shoppingType = type;
  document.getElementById("shopping-result").innerHTML = `Frequency: ${freq}, Type: ${type}`;
  updateProgress(9);
  const nextPhase = document.getElementById("phase-10");
  if (nextPhase) nextPhase.scrollIntoView({ behavior: "smooth" });
}

function savePhase10() {
  const learn = document.getElementById("learn-language").value;
  const method = document.getElementById("learning-method").value;
  if (!learn || !method) return alert("Please answer all language questions");
  userProfile.learnLanguage = learn;
  userProfile.learningMethod = method;
  document.getElementById("language-result").innerHTML = `Learn: ${learn}, Method: ${method}`;
  updateProgress(10);
  const nextPhase = document.getElementById("phase-11");
  if (nextPhase) nextPhase.scrollIntoView({ behavior: "smooth" });
}

function savePhase11() {
  const summaryBox = document.getElementById("summary-result");
  summaryBox.innerHTML = `<pre>${JSON.stringify(userProfile, null, 2)}</pre>`;
  updateProgress(11);
  alert("All phases completed!");
}
