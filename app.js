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
    "Portugal": {
      visa: "D7 (Passive Income)",
      requirements: "€870/mo passive income + savings (€10k+), health insurance, accommodation proof",
      ease: 9,
      benefits: "Low tax on pensions (10%), warm climate, large Brit community, EU access",
      risks: "Rising costs in popular areas, bureaucracy"
    },
    "Spain": {
      visa: "Non-Lucrative Visa",
      requirements: "€2,400/mo income, private health insurance, no work allowed",
      ease: 8,
      benefits: "Sunny lifestyle, excellent healthcare, established expats",
      risks: "High income threshold, no work, regional variations"
    },
    "Ireland": {
      visa: "No visa required (Common Travel Area)",
      requirements: "None – free movement for Brits",
      ease: 10,
      benefits: "English-speaking, close to UK, family ties",
      risks: "High cost of living, weather"
    },
    "Australia": {
      visa: "Parent/Contributory Parent Visa",
      requirements: "Family sponsorship or high contribution (~£30k+), health checks. No retirement visa",
      ease: 4,
      benefits: "English-speaking, high quality life, outdoors",
      risks: "Strict health/age limits, very costly"
    },
    "Cyprus": {
      visa: "Category F/Pink Slip",
      requirements: "Income proof or €300k property, health insurance",
      ease: 7,
      benefits: "Sunny, English spoken, low tax",
      risks: "Island isolation, property market risks"
    },
    "Malta": {
      visa: "Retirement Programme",
      requirements: "€10k/yr income, property rent/buy, health insurance",
      ease: 8,
      benefits: "Warm, English-speaking, low tax on foreign income",
      risks: "Small island, tourism crowds"
    },
    "France": {
      visa: "Long-Stay Visitor",
      requirements: "€1,800/mo income, health insurance",
      ease: 7,
      benefits: "Culture, food, S1 healthcare access",
      risks: "Language barrier, bureaucracy"
    },
    "UAE": {
      visa: "Retirement Visa",
      requirements: "£4,200/mo or property (AED 1M+)",
      ease: 8,
      benefits: "0% tax, luxury, safety",
      risks: "Extreme heat, no PR path, cultural adjustment"
    },
    "Thailand": {
      visa: "Retirement/Elite",
      requirements: "£1,500/mo or £15k one-off, 50+",
      ease: 9,
      benefits: "Affordable tropics, friendly",
      risks: "Visa renewals, political instability"
    },
    "Italy": {
      visa: "Elective Residence",
      requirements: "€31k/yr income, accommodation",
      ease: 6,
      benefits: "Food/history, 7% south tax",
      risks: "Bureaucracy, language"
    },
    "Greece": {
      visa: "Financially Independent (FIP)",
      requirements: "€3,500/mo or Golden Visa (€250k property)",
      ease: 7,
      benefits: "Islands, low cost",
      risks: "Economic uncertainty, bureaucracy"
    },
    "Canada": {
      visa: "No dedicated; family/skilled",
      requirements: "Sponsorship or points system",
      ease: 5,
      benefits: "Safety, nature, English",
      risks: "Cold winters, long waits"
    },
    "New Zealand": {
      visa: "Investment/Family",
      requirements: "High investment or sponsorship",
      ease: 4,
      benefits: "Scenery, safe, English",
      risks: "Isolated, expensive"
    },
    "Malaysia": {
      visa: "MM2H",
      requirements: "$1,500/mo income",
      ease: 8,
      benefits: "Affordable, English, tropical",
      risks: "Political changes to program"
    },
    "Panama": {
      visa: "Pensionado",
      requirements: "$1,000/mo pension",
      ease: 9,
      benefits: "Dollar economy, discounts for seniors",
      risks: "Humidity, infrastructure outside cities"
    },
    "Mexico": {
      visa: "Temporary Resident",
      requirements: "$2,500/mo proof",
      ease: 8,
      benefits: "Affordable, culture",
      risks: "Safety in some areas"
    },
    "Costa Rica": {
      visa: "Pensionado",
      requirements: "$1,000/mo",
      ease: 8,
      benefits: "Nature, lifestyle",
      risks: "Rainy season, infrastructure"
    },
    "Hungary": {
      visa: "Residence Permit",
      requirements: "€1,700/yr proof, health insurance",
      ease: 7,
      benefits: "Affordable, spas, culture",
      risks: "Language, colder winters"
    },
    "Poland": {
      visa: "Temporary Residence",
      requirements: "£160/mo proof",
      ease: 8,
      benefits: "Cheap EU, history",
      risks: "Cold winters, language"
    },
    "Slovenia": {
      visa: "Long-term Residence",
      requirements: "Income proof (~€1,000/mo)",
      ease: 7,
      benefits: "Lakes/mountains, welcoming",
      risks: "Smaller expat community"
    },
    "Slovakia": {
      visa: "Temporary Residence",
      requirements: "~€800/mo proof",
      ease: 8,
      benefits: "Affordable, nature",
      risks: "Language barrier"
    },
    "Bulgaria": {
      visa: "D Visa",
      requirements: "€1,000/mo",
      ease: 8,
      benefits: "Cheapest EU, low taxes",
      risks: "Infrastructure, corruption perception"
    },
    "Indonesia": {
      visa: "Retirement KITAS",
      requirements: "$1,500/mo, 55+",
      ease: 7,
      benefits: "Bali popular, low cost",
      risks: "Visa bureaucracy, earthquakes"
    },
    "Colombia": {
      visa: "Pension Visa",
      requirements: "$900/mo",
      ease: 8,
      benefits: "Affordable, culture",
      risks: "Safety concerns in areas"
    },
    "Mauritius": {
      visa: "Retired Non-Citizen",
      requirements: "$1,500/mo",
      ease: 7,
      benefits: "Island tax perks",
      risks: "Isolated, cyclones"
    },
    "Belize": {
      visa: "QRP",
      requirements: "$2,000/mo, 45+",
      ease: 7,
      benefits: "English, tax-free pension",
      risks: "Hurricanes, small"
    },
    "Ecuador": {
      visa: "Pensioner Visa",
      requirements: "$800/mo",
      ease: 8,
      benefits: "Diverse, cheap",
      risks: "Political instability"
    },
    "Uruguay": {
      visa: "Residency",
      requirements: "Income proof (~$1,500/mo)",
      ease: 7,
      benefits: "Beaches, quality life",
      risks: "Higher costs in region"
    },
    "Chile": {
      visa: "Retirement Visa",
      requirements: "Pension proof",
      ease: 7,
      benefits: "Safe, nature, healthcare",
      risks: "Earthquakes, distance"
    },
    "Latvia": {
      visa: "Temporary Residence (Financial)",
      requirements: "~€1,101/mo passive income, health insurance, accommodation",
      ease: 7,
      benefits: "Affordable Riga, nature",
      risks: "Cold winters, language"
    }
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
