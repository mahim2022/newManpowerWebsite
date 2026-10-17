import pathlib
import re

paths = [
    'app/compliance/page.tsx',
    'app/malaysia/page.tsx',
    'app/malaysia/construction-workers/page.tsx',
    'app/malaysia/recruitment-process/page.tsx',
    'app/malaysia/worker-categories/page.tsx',
    'app/malaysia/foreign-worker-quota/page.tsx',
]

for p in paths:
    text = pathlib.Path(p).read_text(encoding='utf-8')
    match = re.search(r'description:\s*\n\s*"([\s\S]*?)"\s*,', text)
    desc = match.group(1).replace('\n', ' ').replace('  ', ' ') if match else 'NO MATCH'
    print(f'{p}: {len(desc)} => {desc}')
