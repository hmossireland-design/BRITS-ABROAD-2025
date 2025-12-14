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
  tax: "",
  banking: "",
  visa: "",
  transport: "",
  moving: ""
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
      <input type="range" min="500" max="5000" step="100" id="income" value="1500" 
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
      <input type="range" min="300" max="3000" step="50" id="housing-budget" value="800"
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
      <h2>💸 Tax Reality</h2>
      <label>Are you concerned about double taxation?</label>
      <select id="tax">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div class="phase-result" id="tax-result"></div>
      <button onclick="savePhase6()">Continue</button>
    `
  },
  {
    id: 7,
    html: `
      <h2>🏦 Banking</h2>
      <label>Do you plan to use local or international banking?</label>
      <select id="banking">
        <option value="">-- Select --</option>
        <option value="local">Local</option>
        <option value="international">International</option>
      </select>
      <div class="phase-result" id="banking-result"></div>
      <button onclick="savePhase7()">Continue</button>
    `
  },
  {
    id: 8,
    html: `
      <h2>📑 Visas</h2>
      <label>Do you require a visa?</label>
      <select id="visa">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div class="phase-result" id="visa-result"></div>
      <button onclick="savePhase8()">Continue</button>
    `
  },
  {
    id: 9,
    html: `
      <h2>🚗 Transport</h2>
      <label>Do you plan to drive abroad?</label>
      <select id="transport">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div class="phase-result" id="transport-result"></div>
      <button onclick="savePhase9()">Continue</button>
    `
  },
  {
    id: 10,
    html: `
      <h2>📦 Moving & Logistics</h2>
      <label>Do you need to ship personal items?</label>
      <select id="moving">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div class="phase-result" id="moving-result"></div>
      <button onclick="savePhase10()">Continue</button>
    `
  },
  {
    id: 11,
    html: `
      <h2>✅ Final Score</h2>
      <p>Your personalised relocation readiness score will be calculated based on your selections.</p>
    `
  }
];

/* APP CONTAINER */
const container = document.getElementById("phases-container");

/* RENDER ALL PHASES */
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
  updateProgress(1);
}

/* PROGRESS BAR */
function updateProgress(phaseNumber) {
  const current = phaseNumber || document.querySelector(".phase-card:target")?.id?.split("-")[1] || 1;
  const percent = (current / phases.length) * 100;
  document.getElementById("progress-fill").style.width = percent + "%";
  document.getElementById("progress-text").innerText = `Phase ${current} of ${phases.length}`;
}

/* PHASE SAVE FUNCTIONS */
function savePhase1() {
  const dest = document.getElementById("destination").value;
  if (!dest) return alert("Please select a destination");
  userProfile.destination = dest;
  document.getElementById("destination-result").innerHTML = `Selected: <strong>${dest}</strong>`;
  updateProgress(1);
  document.getElementById("phase-2").scrollIntoView({ behavior: "smooth" });
}

function savePhase2() {
  const pass = document.getElementById("passport").value;
  const work = document.getElementById("work").value;
  if (!pass || !work) return alert("Please answer both questions");
  userProfile.passport = pass;
  userProfile.work = work;
  document.getElementById("rights-result").innerHTML = `Passport: ${pass}, Work: ${work}`;
  updateProgress(2);
  document.getElementById("phase-3").scrollIntoView({ behavior: "smooth" });
}

function savePhase3() {
  const income = document.getElementById("income").value;
  const budget = document.getElementById("budget").value;
  if (!income || !budget) return alert("Please enter income and budget");
  userProfile.monthlyIncome = income;
  userProfile.budgetLevel = budget;
  document.getElementById("budget-result").innerHTML = `Income: £${income}, Budget: ${budget}`;
  updateProgress(3);
  document.getElementById("phase-4").scrollIntoView({ behavior: "smooth" });
}

function savePhase4() {
  const hs = document.getElementById("health-status").value;
  const sp = document.getElementById("state-pension").value;
  if (!hs || !sp) return alert("Please answer both healthcare questions");
  userProfile.healthStatus = hs;
  userProfile.statePension = sp;
  let msg = hs==="retired" && sp==="yes" ? "Eligible for S1 form" : "Check local/private healthcare";
  document.getElementById("healthcare-result").innerHTML = msg;
  updateProgress(4);
  document.getElementById("phase-5").scrollIntoView({ behavior: "smooth" });
}

function savePhase5() {
  const ht = document.getElementById("housing-type").value;
  const hb = document.getElementById("housing-budget").value;
  const ls = document.getElementById("location-style").value;
  if (!ht || !hb || !ls) return alert("Please answer all housing questions");
  userProfile.housingType = ht;
  userProfile.housingBudget = hb;
  userProfile.locationStyle = ls;
  document.getElementById("housing-result").innerHTML = `Type: ${ht}, Budget: £${hb}, Style: ${ls}`;
  updateProgress(5);
  document.getElementById("phase-6").scrollIntoView({ behavior: "smooth" });
}

function savePhase6() {
  const tax = document.getElementById("tax").value;
  if (!tax) return alert("Please select your tax option");
  userProfile.tax = tax;
  document.getElementById("tax-result").innerHTML = `Tax concern: ${tax}`;
  updateProgress(6);
  document.getElementById("phase-7").scrollIntoView({ behavior: "smooth" });
}

function savePhase7() {
  const bank = document.getElementById("banking").value;
  if (!bank) return alert("Please select banking option");
  userProfile.banking = bank;
  document.getElementById("banking-result").innerHTML = `Banking: ${bank}`;
  updateProgress(7);
  document.getElementById("phase-8").scrollIntoView({ behavior: "smooth" });
}

function savePhase8() {
  const visa = document.getElementById("visa").value;
  if (!visa) return alert("Please select visa option");
  userProfile.visa = visa;
  document.getElementById("visa-result").innerHTML = `Visa required: ${visa}`;
  updateProgress(8);
  document.getElementById("phase-9").scrollIntoView({ behavior: "smooth" });
}

function savePhase9() {
  const transport = document.getElementById("transport").value;
  if (!transport) return alert("Please select transport option");
  userProfile.transport = transport;
  document.getElementById("transport-result").innerHTML = `Transport: ${transport}`;
  updateProgress(9);
  document.getElementById("phase-10").scrollIntoView({ behavior: "smooth" });
}

function savePhase10() {
  const moving = document.getElementById("moving").value;
  if (!moving) return alert("Please select moving option");
  userProfile.moving = moving;
  document.getElementById("moving-result").innerHTML = `Moving: ${moving}`;
  updateProgress(10);
  document.getElementById("phase-11").scrollIntoView({ behavior: "smooth" });
}

function savePhase11() {
  updateProgress(11);
  alert("App complete! Check your results.");
}
