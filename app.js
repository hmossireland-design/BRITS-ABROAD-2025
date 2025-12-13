// App.js for Brits Abroad 2025
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

// Start App
function startApp() {
  const container = document.getElementById('phases-container');
  container.innerHTML = '';
  phases.forEach(phase => {
    const card = document.createElement('div');
    card.className = 'phase-card';
    card.innerHTML = `<h2>${phase.title}</h2>`;
    phase.fields.forEach(field => {
      if(field.toLowerCase().includes("upload")){
        card.innerHTML += `<label>${field}</label><input type="file">`;
      } else if(field.toLowerCase().includes("years") || field.toLowerCase().includes("salary") || field.toLowerCase().includes("expenses") || field.toLowerCase().includes("savings")) {
        card.innerHTML += `<label>${field}</label><input type="range" min="0" max="100" value="50">`;
      } else {
        card.innerHTML += `<label>${field}</label><input type="text">`;
      }
    });
    container.appendChild(card);
  });
}

// Placeholder AI advice function
function getAIAdvice() {
  const output = document.getElementById('ai-output');
  output.innerHTML = "🤖 AI Advice: This feature will provide tailored relocation guidance based on your inputs. Coming soon!";
}
