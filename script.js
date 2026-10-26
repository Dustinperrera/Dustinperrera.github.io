const themeToggle = document.querySelector('.theme-toggle');
const themeColor = document.querySelector('meta[name="theme-color"]');
function setTheme(theme) {
  const light = theme === 'light';
  document.documentElement.dataset.theme = light ? 'light' : 'dark';
  themeToggle.setAttribute('aria-pressed', String(light));
  themeToggle.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
  themeToggle.title = light ? 'Switch to dark theme' : 'Switch to light theme';
  themeColor.content = light ? '#f6f7fb' : '#101216';
  try { localStorage.setItem('dustin-portfolio-theme', light ? 'light' : 'dark'); } catch { /* The toggle still works when storage is unavailable. */ }
}
setTheme(document.documentElement.dataset.theme);
themeToggle.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'));

// Reveal the hero name letter by letter, then leave the finished name visible.
const heroHeading = document.querySelector('#hero-heading');
if (heroHeading && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  const letters = [];
  heroHeading.querySelectorAll(':scope > span').forEach(line => {
    const textNode = line.firstChild;
    if (!textNode || textNode.nodeType !== Node.TEXT_NODE) return;
    const characters = document.createDocumentFragment();
    for (const character of textNode.textContent) {
      const letter = document.createElement('span');
      letter.className = 'hero-typed-letter';
      letter.textContent = character;
      characters.append(letter);
      letters.push(letter);
    }
    line.replaceChild(characters, textNode);
  });
  const period = heroHeading.querySelector('.name-period');
  if (period) letters.push(period);
  heroHeading.classList.add('is-typing');
  letters.forEach((letter, index) => {
    window.setTimeout(() => { letter.style.opacity = '1'; }, 2250 + index * 85);
  });
  window.setTimeout(() => {
    letters.forEach(letter => { letter.style.opacity = '1'; });
    heroHeading.classList.add('is-complete');
  }, 2350 + letters.length * 85);
}

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); }
menuButton.addEventListener('click', () => { const open = navigation.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', String(open)); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.matchMedia('(min-width: 701px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

const projectNotes = {
  website: {
    title: 'Breathe Easy Solution', category: 'CLIENT WEBSITE', state: 'LIVE WEBSITE',
    summary: 'A live website for Breathe Easy Solutions (BES), a Philippines-based HVAC and engineering services business.',
    description: 'Visitors can explore air-conditioning and engineering services, browse AC units, book a service, request a quote, and track a booking. The site gives BES clear paths from discovering a service to getting in touch.',
    role: 'Web Developer',
    tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'Laragon', 'phpMyAdmin', 'Hostinger', 'API integration'],
    extra: 'Evidence includes three website screenshots and the live website. The troubleshooting journal and cybersecurity case study document related email and form-protection work.',
    highlights: ['Service catalogue with direct booking links', 'AC unit listings and product inquiries', 'Quote and contact forms', 'Booking status tracking'],
    live: 'https://breatheeasysolution.com/',
    gallery: [
      { title: 'Homepage', caption: 'BES homepage with service booking and AC unit browsing.', src: 'assets/images/breathe-easy-home.png' },
      { title: 'Services', caption: 'Air-conditioning and chilled-water service details.', src: 'assets/images/breathe-easy-services.png' },
      { title: 'AC units', caption: 'AC unit catalogue with search, filters, and product listings.', src: 'assets/images/breathe-easy-ac-units.png' }
    ]
  },
  sneakdup: {
    title: 'SneakDup', category: 'FREELANCE WEBSITE', state: 'LIVE PROJECT · HOSTED ON VERCEL',
    summary: 'A shoe store website that connects a customer-facing catalog with staff tools for daily retail operations.',
    description: 'Customers can browse shoes and check available stock, sizes, and variants. Authorized staff have a separate login for the POS, inventory management, sales analytics, and other store functions. The gallery shows both the customer-facing shop and staff tools.',
    role: 'Web Developer',
    tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'XAMPP', 'Hostinger', 'API integration'],
    live: 'https://sneakdup-eight.vercel.app/',
    extra: 'The live website and screenshots show the customer-facing catalog and staff interfaces.',
    highlights: ['Shoe catalog with stock, size, and variant visibility', 'Separate admin and staff access', 'Point-of-sale and inventory tools', 'Sales analytics for store operations'],
    gallery: [
      { title: 'Catalog', caption: 'Customer-facing shoe and apparel catalog.', src: 'assets/images/sneakdup-catalog.png' },
      { title: 'Product details', caption: 'Product page with colorway, available sizes, and a low-stock indicator.', src: 'assets/images/sneakdup-product-details.png' },
      { title: 'POS', caption: 'Staff point-of-sale screen with product selection and the current order.', src: 'assets/images/sneakdup-pos.png' },
      { title: 'Inventory', caption: 'Admin inventory view with stock levels and variant controls.', src: 'assets/images/sneakdup-inventory.png' },
      { title: 'Sales analytics', caption: 'Sales report with revenue metrics, trend chart, and transaction history.', src: 'assets/images/sneakdup-sales-analytics.png' }
    ]
  },
  mobile: {
    title: 'DCSA Mini LMS', category: 'MOBILE APPLICATION', state: 'PROJECT BUILT · DEMO PENDING',
    summary: 'A mobile learning app with separate experiences for students and teachers.',
    description: 'The app supports student and teacher logins, lesson and PDF learning materials, and quizzes that teachers create and students take. It was built with Kotlin in Android Studio, with Firebase as its database and an API integration. The gallery shows its login and registration screens.',
    role: 'Mobile App Developer', tools: ['Android Studio', 'Kotlin', 'Firebase', 'API integration'],
    extra: 'Evidence currently includes the login and registration screenshots. The app is not available as a public browser demo or downloadable APK here.',
    highlights: ['Separate student and teacher login flows', 'Teacher quiz creation and student quiz taking', 'Lessons and PDF learning materials'],
    gallery: [
      { title: 'Login', caption: 'DCSA Mini LMS login screen with email and password entry.', src: 'assets/images/dcsa-login.jpg' },
      { title: 'Register', caption: 'Account registration screen with student and teacher role selection.', src: 'assets/images/dcsa-register.jpg' }
    ]
  },
  data: {
    title: 'Making sense of data', category: 'DATA ANALYSIS', state: 'EXCEL PROJECT BUILT · SQL WORK PLANNED',
    summary: 'An existing Excel analysis, with a planned SQL demonstration focused on data quality.',
    description: 'The next step is to use MySQL and phpMyAdmin to check duplicate records, missing values, and inconsistent entries. The finished case study will explain each query, its result, and what the result means.',
    role: 'Analysis and planned SQL validation', tools: ['Excel', 'MySQL / phpMyAdmin (planned)'],
    extra: 'The workbook, findings, SQL outputs, and verified corrections are still to be added.',
    highlights: ['Excel analysis already exists', 'Duplicate checks using GROUP BY, COUNT, and HAVING (planned)', 'Missing-value and consistency checks (planned)'],
    gallery: [
      { title: 'Workbook', caption: 'Add the actual worksheet or dashboard screenshot.', src: '' },
      { title: 'Checks', caption: 'Add a screenshot of a completed SQL quality check.', src: '' },
      { title: 'Findings', caption: 'Add charts or a concise results summary.', src: '' }
    ]
  },
  network: {
    title: 'Small LAN, clear connections', category: 'NETWORKING', state: 'CONCEPT PLAN',
    summary: 'A two-computer local network plan showing device roles, sample IP addresses, and how I would check connectivity.',
    description: 'Two computers connect through a switch on the same sample subnet, 192.168.10.0/24. A router at 192.168.10.1 acts as the gateway to other networks. The plan separates local communication from traffic that needs the router, then sets out a practical order for checking a connection.',
    role: 'Topology and addressing plan', tools: [],
    extra: 'This is an illustrative network plan. Hardware configuration, simulator setup, and ping results have not been completed or claimed.',
    highlights: ['PC 1: 192.168.10.10/24; PC 2: 192.168.10.11/24', 'Gateway: 192.168.10.1; switch connects the local PCs', 'Check IP settings, then ping the gateway and peer PC'],
    gallery: [
      { title: 'LAN topology', caption: 'Illustrative topology: two PCs share a switch; the router is their gateway to other networks. This is a design, not a configured network screenshot.', src: 'assets/images/network-lan-topology.svg' },
      { title: 'Addressing and checks', caption: 'Sample private IP addresses and a proposed troubleshooting order. No live ping results are shown.', src: 'assets/images/network-addressing-plan.svg' }
    ]
  },
  game: {
    title: 'A 2D game, taking shape', category: 'GAME DEVELOPMENT', state: 'WORK IN PROGRESS',
    summary: 'A block-inspired 2D game project that is still being developed.',
    description: 'This space will document the block-world concept, mechanics, development process, and playable result as the project progresses. The artwork on the portfolio card is a visual concept, not a gameplay screenshot or finished release.',
    role: 'Game development in progress', tools: [],
    extra: 'The game engine, title, and release link will be added after they are confirmed.',
    highlights: ['Concept and mechanics in progress', 'Development screenshots to be added', 'Playable preview planned'],
    gallery: [
      { title: 'Concept', caption: 'Add a concept or early build image.', src: '' },
      { title: 'Gameplay', caption: 'Add a real gameplay screenshot.', src: '' }
    ]
  }
};

const completedProjectDetails = {
  "website": {
    "problem": "BES needed a website where visitors could understand its HVAC and engineering services, browse AC units, and take the next step toward a booking or inquiry.",
    "contribution": "As the web developer, I built the website and its customer workflows, including service booking, inquiries, and booking tracking.",
    "approach": "I connected the customer-facing pages with PHP, SQL, and API integrations, using Laragon and phpMyAdmin during development and Hostinger for hosting.",
    "challenge": "Customer confirmation emails sometimes failed to arrive. I investigated the email code and API integration and corrected the issue. I also strengthened form validation and submission limits after receiving a suspicious inquiry.",
    "evidence": "The site is live. The gallery contains actual homepage, services, and AC unit screenshots; related case studies appear in Behind the Work."
  },
  "sneakdup": {
    "problem": "A shoe retail system needs to present products clearly to customers while giving staff a way to handle stock, transactions, and sales information.",
    "contribution": "As the web developer, I built the customer catalog and staff tools for point-of-sale transactions, inventory management, and sales reporting.",
    "approach": "I used HTML, CSS, JavaScript, PHP, and SQL to connect the storefront with stock, size, and variant information and separate staff workflows.",
    "challenge": "The project connects two workflows: customers browsing products and staff managing store operations. The customer-facing storefront is live; staff tools are shown through screenshots.",
    "evidence": "Five actual screenshots show the catalog, product details, POS, inventory, and sales analytics. The customer-facing storefront is live; staff tools are documented with screenshots."
  },
  "mobile": {
    "problem": "Students and teachers need different tools in a learning app: teachers prepare materials and quizzes, while students access lessons and complete activities.",
    "contribution": "As the mobile app developer, I worked on the Android learning application, including student and teacher access, lesson materials, and quiz workflows.",
    "approach": "I developed the app with Kotlin in Android Studio, using Firebase for its database and an API integration.",
    "challenge": "The app needs to support both student and teacher roles. The current portfolio evidence is limited to login and registration screens, so the gallery does not present unprovided lesson or quiz screenshots.",
    "evidence": "Two actual screenshots show login and registration. This is an Android application; a browser demo and downloadable APK are not currently provided."
  }
};

const projectToolIcons = {
  HTML: { image: 'html5.svg' },
  CSS: { image: 'css3.svg' },
  JavaScript: { image: 'javascript.svg' },
  PHP: { symbol: 'php', style: 'php' },
  SQL: { image: 'mysql.svg' },
  Laragon: { image: 'laragon.svg' },
  phpMyAdmin: { image: 'phpmyadmin.svg' },
  Hostinger: { symbol: 'H', style: 'hostinger' },
  'API integration': { symbol: '{ }', style: 'api' },
  XAMPP: { symbol: 'X', style: 'xampp' },
  'Android Studio': { image: 'androidstudio.svg' },
  Kotlin: { image: 'kotlin.svg' },
  Firebase: { image: 'firebase.svg' },
  Excel: { symbol: 'X', style: 'excel' },
  'MySQL / phpMyAdmin (planned)': { image: 'mysql.svg' }
};


// Shared preview motion preserves the opening button and page position.
const previewStates = new WeakMap();
const interactionMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function presentPreview(panel, focusTarget) {
  if (panel.open) return;
  const state = { trigger: document.activeElement, animation: null };
  previewStates.set(panel, state);
  panel.classList.remove('is-preview-closing');
  panel.showModal();
  if (!interactionMotion.matches && panel.animate) {
    state.animation = panel.animate([
      { opacity: 0, transform: 'translateY(12px) scale(.985)' },
      { opacity: 1, transform: 'translateY(0) scale(1)' }
    ], { duration: 240, easing: 'cubic-bezier(.2,.8,.2,1)' });
  }
  focusTarget?.focus({ preventScroll: true });
}
function dismissPreview(panel) {
  if (!panel.open || panel.classList.contains('is-preview-closing')) return;
  const state = previewStates.get(panel);
  state?.animation?.cancel();
  if (interactionMotion.matches || !panel.animate) { panel.close(); return; }
  panel.classList.add('is-preview-closing');
  const animation = panel.animate([
    { opacity: 1, transform: 'translateY(0) scale(1)' },
    { opacity: 0, transform: 'translateY(8px) scale(.985)' }
  ], { duration: 200, easing: 'ease-in' });
  if (state) state.animation = animation;
  animation.onfinish = () => panel.close();
}
document.querySelectorAll('dialog').forEach(panel => {
  panel.addEventListener('cancel', event => {
    event.preventDefault();
    dismissPreview(panel);
  });
  panel.addEventListener('close', () => {
    const state = previewStates.get(panel);
    state?.animation?.cancel();
    panel.classList.remove('is-preview-closing');
    state?.trigger?.focus({ preventScroll: true });
    previewStates.delete(panel);
  });
});

const dialog = document.querySelector('#project-dialog');
const dialogContent = document.querySelector('#dialog-content');
const closeDialogButton = document.querySelector('#close-dialog');
function projectElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}
function createDataQualityLab() {
  const lab = projectElement('section', 'case-data-lab');
  lab.setAttribute('aria-labelledby', 'data-lab-title');
  const header = projectElement('div', 'data-lab-header');
  const intro = projectElement('div');
  intro.append(
    projectElement('span', 'small-label', 'DATABASE PRACTICE / INTERACTIVE SAMPLE'),
    Object.assign(projectElement('h3', '', 'Data quality check'), { id: 'data-lab-title' }),
    projectElement('p', '', 'A visual walkthrough of how SQL can flag product-variant records for review.')
  );
  const run = projectElement('button', 'audit-run button secondary', 'Run sample scan');
  run.type = 'button';
  run.setAttribute('aria-describedby', 'audit-status');
  header.append(intro, run);

  const status = projectElement('p', 'audit-status', 'Ready · sample records only');
  status.id = 'audit-status';
  status.setAttribute('role', 'status');
  const stats = projectElement('div', 'audit-stats');
  [
    ['12', 'sample variants scanned'],
    ['5', 'SQL checks available'],
    ['8', 'findings to review']
  ].forEach(([value, label]) => {
    const card = projectElement('div', 'audit-stat');
    card.append(projectElement('strong', '', value), projectElement('span', '', label));
    stats.append(card);
  });

  const main = projectElement('div', 'audit-main');
  const chart = projectElement('div', 'audit-chart');
  chart.append(projectElement('span', 'small-label', 'SAMPLE FINDINGS'));
  [
    ['Duplicate variant rows', 4, 100],
    ['Missing size', 1, 25],
    ['Negative stock', 1, 25],
    ['Orphaned variant', 1, 25],
    ['Product without variants', 1, 25]
  ].forEach(([label, count, width]) => {
    const row = projectElement('div', 'audit-chart-row');
    const top = projectElement('div', 'audit-chart-label');
    top.append(projectElement('span', '', label), projectElement('strong', '', String(count)));
    const track = projectElement('div', 'audit-chart-track');
    track.setAttribute('aria-hidden', 'true');
    const bar = projectElement('span', 'audit-chart-bar');
    bar.dataset.width = String(width);
    track.append(bar);
    row.append(top, track);
    chart.append(row);
  });
  chart.append(projectElement('p', 'audit-chart-note', 'Counts come from fictional sample records, not a live database.'));

  const results = projectElement('div', 'audit-results');
  results.append(projectElement('span', 'small-label', 'FLAGGED SAMPLE ROWS'));
  const tableWrap = projectElement('div', 'audit-table-wrap');
  const table = document.createElement('table');
  table.className = 'audit-table';
  table.innerHTML = '<thead><tr><th>Row</th><th>Product</th><th>Size</th><th>Color</th><th>Stock</th><th>Finding</th></tr></thead><tbody></tbody>';
  const rows = [
    ['101', '18', '9.5', 'Black', '5', 'Duplicate pair'],
    ['102', '18', '9.5', 'Black', '5', 'Duplicate pair'],
    ['103', '19', '9', 'Black', '4', 'Duplicate pair'],
    ['104', '19', '9', 'Black', '4', 'Duplicate pair'],
    ['111', '34', '—', 'Blue', '5', 'Missing size'],
    ['110', '25', '9', 'Blue', '-1', 'Review stock'],
    ['112', '99', '9.5', 'White', '3', 'Orphan product'],
    ['—', '77', '—', '—', '—', 'No variants']
  ];
  const tbody = table.querySelector('tbody');
  rows.forEach(values => {
    const tr = document.createElement('tr');
    values.forEach((value, index) => {
      const cell = document.createElement('td');
      if (index === 5) cell.append(projectElement('span', 'audit-flag', value));
      else cell.textContent = value;
      tr.append(cell);
    });
    tbody.append(tr);
  });
  tableWrap.append(table);
  results.append(tableWrap);
  main.append(chart, results);

  const queries = projectElement('div', 'audit-queries');
  queries.append(projectElement('span', 'small-label', 'SQL BEHIND THE CHECKS'));
  const queryStatus = projectElement('span', 'audit-copy-status');
  queryStatus.setAttribute('role', 'status');
  queryStatus.setAttribute('aria-live', 'polite');
  queries.append(queryStatus);
  [
    ['01 · Find repeated product, size, and color combinations', 'SELECT product_id, size, color, COUNT(*) AS matches\nFROM product_variants\nGROUP BY product_id, size, color\nHAVING COUNT(*) > 1;', 'Groups identical product variants so repeated combinations can be reviewed.'],
    ['02 · Find variants missing key details', 'SELECT id, product_id, size, color\nFROM product_variants\nWHERE product_id IS NULL OR size IS NULL OR color IS NULL;', 'Finds variant rows that may not have enough information to identify what is in stock.'],
    ['03 · Flag stock values that need review', 'SELECT id, product_id, size, color, stock\nFROM product_variants\nWHERE stock < 0;', 'Highlights negative stock quantities for a person to check.'],
    ['04 · Find variants linked to a missing product', 'SELECT pv.id, pv.product_id\nFROM product_variants AS pv\nLEFT JOIN products AS p ON p.id = pv.product_id\nWHERE p.id IS NULL;', 'Uses a LEFT JOIN to find variant records without a matching product.'],
    ['05 · Find products with no variants', 'SELECT p.id, p.name\nFROM products AS p\nLEFT JOIN product_variants AS pv ON pv.product_id = p.id\nWHERE pv.id IS NULL;', 'Finds catalog products that do not have any size or color variant rows.']
  ].forEach(([label, query, explanation], index) => {
    const details = projectElement('details', 'audit-query');
    if (index === 0) details.open = true;
    const summary = projectElement('summary', '', label);
    details.append(summary);
    const body = projectElement('div', 'audit-query-body');
    body.append(projectElement('p', 'audit-query-explainer', explanation));
    const codeRow = projectElement('div', 'audit-code-row');
    const pre = projectElement('pre');
    pre.append(projectElement('code', '', query));
    const copy = projectElement('button', 'audit-copy', 'Copy SQL');
    copy.type = 'button';
    copy.addEventListener('click', async event => {
      event.preventDefault();
      event.stopPropagation();
      try {
        await navigator.clipboard.writeText(query);
        queryStatus.textContent = 'SQL copied to clipboard';
        copy.textContent = 'Copied';
        window.setTimeout(() => { copy.textContent = 'Copy SQL'; }, 1400);
      } catch {
        queryStatus.textContent = 'Clipboard copy is unavailable in this browser';
      }
    });
    codeRow.append(pre, copy);
    body.append(codeRow);
    details.append(body);
    queries.append(details);
  });

  const note = projectElement('p', 'audit-disclaimer', 'Illustrative demo only. These fictional rows are not loaded from SneakDup’s database, and this page does not run SQL or change any records. A duplicate flag means “review this combination,” not “delete it automatically.”');
  lab.append(header, status, stats, main, queries, note);

  run.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    if (lab.classList.contains('is-scanning')) return;
    lab.classList.remove('is-scanned');
    lab.classList.add('is-scanning');
    run.disabled = true;
    status.textContent = 'Scanning illustrative sample…';
    lab.querySelectorAll('.audit-chart-bar').forEach(bar => { bar.style.width = '0%'; });
    window.setTimeout(() => {
      lab.classList.remove('is-scanning');
      lab.classList.add('is-scanned');
      lab.querySelectorAll('.audit-chart-bar').forEach(bar => { bar.style.width = bar.dataset.width + '%'; });
      status.textContent = 'Sample scan complete · 2 duplicate groups and 8 findings to review';
      run.disabled = false;
    }, 850);
  });
  return lab;
}

