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
          <option value="Ireland">Ireland</option>
          <option value="Australia">Australia</option>
          <option value="Cyprus">Cyprus</option>
          <option value="Malta">Malta</option>
          <option value="France">France</option>
          <option value="UAE">UAE</option>
          <option value="Thailand">Thailand</option>
          <option value="Italy">Italy</option>
          <option value="Greece">Greece</option>
          <option value="Canada">Canada</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Panama">Panama</option>
          <option value="Mexico">Mexico</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="Hungary">Hungary</option>
          <option value="Poland">Poland</option>
          <option value="Slovenia">Slovenia</option>
          <option value="Slovakia">Slovakia</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Colombia">Colombia</option>
          <option value="Mauritius">Mauritius</option>
          <option value="Belize">Belize</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Chile">Chile</option>
          <option value="Latvia">Latvia</option>
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
    { id: 3, html: `<h2>💰 Income & Budget</h2><p>...your existing content...</p>` },
    { id: 4, html: `<h2>🏥 Healthcare</h2><p>...your existing content...</p>` },
    { id: 5, html: `<h2>🏠 Housing</h2><p>...your existing content...</p>` },
    { id: 6, html: `<h2>💸 Tax Reality</h2><p>...your existing content...</p>` },
    { id: 7, html: `<h2>🏦 Banking</h2><p>...your existing content...</p>` },
    { id: 8, html: `<h2>📑 Visas</h2><p>...your existing content...</p>` },
    { id: 9, html: `<h2>🚗 Transport</h2><p>...your existing content...</p>` },
    { id: 10, html: `<h2>📦 Moving</h2><p>...your existing content...</p>` },
    { id: 11, html: `<h2>✅ Final Score</h2><p>Your personalised relocation readiness score.</p>` }
  ];

  const residencyDataUK = {
    // Paste all 30 countries from my previous message here
  };

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

  window.savePhase1 = function() {
    const dest = document.getElementById("destination").value;
    const box = document.getElementById("destination-result");
    if (!dest) return alert("Please select a destination");
    box.innerHTML = `🌍 You selected <strong>${dest}</strong>`;
    box.style.display = "block";
    nextPhase();
  }

  window.savePhase2 = function() {
    const country = document.getElementById("destination").value;
    const pass = document.getElementById("passport").value;
    const box = document.getElementById("residency-result");

    if (!pass) return alert("Please select passport type");

    if(pass === "UK") {
      const data = residencyDataUK[country];
      if(!data) {
        box.innerHTML = `No residency info available for ${country}`;
      } else {
        box.innerHTML = `
          🛂 Visa/Residency Type: <strong>${data.visa}</strong><br>
          Requirements: <strong>${data.requirements}</strong><br>
          Ease of obtaining residency: <strong>${data.ease}/10</strong><br>
          Benefits: <strong>${data.benefits}</strong><br>
          Risks/Drawbacks: <strong>${data.risks}</strong>
        `;
      }
    } else {
      box.innerHTML = "EU passport selected – easier residency options available.";
    }

    box.style.display = "block";
    nextPhase();
  }

});
