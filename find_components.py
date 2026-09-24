with open('/tmp/game_bundle.js', 'r', encoding='utf-8') as f:
    text = f.read()

sub = text[237000:]
import re

target_names = ['ut', 'dt', 'pt', 'ht', 'vt', 'yt', 'bt', 'xt', 'St', 'Ct', 'wt', 'Tt', 'Et', 'Dt', 'Xe', 'mt']
for tname in target_names:
    res = [m.start() for m in re.finditer(rf'[,;]\s*{tname}\s*=', sub)]
    print(f"Target {tname}: found at {[237000 + r for r in res]}")