function openProject(key) {
  const project = projectNotes[key];
  if (!project) return;
  project.gallery.forEach(item => {
    if (item.src) {
      const preview = new Image();
      preview.src = item.src;
    }
  });
  document.querySelector('#dialog-title').textContent = project.title;
  dialogContent.replaceChildren();

  const introduction = projectElement('div', 'case-intro');
  const state = projectElement('span', 'case-state', project.state);
  const summary = projectElement('p', 'case-summary', project.summary);
  const actionRow = projectElement('div', 'case-actions');
  if (project.live) {
    const liveLink = projectElement('a', 'button primary', 'Visit live website ↗');
    liveLink.href = project.live;
    liveLink.target = '_blank';
    liveLink.rel = 'noopener noreferrer';
    actionRow.append(liveLink);
  } else {
    actionRow.append(projectElement('span', 'case-link-pending', project.linkPending || 'Public link or demo not available yet'));
  }
  introduction.append(state, summary, actionRow);

  const layout = projectElement('div', 'case-layout');
  const primary = projectElement('div', 'case-primary');
  const about = projectElement('section', 'case-section');
  const details = completedProjectDetails[key];
  about.append(projectElement('h3', '', details ? 'The problem' : 'About the project'), projectElement('p', '', details ? details.problem : project.description));
  primary.append(about);
  if (details) {
    const notes = projectElement('div', 'case-study-notes');
    [['My contribution', details.contribution], ['My approach', details.approach], ['Challenges & current limits', details.challenge]].forEach(([heading, copy]) => {
      const section = projectElement('section', 'case-section');
      section.append(projectElement('h3', '', heading), projectElement('p', '', copy));
      notes.append(section);
    });
    primary.append(notes);
  }

  const projectSections = [];
  const gallery = projectElement('section', 'case-section case-gallery' + (key === 'mobile' ? ' case-gallery--mobile' : ''));
  const galleryTop = projectElement('div', 'gallery-heading');
  galleryTop.append(projectElement('h3', '', 'Project gallery'), projectElement('span', 'gallery-counter'));
  const galleryStage = projectElement('div', 'gallery-stage');
  const galleryCaption = projectElement('p', 'gallery-caption');
  const galleryControls = projectElement('div', 'gallery-controls');
  const previous = projectElement('button', 'gallery-arrow', '← Previous');
  const next = projectElement('button', 'gallery-arrow', 'Next →');
  previous.type = next.type = 'button';
  const thumbnails = projectElement('div', 'gallery-thumbnails');
  const thumbnailButtons = [];
  let currentIndex = 0;
  function showGalleryItem(index) {
    currentIndex = (index + project.gallery.length) % project.gallery.length;
    const item = project.gallery[currentIndex];
    galleryStage.replaceChildren();
    const placeholder = () => {
      const frame = projectElement('div', 'gallery-placeholder gallery-placeholder--' + key);
      frame.append(
        projectElement('span', 'gallery-placeholder-kicker', project.category),
        projectElement('strong', '', item.title),
        projectElement('span', 'gallery-placeholder-note', 'REAL SCREENSHOT TO BE ADDED')
      );
      galleryStage.replaceChildren(frame);
    };
    if (item.src) {
      const image = projectElement('img', 'gallery-image');
      image.src = item.src;
      image.alt = item.title + ' — ' + project.title;
      image.addEventListener('error', placeholder, { once: true });
      galleryStage.append(image);
      const fullImage = projectElement('a', 'gallery-open-image', 'Open full image ↗');
      fullImage.href = item.src;
      fullImage.target = '_blank';
      fullImage.rel = 'noopener noreferrer';
      galleryStage.append(fullImage);
    } else placeholder();
    galleryCaption.textContent = item.caption;
    galleryTop.querySelector('.gallery-counter').textContent = (currentIndex + 1) + ' / ' + project.gallery.length;
    thumbnailButtons.forEach((button, buttonIndex) => {
      if (buttonIndex === currentIndex) button.setAttribute('aria-current', 'true');
      else button.removeAttribute('aria-current');
    });
  }
  project.gallery.forEach((item, index) => {
    const button = projectElement('button', 'gallery-thumbnail', item.title);
    button.type = 'button';
    button.setAttribute('aria-label', 'Show ' + item.title + ' gallery item');
    button.addEventListener('click', () => showGalleryItem(index));
    thumbnails.append(button);
    thumbnailButtons.push(button);
  });
  previous.addEventListener('click', () => showGalleryItem(currentIndex - 1));
  next.addEventListener('click', () => showGalleryItem(currentIndex + 1));
  galleryControls.append(previous, thumbnails, next);
  gallery.append(galleryTop, galleryStage, galleryCaption);
  if (project.gallery.length > 1) gallery.append(galleryControls);
  projectSections.push(gallery);
  if (details) {
    const evidence = projectElement('section', 'case-section case-study-evidence');
    evidence.append(projectElement('h3', '', 'Evidence & project status'), projectElement('p', '', details.evidence));
    projectSections.push(evidence);
  }

  const sidebar = projectElement('aside', 'case-sidebar');
  const role = projectElement('section', 'case-aside-block');
  role.append(projectElement('span', 'small-label', 'MY ROLE'), projectElement('p', '', project.role));
  const tools = projectElement('section', 'case-aside-block');
  tools.append(projectElement('span', 'small-label', 'TOOLS & TECHNOLOGIES'));
  if (project.tools.length) {
    const icons = projectElement('div', 'case-tool-icons');
    project.tools.forEach(tool => {
      const icon = projectToolIcons[tool];
      const badge = projectElement('span', 'case-tool-icon');
      badge.title = tool;
      badge.setAttribute('role', 'img');
      badge.setAttribute('aria-label', tool);
      if (icon?.image) {
        const logo = projectElement('img', 'case-tool-logo');
        logo.src = 'assets/icons/' + icon.image;
        logo.alt = '';
        logo.setAttribute('aria-hidden', 'true');
        badge.append(logo);
      } else {
        badge.append(projectElement('span', 'case-tool-symbol case-tool-symbol--' + (icon?.style || 'generic'), icon?.symbol || tool.slice(0, 2)));
      }
      icons.append(badge);
    });
    tools.append(icons);
  } else tools.append(projectElement('p', '', 'Exact tools to be confirmed.'));
  const highlights = projectElement('section', 'case-aside-block');
  highlights.append(projectElement('span', 'small-label', 'HIGHLIGHTS'));
  const list = projectElement('ul', 'case-highlights');
  project.highlights.forEach(text => list.append(projectElement('li', '', text)));
  highlights.append(list);
  sidebar.append(role, tools, highlights, projectElement('p', 'case-extra', project.extra));
  layout.append(primary, sidebar);
  dialogContent.append(introduction, layout);
  if (key === 'sneakdup') dialogContent.append(createDataQualityLab());
  dialogContent.append(...projectSections);
  showGalleryItem(0);
  presentPreview(dialog, closeDialogButton);
}

