// Falla el build si queda contenido provisional o enlaces muertos.
// Se ejecuta antes de `astro build` (ver "prebuild" en package.json).
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const TARGETS = process.argv.length > 2 ? process.argv.slice(2) : ['src/i18n', 'src/data'];

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

if (problems.length > 0) {
  console.error('\n✗ Contenido no publicable:\n');
  for (const problem of problems) console.error(`  ${problem}`);
  console.error('\nCorrige estos puntos antes de compilar.\n');
  process.exit(1);
}

console.log('✓ Contenido sin placeholders ni enlaces muertos.');
