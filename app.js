document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const startBtn = document.getElementById("start-btn");

  let currentPhase = 0;

  // Top 30 countries list
  const countries = [
    "Portugal","Spain","Ireland","Australia","Cyprus","Malta","France","UAE","Thailand","Italy",
    "Greece","Canada","New Zealand","Malaysia","Panama","Mexico","Costa Rica","Hungary","Poland",
    "Slovenia","Slovakia","Bulgaria","Indonesia","Colombia","Mauritius","Belize","Ecuador","Uruguay",
    "Chile","Latvia"
  ];

  // Phases
  const phases = [
    {
      id: 1,
      html: `
        <h2>🌍 Destination</h2>
        <label>Where are you considering moving?</label>
        <select id="destination">
          <option value="">-- Select --</option>
          ${countries.map(c => `<option value="${c}">${c}</option>`).join('')}
        </select>
        <div class="phase-result" id="destination-result"></div>
        <button id="savePhase1">Continue</button>
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
        <button id="savePhase2">Continue</button>
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
        <button id="savePhase3">Continue</button>
      `
    },
    { id: 4, html: `<h2>🏥 Healthcare</h2><p>Phase 4 content here.</p><button class="next-phase">Continue</button>` },
    { id: 5, html: `<h2>🏠 Housing</h2><p>Phase 5 content here.</p><button class="next-phase">Continue</button>` },
    { id: 6, html: `<h2>💸 Tax Reality</h2><p>Phase 6 content here.</p><button class="next-phase">Continue</button>` },
    { id: 7, html: `<h2>🏦 Banking</h2><p>Phase 7 content here.</p><button class="next-phase">Continue</button>` },
    { id: 8, html: `<h2>📑 Visas</h2><p>Phase 8 content here.</p><button class="next-phase">Continue</button>` },
    { id: 9, html: `<h2>🚗 Transport</h2><p>Phase 9 content here.</p><button class="next-phase">Continue</button>` },
    { id: 10, html: `<h2>📦 Moving</h2><p>Phase 10 content here.</p><button class="next-phase">Continue</button>` },
    { id: 11, html: `<h2>✅ Final Score</h2><p>Your personalised relocation readiness score.</p>` }
  ];

  // =================== START APP ===================
  startBtn.addEventListener("click", () => {
    currentPhase = 1;
    renderPhase();
  });

  function renderPhase() {
    app.innerHTML = "";
    const phase = phases[currentPhase - 1];
    const card = document.createElement("div");
    card.className = "phase-card";
    card.id = `phase-${phase.id}`;
    card.innerHTML = phase.html;
    app.appendChild(card);
    updateProgress();

    // Bind phase-specific buttons
    if(currentPhase === 1) document.getElementById("savePhase1").addEventListener("click", savePhase1);
    if(currentPhase === 2) document.getElementById("savePhase2").addEventListener("click", savePhase2);
    if(currentPhase === 3) document.getElementById("savePhase3").addEventListener("click", savePhase3);

    // Generic next-phase buttons
    const nextBtns = card.querySelectorAll(".next-phase");
    nextBtns.forEach(btn => btn.addEventListener("click", nextPhase));
  }

  function nextPhase() {
    if(currentPhase < phases.length){
      currentPhase++;
      renderPhase();
      const el = document.getElementById(`phase-${currentPhase}`);
      if(el) el.scrollIntoView({ behavior: "smooth" });
    }
  }

  function updateProgress() {
    document.getElementById("progress-text").innerText = `Phase ${currentPhase} of ${phases.length}`;
    const percent = (currentPhase / phases.length) * 100;
    document.getElementById("progress-fill").style.width = percent + "%";
  }

  // =================== PHASE 1 SAVE ===================
  function savePhase1(){
    const dest = document.getElementById("destination").value;
    const box = document.getElementById("destination-result");
    if(!dest) return alert("Please select a destination");
    box.innerHTML = `🌍 You selected <strong>${dest}</strong>`;
    box.style.display = "block";
    nextPhase();
  }

  // =================== PHASE 2 SAVE ===================
  function savePhase2(){
    const pass = document.getElementById("passport").value;
    const box = document.getElementById("residency-result");
    if(!pass) return alert("Please select passport type");
    box.innerHTML = pass === "UK"
      ? `🛂 With a UK passport, post-Brexit considerations apply.`
      : `🛂 With an EU passport, easier residency options available.`;
    box.style.display = "block";
    nextPhase();
  }

  // =================== PHASE 3 SAVE ===================
  function savePhase3(){
    const income = document.getElementById("income").value;
    const budget = document.getElementById("budget").value;
    const box = document.getElementById("budget-result");
    if(!income || !budget) return alert("Please set both income and budget");
    box.innerHTML = `💰 You earn £${income}/month with a <strong>${budget}</strong> budget sensitivity.`;
    box.style.display = "block";
    nextPhase();
  }

});
