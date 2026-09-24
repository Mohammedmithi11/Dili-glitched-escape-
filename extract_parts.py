with open('/tmp/game_bundle.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's extract skins array Ze
start_skins = text.find('Ze=[{id:`classic`')
end_skins = text.find('];', start_skins) + 2
skins_raw = text[start_skins:end_skins]
print('Skins raw length:', len(skins_raw))
with open('skins_raw.js', 'w') as f:
    f.write(skins_raw)

# Let's extract zones array
start_zones = text.find('ZONE_1_STABLE')
# Look backwards for '['
start_zones_arr = text.rfind('[{', 0, start_zones)
end_zones = text.find('];', start_zones) + 2
zones_raw = text[start_zones_arr:end_zones]
print('Zones raw length:', len(zones_raw))
with open('zones_raw.js', 'w') as f:
    f.write(zones_raw)

# Let's extract sound engine
start_sound = text.find('b=new class{constructor(){this.ctx=null')
# Look for where b ends (before next function or var)
end_sound = text.find('function', start_sound)
sound_raw = text[start_sound:end_sound]
print('Sound raw length:', len(sound_raw))
with open('sound_raw.js', 'w') as f:
    f.write(sound_raw)

# Let's extract stats and settings storage
start_storage = text.find('dlicom_escape_glitch_stats_v2')
start_storage_def = text.rfind('var ', 0, start_storage)
end_storage = text.find('function r(', start_storage)
storage_raw = text[start_storage_def:end_storage]
print('Storage raw length:', len(storage_raw))
with open('storage_raw.js', 'w') as f:
    f.write(storage_raw)
