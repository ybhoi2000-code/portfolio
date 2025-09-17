/* ---------- NAV TOGGLE (mobile) ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelectorAll('.nav-toggle');
  const navs = document.querySelectorAll('.nav-links');
  toggle.forEach(t => t.addEventListener('click', () => {
    navs.forEach(n => n.classList.toggle('mobile-open'));
  }));

  // Close mobile nav when click outside (optional)
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.nav-toggle')) {
      navs.forEach(n => n.classList.remove('mobile-open'));
    }
  });
});

/* ---------- TYPING EFFECT ---------- */
const typedEl = document.getElementById('typed-text');
if (typedEl) {{
  const phrases = [
    "YUVRAJ BHOI",
    "MBA in Finance & Analytics",
    "Finance & Analytics Enthusiast",
    "Power BI · Excel · Tableau"
  ];
  let pIndex = 0, cIndex = 0, deleting = false;

  function tick() {
    const current = phrases[pIndex];
    if (!deleting) {
      typedEl.textContent = current.slice(0, ++cIndex);
      if (cIndex === current.length) { deleting = true; setTimeout(tick, 900); return; }
    } else {
      typedEl.textContent = current.slice(0, --cIndex);
      if (cIndex === 0) { deleting = false; pIndex = (pIndex + 1) % phrases.length; }
    }
    setTimeout(tick, deleting ? 50 : 120);
  }
  tick();
}}

/* ---------- tSPARTICLES (particles background) ---------- */
if (window.tsParticles) {
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    background: { color: "transparent" },
    particles: {
      number: { value: 40, density: { enable: true, area: 900 } },
      color: { value: ["#361104ff", "#ff9f1c", "#fff3b0"] },
      shape: { type: "circle" },
      opacity: { value: 0.8, random: { enable: true, minimumValue: 0.2 } },
      size: { value: { min: 2, max: 6 } },
      move: { enable: true, speed: 0.9, direction: "none", outModes: "bounce" },
      links: { enable: true, distance: 140, color: "#ffffffd9", opacity: 0.12, width: 1 }
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
      modes: { repulse: { distance: 90 }, push: { quantity: 2 } }
    },
    detectRetina: true
  }).catch(e => console.warn(e));
}

/* ---------- CHARTS (Chart.js) ---------- */
function renderCharts() {
  // doughnut skills
  const d = document.getElementById('skillsDoughnut');
  if (d) {
    new Chart(d.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['MS Excel', 'Power BI', 'Tableau', 'Data Visualization'],
        datasets: [{
          data: [90, 85, 75, 80],
          backgroundColor: ['#ff6f3c', '#ff9f1c', '#ffbf69', '#fff3b0'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom' } }
      }
    });
  }

  // bar chart for certification counts / projects (example)
  const b = document.getElementById('certBar');
  if (b) {
    new Chart(b.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Certifications', 'Projects', 'Internships'],
        datasets: [{
          label: 'Count',
          data: [8, 3, 1],
          backgroundColor: ['#ff6f3c', '#ff9f1c', '#ffbf69']
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, max: 10 } }
      }
    });
  }
}

/* run charts if page loaded */
if (document.readyState !== 'loading') renderCharts();
else document.addEventListener('DOMContentLoaded', renderCharts);

/* ---------- MODAL HANDLING ---------- */
document.addEventListener('click', (e) => {
  const openBtn = e.target.closest('[data-open]');
  if (openBtn) {
    const id = openBtn.getAttribute('data-open');
    const modal = document.getElementById(id);
    if (modal) modal.setAttribute('aria-hidden', 'false');
  }
  const closeBtn = e.target.closest('[data-close]');
  if (closeBtn) closeBtn.closest('.modal')?.setAttribute('aria-hidden', 'true');
  // click outside to close
  if (e.target.classList.contains('modal')) e.target.setAttribute('aria-hidden', 'true');
});
