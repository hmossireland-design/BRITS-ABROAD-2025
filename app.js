// ======================
// Brits Abroad 2025 - app.js
// ======================

// Phase data
const phases = [
  {
    title: "Phase 1: Work Rights Comparator",
    description: "Compare your EU vs non-EU work rights.",
    inputs: [
      { label: "Country", type: "dropdown", options: ["Portugal", "Spain", "France", "Italy", "Greece"] }
    ]
  },
  {
    title: "Phase 2: UK State Pension Planner",
    description: "Estimate your UK State Pension in your new country.",
    inputs: [
      { label: "Current Age", type: "number", min: 18, max: 70, default: 30 },
      { label: "Years Contributed", type: "number", min: 0, max: 50, default: 10 }
    ]
  },
  {
    title: "Phase 3: 2025 Budget Impact Scanner",
    description: "Understand how the 2025 budget affects your finances.",
    inputs: [
      { label: "Annual Income (£)", type: "number", min: 0, max: 200000, default: 50000 }
    ]
  },
  {
    title: "Phase 4: Company Formation Wizard",
    description: "Plan your business setup abroad.",
    inputs: [
      { label: "Business Type", type: "dropdown", options: ["Sole Trader", "Limited Company", "Partnership"] },
      { label: "Expected Turnover (£)", type: "number", min: 0, max: 1000000, default: 100000 }
    ]
  },
  {
    title: "Phase 5: Healthcare & S1/GHIC Tracker",
    description: "Plan healthcare coverage.",
    inputs: [
      { label: "Private Insurance", type: "dropdown", options: ["Yes", "No"] }
    ]
  },
  {
    title: "Phase 6: Cost of Living & Salary Comparator",
    description: "Compare local salaries and living costs.",
    inputs: [
      { label: "Salary (£)", type: "number", min: 0, max: 200000, default: 30000 }
    ]
  },
  {
    title: "Phase 7: Banking & Money Transfer Hub",
    description: "Plan your banking and transfers.",
    inputs: [
      { label: "Banking Type", type: "dropdown", options: ["Local Bank", "UK Bank", "Online Bank"] }
    ]
  },
  {
    title: "Phase 8: Housing & School Finder",
    description: "Find your perfect home and school.",
    inputs: [
      { label: "Number of Bedrooms", type: "number", min: 1, max: 10, default: 2 },
      { label: "School Type", type: "dropdown", options: ["Public", "Private", "International"] }
    ]
  },
  {
    title: "Phase 9: Moving Checklist & Pet Relocation",
    description: "Prepare your moving checklist.",
    inputs: [
      { label: "Include Pets?", type: "dropdown", options: ["Yes", "No"] }
    ]
  },
  {
    title: "Phase 10: Document Vault",
    description: "Securely store your relocation documents.",
    inputs: [
      { label: "Documents Ready?", type: "dropdown", options: ["Yes", "No"] }
    ]
  },
  {
    title: "Phase 11: Retirement Roadmap",
    description: "Plan your long-term retirement.",
    inputs: [
      { label: "Current Savings (£)", type: "number", min: 0, max: 2000000, default: 50000 },
      { label: "Target Retirement Age", type: "number", min: 50, max: 75, default: 65 }
    ]
  }
];

// Current phase index
let currentPhase = 0;

// ======================
// Render Phases
// ======================
function renderPhase(index) {
  const container = document.getElementById("phases-container");
  container.innerHTML = ""; // Clear previous phase

  const phase = phases[index];

  // Create phase card
  const phaseCard = document.createElement("div");
  phaseCard.className = "phase-card fade-in";

  const title = document.createElement("h2");
  title.textContent = phase.title;

  const desc = document.createElement("p");
  desc.textContent = phase.description;

  phaseCard.appendChild(title);
  phaseCard.appendChild(desc);

  // Create inputs dynamically
  phase.inputs.forEach(input => {
    const label = document.createElement("label");
    label.textContent = input.label;
    label.className = "input-label";

    let field;
    if (input.type === "dropdown") {
      field = document.createElement("select");
      input.options.forEach(opt => {
        const option = document.createElement("option");
        option.value = opt;
        option.textContent = opt;
        field.appendChild(option);
      });
    } else if (input.type === "number") {
      field = document.createElement("input");
      field.type = "number";
      field.min = input.min;
      field.max = input.max;
      field.value = input.default || input.min;
    }

    field.className = "phase-input";
    phaseCard.appendChild(label);
    phaseCard.appendChild(field);
  });

  // Navigation buttons
  const nav = document.createElement("div");
  nav.className = "phase-nav";

  if (index > 0) {
    const backBtn = document.createElement("button");
    backBtn.textContent = "Previous";
    backBtn.onclick = () => { currentPhase--; renderPhase(currentPhase); };
    nav.appendChild(backBtn);
  }

  if (index < phases.length - 1) {
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.onclick = () => { currentPhase++; renderPhase(currentPhase); };
    nav.appendChild(nextBtn);
  }

  phaseCard.appendChild(nav);
  container.appendChild(phaseCard);
}

// ======================
// Start App
// ======================
function startApp() {
  currentPhase = 0;
  renderPhase(currentPhase);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ======================
// AI Advice Placeholder
// ======================
function getAIAdvice() {
  const output = document.getElementById("ai-output");
  output.innerHTML = "<p>Analyzing your inputs... (AI logic placeholder)</p>";

  // Simulate AI response
  setTimeout(() => {
    output.innerHTML = "<p>Your personalized relocation summary will appear here based on the inputs you provide in each phase.</p>";
  }, 1500);
}

// ======================
// Optional: Animations (fade in)
document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement('style');
  style.innerHTML = `
    .fade-in {
      animation: fadeIn 0.5s ease-in-out;
    }
    @keyframes fadeIn {
      from {opacity: 0;}
      to {opacity: 1;}
    }
    .phase-card { padding: 20px; margin: 20px auto; max-width: 600px; background: #fff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);}
    .phase-nav { margin-top: 15px; display: flex; justify-content: space-between;}
    .phase-nav button { padding: 8px 16px; font-size: 1rem; cursor: pointer;}
    .phase-input { margin-bottom: 12px; padding: 6px; width: 100%; }
    .input-label { display: block; margin-bottom: 4px; font-weight: 600;}
  `;
  document.head.appendChild(style);
});
