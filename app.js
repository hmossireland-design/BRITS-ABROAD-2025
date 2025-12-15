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
          <option>Portugal</option>
          <option>Spain</option>
          <option>France</option>
          <option>Cyprus</option>
          <option>Thailand</option>
          <option>UAE</option>
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
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
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
          <option>Rent</option>
          <option>Buy</option>
        </select>

        <label>Monthly housing budget (£)</label>
        <input type="range" min="300" max="3000" value="800" id="housing-budget"
          oninput="document.getElementById('housingValue').innerText=this.value">
        <p>£<span id="housingValue">800</span>/month</p>

        <label>Preferred location style</label>
        <select id="location-style">
          <option value="">-- Select --</option>
          <option>City</option>
          <option>Town</option>
          <option>Rural</option>
        </select>

        <div class="phase-result" id="housing-result"></div>
        <button onclick="savePhase5()">Continue</button>
      `
    },
    { id: 6, html: `<h2>💸 Tax Reality</h2><p>Tax residency & obligations explained.</p><button onclick="nextPhase()">Continue</button>` },
    { id: 7, html: `<h2>🏦 Banking</h2><p>Local & international banking options.</p><button onclick="nextPhase()">Continue</button>` },
    { id: 8, html: `<h2>📑 Visas</h2><p>Visa types & renewal risks.</p><button onclick="nextPhase()">Continue</button>` },
    { id: 9, html: `<h2>🚗 Transport</h2><p>Driving & car imports.</p><button onclick="nextPhase()">Continue</button>` },
    { id: 10, html: `<h2>📦 Moving</h2><p>Shipping & pets.</p><button onclick="nextPhase()">Continue</button>` },
    { id: 11, html: `<h2>✅ Final Score</h2><p>Your relocation readiness score.</p>` }
  ];

  function renderPhase() {
    const phase = phases[currentPhase - 1];
    const card = document.createElement("div");
    card.className = "phase-card";
    card.id = `phase-${phase.id}`;
    card.innerHTML = phase.html;
    app.appendChild(card);
    updateProgress();
  }

  function updateProgress() {
    document.getElementById("progress-text").innerText =
      `Phase ${currentPhase} of ${phases.length}`;
    document.getElementById("progress-fill").style.width =
      (currentPhase / phases.length) * 100 + "%";
  }

  // 🔓 EXPOSE FUNCTIONS
  window.startApp = function () {
    app.innerHTML = "";
    currentPhase = 1;
    renderPhase();
  };

  window.nextPhase = function () {
    if (currentPhase < phases.length) {
      currentPhase++;
      renderPhase();
      document.getElementById(`phase-${currentPhase}`)
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  window.savePhase1 = function () {
    const val = destination.value;
    if (!val) return alert("Select a destination");
    destination_result.innerHTML = `🌍 Selected: <strong>${val}</strong>`;
    destination_result.style.display = "block";
    nextPhase();
  };

  window.savePhase2 = function () {
    if (!passport.value) return alert("Select passport");
    residency_result.innerHTML =
      passport.value === "UK"
        ? "Post-Brexit rules apply."
        : "EU residency is simpler.";
    residency_result.style.display = "block";
    nextPhase();
  };

  window.savePhase3 = function () {
    if (!budget.value) return alert("Select budget");
    budget_result.innerHTML = `£${income.value}/month — ${budget.value}`;
    budget_result.style.display = "block";
    nextPhase();
  };

  window.savePhase4 = function () {
    healthcare_result.innerHTML =
      health_status.value === "retired" && state_pension.value === "yes"
        ? "S1 healthcare likely."
        : "Private or local insurance required.";
    healthcare_result.style.display = "block";
    nextPhase();
  };

  window.savePhase5 = function () {
    housing_result.innerHTML =
      `You plan to ${housing_type.value} in a ${location_style.value} area.`;
    housing_result.style.display = "block";
    nextPhase();
  };

});
