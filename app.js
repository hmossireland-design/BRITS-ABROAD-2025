/*************************************************
 BRITS ABROAD 2025 – COMPLETE APP LOGIC
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
  driving: "",
  transport: "",
  children: "",
  schoolType: "",
  costLiving: "",
  lifestyle: "",
  remoteWork: "",
  industry: "",
  expatCommunity: "",
  language: ""
};

/* =========================
   PHASE DEFINITIONS
========================= */
const phases = [
  /* PHASE 1 */
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

  /* PHASE 2 */
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

  /* PHASE 3 */
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

  /* PHASE 4 */
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

  /* PHASE 5 */
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

  /* PHASE 6 */
  {
    id: 6,
    html: `
      <h2>✈️ Travel & Transport</h2>
      <label>Will you drive abroad?</label>
      <select id="driving">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <label>Preferred local transport</label>
      <select id="transport">
        <option value="">-- Select --</option>
        <option value="public">Public transport</option>
        <option value="car">Car</option>
        <option value="mixed">Mixed</option>
      </select>
      <div class="phase-result" id="travel-result"></div>
      <button onclick="savePhase6()">Continue</button>
    `
  },

  /* PHASE 7 */
  {
    id: 7,
    html: `
      <h2>📚 Education & Schools</h2>
      <label>Do you have children?</label>
      <select id="children">
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
      <div class="phase-result" id="education-result"></div>
      <button onclick="savePhase7()">Continue</button>
    `
  },

  /* PHASE 8 */
  {
    id: 8,
    html: `
      <h2>🛒 Cost of Living & Lifestyle</h2>
      <label>How important is cost of living?</label>
      <select id="cost-living">
        <option value="">-- Select --</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <label>Lifestyle preferences</label>
      <select id="lifestyle">
        <option value="">-- Select --</option>
        <option value="quiet">Quiet / Relaxed</option>
        <option value="social">Social / Active</option>
        <option value="mixed">Mixed</option>
      </select>
      <div class="phase-result" id="living-result"></div>
      <button onclick="savePhase8()">Continue</button>
    `
  },

  /* PHASE 9 */
  {
    id: 9,
    html: `
      <h2>💻 Work & Career</h2>
      <label>Will you work remotely?</label>
      <select id="remote-work">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <label>Industry / sector</label>
      <input type="text" id="industry" placeholder="e.g., IT, Finance, Healthcare" />
      <div class="phase-result" id="career-result"></div>
      <button onclick="savePhase9()">Continue</button>
    `
  },

  /* PHASE 10 */
  {
    id: 10,
    html: `
      <h2>🌐 Community & Integration</h2>
      <label>Do you want to join expat communities?</label>
      <select id="expat-community">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <label>Local language proficiency</label>
      <select id="language">
        <option value="">-- Select --</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="fluent">Fluent</option>
      </select>
      <div class="phase-result" id="community-result"></div>
      <button onclick="savePhase10()">Continue</button>
    `
  },

  /* PHASE 11 */
  {
    id: 11,
    html: `
      <h2>✅ Review & Summary</h2>
      <div id="summary-output"></div>
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
   SAVE FUNCTIONS FOR PHASES
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
  if (!passport || !work) return alert("Please answer both questions");
  userProfile.passport = passport;
  userProfile.work = work;
  updateProgress(2);
  document.getElementById("phase-3").scrollIntoView({ behavior: "smooth" });
}

function savePhase3() {
  const income = document.getElementById("income").value;
  const budget = document.getElementById("budget").value;
  if (!income || !budget) return alert("Please answer both questions");
  userProfile.monthlyIncome = income;
  userProfile.budgetLevel = budget;
  updateProgress(3);
  document.getElementById("phase-4").scrollIntoView({ behavior: "smooth" });
}

function savePhase4() {
  const healthStatus = document.getElementById("health-status").value;
  const statePension = document.getElementById("state-pension").value;
  if (!healthStatus || !statePension) return alert("Please answer both questions");
  userProfile.healthStatus = healthStatus;
  userProfile.statePension = statePension;
  updateProgress(4);
  document.getElementById("phase-5").scrollIntoView({ behavior: "smooth" });
}

function savePhase5() {
  const type = document.getElementById("housing-type").value;
  const budget = document.getElementById("housing-budget").value;
  const location = document.getElementById("location-style").value;
  if (!type || !budget || !location) return alert("Please answer all housing questions");
  userProfile.housingType = type;
  userProfile.housingBudget = budget;
  userProfile.locationStyle = location;
  updateProgress(5);
  document.getElementById("phase-6").scrollIntoView({ behavior: "smooth" });
}

function savePhase6() {
  const driving = document.getElementById("driving").value;
  const transport = document.getElementById("transport").value;
  if (!driving || !transport) return alert("Please answer both travel questions");
  userProfile.driving = driving;
  userProfile.transport = transport;
  updateProgress(6);
  document.getElementById("phase-7").scrollIntoView({ behavior: "smooth" });
}

function savePhase7() {
  const children = document.getElementById("children").value;
  const school = document.getElementById("school-type").value;
  if (!children || !school) return alert("Please answer both education questions");
  userProfile.children = children;
  userProfile.schoolType = school;
  updateProgress(7);
  document.getElementById("phase-8").scrollIntoView({ behavior: "smooth" });
}

function savePhase8() {
  const cost = document.getElementById("cost-living").value;
  const lifestyle = document.getElementById("lifestyle").value;
  if (!cost || !lifestyle) return alert("Please answer both living questions");
  userProfile.costLiving = cost;
  userProfile.lifestyle = lifestyle;
  updateProgress(8);
  document.getElementById("phase-9").scrollIntoView({ behavior: "smooth" });
}

function savePhase9() {
  const remote = document.getElementById("remote-work").value;
  const industry = document.getElementById("industry").value;
  if (!remote || !industry) return alert("Please answer both work questions");
  userProfile.remoteWork = remote;
  userProfile.industry = industry;
  updateProgress(9);
  document.getElementById("phase-10").scrollIntoView({ behavior: "smooth" });
}

function savePhase10() {
  const community = document.getElementById("expat-community").value;
  const language = document.getElementById("language").value;
  if (!community || !language) return alert("Please answer both community questions");
  userProfile.expatCommunity = community;
  userProfile.language = language;
  updateProgress(10);
  document.getElementById("phase-11").scrollIntoView({ behavior: "smooth" });
}

/* =========================
   SUMMARY PHASE
========================= */
function generateSummary() {
  let summary = `
    <h3>Summary of your choices:</h3>
    <ul>
      <li>Destination: ${userProfile.destination}</li>
      <li>Passport: ${userProfile.passport}</li>
      <li>Work: ${userProfile.work}</li>
      <li>Monthly Income: £${userProfile.monthlyIncome}</li>
      <li>Budget Level: ${userProfile.budgetLevel}</li>
      <li>Health Status: ${userProfile.healthStatus}</li>
      <li>State Pension: ${userProfile.statePension}</li>
      <li>Housing: ${userProfile.housingType} (£${userProfile.housingBudget}/month, ${userProfile.locationStyle})</li>
      <li>Driving: ${userProfile.driving}, Transport: ${userProfile.transport}</li>
      <li>Children: ${userProfile.children}, School: ${userProfile.schoolType}</li>
      <li>Cost of Living: ${userProfile.costLiving}, Lifestyle: ${userProfile.lifestyle}</li>
      <li>Remote Work: ${userProfile.remoteWork}, Industry: ${userProfile.industry}</li>
      <li>Expat Community: ${userProfile.expatCommunity}, Language: ${userProfile.language}</li>
    </ul>
  `;
  document.getElementById("summary-output").innerHTML = summary;
  updateProgress(11);
}
