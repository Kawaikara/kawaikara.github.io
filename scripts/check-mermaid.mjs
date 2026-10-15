import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('src/content/reference');
const markdownFiles = [];

async function collect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) await collect(absolute);
    else if (entry.isFile() && entry.name.endsWith('.md')) markdownFiles.push(absolute);
  }
}

await collect(root);
let diagramCount = 0;

for (const file of markdownFiles) {
  const markdown = await readFile(file, 'utf8');
  const openingFenceCount = [...markdown.matchAll(/```mermaid\s*$/gm)].length;
  const diagrams = [...markdown.matchAll(/```mermaid\s*\n([\s\S]*?)```/g)];
  if (openingFenceCount !== diagrams.length) {
    throw new Error(`Unclosed Mermaid fence in ${path.relative(root, file)}`);
  }
  for (const match of diagrams) {
    diagramCount += 1;
    const firstLine = match[1].trim().split('\n')[0];
    if (!/^(?:flowchart|graph|sequenceDiagram|classDiagram|stateDiagram(?:-v2)?|erDiagram|journey|gantt|pie|gitGraph|mindmap|timeline|quadrantChart|xychart-beta|block-beta|architecture-beta)\b/.test(firstLine)) {
      throw new Error(
        `Unsupported Mermaid diagram type in ${path.relative(root, file)}: ${firstLine}`,
      );
    }
  }
}

console.log(`Mermaid blocks checked: ${diagramCount}`);
