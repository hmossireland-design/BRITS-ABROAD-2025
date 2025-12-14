const app = document.getElementById("app");

let currentPhase = 1;

const phases = [
  { id: 1, html: `<h2>🌍 Destination</h2>
    <select id="destination">
      <option value="">-- Select --</option>
      <option>Portugal</option><option>Spain</option>
      <option>France</option><option>Cyprus</option>
      <option>Thailand</option><option>UAE</option>
    </select>
    <button onclick="nextPhase()">Continue</button>` },

  { id: 2, html: `<h2>🛂 Residency</h2>
    <select><option>UK Passport</option><option>EU Passport</option></select>
    <button onclick="nextPhase()">Continue</button>` },

  { id: 3, html: `<h2>💰 Income</h2>
    <input type="range" min="500" max="5000" value="1500">
    <button onclick="nextPhase()">Continue</button>` },

  { id: 4, html: `<h2>🏥 Healthcare</h2>
    <select><option>Working</option><option>Retired</option></select>
    <button onclick="nextPhase()">Continue</button>` },

  { id: 5, html: `<h2>🏠 Housing</h2>
    <select><option>Rent</option><option>Buy</option></select>
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
  document.getElementById("progress-fill").style.width =
    (currentPhase / phases.length) * 100 + "%";
}