// Explicit buttons open details; dragging project artwork does not open a dialog.
document.addEventListener('click', event => {
  const button = event.target.closest('[data-project]');
  if (button) openProject(button.dataset.project);
});
closeDialogButton.addEventListener('click', () => dismissPreview(dialog));
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dismissPreview(dialog);
});

const resumeDialog = document.querySelector('#resume-dialog');
const resumeFrame = document.querySelector('#resume-frame');
const openResumeButton = document.querySelector('#open-resume');
const closeResumeButton = document.querySelector('#close-resume');
document.querySelectorAll('[data-resume-preview]').forEach(trigger => trigger.addEventListener('click', event => {
  event.preventDefault();
  if (!resumeFrame.getAttribute('src')) resumeFrame.src = resumeFrame.dataset.src;
  presentPreview(resumeDialog, closeResumeButton);
}));
closeResumeButton.addEventListener('click', () => dismissPreview(resumeDialog));
resumeDialog.addEventListener('click', event => {
  if (event.target !== resumeDialog) return;
  const box = resumeDialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dismissPreview(resumeDialog);
});


const evidenceDocuments = {
  career: {
    title: 'IT Career Development Plan',
    file: 'assets/documents/Dustin-Perrera-Career-Development-Plan.pdf',
    pages: ['assets/documents/career-development-plan-page-1.png']
  },
  troubleshooting: {
    title: 'Troubleshooting journal',
    file: 'assets/documents/Dustin-Perrera-Troubleshooting-Journal.pdf',
    pages: ['assets/documents/troubleshooting-journal-page-1.png', 'assets/documents/troubleshooting-journal-page-2.png']
  },
  cybersecurity: {
    title: 'Cybersecurity case study',
    file: 'assets/documents/Dustin-Perrera-Cybersecurity-Case-Study.pdf',
    pages: ['assets/documents/cybersecurity-case-study-page-1.png', 'assets/documents/cybersecurity-case-study-page-2.png']
  }
};
const evidencePdfDialog = document.querySelector('#evidence-pdf-dialog');
const evidencePdfPages = document.querySelector('#evidence-pdf-pages');
const closeEvidencePdf = document.querySelector('#close-evidence-pdf');
let evidencePdfTrigger;
document.querySelectorAll('[data-document]').forEach(button => button.addEventListener('click', () => {
  const documentInfo = evidenceDocuments[button.dataset.document];
  if (!documentInfo) return;
  evidencePdfTrigger = button;
  document.querySelector('#evidence-pdf-title').textContent = documentInfo.title;
  document.querySelector('#evidence-pdf-description').textContent = `${documentInfo.pages.length} ${documentInfo.pages.length === 1 ? "page" : "pages"} · Scroll to read`;
  const openLink = document.querySelector('#evidence-pdf-open');
  const downloadLink = document.querySelector('#evidence-pdf-download');
  openLink.href = downloadLink.href = documentInfo.file;
  downloadLink.download = documentInfo.file.split('/').pop();
  evidencePdfPages.replaceChildren();
  documentInfo.pages.forEach((source, index) => {
    const figure = document.createElement('figure');
    const caption = document.createElement('figcaption');
    caption.textContent = `Page ${index + 1} of ${documentInfo.pages.length}`;
    const page = document.createElement('img');
    page.src = source;
    page.alt = `${documentInfo.title}, page ${index + 1}. Open the PDF for selectable text.`;
    page.width = 1191; page.height = 1684;
    page.decoding = 'async';
    page.loading = index === 0 ? 'eager' : 'lazy';
    figure.append(caption, page);
    evidencePdfPages.append(figure);
  });
  presentPreview(evidencePdfDialog, closeEvidencePdf);
  evidencePdfPages.scrollTop = 0;

}));
closeEvidencePdf.addEventListener('click', () => dismissPreview(evidencePdfDialog));
evidencePdfDialog.addEventListener('click', event => {
  if (event.target !== evidencePdfDialog) return;
  const box = evidencePdfDialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dismissPreview(evidencePdfDialog);
});
evidencePdfDialog.addEventListener('close', () => {
  evidencePdfPages.replaceChildren();

});

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
  document.querySelectorAll('.section-heading, .about-layout, .skill-grid, .tool-group-title, .evidence-list details, .resume, .contact-layout, .experience-block, .service-row').forEach(element => { element.classList.add('reveal'); observer.observe(element); });
}

