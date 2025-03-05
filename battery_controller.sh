#!/bin/bash

while true
do
  status=$(< /sys/class/power_supply/BAT0/status)
  echo "$status"
  if [ $status == "Discharging" ]; then
    echo "Computer is not charging, shutdown now"
  fi
sleep 5s
done
