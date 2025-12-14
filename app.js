const app = document.getElementById("app");

let currentPhase = 1;

const phases = [
  { id: 1, html: `<h2>🌍 Destination</h2>
    <label>Where are you considering moving?</label>
    <select id="destination">
      <option value="">-- Select --</option>
      <option>Portugal</option><option>Spain</option>
      <option>France</option><option>Cyprus</option>
      <option>Thailand</option><option>UAE</option>
    </select>
    <div class="phase-result" id="destination-result"></div>
    <button onclick="nextPhase()">Continue</button>` },

  { id: 2, html: `<h2>🛂 Residency</h2>
    <label>Passport held</label>
    <select id="passport">
      <option value="UK">UK Passport</option>
      <option value="EU">EU Passport</option>
    </select>
    <div class="phase-result" id="residency-result"></div>
    <button onclick="nextPhase()">Continue</button>` },

  { id: 3, html: `<h2>💰 Income & Budget</h2>
    <label>Monthly Income (£)</label>
    <input type="range" min="500" max="5000" value="1500" id="income" oninput="document.getElementById('incomeValue').innerText=this.value">
    <p>£<span id="incomeValue">1500</span>/month</p>
    <label>Budget sensitivity</label>
    <select id="budget">
      <option value="">-- Select --</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
    <div class="phase-result" id="budget-result"></div>
    <button onclick="nextPhase()">Continue</button>` },

  { id: 4, html: `<h2>🏥 Healthcare</h2>
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
    <button onclick="nextPhase()">Continue</button>` },

  { id: 5, html: `<h2>🏠 Housing</h2>
    <label>Rent or Buy?</label>
    <select id="housing-type">
      <option value="">-- Select --</option>
      <option value="rent">Rent</option>
      <option value="buy">Buy</option>
    </select>
    <label>Monthly housing budget (£)</label>
    <input type="range" min="300" max="3000" value="800" id="housing-budget" oninput="document.getElementById('housingValue').innerText=this.value">
    <p>£<span id="housingValue">800</span>/month</p>
    <label>Preferred location style</label>
    <select id="location-style">
      <option value="">-- Select --</option>
      <option value="city">City</option>
      <option value="town">Town</option>
      <option value="rural">Rural</option>
    </select>
    <div class="phase-result" id="housing-result"></div>
    <button onclick="nextPhase()">Continue</button>` },

  { id: 6, html: `<h2>💸 Tax Reality</h2>
    <p>Tax residency, double taxation, reporting obligations.</p>
    <button onclick="nextPhase()">Continue</button>` },

  { id: 7, html: `<h2>🏦 Banking</h2>
    <p>Local vs international banking options.</p>
    <button onclick="nextPhase()">Continue</button>` },

  { id: 8, html: `<h2>📑 Visas</h2>
    <p>Visa types and renewal risks.</p>
    <button onclick="nextPhase()">Continue</button>` },

  { id: 9, html: `<h2>🚗 Transport</h2>
    <p>Driving licences and car imports.</p>
    <button onclick="nextPhase()">Continue</button>` },

  { id: 10, html: `<h2>📦 Moving</h2>
    <p>Shipping, pets, personal items.</p>
    <button onclick="nextPhase()">Continue</button>` },

  { id: 11, html: `<h2>✅ Final Score</h2>
    <p>Your personalised relocation readiness score.</p>` }
];

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
  const percent = (currentPhase / phases.length) * 100;
  document.getElementById("progress-fill").style.width = percent + "%";
}