// Repeat visual copies so each row can scroll continuously at a steady speed.
document.querySelectorAll('.tool-group .skill-grid').forEach(grid => {
  const groupTitle = grid.closest('.tool-group').querySelector('.tool-group-title').textContent.trim();
  const viewport = document.createElement('div'); viewport.className = 'tool-viewport'; viewport.tabIndex = 0; viewport.setAttribute('role', 'region'); viewport.setAttribute('aria-label', `${groupTitle}; focus to pause scrolling`);
  const track = document.createElement('div'); track.className = 'tool-track';
  grid.before(viewport); viewport.append(track); track.append(grid);
  grid.classList.remove('reveal'); grid.classList.add('visible');
  function updateLoop() {
    const distance = grid.getBoundingClientRect().width;
    if (!distance) return;
    const copyCount = Math.max(1, Math.ceil(viewport.clientWidth / distance));
    const existingCopies = track.querySelectorAll('[data-tool-copy]');
    if (existingCopies.length !== copyCount) {
      existingCopies.forEach(copy => copy.remove());
      for (let i = 0; i < copyCount; i++) {
        const copy = grid.cloneNode(true);
        copy.dataset.toolCopy = '';
        copy.setAttribute('aria-hidden', 'true');
        copy.inert = true;
        copy.removeAttribute('id');
        copy.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'));
        track.append(copy);
      }
    }
    viewport.classList.add('is-scrollable');
    viewport.style.setProperty('--tool-loop-distance', `${distance}px`);
    viewport.style.setProperty('--tool-duration', `${Math.max(20, distance / 36).toFixed(2)}s`);
  }
  if ('ResizeObserver' in window) new ResizeObserver(updateLoop).observe(viewport);
  else window.addEventListener('resize', updateLoop);
  updateLoop();
});
const motionToggle = document.querySelector('.motion-toggle');
motionToggle.addEventListener('click', () => {
  const paused = document.querySelector('#skills').classList.toggle('motion-paused');
  motionToggle.setAttribute('aria-pressed', String(paused)); motionToggle.textContent = paused ? 'Resume movement' : 'Pause movement';
});
const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
let navFrame = false;
function updateActiveSection() {
  let active = ''; document.querySelectorAll('main > section[id]').forEach(section => { if (section.getBoundingClientRect().top <= 160) active = section.id; });
  sectionLinks.forEach(link => { if (link.hash === '#' + active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); }); navFrame = false;
}
window.addEventListener('scroll', () => { if (!navFrame) { navFrame = true; requestAnimationFrame(updateActiveSection); } }, { passive: true }); updateActiveSection();

