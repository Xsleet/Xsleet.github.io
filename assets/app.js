/* ===================================================================
 *  Yu Xue — Academic Homepage | Rendering & i18n
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
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    doi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    satellite: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7 9 3 5 7l4 4"/><path d="m17 11 4 4-4 4-4-4"/><path d="m8 12 4 4"/><path d="m16 8 3-3"/><path d="M9 21a6 6 0 0 0-6-6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'
  };

  /* ---------- Date formatter (clip YYYY-MM-DD → YYYY-MM) ---------- */
  const fmtMonth = (d) => {
    if (typeof d !== 'string') return '';
    return /^\d{4}-\d{2}/.test(d) ? d.slice(0, 7) : d;
  };

  /* ---------- Utilities ---------- */
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  const q = sel => document.querySelector(sel);
  const qa = sel => document.querySelectorAll(sel);

  /* ---------- i18n ---------- */
  let LANG = localStorage.getItem('lang') ||
             (navigator.language && navigator.language.startsWith('zh') ? 'cn' : 'en');

  // Translate: accepts a string, an {en,cn} object, or a dotted i18n path
  const t = (val) => {
    if (val == null) return '';
    if (typeof val === 'string') {
      if (val.indexOf('.') > -1) {
        const parts = val.split('.');
        let cur = data.ui;
        for (const p of parts) {
          if (cur && typeof cur === 'object') cur = cur[p];
          else { cur = null; break; }
        }
        if (cur && typeof cur === 'object' && (cur.en !== undefined || cur.cn !== undefined)) {
          return cur[LANG] || cur.en;
        }
        return val;
      }
      return val;
    }
    if (typeof val === 'object') return val[LANG] || val.en || val.cn || '';
    return String(val);
  };

  /* ---------- Render: top nav links ---------- */
  function renderNav() {
    const ul = q('#nav-links');
    ul.innerHTML = '';
    const items = [
      { id: 'news',         key: 'nav.news' },
      { id: 'education',    key: 'nav.education' },
      { id: 'research',     key: 'nav.research' },
      { id: 'publications', key: 'nav.pubs' },
      { id: 'talks',        key: 'nav.talks' },
      { id: 'patents',      key: 'nav.patents' },
      { id: 'honors',       key: 'nav.honors' }
    ];
    items.forEach(it => {
      const li = el('li');
      const a = el('a');
      a.href = `#${it.id}`; a.textContent = t(it.key);
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  /* ---------- Render: Sidebar ---------- */
  function renderSidebar() {
    const p = data.profile;
    q('#profile-photo').src = p.photo;
    q('#profile-photo').alt = p.nameEn;
    q('#profile-name-en').textContent = p.nameEn;
    q('#profile-name-cn').textContent = p.nameCn;
    q('#profile-position').textContent = t(p.position);
    q('#profile-affil').textContent = t(p.affiliation);
    q('#profile-lab').innerHTML = t(p.lab);
    q('#advisor-label').textContent = t(data.ui.common.advisedBy);
    q('#profile-advisor').innerHTML = t(p.advisor);

    q('#profile-bio').innerHTML = `<p>${t(p.bio)}</p>`;

    const c = q('#profile-contact');
    c.innerHTML = '';
    const add = (href, icon, label) => {
      const a = document.createElement('a');
      a.href = href;
      if (href.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener'; }
      a.innerHTML = `${icon}<span>${label}</span>`;
      c.appendChild(a);
    };
    add('mailto:' + p.email, ICON.mail, p.email);
    add(p.github, ICON.github, 'GitHub');
    if (p.scholar) add(p.scholar, ICON.scholar, 'Google Scholar');
  }

  /* ---------- Build: News (auto-derived from publications + talks + patents + honors) ---------- */
  function buildNews() {
    const tpl = data.ui.news;
    // Substitute placeholders per-language. `vars[k]` may be a plain string
    // (same value into both en/cn) or a bilingual {en,cn} object.
    const fmt = (templ, vars) => {
      const sel = (v, lang) => {
        if (v == null) return '';
        if (typeof v === 'object') return v[lang] || v.en || v.cn || '';
        return String(v);
      };
      let en = templ.en, cn = templ.cn;
      Object.keys(vars).forEach(k => {
        const re = new RegExp('\\{' + k + '\\}', 'g');
        en = en.replace(re, sel(vars[k], 'en'));
        cn = cn.replace(re, sel(vars[k], 'cn'));
      });
      return { en, cn };
    };

    const items = [];

    // Only month-precision (or finer) dates surface in News.
    const hasMonth = (d) => typeof d === 'string' && /^\d{4}-\d{2}/.test(d);
    const ymd = (d) => d.slice(0, 7);  // normalize to YYYY-MM for sorting

    // Conference papers are skipped here — talks come from `data.talks` below.
    data.publications.forEach(p => {
      if (!hasMonth(p.date)) return;
      if (p.type === 'conference') return;
      const title = p.shortTitle || p.title;
      let templ, tag;
      if (p.status === 'accepted')        { templ = tpl.paperAccepted;  tag = 'paper'; }
      else if (p.role === 'coauthor')     { templ = tpl.paperCoauthor;  tag = 'paper'; }
      else                                { templ = tpl.paperPublished; tag = 'paper'; }
      const text = fmt(templ, { title, venue: p.venue });
      items.push({ date: ymd(p.date), tag, link: `pub-${p.key}`, en: text.en, cn: text.cn });
    });

    // Talks — each entry in `data.talks` becomes a "talk" news item.
    data.talks.forEach(tk => {
      if (!hasMonth(tk.date)) return;
      const text = fmt(tpl.talkPresented, { title: tk.title, venue: tk.venue });
      items.push({ date: ymd(tk.date), tag: 'talk', link: 'talks', en: text.en, cn: text.cn });
    });

    // Patents — a real `number` (starts with "ZL" or "CN" digits) → granted; placeholder → filed.
    const isGranted = (num) => typeof num === 'string' && /^(ZL|CN)\s*\d/.test(num);
    data.patents.forEach(p => {
      if (!hasMonth(p.date)) return;
      const granted = isGranted(p.number);
      const templ = granted ? tpl.patentGranted : tpl.patentFiled;
      const text = fmt(templ, { title: p.title, number: p.number || '' });
      items.push({ date: ymd(p.date), tag: 'patent', link: `patent-${p.key}`, en: text.en, cn: text.cn });
    });

    data.honors.forEach(h => {
      if (!hasMonth(h.date)) return;
      const templ = h.kind === 'selected' ? tpl.honorSelected : tpl.honorAwarded;
      const text = fmt(templ, { name: { en: h.en, cn: h.cn } });
      items.push({ date: ymd(h.date), tag: 'honor', link: 'honors', en: text.en, cn: text.cn });
    });

    // Manual entries written directly in data.news[] are merged in as-is.
    (data.news || []).forEach(n => {
      if (!hasMonth(n.date)) return;
      items.push({
        date: ymd(n.date),
        tag: n.tag || 'news',
        link: n.link,
        en: n.en || n.cn || '',
        cn: n.cn || n.en || ''
      });
    });

    items.sort((a, b) => b.date.localeCompare(a.date));
    return items;
  }

  /* ---------- Render: News ---------- */
  function renderNews() {
    const list = q('#news-list');
    const items = buildNews();
    const SHOW = 5;
    let expanded = false;

    const paint = (n) => {
      list.innerHTML = '';
      items.slice(0, n).forEach(it => {
        const linked = !!it.link;
        const row = el('div', 'news-item' + (linked ? ' is-linked' : ''));
        if (linked) row.dataset.target = it.link;
        const text = it[LANG] || it.en;
        row.innerHTML = `
          <span class="news-date">${it.date}</span>
          <span class="news-tag" data-tag="${it.tag}">${it.tag[0].toUpperCase()}</span>
          <span class="news-text">${text}</span>
          ${linked ? '<span class="news-arrow" aria-hidden="true">›</span>' : '<span class="news-arrow-spacer" aria-hidden="true"></span>'}`;
        list.appendChild(row);
      });
      list.querySelectorAll('.news-item.is-linked').forEach(row => {
        row.addEventListener('click', () => {
          const tgt = document.getElementById(row.dataset.target);
          if (!tgt) return;
          const isItem = tgt.classList.contains('pub-item') || tgt.classList.contains('patent-item');
          tgt.scrollIntoView({ behavior: 'smooth', block: isItem ? 'center' : 'start' });
          if (isItem) {
            tgt.classList.remove('highlight-target');
            void tgt.offsetWidth;
            tgt.classList.add('highlight-target');
            tgt.classList.add('expanded');
          }
        });
      });
    };
    paint(SHOW);

    let btn = q('#news-toggle');
    if (items.length <= SHOW) { btn.style.display = 'none'; return; }
    btn.style.display = '';
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    btn = newBtn;

    const setBtn = () => {
      const tpl = expanded ? data.ui.news.showFewer : data.ui.news.showAll;
      btn.textContent = (tpl[LANG] || tpl.en).replace('{n}', items.length);
    };
    setBtn();
    btn.addEventListener('click', () => {
      expanded = !expanded;
      paint(expanded ? items.length : SHOW);
      setBtn();
    });
  }

  /* ---------- Render: Education ---------- */
  function renderEdu() {
    const wrap = q('#edu-list');
    wrap.innerHTML = '';
    data.education.forEach(e => {
      const periodStr = t(e.period);
      const isPresent = /Present|至今/i.test(periodStr);
      const it = el('div', 'edu-item' + (isPresent ? ' is-current' : ''));
      const schoolName = t(e.school);
      const [degLevel, ...rest] = t(e.degree).split(/\s*·\s*/);
      const degMajor = rest.join(' · ');
      it.innerHTML = `
        <div class="edu-logo-wrap">
          ${e.logo ? `<img class="edu-logo" src="${e.logo}" alt="${schoolName}">` : ''}
        </div>
        <div class="edu-main">
          <h3 class="edu-school">${schoolName}</h3>
          <div class="edu-major">${degMajor}</div>
        </div>
        <div class="edu-aside">
          <span class="edu-deg-badge">${degLevel}</span>
          <div class="edu-meta">
            <span class="edu-period">${periodStr}</span>
          </div>
        </div>
        <span class="edu-note" style="display:none">${e.note ? t(e.note) : ''}</span>`;
      wrap.appendChild(it);
    });
  }

  /* ---------- Render: Research (vertical, with linked work) ---------- */
  function renderResearch() {
    const wrap = q('#research-list');
    wrap.innerHTML = '';

    data.research.forEach(r => {
      const c = el('article', 'research-card');
      const relPubs = data.publications.filter(p => p.theme === r.id);
      const relPatents = data.patents.filter(p => p.theme === r.id);

      const pubsHtml = relPubs.length ? `
        <div class="research-links-block">
          <div class="research-links-label">${t('research.relPubs')} · ${relPubs.length}</div>
          ${relPubs.map(p => `
            <a class="related-item" data-target="pub-${p.key}">
              <span class="yr">${p.year}</span>
              <span>${p.shortTitle || p.title}<span class="arrow">→</span></span>
            </a>`).join('')}
        </div>` : '';

      const patentsHtml = relPatents.length ? `
        <div class="research-links-block">
          <div class="research-links-label">${t('research.relPatents')} · ${relPatents.length}</div>
          ${relPatents.map(p => `
            <a class="related-item" data-target="patent-${p.key}">
              <span class="yr">${(p.date || '').slice(0, 4) || p.date}</span>
              <span>${t(p.title)}<span class="arrow">→</span></span>
            </a>`).join('')}
        </div>` : '';

      c.innerHTML = `
        <div class="research-head">
          <div class="research-icon">${ICON[r.icon] || ICON.shield}</div>
          <div class="research-title-wrap">
            <div class="research-title">${t(r.title)}</div>
            <div class="research-tagline">${t(r.tagline)}</div>
          </div>
        </div>
        <p class="research-summary">${t(r.summary)}</p>
        <div class="research-keywords">
          ${r.keywords.map(k => `<span class="kw">${t(k)}</span>`).join('')}
        </div>
        ${(pubsHtml || patentsHtml) ? `<div class="research-links">${pubsHtml}${patentsHtml}</div>` : ''}
      `;

      // Click related → scroll + highlight
      c.querySelectorAll('.related-item').forEach(link => {
        link.addEventListener('click', (ev) => {
          ev.preventDefault();
          const targetId = link.dataset.target;
          const target = document.getElementById(targetId);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Brief highlight flash
            target.classList.remove('highlight-target');
            void target.offsetWidth; // restart animation
            target.classList.add('highlight-target');
            // Auto-expand abstract if it's a patent or publication with abstract
            if (target.classList.contains('patent-item') || target.classList.contains('pub-item')) {
              target.classList.add('expanded');
            }
          }
        });
      });

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

    data.publications.forEach(p => {
      const item = el('article', 'pub-item');
      item.id = `pub-${p.key}`;
      item.dataset.year = p.year;
      item.dataset.role = p.role;
      item.dataset.type = p.type;

      const PUBLISHER_RE = /^(IEEE|IOP|Springer|Elsevier|Wiley|Nature|Taylor|MDPI|ACM|AGU|AIP|RSC|SPIE)$/i;
      const badgesHtml = (p.badges || []).filter(b => !PUBLISHER_RE.test(b)).map(b => {
        let cls = '';
        if (/Q1/i.test(b)) cls = 'q1';
        else if (/^EI$/i.test(b)) cls = 'ei';
        else if (/Corresponding/i.test(b)) cls = 'corr';
        else if (/Student/i.test(b)) cls = 's1';
        return `<span class="badge ${cls}">${b}</span>`;
      }).join('');

      const authorsStr = p.authors.map(a => {
        const isMe = a.replace('*', '').trim() === 'Yu Xue';
        return isMe ? `<span class="me">${a}</span>` : a;
      }).join(', ');

      item.innerHTML = `
        <div class="pub-head">
          <div class="pub-head-text">
            <span class="pub-year-badge">${fmtMonth(p.date) || p.year}</span>
            <span class="pub-title">${p.title}</span>
          </div>
          ${p.abstract ? `<div class="pub-toggle" aria-label="${t('pubs.abstract')}">${ICON.chevron}</div>` : ''}
        </div>
        <div class="pub-meta">${authorsStr}. <em>${p.venue}</em>${p.volume ? `, ${p.volume}` : ''}.
          <span class="pub-badges">${badgesHtml}</span>
        </div>
        <div class="pub-actions">
          ${p.doi ? `<a class="pub-action" href="https://doi.org/${p.doi}" target="_blank" rel="noopener">${ICON.doi} ${t('pubs.doi')}</a>` : ''}
          <button class="pub-action pub-bibtex" data-key="${p.key}">${ICON.copy} ${t('pubs.bibtex')}</button>
        </div>
        ${p.abstract ? `<div class="pub-abstract"><strong>${t('pubs.abstract')}</strong> ${p.abstract}</div>` : ''}
      `;

      const headEl = item.querySelector('.pub-head');
      if (p.abstract) {
        headEl.addEventListener('click', () => item.classList.toggle('expanded'));
      }

      const bibBtn = item.querySelector('.pub-bibtex');
      if (bibBtn) {
        bibBtn.addEventListener('click', async (e) => {
          e.stopPropagation();
          try {
            await navigator.clipboard.writeText(toBibtex(p));
            toast(t('common.copied'));
          } catch (err) {
            toast(t('common.copyFail'));
            console.log(toBibtex(p));
          }
        });
      }

      wrap.appendChild(item);
    });
    applyFilter();
  }

  function buildFilter(selector, options, key) {
    const wrap = q(selector);
    if (!wrap) return;
    wrap.innerHTML = '';

    const labelMap = {
      'all': 'pubs.all',
      'first': 'pubs.first',
      'corresponding': 'pubs.corr',
      'student-first': 'pubs.sFirst',
      'coauthor': 'pubs.coauthor'
    };

    options.forEach(opt => {
      const b = el('button', 'filter-btn');
      b.textContent = labelMap[opt] ? t(labelMap[opt]) : opt;
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
    qa('.pub-item').forEach(it => {
      const yMatch = currentFilter.year === 'all' || it.dataset.year === currentFilter.year;
      const rMatch = currentFilter.role === 'all' || it.dataset.role === currentFilter.role;
      it.classList.toggle('hidden', !(yMatch && rMatch));
    });
  }

  /* ---------- Render: Patents (single column, click to expand) ---------- */
  function renderPatents() {
    const wrap = q('#patent-list');
    wrap.innerHTML = '';
    data.patents.forEach(p => {
      const it = el('article', 'patent-item');
      it.id = `patent-${p.key}`;
      it.innerHTML = `
        <div class="patent-head">
          <div class="patent-head-text">
            <div class="patent-title">${t(p.title)}</div>
            <div class="patent-meta">
              <span class="yr">${fmtMonth(p.date) || p.date}</span>
              <span class="num">${p.number}</span>
              · ${p.inventors.map(t).join(', ')}
            </div>
          </div>
          <div class="patent-toggle">${ICON.chevron}</div>
        </div>
        ${p.abstract ? `
          <div class="patent-abstract">
            <div class="patent-abstract-label">${t('patents.abstract')}</div>
            ${t(p.abstract)}
          </div>` : ''}
      `;
      const head = it.querySelector('.patent-head');
      if (p.abstract) {
        head.addEventListener('click', () => it.classList.toggle('expanded'));
      } else {
        head.style.cursor = 'default';
        const tg = it.querySelector('.patent-toggle');
        if (tg) tg.style.display = 'none';
      }
      wrap.appendChild(it);
    });
  }

  /* ---------- Render: Talks (display-only, newest first) ---------- */
  function renderTalks() {
    const wrap = q('#talk-list');
    if (!wrap) return;
    wrap.innerHTML = '';
    const sorted = [...(data.talks || [])].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
    sorted.forEach(tk => {
      const it = el('article', 'talk-item');
      const loc = tk.location ? t(tk.location) : '';
      it.innerHTML = `
        <div class="talk-date-pill">
          <span class="talk-date-icon">${ICON.mic}</span>
          <span class="talk-date-text">${fmtMonth(tk.date)}</span>
        </div>
        <div class="talk-body">
          <div class="talk-title">${t(tk.title)}</div>
          <div class="talk-meta">
            <em class="talk-venue">${t(tk.venue)}</em>
            ${loc ? `<span class="talk-loc">${ICON.pin}${loc}</span>` : ''}
            <span class="talk-kind">${t('talks.oral')}</span>
          </div>
        </div>`;
      wrap.appendChild(it);
    });
  }

  /* ---------- Render: Honors ---------- */
  function renderHonors() {
    const wrap = q('#honor-list');
    wrap.innerHTML = '';
    const variant = (h) => {
      if (h.kind === 'selected') return 'selected';
      return 'awarded';
    };
    data.honors.forEach(h => {
      const it = el('article', 'honor-item honor-' + variant(h));
      const text = h[LANG] || h.en;
      const when = fmtMonth(h.date) || h.year;
      it.innerHTML = `
        <div class="honor-icon">${ICON.trophy}</div>
        <div class="honor-time">${when}</div>
        <div class="honor-body">${text}</div>`;
      wrap.appendChild(it);
    });
  }

  /* ---------- Static i18n ---------- */
  function applyStaticI18n() {
    qa('[data-i18n]').forEach(el => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.documentElement.setAttribute('lang', LANG === 'cn' ? 'zh-CN' : 'en');
    q('#lang-toggle').textContent = LANG === 'cn' ? 'EN' : '中';
    q('#lang-toggle').setAttribute('aria-label', t('common.langAria'));
    q('#theme-toggle').setAttribute('aria-label', t('common.themeAria'));
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

  /* ---------- Language toggle ---------- */
  function initLang() {
    q('#lang-toggle').addEventListener('click', () => {
      LANG = LANG === 'cn' ? 'en' : 'cn';
      localStorage.setItem('lang', LANG);
      renderAll();
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

  /* ---------- Scroll spy ---------- */
  function initScrollSpy() {
    const sections = qa('section[id]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          qa('.nav-links a').forEach(a => a.classList.remove('active'));
          const m = q(`.nav-links a[href="#${e.target.id}"]`);
          if (m) m.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => io.observe(s));
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    const items = qa('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.05 });
    items.forEach(i => io.observe(i));
  }

  /* ---------- Render All ---------- */
  function renderAll() {
    applyStaticI18n();
    renderNav();
    renderSidebar();
    renderNews();
    renderEdu();
    renderResearch();
    renderPublications();
    renderTalks();
    renderPatents();
    renderHonors();
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLang();
    renderAll();
    initScrollSpy();
    initReveal();
  });

})();
