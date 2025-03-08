#!/bin/bash

git checkout master
status=$( git pull )
status="1$(echo $status | grep -o "Remote")"

echo "$status"
if [ $status == "1Remote" ]; then
  echo "Directory is now updated"
  sudo systemctl restart magic_mirror.service
fi