const contactForm = document.querySelector('#contact-form');
let preparedMessage = '';
contactForm.addEventListener('input', () => { document.querySelector('#draft-actions').hidden = true; preparedMessage = ''; });
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = contactForm.elements.name.value.trim();
  const email = contactForm.elements.email.value.trim();
  const message = contactForm.elements.message.value.trim();
  if (!name || !message) { const field = !name ? contactForm.elements.name : contactForm.elements.message; field.setCustomValidity('Please enter more than spaces.'); field.reportValidity(); field.addEventListener('input', () => field.setCustomValidity(''), { once: true }); return; }
  preparedMessage = 'From: ' + name + ' <' + email + '>\n\n' + message;
  document.querySelector('#email-draft').href = 'mailto:dustinperrera10@gmail.com?subject=' + encodeURIComponent('Portfolio inquiry from ' + name.replace(/[\r\n]/g, ' ')) + '&body=' + encodeURIComponent(preparedMessage);
  document.querySelector('#draft-actions').hidden = false;
  document.querySelector('#form-status').textContent = 'Your draft is ready. Open it in your email app, review it, and send it there.';
});
document.querySelector('#copy-message').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(preparedMessage); document.querySelector('#form-status').textContent = 'Message copied. Paste it into an email to dustinperrera10@gmail.com.'; }
  catch { document.querySelector('#form-status').textContent = 'Copy is unavailable in this browser. Select and copy your message from the fields above.'; }
});

