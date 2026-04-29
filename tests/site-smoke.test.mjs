import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);

async function readText(path) {
  return readFile(new URL(path, root), 'utf8');
}

async function loadSiteData() {
  const code = await readText('assets/data.js');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: 'assets/data.js' });
  return sandbox.window.SITE_DATA;
}

test('site data exposes static publishing metadata and homepage UI labels', async () => {
  const data = await loadSiteData();

  assert.equal(data.meta.siteUrl, 'https://xsleet.github.io/');
  assert.equal(data.meta.lastUpdated, '2026-04-28');
  assert.equal(data.profile.cvUrl, '');

  assert.equal(data.ui.common.skip.en, 'Skip to main content');
  assert.equal(data.ui.common.cv.cn, '简历');
  assert.equal(data.ui.overview.title.en, 'Research Snapshot');
  assert.equal(data.ui.pubs.searchPlaceholder.cn, '搜索论文、作者、期刊或关键词');
  assert.equal(data.ui.pubs.clear.en, 'Clear');
  assert.equal(data.ui.pubs.open.en, 'Paper');
});

test('index contains overview, metadata, structured data, and stable footer hook', async () => {
  const html = await readText('index.html');

  assert.match(html, /<a class="skip-link" href="#main-content"/);
  assert.match(html, /<main class="main-content" id="main-content"/);
  assert.match(html, /<div class="sidebar-bio" id="profile-bio"><\/div>/);
  assert.match(html, /<div class="sidebar-stats" id="profile-stats"><\/div>/);
  assert.doesNotMatch(html, /profile-focus/);
  assert.doesNotMatch(html, /overview-card/);
  assert.match(html, /<script type="application\/ld\+json" id="person-schema"/);
  assert.match(html, /<link rel="canonical" href="https:\/\/xsleet\.github\.io\/"/);
  assert.match(html, /<meta property="og:title"/);
  assert.match(html, /<span id="last-updated"><\/span>/);
});

test('application script implements search, snapshot, accessible expansion, and paper links', async () => {
  const js = await readText('assets/app.js');

  assert.match(js, /function renderSidebarStats\(\)/);
  assert.match(js, /profile-stats/);
  assert.doesNotMatch(js, /profile-focus/);
  assert.doesNotMatch(js, /class="sidebar-keywords"/);
  assert.match(js, /const NEWS_COLLAPSED_LIMIT = 5/);
  assert.match(js, /const NEWS_EXPANDED_LIMIT = 10/);
  assert.match(js, /const newsItems = buildNews\(\)\.slice\(0, NEWS_EXPANDED_LIMIT\)/);
  assert.doesNotMatch(js, /class="overview-copy"/);
  assert.match(js, /sidebar-stat-grid/);
  assert.match(js, /sidebar-stat-icon/);
  assert.match(js, /sidebar-stat-divider/);
  assert.match(js, /sidebar-stat-content/);
  assert.doesNotMatch(js, /sidebar-stat-note/);
  assert.match(js, /statPaper:/);
  assert.match(js, /statPatent:/);
  assert.match(js, /statReport:/);
  assert.match(js, /statHonor:/);
  assert.match(js, /icon: ICON\.statPatent/);
  assert.match(js, /label: t\('overview\.pubsShort'\)/);
  assert.match(js, /label: t\('overview\.patentsShort'\)/);
  assert.match(js, /tone: 'blue'/);
  assert.match(js, /stat-tone-\$\{s\.tone\}/);
  assert.doesNotMatch(js, /sidebar-stats-title/);
  assert.doesNotMatch(js, /sidebar-stat-list/);
  assert.match(js, /patent-dossier/);
  assert.match(js, /patent-meta-strip/);
  assert.match(js, /patent-date-badge/);
  assert.match(js, /patent-date-value/);
  assert.match(js, /patent-number-badge/);
  assert.doesNotMatch(js, /patent-theme/);
  assert.match(js, /patent-inventors-label/);
  assert.match(js, /patent-meta-label/);
  assert.doesNotMatch(js, /patent-date-stamp/);
  assert.doesNotMatch(js, /patent-date-mark/);
  assert.doesNotMatch(js, /patent-date-pill/);
  assert.doesNotMatch(js, /patent-number-chip/);
  assert.match(js, /function renderSeoMetadata\(\)/);
  assert.match(js, /currentFilter = \{ year: 'all', role: 'all', query: '' \}/);
  assert.match(js, /pub-search/);
  assert.match(js, /pub-result-count/);
  assert.match(js, /aria-expanded/);
  assert.match(js, /aria-controls/);
  assert.match(js, /keydown/);
  assert.match(js, /rel="noopener noreferrer"/);
});

