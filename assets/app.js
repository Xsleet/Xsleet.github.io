/* ===================================================================
 *  Yu Xue — Academic Homepage | Rendering & Interactivity
 * =================================================================== */

(function () {
  'use strict';

  const data = window.SITE_DATA;
  if (!data) { console.error('SITE_DATA missing'); return; }

  /* ---------- Inline SVG icons ---------- */
  const ICON = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.35.95.1-.74.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.26 5.68.41.36.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.66.79.55 4.56-1.52 7.85-5.83 7.85-10.91C23.5 5.73 18.27.5 12 .5Z"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>',
    orcid: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM7.37 18.5H5.518V7.573h1.852V18.5zm-.931-12.3a1.062 1.062 0 1 1 0-2.124 1.062 1.062 0 0 1 0 2.124zM18.5 18.5h-1.82v-5.37c0-1.28-.025-2.93-1.785-2.93-1.79 0-2.064 1.394-2.064 2.838V18.5h-1.822V7.573h1.75v1.494h.026c.242-.46 .84-.945 1.728-.945 1.846 0 2.186 1.216 2.186 2.797V18.5h.001z"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    doi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    satellite: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7 9 3 5 7l4 4"/><path d="m17 11 4 4-4 4-4-4"/><path d="m8 12 4 4"/><path d="m16 8 3-3"/><path d="M9 21a6 6 0 0 0-6-6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
  };

  /* ---------- Utilities ---------- */
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  const q = sel => document.querySelector(sel);
  const bold = (arr, name) => arr.map(a => a.includes(name) || a.includes('Yu Xue') ? `<span class="me">${a}</span>` : a).join(', ');

  /* ---------- Render: Hero ---------- */
  function renderHero() {
    const p = data.profile;
    q('#hero-photo').src = p.photo;
    q('#hero-photo').alt = p.nameEn;
    q('#hero-name').innerHTML = `${p.nameEn}<span class="cn">${p.nameCn}</span>`;
    q('#hero-title').innerHTML = `${p.position} <span class="at">@</span> <span class="inst">${p.affiliation}</span>`;
    q('#hero-affil').innerHTML = `${p.lab}<br/>Advised by ${p.advisor}`;
    q('#hero-bio').innerHTML = p.bio.map(b => {
      if (typeof b === 'string') return `<p>${b}</p>`;
      return `<p>${b.en}<span class="cn-line">${b.cn}</span></p>`;
    }).join('');

    const links = q('#hero-links');
    links.innerHTML = '';
    const add = (href, icon, text) => {
      const a = el('a', 'hero-link');
      a.href = href; a.innerHTML = `${icon} ${text}`;
      if (href.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener'; }
      links.appendChild(a);
    };
    add('mailto:' + p.email, ICON.mail, p.email);
    add(p.github, ICON.github, 'GitHub');
    if (p.scholar) add(p.scholar, ICON.scholar, 'Google Scholar');
    if (p.orcid) add(p.orcid, ICON.orcid, 'ORCID');
  }

  /* ---------- Render: News ---------- */
  function renderNews() {
    const list = q('#news-list');
    const items = data.news;
    const SHOW = 5;

    const paint = (n) => {
      list.innerHTML = '';
      items.slice(0, n).forEach(it => {
        const row = el('div', 'news-item');
        const enText = it.en || it.text || '';
        const cnText = it.cn ? `<span class="cn-line">${it.cn}</span>` : '';
        row.innerHTML = `
          <span class="news-date">${it.date}</span>
          <span class="news-tag" data-tag="${it.tag}">${it.tag[0].toUpperCase()}</span>
          <span class="news-text">${enText}${cnText}</span>`;
        list.appendChild(row);
      });
    };
    paint(SHOW);

    const btn = q('#news-toggle');
    if (items.length <= SHOW) { btn.style.display = 'none'; return; }
    let expanded = false;
    btn.addEventListener('click', () => {
      expanded = !expanded;
      paint(expanded ? items.length : SHOW);
      btn.textContent = expanded ? 'Show fewer ↑' : `Show all ${items.length} updates ↓`;
    });
    btn.textContent = `Show all ${items.length} updates ↓`;
  }

  /* ---------- Render: Research ---------- */
  function renderResearch() {
    const wrap = q('#research-grid');
    wrap.innerHTML = '';
    data.research.forEach(r => {
      const c = el('div', 'research-card');
      c.innerHTML = `
        <div class="research-icon">${ICON[r.icon] || ICON.shield}</div>
        <h3 class="research-title">${r.title}</h3>
        <div class="research-title-cn">${r.titleCn}</div>
        <p class="research-summary">${r.summary}</p>
        ${r.summaryCn ? `<p class="research-summary-cn">${r.summaryCn}</p>` : ''}
        <div class="research-keywords">
          ${r.keywords.map(k => `<span class="kw">${k}</span>`).join('')}
        </div>`;
      wrap.appendChild(c);
    });
  }

  /* ---------- BibTeX generator ---------- */
  function toBibtex(p) {
    const type = p.type === 'conference' ? '@inproceedings' : '@article';
    const authorStr = p.authors.map(a => a.replace('*', '')).join(' and ');
    const fields = [
      `  author   = {${authorStr}}`,
      `  title    = {${p.title}}`,
      p.type === 'conference' ? `  booktitle= {${p.venue}}` : `  journal  = {${p.venue}}`,
      `  year     = {${p.year}}`,
      p.volume ? `  pages    = {${p.volume}}` : null,
      p.doi ? `  doi      = {${p.doi}}` : null
    ].filter(Boolean);
    return `${type}{${p.key},\n${fields.join(',\n')}\n}`;
  }

  /* ---------- Render: Publications ---------- */
  let currentFilter = { year: 'all', role: 'all' };

  function renderPublications() {
    const wrap = q('#pub-list');
    wrap.innerHTML = '';

    const years = [...new Set(data.publications.map(p => p.year))].sort((a, b) => b - a);
    buildFilter('#pub-filter-year', ['all', ...years.map(String)], 'year');
    buildFilter('#pub-filter-role', ['all', 'first', 'corresponding', 'student-first', 'coauthor'], 'role');

    data.publications.forEach((p, i) => {
      const item = el('article', 'pub-item');
      item.dataset.year = p.year;
      item.dataset.role = p.role;
      item.dataset.type = p.type;

      const badgesHtml = (p.badges || []).map(b => {
        let cls = '';
        if (/Q1/i.test(b)) cls = 'q1';
        else if (/EI/i.test(b)) cls = 'ei';
        else if (/Corresponding/i.test(b)) cls = 'corr';
        else if (/Student/i.test(b)) cls = 's1';
        return `<span class="badge ${cls}">${b}</span>`;
      }).join('');

      const authorsStr = p.authors.map(a => {
        const isMe = a.replace('*', '').trim() === 'Yu Xue';
        return isMe ? `<span class="me">${a}</span>` : a;
      }).join(', ');

      item.innerHTML = `
        <div>
          <span class="pub-year-badge">${p.year}</span>
          <span class="pub-title">${p.title}</span>
        </div>
        <div class="pub-meta">${authorsStr}. <em>${p.venue}</em>${p.volume ? `, ${p.volume}` : ''}.
          <span class="pub-badges">${badgesHtml}</span>
        </div>
        <div class="pub-actions">
          ${p.url ? `<a class="pub-action" href="${p.url}" target="_blank" rel="noopener">${ICON.link} Paper</a>` : ''}
          ${p.doi ? `<a class="pub-action" href="https://doi.org/${p.doi}" target="_blank" rel="noopener">${ICON.doi} DOI</a>` : ''}
          <button class="pub-action pub-bibtex" data-key="${p.key}">${ICON.copy} BibTeX</button>
        </div>
        ${p.abstract ? `<div class="pub-abstract"><strong>Abstract.</strong> ${p.abstract}</div>` : ''}
      `;

      // Click title to expand abstract
      const titleEl = item.querySelector('.pub-title');
      if (p.abstract) {
        titleEl.addEventListener('click', () => item.classList.toggle('expanded'));
      }

      // BibTeX copy
      const bibBtn = item.querySelector('.pub-bibtex');
      if (bibBtn) {
        bibBtn.addEventListener('click', async (e) => {
          e.stopPropagation();
          const bib = toBibtex(p);
          try {
            await navigator.clipboard.writeText(bib);
            toast('BibTeX copied to clipboard ✓');
          } catch (err) {
            toast('Copy failed — use console', 'error');
            console.log(bib);
          }
        });
      }

      wrap.appendChild(item);
    });
  }

  function buildFilter(selector, options, key) {
    const wrap = q(selector);
    if (!wrap) return;
    wrap.innerHTML = '';
    options.forEach(opt => {
      const b = el('button', 'filter-btn');
      b.textContent = opt === 'all' ? 'All' :
        opt === 'first' ? '1st Author' :
        opt === 'corresponding' ? 'Corresponding' :
        opt === 'student-first' ? 'Student 1st' :
        opt === 'coauthor' ? 'Co-author' : opt;
      b.dataset.value = opt;
      if (opt === currentFilter[key]) b.classList.add('active');
      b.addEventListener('click', () => {
        currentFilter[key] = opt;
        wrap.querySelectorAll('.filter-btn').forEach(x => x.classList.toggle('active', x.dataset.value === opt));
        applyFilter();
      });
      wrap.appendChild(b);
    });
  }

  function applyFilter() {
    document.querySelectorAll('.pub-item').forEach(it => {
      const yMatch = currentFilter.year === 'all' || it.dataset.year === currentFilter.year;
      const rMatch = currentFilter.role === 'all' || it.dataset.role === currentFilter.role;
      it.classList.toggle('hidden', !(yMatch && rMatch));
    });
  }

  /* ---------- Render: Patents / Software ---------- */
  function renderIp() {
    const pWrap = q('#patent-list');
    pWrap.innerHTML = '';
    data.patents.forEach(p => {
      const it = el('div', 'ip-item');
      it.innerHTML = `
        <div class="ip-title">${p.title}</div>
        <div class="ip-title-en">${p.titleEn || ''}</div>
        <div class="ip-meta">
          <span class="year">${p.date}</span> · ${p.number} · ${p.inventors.join(', ')}
        </div>`;
      pWrap.appendChild(it);
    });
    q('#patent-count').textContent = `${data.patents.length} items`;

    const sWrap = q('#software-list');
    sWrap.innerHTML = '';
    data.software.forEach(s => {
      const it = el('div', 'ip-item');
      it.innerHTML = `
        <div class="ip-title">${s.title}</div>
        <div class="ip-title-en">${s.titleEn || ''}</div>
        <div class="ip-meta">
          <span class="year">${s.year}</span> · ${s.number}
        </div>`;
      sWrap.appendChild(it);
    });
    q('#software-count').textContent = `${data.software.length} items`;
  }

  /* ---------- Render: Honors ---------- */
  function renderHonors() {
    const wrap = q('#honor-list');
    wrap.innerHTML = '';
    data.honors.forEach(h => {
      const it = el('div', 'honor-item');
      it.innerHTML = `
        <span class="honor-year">${h.year}</span>
        <div class="honor-body">${h.title}<span class="cn">${h.cn}</span></div>`;
      wrap.appendChild(it);
    });
  }

  /* ---------- Render: Education ---------- */
  function renderEdu() {
    const wrap = q('#edu-list');
    wrap.innerHTML = '';
    data.education.forEach(e => {
      const it = el('div', 'edu-item');
      it.innerHTML = `
        <div class="edu-school">${e.school}<span class="cn">${e.schoolCn}</span></div>
        <div class="edu-degree">${e.degree} · ${e.field}</div>
        <div class="edu-period-row">
          <span class="edu-period">${e.period}</span>
          <span class="edu-note">${e.note}</span>
        </div>`;
      wrap.appendChild(it);
    });
  }

  /* ---------- Render: Footer ---------- */
  function renderFooter() {
    q('#footer-email').innerHTML = `${ICON.mail} ${data.profile.email}`;
    q('#footer-email').href = 'mailto:' + data.profile.email;
    q('#footer-github').innerHTML = `${ICON.github} GitHub`;
    q('#footer-github').href = data.profile.github;
  }

  /* ---------- Theme toggle ---------- */
  function initTheme() {
    const stored = localStorage.getItem('theme');
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefers ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);

    q('#theme-toggle').innerHTML = ICON.sun + ICON.moon;
    q('#theme-toggle').addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  /* ---------- Toast ---------- */
  function toast(msg) {
    const t = q('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove('show'), 1800);
  }

  /* ---------- Scroll spy (nav highlight) ---------- */
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-links a');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(a => a.classList.remove('active'));
          const m = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
          if (m) m.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => io.observe(s));
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    const items = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    items.forEach(i => io.observe(i));
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderHero();
    renderNews();
    renderResearch();
    renderPublications();
    renderIp();
    renderHonors();
    renderEdu();
    renderFooter();
    initScrollSpy();
    initReveal();
  });

})();
