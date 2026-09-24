with open('/tmp/game_bundle.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re

matches = [m.start() for m in re.finditer(r'id:[`\'"]classic[`\'"]', text)]
print('Matches:', matches)
for m in matches:
    print('=== Match at', m, '===')
    print(text[m-20:m+800])