test('stylesheet includes visual polish, focus states, mobile overflow guard, and reduced motion', async () => {
  const css = await readText('assets/style.css');

  assert.match(css, /--radius-md:/);
  assert.match(css, /\.skip-link/);
  assert.match(css, /\.sidebar-photo[\s\S]*aspect-ratio:\s*975\s*\/\s*1393/);
  assert.match(css, /\.sidebar-photo img[\s\S]*display:\s*block/);
  assert.match(css, /\.sidebar-stats/);
  assert.match(css, /\.sidebar-stat-grid/);
  assert.match(css, /\.sidebar-stat-card/);
  assert.match(css, /\.sidebar-stat-card[\s\S]*grid-template-columns:\s*38px 1px minmax\(0,\s*1fr\)/);
  assert.match(css, /\.sidebar-stat-icon/);
  assert.match(css, /\.sidebar-stat-icon[\s\S]*justify-content:\s*center/);
  assert.match(css, /\.sidebar-stat-icon svg[\s\S]*display:\s*block/);
  assert.match(css, /\.sidebar-stat-divider/);
  assert.match(css, /\.sidebar-stat-content/);
  assert.match(css, /\.sidebar-stat-value[\s\S]*font-size:\s*1\.82rem/);
  assert.match(css, /\.sidebar-stat-label[\s\S]*font-size:\s*0\.68rem/);
  assert.match(css, /\.sidebar-stat-label[\s\S]*white-space:\s*nowrap/);
  assert.doesNotMatch(css, /\.sidebar-stat-note/);
  assert.match(css, /\.stat-tone-blue/);
  assert.doesNotMatch(css, /\.sidebar-stat-card::after/);
  assert.doesNotMatch(css, /\.sidebar-stats-title/);
  assert.doesNotMatch(css, /\.sidebar-stat-list/);
  assert.doesNotMatch(css, /\.sidebar-stat-row/);
  assert.doesNotMatch(css, /\.sidebar-focus/);
  assert.doesNotMatch(css, /\.sidebar-keywords/);
  assert.doesNotMatch(css, /\.overview-card/);
  assert.match(css, /\.pub-search/);
  assert.match(css, /\.patent-dossier/);
  assert.doesNotMatch(css, /\.patent-dossier::before/);
  assert.match(css, /\.patent-meta-strip/);
  assert.match(css, /\.patent-date-badge/);
  assert.match(css, /\.patent-date-value/);
  assert.match(css, /\.patent-number-badge/);
  assert.doesNotMatch(css, /\.patent-theme/);
  assert.match(css, /\.patent-inventors-label/);
  assert.match(css, /\.patent-meta-label/);
  assert.doesNotMatch(css, /\.patent-date-stamp/);
  assert.doesNotMatch(css, /\.patent-date-mark/);
  assert.doesNotMatch(css, /\.patent-date-pill/);
  assert.doesNotMatch(css, /\.patent-number-chip/);
  assert.match(css, /\.patent-abstract-panel/);
  assert.match(css, /\.news-text[\s\S]*overflow-wrap:\s*anywhere/);
  assert.match(css, /\.news-arrow[\s\S]*display:\s*none/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /overflow-x:\s*auto/);
  assert.match(css, /text-wrap:\s*balance/);
});
