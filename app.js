/*************************************************
 BRITS ABROAD 2025 – COMPLETE APP LOGIC
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
  shipping: "",
  schooling: "",
  bankAccount: "",
  insurance: "",
  checklistComplete: false
};

/* =========================
   PHASE DEFINITIONS
========================= */
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
      <input type="range" min="500" max="5000" step="100"
        id="income" value="1500"
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
      <input type="range" min="300" max="3000" step="50"
        id="housing-budget" value="800"
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
      <h2>📦 Moving & Shipping</h2>
      <label>Do you need to ship belongings?</label>
      <select id="shipping">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div class="phase-result" id="shipping-result"></div>
      <button onclick="savePhase6()">Continue</button>
    `
  },
  {
    id: 7,
    html: `
      <h2>🏫 Schooling & Education</h2>
      <label>Do you need school options for children?</label>
      <select id="schooling">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div class="phase-result" id="schooling-result"></div>
      <button onclick="savePhase7()">Continue</button>
    `
  },
  {
    id: 8,
    html: `
      <h2>🏦 Banking & Finance</h2>
      <label>Do you need a local bank account?</label>
      <select id="bank-account">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div class="phase-result" id="bank-result"></div>
      <button onclick="savePhase8()">Continue</button>
    `
  },
  {
    id: 9,
    html: `
      <h2>🛡️ Insurance</h2>
      <label>Do you need health/travel insurance?</label>
      <select id="insurance">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div class="phase-result" id="insurance-result"></div>
      <button onclick="savePhase9()">Continue</button>
    `
  },
  {
    id: 10,
    html: `
      <h2>✅ Final Checklist</h2>
      <p>Have you completed all required tasks?</p>
      <select id="checklist">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <div class="phase-result" id="checklist-result"></div>
      <button onclick="savePhase10()">Continue</button>
    `
  },
  {
    id: 11,
    html: `
      <h2>🎉 Congratulations!</h2>
      <p>You have completed the Brits Abroad 2025 relocation plan.</p>
    `
  }
];

/* =========================
   RENDER PHASES
========================= */
const container = document.getElementById("phases-container");
phases.forEach(phase => {
  const card = document.createElement("section");
  card.className = "phase-card";
  card.id = `phase-${phase.id}`;
  card.innerHTML = phase.html;
  container.appendChild(card);
});

/* =========================
   APP FUNCTIONS
========================= */
function startApp() {
  document.getElementById("phase-1").scrollIntoView({ behavior: "smooth" });
}

/* PROGRESS BAR */
function updateProgress(phaseNumber) {
  const percent = (phaseNumber / 11) * 100;
  document.getElementById("progress-fill").style.width = percent + "%";
  document.getElementById("progress-text").innerText = `Phase ${phaseNumber} of 11`;
}

/* =========================
   SAVE PHASE FUNCTIONS
========================= */

function savePhase1() {
  const dest = document.getElementById("destination").value;
  if (!dest) return alert("Please select a destination");
  userProfile.destination = dest;
  document.getElementById("destination-result").innerText = `✅ Selected: ${dest}`;
  updateProgress(1);
  const nextPhase = document.getElementById("phase-2");
  if (nextPhase) nextPhase.scrollIntoView({ behavior: "smooth" });
}

function savePhase2() {
  const passport = document.getElementById("passport").value;
  const work = document.getElementById("work").value;
  if (!passport || !work) return alert("Please complete all selections");
  userProfile.passport = passport;
  userProfile.work = work;
  document.getElementById("rights-result").innerText = `✅ Passport: ${passport}, Work: ${work}`;
  updateProgress(2);
  const nextPhase = document.getElementById("phase-3");
  if (nextPhase) nextPhase.scrollIntoView({ behavior: "smooth" });
}

function savePhase3() {
  const income = document.getElementById("income").value;
  const budget = document.getElementById("budget").value;
  if (!income || !budget) return alert("Please complete all selections");
  userProfile.monthlyIncome = income;
  userProfile.budgetLevel = budget;
  document.getElementById("budget-result").innerText = `✅ Income: £${income}, Budget: ${budget}`;
  updateProgress(3);
  const nextPhase = document.getElementById("phase-4");
  if (nextPhase) nextPhase.scrollIntoView({ behavior: "smooth" });
}

function savePhase4() {
  const health = document.getElementById("health-status").value;
  const pension = document.getElementById("state-pension").value;
  if (!health || !pension) return alert("Please complete all selections");
  userProfile.healthStatus = health;
  userProfile.statePension = pension;
  let message = "";
  if (health === "retired" && pension === "yes") {
    message = "✅ Likely eligible for S1 form coverage.";
  } else if (health === "working") {
    message = "💼 May need local healthcare contributions or private insurance.";
  } else {
    message = "🏥 Consider private insurance.";
  }
  document.getElementById("healthcare-result").innerHTML = message;
  updateProgress(4);
  const nextPhase = document.getElementById("phase-5");
  if (nextPhase) nextPhase.scrollIntoView({ behavior: "smooth" });
}

function savePhase5() {
  const type = document.getElementById("housing-type").value;
  const budget = document.getElementById("housing-budget").value;
  const style = document.getElementById("location-style").value;
  if (!type || !budget || !style) return alert("Please complete all selections");
  userProfile.housingType = type;
  userProfile.housingBudget = budget;
  userProfile.locationStyle = style;
  document.getElementById("housing-result").innerText = `✅ Housing: ${type}, Budget: £${budget}, Location: ${style}`;
  updateProgress(5);
  const nextPhase = document.getElementById("phase-6");
  if (nextPhase) nextPhase.scrollIntoView({ behavior: "smooth" });
}

function savePhase6() {
  const shipping = document.getElementById("shipping").value;
  if (!shipping) return alert("Please select an option");
  userProfile.shipping = shipping;
  document.getElementById("shipping-result").innerText = shipping === "yes" ? "✅ Shipping required" : "✅ No shipping required";
  updateProgress(6);
  const nextPhase = document.getElementById("phase-7");
  if (nextPhase) nextPhase.scrollIntoView({ behavior: "smooth" });
}

function savePhase7() {
  const schooling = document.getElementById("schooling").value;
  if (!schooling) return alert("Please select an option");
  userProfile.schooling = schooling;
  document.getElementById("schooling-result").innerText = schooling === "yes" ? "✅ Schooling needed" : "✅ No schooling needed";
  updateProgress(7);
  const nextPhase = document.getElementById("phase-8");
  if (nextPhase) nextPhase.scrollIntoView({ behavior: "smooth" });
}

function savePhase8() {
  const bank = document.getElementById("bank-account").value;
  if (!bank) return alert("Please select an option");
  userProfile.bankAccount = bank;
  document.getElementById("bank-result").innerText = bank === "yes" ? "✅ Open a local bank account" : "✅ No bank account needed";
  updateProgress(8);
  const nextPhase = document.getElementById("phase-9");
  if (nextPhase) nextPhase.scrollIntoView({ behavior: "smooth" });
}

function savePhase9() {
  const insurance = document.getElementById("insurance").value;
  if (!insurance) return alert("Please select an option");
  userProfile.insurance = insurance;
  document.getElementById("insurance-result").innerText = insurance === "yes" ? "✅ Insurance needed" : "✅ No insurance needed";
  updateProgress(9);
  const nextPhase = document.getElementById("phase-10");
  if (nextPhase) nextPhase.scrollIntoView({ behavior: "smooth" });
}

function savePhase10() {
  const checklist = document.getElementById("checklist").value;
  if (!checklist) return alert("Please select an option");
  userProfile.checklistComplete = checklist === "yes";
  document.getElementById("checklist-result").innerText = checklist === "yes" ? "✅ Checklist completed" : "⚠ Checklist not completed";
  updateProgress(10);
  const nextPhase = document.getElementById("phase-11");
  if (nextPhase) nextPhase.scrollIntoView({ behavior: "smooth" });
}

/* =========================
   AI ADVICE (Placeholder)
========================= */
function getAIAdvice() {
  document.getElementById("ai-output").innerText = "💡 AI advice feature coming soon!";
}
/* =========================
   PHASE CARD SCROLL ANIMATION
========================= */
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".phase-card").forEach(card => {
  observer.observe(card);
});
