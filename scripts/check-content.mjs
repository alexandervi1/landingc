// Falla el build si queda contenido provisional, enlaces muertos o un caso
// publicado con campos sin completar. Se ejecuta antes de `astro build`
// (ver "prebuild" en package.json).
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const TARGETS = process.argv.length > 2 ? process.argv.slice(2) : ['src/i18n', 'src/data'];
const PROJECTS_FILE = 'src/data/projects.ts';

const RULES = [
  { name: 'texto provisional "Placeholder"', test: (line) => /placeholder/i.test(line) },
  { name: "enlace muerto href='#'", test: (line) => /href\s*:\s*['"]#['"]/.test(line) },
];

async function collect(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await collect(path)));
    else if (/\.(ts|astro|json)$/.test(entry.name)) files.push(path);
  }
  return files;
}

/** Devuelve el bloque `{...}` que contiene la posición indicada. */
function enclosingBlock(source, index) {
  let depth = 0;
  let start = -1;

  for (let i = index; i >= 0; i -= 1) {
    if (source[i] === '}') depth += 1;
    else if (source[i] === '{') {
      if (depth === 0) {
        start = i;
        break;
      }
      depth -= 1;
    }
  }
  if (start === -1) return null;

  depth = 0;
  for (let i = start; i < source.length; i += 1) {
    if (source[i] === '{') depth += 1;
    else if (source[i] === '}') {
      depth -= 1;
      if (depth === 0) {
        return { start, end: i, text: source.slice(start, i + 1) };
      }
    }
  }
  return null;
}

const problems = [];

for (const dir of TARGETS) {
  for (const file of await collect(dir)) {
    const lines = (await readFile(file, 'utf8')).split(/\r?\n/);
    lines.forEach((line, index) => {
      for (const rule of RULES) {
        if (rule.test(line)) problems.push(`${file}:${index + 1}  ${rule.name}`);
      }
    });
  }
}

// Un caso marcado como publicado o visible no puede tener campos pendientes ni vacíos.
const projectsSource = await readFile(PROJECTS_FILE, 'utf8').catch(() => null);
if (projectsSource) {
  for (const match of projectsSource.matchAll(/(published|visibleOnHome):\s*true/g)) {
    const block = enclosingBlock(projectsSource, match.index);
    if (!block) continue;

    const line = projectsSource.slice(0, block.start).split('\n').length;
    const flag = match[1];
    if (/\[COMPLETAR\]|\bPENDING\b/.test(block.text)) {
      problems.push(`${PROJECTS_FILE}:${line}  caso con ${flag}: true y campos [COMPLETAR]`);
    }
    if (/:\s*(''|"")\s*[,}]/.test(block.text)) {
      problems.push(`${PROJECTS_FILE}:${line}  caso con ${flag}: true y campo vacío`);
    }
  }
}

if (problems.length > 0) {
  console.error('\n✗ Contenido no publicable:\n');
  for (const problem of problems) console.error(`  ${problem}`);
  console.error('\nCorrige estos puntos antes de compilar.\n');
  process.exit(1);
}

console.log('✓ Contenido sin placeholders, enlaces muertos ni casos incompletos visibles.');
