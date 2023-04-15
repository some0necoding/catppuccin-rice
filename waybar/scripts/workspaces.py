#!/usr/bin/python3

import subprocess
import time
import re

pattern = re.compile("^([1-9]|10)$")

output = subprocess.getoutput("hyprctl activewindow | grep workspace | cut -d ' ' -f 2")

tray = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    
if pattern.match(output):
    currentWorkspace = int(output)
    tray[currentWorkspace - 1] = " "

print("".join(tray))
