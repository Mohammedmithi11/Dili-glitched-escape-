import subprocess
import os

with open('/tmp/game_bundle.js', 'r', encoding='utf-8') as f:
    text = f.read()

offsets = [
    ('zones', 219786, 221794),
    ('sound', 221794, 236594),
    ('stats_storage', 236594, 248537),
    ('desktop_header_Xe', 250977, 253046),
    ('skins_Ze', 253046, 259397),
    ('canvas_ut', 272814, 314398),
    ('hud_dt', 314398, 321412),
    ('run_intro_pt', 321412, 337752),
    ('mascot_mt', 337752, 344175),
    ('menu_ht', 344175, 351945),
    ('closet_vt', 362503, 370624),
    ('level_select_yt', 370624, 374518),
    ('pause_bt', 374518, 377269),
    ('game_over_xt', 377269, 382975),
    ('victory_St', 382975, 386643),
    ('how_to_play_Ct', 386643, 392331),
    ('settings_wt', 392331, 398473),
    ('stats_Tt', 398473, 406969),
    ('creator_Et', 406969, 412491),
    ('pre_run_guide_Dt', 412491, 419446),
    ('app_root_Ot', 419446, len(text)),
]

os.makedirs('extracted_raw', exist_ok=True)
for name, start, end in offsets:
    chunk = text[start:end].strip()
    # clean leading comma
    if chunk.startswith(','):
        chunk = chunk[1:].strip()
    raw_path = f'extracted_raw/{name}.js'
    with open(raw_path, 'w', encoding='utf-8') as f:
        f.write(chunk)
    print(f"Extracted {name} ({len(chunk)} bytes)")
