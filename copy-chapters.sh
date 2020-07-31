#!/bin/bash

content_path='./site/content/chapters/'

# Locate all folders in the current director, filter only chapter folders, store values into an array
readarray -d '' -t chapters < <(find . -regextype sed -maxdepth 1  -type d -regex '.*' | grep './[[:digit:]]')

for i in "${chapters[@]}"
do
  mkdir -p $content_path
  cp -r $i $content_path
done

cp README.md $content_path
