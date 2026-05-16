import re
from collections import defaultdict

with open('curriculum_audit.txt', 'r') as f:
    lines = f.readlines()

modules = defaultdict(list)
current_module = "Unknown"

for line in lines:
    if line.startswith("---"):
        continue
    
    module_match = re.search(r'module:\s*"([^"]+)"', line)
    if module_match:
        current_module = module_match.group(1)
        
    title_match = re.search(r'title:\s*"([^"]+)"', line)
    if title_match:
        title = title_match.group(1)
        if title not in modules[current_module]:
            modules[current_module].append(title)

with open('curriculum_summary.md', 'w') as f:
    for module in sorted(modules.keys()):
        f.write(f"\n## {module}\n")
        for title in modules[module]:
            f.write(f"- {title}\n")