// A sparse code trail follows a mouse pointer and fades without covering controls.
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (finePointer.matches && !reducedMotion.matches) {
  const codeLayer = document.createElement('div');
  codeLayer.className = 'cursor-code-layer';
  codeLayer.setAttribute('aria-hidden', 'true');
  document.body.append(codeLayer);

  const symbols = ['fn', '{}', 'let', 'if', '//', '</>', '${}', 'const', '=>', '<include>'];
  const colors = ['#69c9dd', '#ef8cc8', '#a8d8a1', '#efc682', '#adabed'];
  const particles = new Set();
  let lastTime = 0;
  let lastX = -1000;
  let lastY = -1000;

  document.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse' || !finePointer.matches || reducedMotion.matches || document.hidden) return;
    const now = performance.now();
    if (now - lastTime < 60 || Math.hypot(event.clientX - lastX, event.clientY - lastY) < 18) return;
    lastTime = now;
    lastX = event.clientX;
    lastY = event.clientY;

    if (particles.size >= 18) {
      const oldest = particles.values().next().value;
      oldest.remove();
      particles.delete(oldest);
    }
    const particle = document.createElement('span');
    particle.className = 'cursor-code-fragment';
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    particle.style.left = `${event.clientX + (Math.random() - .5) * 36}px`;
    particle.style.top = `${event.clientY + (Math.random() - .5) * 36}px`;
    particle.style.color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.setProperty('--drift-x', `${(Math.random() - .5) * 55}px`);
    particle.style.setProperty('--drift-y', `${-30 - Math.random() * 35}px`);
    codeLayer.append(particle);
    particles.add(particle);
    particle.addEventListener('animationend', () => { particle.remove(); particles.delete(particle); }, { once: true });
  }, { passive: true });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { particles.forEach(particle => particle.remove()); particles.clear(); }
  });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) { particles.forEach(particle => particle.remove()); particles.clear(); }
  });
}

