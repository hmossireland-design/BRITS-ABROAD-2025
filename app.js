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
      <h2>💳 Financial Reality Check</h2>
      <label>Total savings available (£)</label>
      <input type="range" min="0" max="50000" step="500" id="savings" value="5000"
        oninput="document.getElementById('savingsValue').innerText = this.value" />
      <p>£<span id="savingsValue">5000</span></p>

      <label>Do you have existing debts?</label>
      <select id="debts">
        <option value="">-- Select --</option>
        <option value="none">None</option>
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>

      <div class="phase-result" id="finance-result"></div>
      <button onclick="savePhase6()">Continue</button>
    `
  },
  {
    id: 7,
    html: `
      <h2>🌴 Lifestyle Preferences</h2>
      <label>Preferred pace of life</label>
      <select id="lifestyle-pace">
        <option value="">-- Select --</option>
        <option value="slow">Slow</option>
        <option value="moderate">Moderate</option>
        <option value="fast">Fast</option>
      </select>

      <label>Do you enjoy social nightlife?</label>
      <select id="nightlife">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <div class="phase-result" id="lifestyle-result"></div>
      <button onclick="savePhase7()">Continue</button>
    `
  },
  {
    id: 8,
    html: `
      <h2>🗣 Local Language & Skills</h2>
      <label>Do you speak the local language?</label>
      <select id="language">
        <option value="">-- Select --</option>
        <option value="none">None</option>
        <option value="basic">Basic</option>
        <option value="fluent">Fluent</option>
      </select>

      <label>Do you plan to study or train?</label>
      <select id="training">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <div class="phase-result" id="skills-result"></div>
      <button onclick="savePhase8()">Continue</button>
    `
  },
  {
    id: 9,
    html: `
      <h2>🚗 Transport & Mobility</h2>
      <label>Do you plan to drive abroad?</label>
      <select id="drive">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label>Public transport preference</label>
      <select id="public-transport">
        <option value="">-- Select --</option>
        <option value="high">High</option>
        <option value="moderate">Moderate</option>
        <option value="low">Low</option>
      </select>

      <div class="phase-result" id="transport-result"></div>
      <button onclick="savePhase9()">Continue</button>
    `
  },
  {
    id: 10,
    html: `
      <h2>👥 Social & Community Life</h2>
      <label>How important is community for you?</label>
      <select id="community">
        <option value="">-- Select --</option>
        <option value="very">Very Important</option>
        <option value="moderate">Moderate</option>
        <option value="low">Not Important</option>
      </select>

      <label>Do you want to join clubs / groups?</label>
      <select id="clubs">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <div class="phase-result" id="social-result"></div>
      <button onclick="savePhase10()">Continue</button>
    `
  },
  {
    id: 11,
    html: `
      <h2>📊 Summary & Recommendations</h2>
      <p>Review your choices and receive personalised advice.</p>
      <div class="phase-result" id="summary-result"></div>
      <button onclick="savePhase11()">Finish & Get Advice</button>
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
  document.getElementById("progress-text").innerText = `Phase ${phaseNumber} of 11`;
}

/* =========================
   SAVE FUNCTIONS
========================= */
function savePhase1() {
  const dest = document.getElementById("destination").value;
  if (!dest) return alert("Please select a destination");
  userProfile.destination = dest;
  updateProgress(1);
  document.getElementById("phase-2").scrollIntoView({ behavior: "smooth" });
}

function savePhase2() {
  const passport = document.getElementById("passport").value;
  const work = document.getElementById("work").value;
  if (!passport || !work) return alert("Please answer all questions");
  userProfile.passport = passport;
  userProfile.work = work;
  updateProgress(2);
  document.getElementById("phase-3").scrollIntoView({ behavior: "smooth" });
}

function savePhase3() {
  const income = document.getElementById("income").value;
  const budget = document.getElementById("budget").value;
  if (!income || !budget) return alert("Please answer all questions");
  userProfile.monthlyIncome = income;
  userProfile.budgetLevel = budget;
  updateProgress(3);
  document.getElementById("phase-4").scrollIntoView({ behavior: "smooth" });
}

function savePhase4() {
  const healthStatus = document.getElementById("health-status").value;
  const statePension = document.getElementById("state-pension").value;
  const resultBox = document.getElementById("healthcare-result");
  if (!healthStatus || !statePension) return alert("Please answer both healthcare questions");
  let message = "";
  if (healthStatus === "retired" && statePension === "yes") {
    message = `
      ✅ You are likely eligible for an <strong>S1 form</strong>.<br>
      This means the UK covers your state healthcare costs in many EU countries.
    `;
  } else if (healthStatus === "working") {
    message = `💼 As a worker or self-employed person, you will normally need private insurance or local contributions.`;
  } else {
    message = `🏥 You may need <strong>private health insurance</strong>.`;
  }
  resultBox.innerHTML = message;
  resultBox.style.display = "block";
  updateProgress(4);
  const nextPhase = document.getElementById("phase-5");
  if (nextPhase) nextPhase.scrollIntoView({ behavior: "smooth" });
}

function savePhase5() {
  const type = document.getElementById("housing-type").value;
  const budget = document.getElementById("housing-budget").value;
  const location = document.getElementById("location-style").value;
  if (!type || !budget || !location) return alert("Please answer all questions");
  updateProgress(5);
  document.getElementById("phase-6").scrollIntoView({ behavior: "smooth" });
}

function savePhase6() {
  const savings = document.getElementById("savings").value;
  const debts = document.getElementById("debts").value;
  if (!savings || !debts) return alert("Please answer all questions");
  updateProgress(6);
  document.getElementById("phase-7").scrollIntoView({ behavior: "smooth" });
}

function savePhase7() {
  const pace = document.getElementById("lifestyle-pace").value;
  const nightlife = document.getElementById("nightlife").value;
  if (!pace || !nightlife) return alert("Please answer all questions");
  updateProgress(7);
  document.getElementById("phase-8").scrollIntoView({ behavior: "smooth" });
}

function savePhase8() {
  const lang = document.getElementById("language").value;
  const training = document.getElementById("training").value;
  if (!lang || !training) return alert("Please answer all questions");
  updateProgress(8);
  document.getElementById("phase-9").scrollIntoView({ behavior: "smooth" });
}

function savePhase9() {
  const drive = document.getElementById("drive").value;
  const transport = document.getElementById("public-transport").value;
  if (!drive || !transport) return alert("Please answer all questions");
  updateProgress(9);
  document.getElementById("phase-10").scrollIntoView({ behavior: "smooth" });
}

function savePhase10() {
  const community = document.getElementById("community").value;
  const clubs = document.getElementById("clubs").value;
  if (!community || !clubs) return alert("Please answer all questions");
  updateProgress(10);
  document.getElementById("phase-11").scrollIntoView({ behavior: "smooth" });
}

function savePhase11() {
  updateProgress(11);
  document.getElementById("summary-result").innerHTML = `
    <p>✅ Your relocation plan is complete! Review all phases and get personalised advice.</p>
  `;
  alert("All phases completed! Check your summary and advice.");
}
