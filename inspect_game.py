with open('/tmp/game_bundle.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.finditer(r'(?:var|let|const|function)\s+([A-Za-z0-9_]+)\s*=', text[259000:352000])
for m in matches:
    name = m.group(1)
    pos = 259000 + m.start()
    print(f"{name} at {pos}: {text[pos:pos+80]}")
