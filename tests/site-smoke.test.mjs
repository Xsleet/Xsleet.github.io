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
  assert.match(js, /sidebar-stat-list/);
  assert.doesNotMatch(js, /sidebar-stat-grid/);
  assert.match(js, /patent-dossier/);
  assert.match(js, /patent-date-mark/);
  assert.doesNotMatch(js, /patent-date-pill/);
  assert.match(js, /patent-number-chip/);
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
  assert.match(css, /\.sidebar-stats/);
  assert.match(css, /\.sidebar-stat-list/);
  assert.match(css, /\.sidebar-stat-row/);
  assert.doesNotMatch(css, /\.sidebar-stat-grid/);
  assert.doesNotMatch(css, /\.sidebar-focus/);
  assert.doesNotMatch(css, /\.sidebar-keywords/);
  assert.doesNotMatch(css, /\.overview-card/);
  assert.match(css, /\.pub-search/);
  assert.match(css, /\.patent-dossier/);
  assert.match(css, /\.patent-date-mark/);
  assert.doesNotMatch(css, /\.patent-date-pill/);
  assert.match(css, /\.patent-number-chip/);
  assert.match(css, /\.patent-abstract-panel/);
  assert.match(css, /\.news-text[\s\S]*overflow-wrap:\s*anywhere/);
  assert.match(css, /\.news-arrow[\s\S]*display:\s*none/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /overflow-x:\s*auto/);
  assert.match(css, /text-wrap:\s*balance/);
});
