#!/bin/bash

git checkout master
status=$( git pull )
status="1$(echo $status | grep -o "Already")"

echo "$status"
if [ $status != "1Already" ]; then
  echo "Directory is now updated"
  sudo systemctl restart magic_mirror.service
fi
