/********** Brits Abroad 2025 – Full App JS **********/

// ---------- Phase & State Management ----------
const PHASES = [
  { id:1, title:'Dream Destination', icon:'🌍' },
  { id:2, title:'Financial Freedom', icon:'💰' },
  { id:3, title:'Visa Victory', icon:'📋' },
  { id:4, title:'Document Vault', icon:'📁' },
  { id:5, title:'Budget Blueprint', icon:'📊' },
  { id:6, title:'Move Mastery', icon:'🚚' },
  { id:7, title:'Healthcare & S1/GHIC', icon:'🏥' },
  { id:8, title:'Banking & Money Transfers', icon:'💳' },
  { id:9, title:'Housing & Schools', icon:'🏠' },
  { id:10, title:'Checklist & Pet Relocation', icon:'📋' },
  { id:11, title:'Retirement Roadmap', icon:'👴' }
];

let currentPhase = 1;
let completed = [];
let userData = {
  country: 'Portugal',
  pension: 10000,
  property: 300000,
  shipping: 2000,
  visaAnswers: {},
  aiSummary: ''
};

// DOM references
const phasesEl = document.getElementById('phases') || null;
const phaseContentEl = document.getElementById('phaseContent') || null;
const progressEl = document.getElementById('progressFill') || null;

// ---------- Initialize App ----------
function startApp(){
  document.querySelector('.hero').style.display = 'none';
  buildPhases();
  showPhase(currentPhase);
  updateProgress();
  populateCountries();
  setupInputs();
}

// ---------- Build Phase Navigation ----------
function buildPhases(){
  if(!phasesEl) return;
  phasesEl.innerHTML = '';
  PHASES.forEach(p => {
    const div = document.createElement('div');
    div.className = 'phase';
    div.dataset.phase = p.id;
    div.innerHTML = `<div class="phase-icon">${p.icon}</div><div>${p.title}</div>`;
    div.onclick = () => selectPhase(p.id);
    if(completed.includes(p.id)) div.classList.add('completed');
    if(p.id===currentPhase) div.classList.add('active');
    phasesEl.appendChild(div);
  });
}

// ---------- Show Phase ----------
function showPhase(n){
  currentPhase = n;
  if(!phaseContentEl) return;
  const allPhases = phaseContentEl.querySelectorAll('.phase-card');
  allPhases.forEach(card => card.style.display = 'none');
  const thisPhase = document.getElementById('phase'+n);
  if(thisPhase) thisPhase.style.display = 'block';
  updateProgress();
}

// ---------- Select Phase ----------
function selectPhase(n){
  // Allow free navigation
  showPhase(n);
}

// ---------- Complete Phase ----------
function completePhase(n){
  if(!completed.includes(n)) completed.push(n);
  buildPhases();
  if(n<PHASES.length) showPhase(n+1);
  else alert('Congratulations! You completed the relocation plan 🎉');
}

// ---------- Update Progress ----------
function updateProgress(){
  if(!progressEl) return;
  const pct = (currentPhase/PHASES.length)*100;
  progressEl.style.width = pct+'%';
  document.querySelectorAll('.phase').forEach(el => {
    el.classList.toggle('active', parseInt(el.dataset.phase)===currentPhase);
    el.classList.toggle('completed', completed.includes(parseInt(el.dataset.phase)));
  });
}

// ---------- Populate Country Dropdown ----------
function populateCountries(){
  const countries = ['Portugal','Spain','UAE','Thailand','Cyprus','Greece','Italy','France','Poland','Latvia','Costa Rica','Malta','Hungary','Argentina','USA'];
  const sel = document.getElementById('country');
  if(!sel) return;
  sel.innerHTML = '';
  countries.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    sel.appendChild(opt);
  });
  sel.value = userData.country;
  sel.onchange = e => {
    userData.country = e.target.value;
    updateAIResults();
  };
}

// ---------- Setup Interactive Inputs ----------
function setupInputs(){
  const pension = document.getElementById('pension');
  const property = document.getElementById('property');
  const shipping = document.getElementById('shipping');

  if(pension){
    pension.value = userData.pension;
    pension.oninput = e => {
      userData.pension = parseInt(e.target.value);
      document.getElementById('pensionVal').textContent = userData.pension.toLocaleString();
      updateCalculations();
    };
  }

  if(property){
    property.value = userData.property;
    property.oninput = e => {
      userData.property = parseInt(e.target.value);
      document.getElementById('propertyVal').textContent = userData.property.toLocaleString();
      updateCalculations();
    };
  }

  if(shipping){
    shipping.value = userData.shipping;
    shipping.oninput = e => {
      userData.shipping = parseInt(e.target.value);
      document.getElementById('shippingVal').textContent = userData.shipping.toLocaleString();
      document.getElementById('shippingResult').textContent = `Shipping cost: £${userData.shipping.toLocaleString()}`;
    };
  }
}

// ---------- Calculations ----------
function updateCalculations(){
  const multiplier = 1; // placeholder for country cost adjustments
  const savings = Math.round((userData.pension*0.35 + userData.property*0.0025)*multiplier);
  const el = document.getElementById('result');
  if(el) el.textContent = `You could save £${savings.toLocaleString()}/year in ${userData.country}!`;
}

// ---------- Placeholder AI Summary ----------
function updateAIResults(){
  const el = document.getElementById('aiResult');
  if(!el) return;
  el.textContent = `AI Summary for ${userData.country}: Based on your inputs, you are best prepared for relocation in 2025. (This is placeholder AI logic, replace with real AI integration later.)`;
}

// ---------- File Upload for Document Vault ----------
const filesInput = document.getElementById('files');
if(filesInput){
  filesInput.addEventListener('change', e=>{
    const files = Array.from(e.target.files || []);
    const res = document.getElementById('docResult');
    if(res){
      res.innerHTML = files.length ? files.map(f=>`✓ ${f.name}`).join('<br>') : 'No files chosen';
    }
  });
}

// ---------- AI Input Button (Placeholder) ----------
const aiBtn = document.getElementById('aiBtn');
if(aiBtn){
  aiBtn.onclick = () => {
    userData.aiSummary = `AI says: ${userData.country} looks excellent for 2025 relocation!`;
    updateAIResults();
  };
}

// ---------- Initialize ----------
document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('.hero button');
  if(startButton) startButton.onclick = startApp;
});
