#!/usr/bin/python3

import subprocess

while True:
    currentWorkspace = int(subprocess.getoutput("hyprctl activewindow | grep workspace | cut -d ' ' -f 2"))

    tray = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    tray[currentWorkspace - 1] = " "

    print("".join(tray))