// Centered, looping project cards: mouse dragging and native touch swiping share one scroll area.
const selectedProjects = document.querySelector('#projects');
const projectShowcase = document.querySelector('.project-showcase');
const projectTrack = document.querySelector('#project-slides');
const originalProjectSlides = [...projectTrack.children];
const projectSelectors = [...document.querySelectorAll('.project-index a')];
const previousProject = document.querySelector('#previous-project');
const nextProject = document.querySelector('#next-project');
const projectCount = document.querySelector('.project-slider-count');
const projectAnnouncement = document.querySelector('.project-slider-status');
const projectTotal = originalProjectSlides.length;
let selectedProjectIndex = Math.max(0, originalProjectSlides.findIndex(slide => '#' + slide.id === window.location.hash));
let selectedPhysicalIndex = projectTotal + selectedProjectIndex;
let projectScrollFrame = false;
let projectSettleTimer;
let projectPointer = null;
let suppressProjectClick = false;
const projectBefore = document.createDocumentFragment();
const projectAfter = document.createDocumentFragment();
originalProjectSlides.forEach((slide, index) => {
  slide.dataset.projectIndex = index;
  for (const group of [projectBefore, projectAfter]) {
    const copy = slide.cloneNode(true);
    copy.removeAttribute('id');
    copy.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'));
    copy.dataset.projectCopy = '';
    copy.inert = true;
    copy.setAttribute('aria-hidden', 'true');
    group.append(copy);
  }
});
projectTrack.prepend(projectBefore);
projectTrack.append(projectAfter);
const projectSlides = [...projectTrack.children];
projectShowcase.classList.add('is-carousel', 'is-peek-carousel');
projectShowcase.setAttribute('role', 'region');
projectShowcase.setAttribute('aria-roledescription', 'carousel');
projectShowcase.setAttribute('aria-labelledby', 'projects-heading');
projectTrack.tabIndex = 0;
projectTrack.setAttribute('aria-label', 'Project carousel. Drag, swipe, or use the left and right arrow keys to explore.');
document.querySelector('.project-slider-controls').hidden = false;
function physicalProjectTarget(index) {
  const slide = projectSlides[index];
  return slide.offsetLeft + slide.offsetWidth / 2 - projectTrack.clientWidth / 2;
}
function nearestPhysicalProject() {
  let nearest = 0;
  let distance = Infinity;
  projectSlides.forEach((slide, index) => {
    const delta = Math.abs(physicalProjectTarget(index) - projectTrack.scrollLeft);
    if (delta < distance) { distance = delta; nearest = index; }
  });
  return nearest;
}
function updateProjectSlide(physicalIndex, announce = false) {
  selectedPhysicalIndex = Math.max(0, Math.min(projectSlides.length - 1, physicalIndex));
  const logicalIndex = selectedPhysicalIndex % projectTotal;
  const changed = logicalIndex !== selectedProjectIndex;
  selectedProjectIndex = logicalIndex;
  projectSlides.forEach((slide, index) => {
    const active = index === selectedPhysicalIndex;
    if (!active && slide.contains(document.activeElement)) projectTrack.focus({ preventScroll: true });
    slide.inert = !active;
    slide.setAttribute('aria-hidden', String(!active));
    slide.setAttribute('aria-roledescription', 'slide');
    slide.setAttribute('aria-label', `Project ${index % projectTotal + 1} of ${projectTotal}`);
    slide.classList.toggle('is-current', active && !reducedMotion.matches);
  });
  projectSelectors.forEach((link, index) => {
    if (index === selectedProjectIndex) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
  previousProject.disabled = nextProject.disabled = false;
  projectCount.textContent = String(selectedProjectIndex + 1).padStart(2, '0') + ' / ' + String(projectTotal).padStart(2, '0');
  if (announce && changed) projectAnnouncement.textContent = `Project ${selectedProjectIndex + 1} of ${projectTotal}: ${originalProjectSlides[selectedProjectIndex].querySelector('h3').textContent}`;
}
function moveProject(physicalIndex, instant = false) {
  const index = Math.max(0, Math.min(projectSlides.length - 1, physicalIndex));
  projectTrack.scrollTo({ left: physicalProjectTarget(index), behavior: instant || reducedMotion.matches ? 'instant' : 'smooth' });
  if (instant) updateProjectSlide(index);
}
function settleProject() {
  if (projectPointer) return;
  const nearest = nearestPhysicalProject();
  updateProjectSlide(nearest, true);
  if (nearest < projectTotal || nearest >= projectTotal * 2) moveProject(projectTotal + nearest % projectTotal, true);
}
function chooseProject(logicalIndex) {
  const candidates = [logicalIndex, projectTotal + logicalIndex, projectTotal * 2 + logicalIndex];
  const nearest = candidates.reduce((best, index) => Math.abs(physicalProjectTarget(index) - projectTrack.scrollLeft) < Math.abs(physicalProjectTarget(best) - projectTrack.scrollLeft) ? index : best);
  moveProject(nearest);
}
projectSelectors.forEach((link, index) => link.addEventListener('click', event => { event.preventDefault(); chooseProject(index); }));
previousProject.addEventListener('click', () => moveProject(selectedPhysicalIndex - 1));
nextProject.addEventListener('click', () => moveProject(selectedPhysicalIndex + 1));
projectTrack.addEventListener('scroll', () => {
  clearTimeout(projectSettleTimer);
  projectSettleTimer = window.setTimeout(settleProject, 160);
  if (projectScrollFrame) return;
  projectScrollFrame = true;
  requestAnimationFrame(() => { updateProjectSlide(nearestPhysicalProject(), true); projectScrollFrame = false; });
}, { passive: true });
projectTrack.addEventListener('scrollend', settleProject);
projectTrack.addEventListener('pointerdown', event => {
  if (event.pointerType !== 'mouse' || event.button !== 0 || event.target.closest('button, a, input, select, textarea')) return;
  clearTimeout(projectSettleTimer);
  projectPointer = { id: event.pointerId, x: event.clientX, y: event.clientY, scroll: projectTrack.scrollLeft, dragging: false };
  projectTrack.setPointerCapture(event.pointerId);
});
projectTrack.addEventListener('pointermove', event => {
  if (!projectPointer || projectPointer.id !== event.pointerId) return;
  const dx = event.clientX - projectPointer.x;
  const dy = event.clientY - projectPointer.y;
  if (!projectPointer.dragging && Math.abs(dx) > 7 && Math.abs(dx) > Math.abs(dy)) {
    projectPointer.dragging = true;
    projectShowcase.classList.add('is-dragging');
    projectTrack.focus({ preventScroll: true });
  }
  if (projectPointer.dragging) { event.preventDefault(); projectTrack.scrollLeft = projectPointer.scroll - dx; }
});
function finishProjectDrag(event) {
  if (!projectPointer || projectPointer.id !== event.pointerId) return;
  const dragged = projectPointer.dragging;
  projectPointer = null;
  projectShowcase.classList.remove('is-dragging');
  if (projectTrack.hasPointerCapture(event.pointerId)) projectTrack.releasePointerCapture(event.pointerId);
  if (dragged) {
    suppressProjectClick = true;
    window.setTimeout(() => { suppressProjectClick = false; }, 0);
    moveProject(nearestPhysicalProject());
  }
}
projectTrack.addEventListener('pointerup', finishProjectDrag);
projectTrack.addEventListener('pointercancel', finishProjectDrag);
projectTrack.addEventListener('lostpointercapture', finishProjectDrag);
projectTrack.addEventListener('click', event => { if (suppressProjectClick) { event.preventDefault(); event.stopImmediatePropagation(); } }, true);
projectTrack.addEventListener('dragstart', event => event.preventDefault());
projectShowcase.addEventListener('keydown', event => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest('input, textarea, select, [contenteditable]')) return;
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); moveProject(selectedPhysicalIndex + (event.key === 'ArrowRight' ? 1 : -1)); }
});
function alignProjectSlide() {
  const ratio = window.matchMedia('(max-width: 700px)').matches ? .82 : .84;
  const width = projectTrack.clientWidth * ratio;
  projectTrack.style.setProperty('--project-slide-width', width + 'px');
  projectTrack.style.setProperty('--project-peek', (projectTrack.clientWidth - width) / 2 + 'px');
  moveProject(projectTotal + selectedProjectIndex, true);
}
if ('ResizeObserver' in window) new ResizeObserver(alignProjectSlide).observe(projectTrack);
else window.addEventListener('resize', alignProjectSlide);
reducedMotion.addEventListener('change', alignProjectSlide);
window.addEventListener('hashchange', () => {
  const index = originalProjectSlides.findIndex(slide => '#' + slide.id === window.location.hash);
  if (index >= 0) chooseProject(index);
});
if ('IntersectionObserver' in window) {
  const projectEntrance = new IntersectionObserver(entries => { if (entries[0].isIntersecting) { selectedProjects.classList.add('projects-arrived'); projectEntrance.disconnect(); } }, { threshold: .08 });
  projectEntrance.observe(projectShowcase);
} else selectedProjects.classList.add('projects-arrived');
alignProjectSlide();

