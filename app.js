const app = document.getElementById("app");
let currentPhase = 1;

const phases = [
  {
    id: 1,
    html: `
      <h2>🌍 Destination</h2>
      <label>Where are you considering moving?</label>
      <select id="destination">
        <option value="">-- Select --</option>
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
      <h2>🛂 Residency</h2>
      <label>Passport held</label>
      <select id="passport">
        <option value="">-- Select --</option>
        <option value="UK">UK Passport</option>
        <option value="EU">EU Passport</option>
      </select>
      <div class="phase-result" id="residency-result"></div>
      <button onclick="savePhase2()">Continue</button>
    `
  },
  {
    id: 3,
    html: `
      <h2>💰 Income & Budget</h2>
      <label>Monthly Income (£)</label>
      <input type="range" min="500" max="5000" value="1500" id="income"
        oninput="document.getElementById('incomeValue').innerText=this.value">
      <p>£<span id="incomeValue">1500</span>/month</p>

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
      <h2>🏥 Healthcare</h2>
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
      <h2>🏠 Housing</h2>
      <label>Rent or Buy?</label>
      <select id="housing-type">
        <option value="">-- Select --</option>
        <option value="rent">Rent</option>
        <option value="buy">Buy</option>
      </select>

      <label>Monthly housing budget (£)</label>
      <input type="range" min="300" max="3000" value="800" id="housing-budget"
        oninput="document.getElementById('housingValue').innerText=this.value">
      <p>£<span id="housingValue">800</span>/month</p>

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
      <label>Will you be a tax resident in your destination?</label>
      <select id="tax-residency">
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
      <label>Do you want a local or international bank?</label>
      <select id="bank-choice">
        <option value="">-- Select --</option>
        <option value="local">Local Bank</option>
        <option value="international">International Bank</option>
      </select>
      <div class="phase-result" id="bank-result"></div>
      <button onclick="savePhase7()">Continue</button>
    `
  },
  {
    id: 8,
    html: `
      <h2>📑 Visas</h2>
      <label>Do you need a visa?</label>
      <select id="visa-need">
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
      <label>Do you plan to bring a car?</label>
      <select id="transport-choice">
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
      <h2>📦 Moving</h2>
      <label>Do you have pets or large shipments?</label>
      <select id="moving-choice">
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
      <p>Your personalised relocation readiness score will be calculated.</p>
    `
  }
];

// ========== RENDER & PROGRESS ==========
function startApp() {
  app.innerHTML = "";
  currentPhase = 1;
  renderPhase();
}

function renderPhase() {
  const phase = phases[currentPhase - 1];
  const card = document.createElement("div");
  card.className = "phase-card";
  card.id = `phase-${phase.id}`;
  card.innerHTML = phase.html;
  app.appendChild(card);
  updateProgress();
}

function nextPhase() {
  if (currentPhase < phases.length) {
    currentPhase++;
    renderPhase();
    document.getElementById(`phase-${currentPhase}`).scrollIntoView({ behavior: "smooth" });
  }
}

function updateProgress() {
  document.getElementById("progress-text").innerText = `Phase ${currentPhase} of ${phases.length}`;
  document.getElementById("progress-fill").style.width = (currentPhase / phases.length * 100) + "%";
}

// ========== SAVE PHASE FUNCTIONS ==========
window.savePhase1 = function() {
  const val = document.getElementById("destination").value;
  if(!val) return alert("Please select a destination");
  document.getElementById("destination-result").innerHTML = `🌍 You chose <strong>${val}</strong>`;
  document.getElementById("destination-result").style.display = "block";
  nextPhase();
}

window.savePhase2 = function() {
  const val = document.getElementById("passport").value;
  if(!val) return alert("Select passport");
  const msg = val === "UK" ? "🛂 UK passport: post-Brexit considerations." : "🛂 EU passport: easier residency.";
  const box = document.getElementById("residency-result");
  box.innerHTML = msg;
  box.style.display = "block";
  nextPhase();
}

window.savePhase3 = function() {
  const income = document.getElementById("income").value;
  const budget = document.getElementById("budget").value;
  if(!income || !budget) return alert("Set income and budget");
  const box = document.getElementById("budget-result");
  box.innerHTML = `💰 £${income}/month, <strong>${budget}</strong> budget sensitivity`;
  box.style.display = "block";
  nextPhase();
}

window.savePhase4 = function() {
  const health = document.getElementById("health-status").value;
  const pension = document.getElementById("state-pension").value;
  if(!health || !pension) return alert("Answer both questions");
  const box = document.getElementById("healthcare-result");
  let msg = "";
  if(health === "retired" && pension === "yes") msg = "✅ Eligible for S1 EU healthcare.";
  else if(health === "working") msg = "💼 Need local contributions or private insurance.";
  else msg = "🏥 Private health insurance may be required.";
  box.innerHTML = msg;
  box.style.display = "block";
  nextPhase();
}

window.savePhase5 = function() {
  const type = document.getElementById("housing-type").value;
  const budget = document.getElementById("housing-budget").value;
  const loc = document.getElementById("location-style").value;
  if(!type || !budget || !loc) return alert("Complete all housing questions");
  const box = document.getElementById("housing-result");
  box.innerHTML = `🏠 ${type} with £${budget}/month in <strong>${loc}</strong> area.`;
  box.style.display = "block";
  nextPhase();
}

// PHASES 6-10
window.savePhase6 = function() {
  const val = document.getElementById("tax-residency").value;
  if(!val) return alert("Select tax residency");
  const box = document.getElementById("tax-result");
  box.innerHTML = val === "yes" ? "💸 You will be tax resident." : "💸 You may remain non-resident.";
  box.style.display = "block";
  nextPhase();
}

window.savePhase7 = function() {
  const val = document.getElementById("bank-choice").value;
  if(!val) return alert("Select bank type");
  const box = document.getElementById("bank-result");
  box.innerHTML = val === "local" ? "🏦 Choose local bank options." : "🏦 International bank recommended.";
  box.style.display = "block";
  nextPhase();
}

window.savePhase8 = function() {
  const val = document.getElementById("visa-need").value;
  if(!val) return alert("Select visa option");
  const box = document.getElementById("visa-result");
  box.innerHTML = val === "yes" ? "📑 You will need a visa." : "📑 No visa required.";
  box.style.display = "block";
  nextPhase();
}

window.savePhase9 = function() {
  const val = document.getElementById("transport-choice").value;
  if(!val) return alert("Select transport option");
  const box = document.getElementById("transport-result");
  box.innerHTML = val === "yes" ? "🚗 You plan to bring a car." : "🚗 No car planned.";
  box.style.display = "block";
  nextPhase();
}

window.savePhase10 = function() {
  const val = document.getElementById("moving-choice").value;
  if(!val) return alert("Select moving option");
  const box = document.getElementById("moving-result");
  box.innerHTML = val === "yes" ? "📦 Prepare for pets and shipments." : "📦 Standard move planned.";
  box.style.display = "block";
  nextPhase();
}
