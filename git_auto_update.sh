#!/bin/bash

git checkout master
status=$( git pull )
status=$(echo $status | grep -o "Already" )

echo "$status"
if [ $status != "Already" ]; then
  echo "Git already latest"
fi
