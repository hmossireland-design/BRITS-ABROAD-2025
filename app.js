document.addEventListener("DOMContentLoaded", () => {
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
    { id: 6, html: `<h2>💸 Tax Reality</h2><p>Understand tax residency, double taxation, and reporting obligations.</p><button onclick="nextPhase()">Continue</button>` },
    { id: 7, html: `<h2>🏦 Banking</h2><p>Local vs international banking options explained.</p><button onclick="nextPhase()">Continue</button>` },
    { id: 8, html: `<h2>📑 Visas</h2><p>Visa types and renewal risks overview.</p><button onclick="nextPhase()">Continue</button>` },
    { id: 9, html: `<h2>🚗 Transport</h2><p>Driving licences, car imports, and local transport info.</p><button onclick="nextPhase()">Continue</button>` },
    { id: 10, html: `<h2>📦 Moving</h2><p>Shipping, pets, personal items guidance.</p><button onclick="nextPhase()">Continue</button>` },
    { id: 11, html: `<h2>✅ Final Score</h2><p>Your personalised relocation readiness score.</p>` }
  ];

  // ========= RENDER & PROGRESS =========
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
      const el = document.getElementById(`phase-${currentPhase}`);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }

  function updateProgress() {
    document.getElementById("progress-text").innerText = `Phase ${currentPhase} of ${phases.length}`;
    const percent = (currentPhase / phases.length) * 100;
    document.getElementById("progress-fill").style.width = percent + "%";
  }

  // ========= SAVE PHASE FUNCTIONS =========
  window.savePhase1 = function() {
    const dest = document.getElementById("destination").value;
    const box = document.getElementById("destination-result");
    if (!dest) return alert("Please select a destination");
    box.innerHTML = `🌍 You selected <strong>${dest}</strong>`;
    box.style.display = "block";
    nextPhase();
  }

  window.savePhase2 = function() {
    const pass = document.getElementById("passport").value;
    const box = document.getElementById("residency-result");
    if (!pass) return alert("Please select passport type");
    box.innerHTML = pass === "UK"
      ? `🛂 With a UK passport, post-Brexit considerations apply.`
      : `🛂 With an EU passport, easier residency options are available.`;
    box.style.display = "block";
    nextPhase();
  }

  window.savePhase3 = function() {
    const income = document.getElementById("income").value;
    const budget = document.getElementById("budget").value;
    const box = document.getElementById("budget-result");
    if (!income || !budget) return alert("Please set both income and budget");
    box.innerHTML = `💰 You earn £${income}/month with a <strong>${budget}</strong> budget sensitivity.`;
    box.style.display = "block";
    nextPhase();
  }

  window.savePhase4 = function() {
    const health = document.getElementById("health-status").value;
    const pension = document.getElementById("state-pension").value;
    const box = document.getElementById("healthcare-result");
    if (!health || !pension) return alert("Please answer both healthcare questions");

    let msg = "";
    if (health === "retired" && pension === "yes") {
      msg = `✅ Likely eligible for an <strong>S1 form</strong> for EU healthcare.`;
    } else if (health === "working") {
      msg = `💼 You will normally need local contributions or private insurance.`;
    } else {
      msg = `🏥 You may need private health insurance initially.`;
    }

    box.innerHTML = msg;
    box.style.display = "block";
    nextPhase();
  }

  window.savePhase5 = function() {
    const type = document.getElementById("housing-type").value;
    const budget = document.getElementById("housing-budget").value;
    const loc = document.getElementById("location-style").value;
    const box = document.getElementById("housing-result");
    if (!type || !budget || !loc) return alert("Please complete all housing questions");
    box.innerHTML = `🏠 You plan to <strong>${type}</strong> with a budget of £${budget}/month in a <strong>${loc}</strong> location.`;
    box.style.display = "block";
    nextPhase();
  }
});
