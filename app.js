document.addEventListener("DOMContentLoaded", () => {

  const app = document.getElementById("app");
  let currentPhase = 1;

  /* =========================
     PHASE DEFINITIONS
  ========================= */
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
      html: `<h2>💸 Tax Reality</h2><p>Understand tax residency and reporting obligations.</p><button onclick="nextPhase()">Continue</button>`
    },
    {
      id: 7,
      html: `<h2>🏦 Banking</h2><p>Local vs international banking options.</p><button onclick="nextPhase()">Continue</button>`
    },
    {
      id: 8,
      html: `<h2>📑 Visas</h2><p>Visa types and renewal risks.</p><button onclick="nextPhase()">Continue</button>`
    },
    {
      id: 9,
      html: `<h2>🚗 Transport</h2><p>Driving licences and car imports.</p><button onclick="nextPhase()">Continue</button>`
    },
    {
      id: 10,
      html: `<h2>📦 Moving</h2><p>Shipping, pets, personal items.</p><button onclick="nextPhase()">Continue</button>`
    },
    {
      id: 11,
      html: `<h2>✅ Final Score</h2><p>Your personalised relocation readiness summary.</p>`
    }
  ];

  /* =========================
     CORE RENDERING
  ========================= */
  function renderPhase() {
    const phase = phases[currentPhase - 1];
    const card = document.createElement("div");
    card.className = "phase-card";
    card.id = `phase-${phase.id}`;
    card.innerHTML = phase.html;
    app.appendChild(card);
    updateProgress();
  }

  window.nextPhase = function () {
    if (currentPhase < phases.length) {
      currentPhase++;
      renderPhase();
      document.getElementById(`phase-${currentPhase}`)
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  function updateProgress() {
    document.getElementById("progress-text").innerText =
      `Phase ${currentPhase} of ${phases.length}`;
    document.getElementById("progress-fill").style.width =
      (currentPhase / phases.length) * 100 + "%";
  }

  /* =========================
     START BUTTON (FIXED)
  ========================= */
  window.startApp = function () {
    app.innerHTML = "";
    currentPhase = 1;
    renderPhase();
  };

  /* =========================
     SAVE PHASE FUNCTIONS
  ========================= */
  window.savePhase1 = function () {
    const v = destination.value;
    if (!v) return alert("Select a destination");
    destination-result?.style?.display;
    document.getElementById("destination-result").innerHTML = `🌍 ${v}`;
    document.getElementById("destination-result").style.display = "block";
    nextPhase();
  };

  window.savePhase2 = function () {
    if (!passport.value) return alert("Select passport");
    document.getElementById("residency-result").innerHTML =
      passport.value === "UK"
        ? "🛂 Post-Brexit rules apply"
        : "🛂 EU freedom of movement";
    document.getElementById("residency-result").style.display = "block";
    nextPhase();
  };

  window.savePhase3 = function () {
    if (!budget.value) return alert("Select budget sensitivity");
    document.getElementById("budget-result").innerHTML =
      `💰 £${income.value}/month — ${budget.value}`;
    document.getElementById("budget-result").style.display = "block";
    nextPhase();
  };

  window.savePhase4 = function () {
    if (!health-status?.value || !state-pension?.value)
      return alert("Complete healthcare questions");
    document.getElementById("healthcare-result").innerHTML = "🏥 Healthcare assessed";
    document.getElementById("healthcare-result").style.display = "block";
    nextPhase();
  };

  window.savePhase5 = function () {
    if (!housing-type?.value || !location-style?.value)
      return alert("Complete housing questions");
    document.getElementById("housing-result").innerHTML = "🏠 Housing preferences saved";
    document.getElementById("housing-result").style.display = "block";
    nextPhase();
  };

});
