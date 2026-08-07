// Varre o repositório em busca de arquivos .md com front matter
// e gera um manifest.json usado pelo index.html para montar a página.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const EXCLUDE_DIRS = new Set(['.git', '.github', 'node_modules', 'assets', '.jekyll-cache', '_site', 'scripts']);

function walk(dir, results) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (EXCLUDE_DIRS.has(entry.name)) continue;
      walk(full, results);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md') && entry.name.toLowerCase() !== 'readme.md') {
      results.push(full);
    }
  }
}

function parseFrontMatter(content) {
  if (!content.startsWith('---')) return null;
  const end = content.indexOf('\n---', 3);
  if (end === -1) return null;
  const block = content.slice(3, end).trim();
  const data = {};
  for (const line of block.split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    value = value.replace(/^["']|["']$/g, '');
    data[key] = value;
  }
  return data;
}

const files = [];
walk(ROOT, files);

const items = [];
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const fm = parseFrontMatter(content);
  // Arquivos sem front matter (title + book) são ignorados propositalmente
  if (!fm || !fm.title || !fm.book) continue;
  const rel = path.relative(ROOT, file).split(path.sep).join('/');
  items.push({
    path: rel,
    title: fm.title,
    book: fm.book,
    emoji: fm.emoji || '📄',
    category: fm.category === 'ferramenta' ? 'ferramenta' : 'livro',
    tema: fm.tema || 'Geral',
    capa: fm.capa || '',
    order: Number(fm.order) || 0,
  });
}

items.sort((a, b) => a.order - b.order);

fs.writeFileSync(path.join(ROOT, 'manifest.json'), JSON.stringify(items, null, 2));
console.log(`Manifest gerado com ${items.length} item(ns).`);
