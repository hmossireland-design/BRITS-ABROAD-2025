// Phases & Fields
const phases = [
  { id: 1, title: "Work Rights Comparator", fields: ["Country", "Visa Type"] },
  { id: 2, title: "UK State Pension Planner", fields: ["Years Worked UK", "Current Pension"] },
  { id: 3, title: "2025 Budget Impact Scanner", fields: ["Annual Salary", "Expenses"] },
  { id: 4, title: "Company Formation Wizard", fields: ["Business Type", "Country"] },
  { id: 5, title: "Healthcare & S1/GHIC Tracker", fields: ["Country", "Coverage Type"] },
  { id: 6, title: "Cost of Living & Salary Comparator", fields: ["Country", "Job Role"] },
  { id: 7, title: "Banking & Money Transfer Hub", fields: ["Bank Type", "Transfer Frequency"] },
  { id: 8, title: "Housing & School Finder", fields: ["City", "Budget"] },
  { id: 9, title: "Moving Checklist & Pet Relocation", fields: ["Pets", "Items"] },
  { id: 10, title: "Document Vault", fields: ["Document Name", "Upload"] },
  { id: 11, title: "Retirement Roadmap", fields: ["Target Age", "Savings"] }
];

let currentPhase = 0;

// Start App
function startApp() {
  currentPhase = 0;
  renderPhase();
}

// Render Phase
function renderPhase() {
  const container = document.getElementById('phases-container');
  container.innerHTML = '';
  const phase = phases[currentPhase];

  const card = document.createElement('div');
  card.className = 'phase-card';
  card.innerHTML = `<h2>${phase.title}</h2>`;

  phase.fields.forEach(field => {
    if(field.toLowerCase().includes("upload")){
      card.innerHTML += `<label>${field}</label><input type="file">`;
    } else if(field.toLowerCase().includes("years") || field.toLowerCase().includes("salary") || field.toLowerCase().includes("expenses") || field.toLowerCase().includes("savings")) {
      card.innerHTML += `<label>${field}</label><input type="range" min="0" max="100" value="50" oninput="updateChart('${field}', this.value)">`;
    } else {
      card.innerHTML += `<label>${field}</label><input type="text">`;
    }
  });

  card.innerHTML += `<button onclick="nextPhase()">Next Phase</button>`;

  container.appendChild(card);
}

// Next Phase
function nextPhase() {
  if(currentPhase < phases.length - 1) {
    currentPhase++;
    renderPhase();
  } else {
    alert("🎉 You've completed all phases! Scroll down for AI advice and interactive charts.");
  }
}

// Placeholder AI advice
function getAIAdvice() {
  const output = document.getElementById('ai-output');
  output.innerHTML = "🤖 AI Advice: This feature will give tailored relocation guidance based on your inputs. Coming soon!";
}

// Interactive Chart
const ctx = document.getElementById('budgetChart').getContext('2d');
const budgetChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Salary', 'Expenses', 'Savings'],
    datasets: [{
      label: '2025 Budget',
      data: [50, 50, 50],
      backgroundColor: ['#fcb900', '#ff8c00', '#22c55e']
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true, max: 100 }
    }
  }
});

// Update chart dynamically
function updateChart(field, value) {
  if(field.toLowerCase().includes('salary')) budgetChart.data.datasets[0].data[0] = parseInt(value);
  if(field.toLowerCase().includes('expenses')) budgetChart.data.datasets[0].data[1] = parseInt(value);
  if(field.toLowerCase().includes('savings')) budgetChart.data.datasets[0].data[2] = parseInt(value);
  budgetChart.update();
}