// Animate the actual distance between milestones; keep all text readable throughout.
const experienceJourney = document.querySelector('.experience-timeline');
const timelineMotionToggle = document.querySelector('.timeline-motion-toggle');
if (experienceJourney && timelineMotionToggle) {
  let journeyVisible = !('IntersectionObserver' in window);
  let journeyPaused = false;
  function updateJourneyMotion() {
    timelineMotionToggle.hidden = reducedMotion.matches;
    experienceJourney.classList.toggle('is-journey-moving', journeyVisible && !journeyPaused && !document.hidden && !reducedMotion.matches);
  }
  function measureJourney() {
    const milestones = [...experienceJourney.children];
    if (milestones.length < 2) return;
    const firstTop = milestones[0].getBoundingClientRect().top;
    const lastDistance = milestones[milestones.length - 1].getBoundingClientRect().top - firstTop;
    const middleDistance = milestones[1].getBoundingClientRect().top - firstTop;
    experienceJourney.style.setProperty('--journey-height', `${Math.max(0, lastDistance)}px`);
    experienceJourney.style.setProperty('--journey-middle', String(lastDistance > 0 ? middleDistance / lastDistance : .5));
    experienceJourney.classList.add('is-journey-ready');
  }
  timelineMotionToggle.addEventListener('click', () => {
    journeyPaused = !journeyPaused;
    timelineMotionToggle.setAttribute('aria-pressed', String(journeyPaused));
    timelineMotionToggle.textContent = journeyPaused ? 'Resume animation' : 'Pause animation';
    updateJourneyMotion();
  });
  if ('IntersectionObserver' in window) {
    const journeyObserver = new IntersectionObserver(entries => {
      journeyVisible = entries[0].isIntersecting;
      updateJourneyMotion();
    }, { threshold: .08 });
    journeyObserver.observe(experienceJourney);
  }
  if ('ResizeObserver' in window) new ResizeObserver(measureJourney).observe(experienceJourney);
  else window.addEventListener('resize', measureJourney);
  if (document.fonts?.ready) document.fonts.ready.then(measureJourney);
  document.addEventListener('visibilitychange', updateJourneyMotion);
  reducedMotion.addEventListener('change', updateJourneyMotion);
  measureJourney();
  updateJourneyMotion();
}


// Interruptible animations retain native keyboard and no-JS details behavior.
function enhanceAccordion(group, selector) {
  const items = [...group.querySelectorAll(selector)];
  const states = new Map();
  function setExpanded(item, expanded) {
    const state = states.get(item);
    const start = item.getBoundingClientRect().height;
    state.animation?.cancel();
    state.expanded = expanded;
    state.summary.setAttribute('aria-expanded', String(expanded));
    item.classList.toggle('is-expanded', expanded);
    if (expanded) item.open = true;
    if (interactionMotion.matches || !item.animate) {
      item.open = expanded;
      item.classList.remove('is-toggling');
      return;
    }
    item.classList.add('is-toggling');
    const border = parseFloat(getComputedStyle(item).borderTopWidth) + parseFloat(getComputedStyle(item).borderBottomWidth);
    const end = expanded ? item.getBoundingClientRect().height : state.summary.getBoundingClientRect().height + border;
    state.animation = item.animate([{ height: `${start}px` }, { height: `${end}px` }], {
      duration: 280, easing: 'cubic-bezier(.2,.8,.2,1)'
    });
    state.animation.onfinish = () => {
      item.open = state.expanded;
      item.classList.remove('is-toggling');
      state.animation.cancel();
      state.animation = null;
    };
  }
  items.forEach(item => {
    const summary = item.querySelector(':scope > summary');
    if (!summary) return;
    item.removeAttribute('name');
    item.classList.add('smooth-details');
    item.classList.toggle('is-expanded', item.open);
    summary.setAttribute('aria-expanded', String(item.open));
    states.set(item, { summary, expanded: item.open, animation: null });
    summary.addEventListener('click', event => {
      if (event.target.closest('a, button, input')) return;
      event.preventDefault();
      const expanding = !states.get(item).expanded;
      if (expanding) items.forEach(other => {
        if (other !== item && states.get(other)?.expanded) setExpanded(other, false);
      });
      setExpanded(item, expanding);
    });
  });
  interactionMotion.addEventListener('change', () => {
    if (!interactionMotion.matches) return;
    states.forEach((state, item) => {
      state.animation?.cancel();
      state.animation = null;
      item.open = state.expanded;
      item.classList.remove('is-toggling');
    });
  });
}
document.querySelectorAll('.evidence-list, .faq-list').forEach(group => enhanceAccordion(group, ':scope > details'));
document.querySelectorAll('.interview-section').forEach(group => enhanceAccordion(group, ':scope > .interview-questions'));


// The future roadmap repeats four seconds of progress, then rests for five.
const careerRoadmap = document.querySelector('.career-roadmap');
if (careerRoadmap) {
  const careerDetails = careerRoadmap.closest('details');
  const careerList = careerRoadmap.querySelector('.career-milestones');
  const careerToggle = careerRoadmap.querySelector('.career-motion-toggle');
  let careerVisible = false;
  let careerPaused = false;
  function measureCareerRoadmap() {
    const nodes = [...careerList.querySelectorAll('.career-node')];
    if (!nodes.length) return;
    const bounds = careerList.getBoundingClientRect();
    const first = nodes[0].getBoundingClientRect();
    const last = nodes[nodes.length - 1].getBoundingClientRect();
    careerList.style.setProperty('--career-rail-x', `${first.left + first.width / 2 - bounds.left}px`);
    careerList.style.setProperty('--career-rail-y', `${first.top + first.height / 2 - bounds.top}px`);
    careerList.style.setProperty('--career-rail-width', `${last.left - first.left}px`);
    careerList.style.setProperty('--career-rail-height', `${last.top - first.top}px`);
  }
  function updateCareerMotion() {
    const expanded = careerDetails.open && careerDetails.classList.contains('is-expanded');
    careerRoadmap.classList.toggle('is-roadmap-running', expanded && careerVisible && !careerPaused && !document.hidden && !interactionMotion.matches);
  }
  careerToggle.addEventListener('click', () => {
    careerPaused = !careerPaused;
    careerToggle.setAttribute('aria-pressed', String(careerPaused));
    careerToggle.textContent = careerPaused ? 'Resume animation' : 'Pause animation';
    updateCareerMotion();
  });
  careerDetails.addEventListener('toggle', () => { measureCareerRoadmap(); updateCareerMotion(); });
  new MutationObserver(updateCareerMotion).observe(careerDetails, { attributes: true, attributeFilter: ['class'] });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { careerVisible = entries[0].isIntersecting; updateCareerMotion(); }, { threshold: .12 }).observe(careerRoadmap);
  } else { careerVisible = true; }
  if ('ResizeObserver' in window) new ResizeObserver(measureCareerRoadmap).observe(careerList);
  document.fonts?.ready.then(measureCareerRoadmap);
  interactionMotion.addEventListener('change', updateCareerMotion);
  document.addEventListener('visibilitychange', updateCareerMotion);
  measureCareerRoadmap(); updateCareerMotion();
}


