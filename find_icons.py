with open('/tmp/game_bundle.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.finditer(r'([A-Za-z0-9_$]+)\s*=\s*j\([`\'"]([^`\'"]+)[`\'"]', text[238000:255000])
for m in matches:
    print(f'{m.group(1)} = {m.group(2)}')
