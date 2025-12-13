// ===============================
// PHASE DATA
// ===============================

const phases = [
  {
    title: "Phase 1 – Destination Planner",
    content: `
      <label>Choose Country</label>
      <select>
        <option>Portugal</option>
        <option>Spain</option>
        <option>Cyprus</option>
        <option>France</option>
        <option>Italy</option>
        <option>Greece</option>
        <option>Thailand</option>
        <option>UAE</option>
      </select>
    `
  },
  {
    title: "Phase 2 – Budget & Cost of Living",
    content: `
      <label>Monthly Budget (£)</label>
      <input type="range" min="500" max="5000" value="2000"
        oninput="this.nextElementSibling.innerText = '£' + this.value">
      <div>£2000</div>
    `
  },
  {
    title: "Phase 3 – Income & Pension",
    content: `
      <label>Annual Pension (£)</label>
      <input type="range" min="0" max="60000" value="25000"
        oninput="this.nextElementSibling.innerText = '£' + this.value">
      <div>£25000</div>
    `
  },
  {
    title: "Phase 4 – Work Rights",
    content: `
      <p>EU vs Non-EU work permissions explained.</p>
      <p><strong>EU:</strong> Limited post-Brexit</p>
      <p><strong>Non-EU:</strong> Visa dependent</p>
    `
  },
  {
    title: "Phase 5 – Healthcare Planning",
    content: `
      <p>S1, GHIC & private insurance overview.</p>
    `
  },
  {
    title: "Phase 6 – Housing & Rentals",
    content: `
      <p>Typical rents, deposits & buying rules.</p>
    `
  },
  {
    title: "Phase 7 – Banking & Transfers",
    content: `
      <p>UK vs EU accounts, Wise, Revolut, IBAN.</p>
    `
  },
  {
    title: "Phase 8 – Family & Pets",
    content: `
      <p>Schooling, pet relocation, vaccinations.</p>
    `
  },
  {
    title: "Phase 9 – Moving Checklist",
    content: `
      <ul>
        <li>Cancel UK utilities</li>
        <li>Notify HMRC</li>
        <li>Register abroad</li>
      </ul>
    `
  },
  {
    title: "Phase 10 – Company Formation",
    content: `
      <p>Cyprus, UAE & EU structures overview.</p>
    `
  },
  {
    title: "Phase 11 – Retirement Strategy",
    content: `
      <p>State pension, taxation & residency planning.</p>
    `
  }
];

// ===============================
// RENDER PHASES
// ===============================

const container = document.getElementById("phases-container");

phases.forEach(phase => {
  const card = document.createElement("section");
  card.className = "phase-card";
  card.innerHTML = `
    <h2>${phase.title}</h2>
    ${phase.content}
  `;
  container.appendChild(card);
});

// ===============================
// START BUTTON SCROLL
// ===============================

function startApp() {
  document
  .getElementById("app-start")
  .scrollIntoView({ behavior: "smooth" });
}

// ===============================
// AI PLACEHOLDER
// ===============================

function getAIAdvice() {
  document.getElementById("ai-output").innerText =
    "Based on your inputs, Portugal and Cyprus offer the best tax efficiency and lifestyle balance for 2025.";
}
// ===============================
// START BUTTON CLICK (MOBILE SAFE)
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("startBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      document
        .getElementById("phases-container")
        .scrollIntoView({ behavior: "smooth" });
    });
  }
});
