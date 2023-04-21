#!/usr/bin/python3

import subprocess

defaultSinkNumber = subprocess.getoutput("pactl list short sinks | grep $(pactl get-default-sink) | cut -f 1") 
sinks = subprocess.getoutput("pactl list sinks").split("\n\n")

for sink in sinks:
    if sink.startswith(f"Sink #{defaultSinkNumber}"):
        for line in sink.split("\n"):
            if "object.id" in line:
                print(line.split(" = ")[1].strip('"'))
